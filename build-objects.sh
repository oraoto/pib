#!/usr/bin/env bash

set -euxo pipefail;

pushd third_party/php7.4-src/

emmake make -j8

EMCC_CORES=8 emcc -O1 \
	-I .              \
	-I Zend           \
	-I main           \
	-I TSRM/          \
	../../source/pib_eval.c \
	-o ../../lib/pib_eval.o

popd
