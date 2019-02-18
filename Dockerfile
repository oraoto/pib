FROM trzeci/emscripten:sdk-tag-1.38.25-64bit

RUN set -e

ENV PHP_VERSION 7.3.0
ENV PHP_PATH php-${PHP_VERSION}
ENV WORDPRESS_VERSION 5.0.3
ENV WORDPRESS_PATH wordpress-${WORDPRESS_VERSION}

RUN echo "Get PHP source"

RUN wget http://downloads.php.net/~cmb/$PHP_PATH.tar.xz \ 
      && tar xf $PHP_PATH.tar.xz \
      && rm $PHP_PATH.tar.xz

ADD mods.diff mods.diff

RUN patch -p0 -i mods.diff
  
ADD build.sh build.sh

RUN build.sh

WORKDIR /src