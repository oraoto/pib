SHELL=/bin/bash -euxo pipefail

-include .env

PHP_BRANCH     ?=PHP-7.4
VRZNO_BRANCH   ?=DomAccess
ENVIRONMENT    ?=web
TOTAL_MEMORY   ?=256MB
PRELOAD_ASSETS ?=Zend/bench.php

.PHONY: build hooks build-js clean e

build: build-js php-web.js php-webview.js php-node.js php-shell.js php-worker.js
	@ echo "Done!"

########### Build the objects. ###########

build/pib_eval.o: configured build-objects.sh
	@ docker-compose run --rm -e ENVIRONMENT=web -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build-objects.sh | pv

configured: php7.4-src sqlite3.33-src php7.4-src/ext/vrzno
	@ docker-compose run --rm -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash configure.sh
	@ date > configured

########### Collect & patch the source code. ###########

php7.4-src:
	@ git clone https://github.com/php/php-src.git php7.4-src \
		--branch ${PHP_BRANCH}   \
		--single-branch          \
		--depth 1;
	@ git apply --no-index php-sqlite-static.patch

sqlite3.33-src:
	@ wget https://sqlite.org/2020/sqlite-amalgamation-3330000.zip
	@ unzip sqlite-amalgamation-3330000.zip
	@ mv sqlite-amalgamation-3330000 sqlite3.33-src
	@ rm sqlite-amalgamation-3330000.zip*
	@ git apply --no-index sqlite3-wasm.patch
	@ cp ./sqlite3.33-src/sqlite3.* ./php7.4-src/

php7.4-src/ext/vrzno:
	@ cd php7.4-src/ext \
	&& git clone https://github.com/seanmorris/vrzno.git \
		--branch ${VRZNO_BRANCH} \
		--single-branch          \
		--depth 1;

########### Build the final files. ###########

php-web.js: configured build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=web -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-webview.js: configured build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=webview -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-node.js: configured build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=node -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-shell.js: configured build/pib_eval.o build.sh source/*.js source/*.c
	@ docker-compose run --rm -e ENVIRONMENT=shell -e PRELOAD_ASSETS=${PRELOAD_ASSETS} -e TOTAL_MEMORY=${TOTAL_MEMORY} emscripten-builder bash build.sh | pv

php-worker.js: configured build/pib_eval.o build.sh source/*.js source/*.c
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
