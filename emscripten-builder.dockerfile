FROM trzeci/emscripten:1.39.18-fastcomp
MAINTAINER Sean Morris <sean@seanmorr.is>

SHELL ["/bin/bash", "-c"]

ARG PHP_BRANCH=PHP-7.4

RUN set -euxo pipefail;\
	apt-get update; \
	apt-get --no-install-recommends -y install \
		build-essential \
    	libsqlite3-dev \
    	libxml2-dev \
		automake \
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
    	git
