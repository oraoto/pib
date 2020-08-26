#!/usr/bin/env bash

set -euxo pipefail;

pushd php7.4-src/

emmake make -j8

EMCC_CORES=8 emcc -O1 \
	-I .              \
	-I Zend           \
	-I main           \
	-I TSRM/          \
	../source/pib_eval.c \
	-o ../build/pib_eval.o
