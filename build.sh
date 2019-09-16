#!/usr/bin/env bash

set -e

PHP_BRANCH=PHP-7.4

if [[ ! -d php-src ]]; then
    echo "Get PHP source"
    git clone https://github.com/php/php-src.git
fi

echo "Configure"

cd php-src
git checkout $PHP_BRANCH
emconfigure ./configure \
  --disable-all \
  --disable-cgi \
  --disable-cli \
  --disable-rpath \
  --disable-phpdbg \
  --with-valgrind=no \
  --without-pear \
  --without-pcre-jit \
  --with-layout=GNU \
  --enable-embed=static \
  --enable-bcmath \
  --enable-json \
  --enable-ctype \
  --enable-mbstring \
  --disable-mbregex \
  --enable-tokenizer

# echo "Build"
emmake make
# mkdir -p out
emcc -O3 -I . -I Zend -I main -I TSRM/ ../pib_eval.c -o pib_eval.o
emcc -O3 \
  --llvm-lto 2 \
  -s ENVIRONMENT=web \
  -s EXPORTED_FUNCTIONS='["_pib_eval", "_php_embed_init", "_zend_eval_string", "_php_embed_shutdown"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]' \
  -s MODULARIZE=1 \
  -s EXPORT_NAME="'PHP'" \
  -s TOTAL_MEMORY=134217728 \
  -s ASSERTIONS=0 \
  -s INVOKE_RUN=0 \
  -s ERROR_ON_UNDEFINED_SYMBOLS=0 \
  --preload-file Zend/bench.php \
  libs/libphp7.a pib_eval.o -o out/php.html

cp out/php.wasm out/php.js out/php.data ..

echo "Done"
