#/bin/bash

echo "Get PHP 7.2.5 source"
wget https://github.com/php/php-src/archive/php-7.2.5.tar.gz
tar xf php-7.2.5.tar.gz
cd php-7.2.5

echo "Configure"
emconfigure ./configure \
  --disable-all \
  --disable-cgi \
  --disable-cli \
  --disable-rpath \
  --disable-phpdbg \
  --without-pear \
  --without-pcre-jit \
  --with-layout=GNU \
  --enable-embed=static \
  --enable-bcmath  \
  --enable-json \
  --enable-ctype \
  --enable-tokenizer

echo "Apply patch"

echo "Build"
emmake make
mkdir out
emcc -O3 \
  -s WASM=1 \
  -s EXPORTED_FUNCTIONS='["_php_embed_init", "_zend_eval_string"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]' \
  -s TOTAL_MEMORY=134217728 \
  -s ASSERTIONS=0 \
  -s INVOKE_RUN=0 \
  libs/libphp7.a -o out/php.html

cd out/php.wasm out/php.js ..

echo "Done"

