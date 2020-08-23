SHELL=/bin/bash -euxo pipefail

PHP_BRANCH:=PHP-7.4
VRZNO_BRANCH:=master

.PHONY: configure build hooks build-js build-web-bin build-webview-bin build-node-bin build-shell-bin build-worker-bin clean

build: configure build-js build-web-bin
	@ echo "Done!"

configure: php-src php-src/ext/vrzno
	@ docker-compose run emscripten-builder bash configure.sh

php-src:
	@ git clone https://github.com/php/php-src.git \
		--branch ${PHP_BRANCH}   \
		--single-branch          \
		--depth 1;

php-src/ext/vrzno:
	@ cd php-src/ext \
	&& git clone https://github.com/seanmorris/vrzno.git \
		--branch ${VRZNO_BRANCH} \
		--single-branch          \
		--depth 1;               \

hooks:
	@ git config core.hooksPath githooks

build-objects: configure
	@ docker-compose run -e ENVIRONMENT=web emscripten-builder bash build-objects.sh

build-js:
	@ npm install;
	@ npx babel source --out-dir .

build-image:
	@ docker-compose build

pull-image:
	@ docker-compose pull

push-image:
	@ docker-compose push

build-web-bin: build-objects
	@ docker-compose run -e ENVIRONMENT=web emscripten-builder bash build.sh

build-webview-bin: build-objects
	@ docker-compose run -e ENVIRONMENT=webview emscripten-builder bash build.sh

build-node-bin: build-objects
	@ docker-compose run -e ENVIRONMENT=node emscripten-builder bash build.sh

build-shell-bin: build-objects
	@ docker-compose run -e ENVIRONMENT=shell emscripten-builder bash build.sh

build-worker-bin: build-objects
	@ docker-compose run -e ENVIRONMENT=worker emscripten-builder bash build.sh

clean:
	@ docker-compose run emscripten-builder rm -rf php-src Php.js php-web.* php-webview.* php-node.* php-shell.* php-worker.*
