SHELL=/bin/bash -euxo pipefail

-include .env

ENVIRONMENT    ?=web
TOTAL_MEMORY   ?=256MB
PRELOAD_ASSETS ?=Zend/bench.php
RELEASE_SUFFUX ?=

PHP_BRANCH     ?=PHP-7.4
VRZNO_BRANCH   ?=DomAccess
ICU_TAG        ?=release-67-1
LIBXML2_TAG    ?=v2.9.10

DOCKER_RUN=docker-compose run --rm  \
	-e PRELOAD_ASSETS=${PRELOAD_ASSETS} \
	-e TOTAL_MEMORY=${TOTAL_MEMORY} \
	-e ENVIRONMENT=web

DOCKER_RUN_IN_PHP  =${DOCKER_RUN} -w third_party/php7.4-src/ emscripten-builder
DOCKER_RUN_IN_ICU4C=${DOCKER_RUN} -w /src/third_party/libicu-src/icu4c/source/ emscripten-builder

.PHONY: build hooks build-js clean

build: build-js php-web.js php-webview.js php-node.js php-shell.js php-worker.js
	@ echo "Done!"

########### Build the objects. ###########

lib/pib_eval.o: lib/libphp7.a build-objects.sh
	@ docker-compose run --rm -e ENVIRONMENT=web -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build-objects.sh | pv

lib/libphp7.a: third_party/php7.4-src/patched third_party/php7.4-src/ext/vrzno/README.md
	@ docker-compose run --rm -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash configure.sh
	@cp third_party/php7.4-src/.libs/* lib/

lib/something:
	${DOCKER_RUN_IN_ICU4C} make clean
	${DOCKER_RUN_IN_ICU4C} emconfigure ./configure --prefix=/src/lib/
	${DOCKER_RUN_IN_ICU4C} emmake make
	${DOCKER_RUN_IN_ICU4C} emmake make install

# 	@ ${DOCKER_BASH} cd third_party/libicu-src/icu4c/source/ && ls -al .
# 	@ ${DOCKER_BASH} cd third_party/libicu-src/icu4c/source/ \
# 	&& make clean \
# 	&&  \
# 	&&

########### Collect & patch the source code. ###########

third_party/php7.4-src/patched:
	@ git clone https://github.com/php/php-src.git third_party/php7.4-src \
		--branch ${PHP_BRANCH}   \
		--single-branch          \
		--depth 1;
	@ git apply --no-index php-sqlite-static.patch
	@ git apply --no-index php-pdo-sqlite-static.patch
	@ touch third_party/php7.4-src/patched

third_party/sqlite3.33-src/sqlite3.c:
	@ wget https://sqlite.org/2020/sqlite-amalgamation-3330000.zip
	@ unzip sqlite-amalgamation-3330000.zip
	@ mv sqlite-amalgamation-3330000 third_party/sqlite3.33-src
	@ rm sqlite-amalgamation-3330000.zip*
	@ git apply --no-index sqlite3-wasm.patch
	@ cp third_party/sqlite3.33-src/sqlite3.* third_party/php7.4-src/

third_party/php7.4-src/ext/vrzno/README.md:
	git clone https://github.com/seanmorris/vrzno.git third_party/php7.4-src/ext/vrzno \
		--branch ${VRZNO_BRANCH} \
		--single-branch          \
		--depth 1;

third_party/libicu-src:
	@ git clone https://github.com/unicode-org/icu.git third_party/libicu-src \
		--branch ${ICU_TAG} \
		--single-branch     \
		--depth 1;

third_party/libxml2:
	@ git clone https://gitlab.gnome.org/GNOME/libxml2.git third_party/libxml2 \
		--branch ${LIBXML2_TAG} \
		--single-branch     \
		--depth 1;


########### Build the final files. ###########

php-web.js: lib/libphp7.a build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=web -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-webview.js: lib/libphp7.a build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=webview -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-node.js: lib/libphp7.a build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=node -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-shell.js: lib/libphp7.a build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=shell -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-worker.js: lib/libphp7.a build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=worker -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

########### Clerical stuff. ###########

clean:
	@ docker-compose run --rm -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder rm -rf php7.4-src sqlite3.33-src Php.js php-web.* php-webview.* php-node.* php-shell.* php-worker.*

hooks:
	@ git config core.hooksPath githooks

build-js:
	@ npm install;
	@ npx babel source --out-dir .

build-image:
	@ docker-compose build

pull-image:
	@ docker-compose pull

push-image:
	@ docker-compose push
