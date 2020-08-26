FROM trzeci/emscripten:1.39.18-fastcomp
MAINTAINER Sean Morris <sean@seanmorr.is>

SHELL ["/bin/bash", "-c"]

ARG PHP_BRANCH=PHP-7.4

RUN set -euxo pipefail;\
	apt-get update; \
	apt-get --no-install-recommends -y install \
		libcurl4-openssl-dev \
		build-essential \
		libargon2-0-dev \
		libreadline-dev \
    	libsqlite3-dev \
		automake-1.15 \
		libsodium-dev \
		libonig-dev \
		libyaml-dev \
    	libxml2-dev \
		libssl-dev \
		libgmp-dev \
		autoconf \
    	valgrind \
    	libtool \
    	php-dev \
    	pkgconf \
		bison \
		flex \
    	make \
		re2c \
		gdb \
    	git \
    	pv
