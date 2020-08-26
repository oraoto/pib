#!/usr/bin/env bash

set -euxo pipefail;

pushd php7.4-src

rm configure || true

./buildconf --force

emconfigure ./configure \
	--enable-static=yes \
	--enable-shared=no \
	--with-sqlite3 \
	--disable-all \
	--disable-cgi \
	--disable-cli \
	--disable-rpath \
	--disable-phpdbg \
	--without-pear \
	--with-valgrind=no \
	--without-pcre-jit \
	--with-layout=GNU \
	--enable-embed=static \
	--enable-bcmath \
	--enable-json \
	--enable-ctype \
	--enable-mbstring \
	--disable-mbregex \
	--enable-tokenizer \
	--enable-vrzno | pv

popd
