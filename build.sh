#!/usr/bin/env bash

set -euxo pipefail;

pushd php-src

EMCC_CORES=8 emcc -O3                    \
	--llvm-lto 2                         \
	-o ../out/php-${ENVIRONMENT:-web}.js \
	-s ENVIRONMENT=${ENVIRONMENT:-web}   \
	-s EXPORTED_FUNCTIONS='["_pib_init", "_pib_destroy", "_pib_eval" "_pib_refresh", "_main", "_php_embed_init", "_php_embed_shutdown", "_php_embed_shutdown", "_zend_eval_string"]' \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "UTF8ToString", "lengthBytesUTF8"]' \
	-s MODULARIZE=1                      \
	-s EXPORT_NAME="'PHP'"               \
	-s TOTAL_MEMORY=134217728            \
	-s ASSERTIONS=0                      \
	-s INVOKE_RUN=0                      \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0      \
	--preload-file Zend/bench.php        \
		libs/libphp7.a pib_eval.o

popd

cp  ./out/php-${ENVIRONMENT:-web}.wasm \
	./out/php-${ENVIRONMENT:-web}.js   \
	./
