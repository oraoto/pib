#!/bin/bash

pushd $1

echo "Build"
emmake make
mkdir -p out
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
  --use-preload-plugins \
  --preload-file Zend/bench.php \
  --preload-file wordpress/@/var/wordpress/ \
  libs/libphp7.a pib_eval.o -o out/php.html

cp out/php.wasm out/php.js out/php.data ..

popd