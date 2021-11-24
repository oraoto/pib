FROM trzeci/emscripten:1.39.18-fastcomp
MAINTAINER Sean Morris <sean@seanmorr.is>

SHELL ["/bin/bash", "-c"]

ARG PHP_BRANCH=PHP-7.4

RUN set -euxo pipefail;\
	apt-get update; \
	emsdk install latest; \
	apt-get --no-install-recommends -y install \
		build-essential \
		automake-1.15 \
		libxml2-dev \
		autoconf \
		libtool \
		pkgconf \
		bison \
		flex \
		make \
		re2c \
		gdb \
		git \
		pv
