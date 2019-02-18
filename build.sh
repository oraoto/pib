#!/usr/bin/env bash

set -e

PHP_VERSION=7.3.0
PHP_PATH=php-$PHP_VERSION
WORDPRESS_VERSION=5.0.3
WORDPRESS_PATH=wordpress-$WORDPRESS_VERSION
THEMES_PATH=$PHP_PATH/wordpress/wp-content/themes

echo "Get PHP source"
wget http://downloads.php.net/~cmb/$PHP_PATH.tar.xz
tar xf $PHP_PATH.tar.xz
rm $PHP_PATH.tar.xz

echo "Apply patch"
patch -p0 -i mods.diff || true

echo "Configure"
cd $PHP_PATH
emconfigure ./configure \
  --disable-all \
  --disable-cgi \
  --disable-cli \
  --disable-rpath \
  --disable-phpdbg \
  --with-valgrind=no \
  --without-pear \
  --without-pcre-jit \
  --with-layout=GNU \
  --enable-embed=static \
  --enable-bcmath \
  --enable-json \
  --enable-ctype \
  --enable-mbstring \
  --disable-mbregex \
  --enable-tokenizer

echo "Get WordPress source"
echo $WORDPRESS_PATH
wget https://wordpress.org/$WORDPRESS_PATH.tar.gz
mkdir -p $WORDPRESS_PATH
tar xf $WORDPRESS_PATH.tar.gz
rm $WORDPRESS_PATH.tar.gz
rm php-7.3.0/wordpress/wp-content/themes/twenty* || true

cd ..

echo "Install WordPress theme"
cp -R minimal-theme $THEMES_PATH

./emmake.sh $PHP_PATH

echo "Done"
