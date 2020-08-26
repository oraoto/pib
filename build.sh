#!/usr/bin/env bash

set -euxo pipefail;

pushd php7.4-src

EMCC_CORES=8 emcc -O1                    \
	--llvm-lto 2                         \
	-s ENVIRONMENT=${ENVIRONMENT:-web}   \
	-s EXPORTED_FUNCTIONS='["_pib_init", "_pib_destroy", "_pib_eval" "_pib_refresh", "_main", "_php_embed_init", "_php_embed_shutdown", "_php_embed_shutdown", "_zend_eval_string", "_exec_callback", "_del_callback"]' \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "UTF8ToString", "lengthBytesUTF8"]' \
	-s MODULARIZE=1                      \
	-s EXPORT_NAME="'PHP'"               \
	-s TOTAL_MEMORY=512MB                \
	-s ASSERTIONS=0                      \
	-s INVOKE_RUN=0                      \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0      \
	--preload-file Zend/bench.php        \
	-o ../build/php-${ENVIRONMENT:-web}.js \
		libs/libphp7.a ../build/pib_eval.o

popd

cp -v ./build/php-${ENVIRONMENT:-web}.* ./
