#!/usr/bin/env bash

set -euxo pipefail;

pushd php-src

emmake make -j8

EMCC_CORES=8 emcc -O3 \
	-I .              \
	-I Zend           \
	-I main           \
	-I TSRM/          \
	../source/pib_eval.c \
	-o pib_eval.o
