SHELL=/bin/bash -euo pipefail

.PHONY: build hooks build-web-bin build-shell-bin clean

build: build-js build-web-bin

hooks:
	@ git config core.hooksPath githooks

build-js:
	@ npx babel source --out-dir . \

build-web-bin:
	@ docker run --env ENVIRONMENT=web --rm -it -v $$(pwd):/src trzeci/emscripten-ubuntu:latest bash build.sh

# build-shell-bin:
# 	@ docker run --env ENVIRONMENT=shell --rm -it -v $$(pwd):/src trzeci/emscripten-ubuntu:latest bash build.sh

clean:
	@ rm -rf php-src php-shell.* php-web.* Php.js
