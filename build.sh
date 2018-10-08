#!/bin/bash

set -e

PHP_VERSION=7.3.0RC2
PHP_PATH=php-$PHP_VERSION

echo "Get PHP source"
#wget http://downloads.php.net/~cmb/$PHP_PATH.tar.xz
tar xf $PHP_PATH.tar.xz

echo "Apply patch"
patch -p0 -i mods.diff

echo "Configure"
cd $PHP_PATH
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
  --enable-tokenizer

echo "Build"
emmake make
mkdir out
emcc -O3 -I . -I Zend -I main -I TSRM/ ../pib_eval.c -o pib_eval.o
emcc -O3 \
  -s WASM=1 \
  -s ENVIRONMENT=web \
  -s EXPORTED_FUNCTIONS='["_pib_eval", "_php_embed_init", "_zend_eval_string", "_php_embed_shutdown"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]' \
  -s TOTAL_MEMORY=134217728 \
  -s ASSERTIONS=0 \
  -s INVOKE_RUN=0 \
  --preload-file Zend/bench.php \
  libs/libphp7.a pib_eval.o -o out/php.html

cp out/php.wasm out/php.js out/php.data ..

echo "Done"
