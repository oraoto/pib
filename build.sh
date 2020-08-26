#!/usr/bin/env bash

set -euxo pipefail;

pushd third_party/php7.4-src/

EMCC_CORES=8 emcc -O1                    \
	-o ../../build/php-${ENVIRONMENT:-web}.js \
	--llvm-lto 2                         \
	--preload-file ${PRELOAD_ASSETS}     \
	-s EXPORTED_FUNCTIONS='["_pib_init", "_pib_destroy", "_pib_eval" "_pib_refresh", "_main", "_php_embed_init", "_php_embed_shutdown", "_php_embed_shutdown", "_zend_eval_string", "_exec_callback", "_del_callback"]' \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "UTF8ToString", "lengthBytesUTF8"]' \
	-s ENVIRONMENT=${ENVIRONMENT:-web}   \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0      \
	-s TOTAL_MEMORY=${TOTAL_MEMORY}      \
	-s EXPORT_NAME="'PHP'"               \
	-s MODULARIZE=1                      \
	-s ASSERTIONS=0                      \
	-s INVOKE_RUN=0                      \
		../../lib/libphp7.a ../../lib/pib_eval.o

popd

cp -v ./build/php-${ENVIRONMENT:-web}${RELEASE_SUFFUX:-}.* ./
