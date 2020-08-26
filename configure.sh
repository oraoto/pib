#!/usr/bin/env bash

set -euxo pipefail;

pushd third_party/php7.4-src/

rm configure || true

./buildconf --force

emconfigure ./configure \
	--disable-all \
	--prefix=`pwd`/../../lib/ \
	--with-sqlite3 \
	--without-pdo-sqlite \
	--without-pdo \
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
