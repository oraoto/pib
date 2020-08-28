-include .env

ENVIRONMENT    ?=web
TOTAL_MEMORY   ?=256MB
PRELOAD_ASSETS ?=Zend/bench.php
ASSERTIONS     ?=0
OPTIMIZE       ?=-O1
RELEASE_SUFFUX ?=

PHP_BRANCH     ?=PHP-7.4
VRZNO_BRANCH   ?=DomAccess
ICU_TAG        ?=release-67-1
LIBXML2_TAG    ?=v2.9.10

DOCKER_ENV=docker-compose -p php_wasm_ci run --rm      \
	-e EMCC_ALLOW_FASTCOMP=1            \
	-e PRELOAD_ASSETS=${PRELOAD_ASSETS} \
	-e TOTAL_MEMORY=${TOTAL_MEMORY}     \
	-e ENVIRONMENT=${ENVIRONMENT}

DOCKER_RUN           =${DOCKER_ENV} emscripten-builder
DOCKER_RUN_IN_PHP    =${DOCKER_ENV} -w /src/third_party/php7.4-src/ emscripten-builder
DOCKER_RUN_IN_ICU4C  =${DOCKER_ENV} -w /src/third_party/libicu-src/icu4c/source/ emscripten-builder
DOCKER_RUN_IN_LIBXML =${DOCKER_ENV} -w /src/third_party/libxml2/ emscripten-builder

TIMER=(which pv > /dev/null && pv --name '${@}' || cat)

.PHONY: web all clean image js hooks push-image pull-image

web: php-web.wasm
all: php-web.wasm php-webview.wasm php-node.wasm php-shell.wasm php-worker.wasm js
	@ echo "Done!"

########### Collect & patch the source code. ###########

third_party/php7.4-src/patched: third_party/sqlite3.33-src/sqlite3.c
	@ test -e third_party/php7.4-src/patched \
	|| git clone https://github.com/php/php-src.git third_party/php7.4-src \
		--branch ${PHP_BRANCH}   \
		--single-branch          \
		--depth 1
	@ git apply --no-index patch/php7.4-sqlite.patch
	@ touch third_party/php7.4-src/patched

third_party/sqlite3.33-src/sqlite3.c:
	@ wget https://sqlite.org/2020/sqlite-amalgamation-3330000.zip
	@ unzip sqlite-amalgamation-3330000.zip
	@ mv sqlite-amalgamation-3330000 third_party/sqlite3.33-src
	@ rm sqlite-amalgamation-3330000.zip
	@ git apply --no-index patch/sqlite3-wasm.patch
	@ cp third_party/sqlite3.33-src/sqlite3.c source/
	@ cp third_party/sqlite3.33-src/sqlite3.h source/

third_party/php7.4-src/ext/vrzno/vrzno.c: third_party/php7.4-src/patched
	@ git clone https://github.com/seanmorris/vrzno.git third_party/php7.4-src/ext/vrzno \
		--branch ${VRZNO_BRANCH} \
		--single-branch          \
		--depth 1

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

########### Build the objects. ###########

third_party/php7.4-src/configure:
	@ ${DOCKER_RUN_IN_PHP} ./buildconf --force | ${TIMER}
	@ ${DOCKER_RUN_IN_PHP} emconfigure ./configure \
		--enable-embed=static \
		--prefix=`pwd`/lib/ \
		--with-layout=GNU  \
		--disable-cgi      \
		--disable-cli      \
		--disable-all      \
		--with-sqlite3     \
		--enable-pdo       \
		--with-pdo-sqlite  \
		--disable-rpath    \
		--disable-phpdbg   \
		--without-pear     \
		--with-valgrind=no \
		--without-pcre-jit \
		--enable-bcmath    \
		--enable-json      \
		--enable-ctype     \
		--enable-mbstring  \
		--disable-mbregex  \
		--enable-tokenizer \
		--enable-vrzno | ${TIMER}

lib/libphp7.a: third_party/php7.4-src/configure third_party/php7.4-src/patched third_party/php7.4-src/**.c third_party/php7.4-src/**.h third_party/sqlite3.33-src/sqlite3.c
	@ ${DOCKER_RUN_IN_PHP} emmake make -j8
	@ cp -v third_party/php7.4-src/.libs/libphp7.la third_party/php7.4-src/.libs/libphp7.a lib/

lib/pib_eval.o: source/pib_eval.c
	@ ${DOCKER_RUN_IN_PHP} emcc ${OPTIMIZE} \
		-I .              \
		-I Zend           \
		-I main           \
		-I TSRM/          \
		../../source/pib_eval.c \
		-o ../../lib/pib_eval.o | ${TIMER}

lib/something:
	${DOCKER_RUN_IN_LIBXML} ./autogen.sh
	${DOCKER_RUN_IN_LIBXML} emconfigure ./configure --prefix=/src/lib/ | ${TIMER}
	${DOCKER_RUN_IN_LIBXML} emmake make | ${TIMER}
	${DOCKER_RUN_IN_LIBXML} emmake make install | ${TIMER}

########### Build the final files. ###########

FINAL_BUILD=${DOCKER_RUN_IN_PHP} emcc ${OPTIMIZE} \
	-o ../../build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.js \
	--llvm-lto 2                     \
	--preload-file ${PRELOAD_ASSETS} \
	-s EXPORTED_FUNCTIONS='["_pib_init", "_pib_destroy", "_pib_run", "_pib_exec" "_pib_refresh", "_main", "_php_embed_init", "_php_embed_shutdown", "_php_embed_shutdown", "_zend_eval_string", "_exec_callback", "_del_callback"]' \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "UTF8ToString", "lengthBytesUTF8"]' \
	-s ENVIRONMENT=${ENVIRONMENT}    \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0  \
	-s TOTAL_MEMORY=${TOTAL_MEMORY}  \
	-s EXPORT_NAME="'PHP'"           \
	-s MODULARIZE=1                  \
	-s ASSERTIONS=${ASSERTIONS}      \
	-s INVOKE_RUN=0                  \
		../../lib/libphp7.a ../../lib/pib_eval.o | ${TIMER}

php-web.wasm: ENVIRONMENT=web
php-web.wasm: lib/libphp7.a lib/pib_eval.o source/**.c source/**.h
	@ ${FINAL_BUILD}
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./docs-source/app/assets
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./docs-source/public

php-worker.wasm: ENVIRONMENT=worker
php-worker.wasm: lib/libphp7.a lib/pib_eval.o source/**.c source/**.h
	@ ${FINAL_BUILD}
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./docs-source/public

php-node.wasm: ENVIRONMENT=node
php-node.wasm: lib/libphp7.a lib/pib_eval.o source/**.c source/**.h
	@ ${FINAL_BUILD}
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./

php-shell.wasm: ENVIRONMENT=shell
php-shell.wasm: lib/libphp7.a lib/pib_eval.o source/**.c source/**.h
	@ ${FINAL_BUILD}
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./

php-webview.wasm: ENVIRONMENT=webview
php-webview.wasm: lib/libphp7.a lib/pib_eval.o source/pib_eval.c
	@ ${FINAL_BUILD}
	cp -v build/php-${ENVIRONMENT}${RELEASE_SUFFUX}.* ./


########### Clerical stuff. ###########

clean:
	@ ${DOCKER_RUN} rm -fv  *.js *.wasm *.data
	@ ${DOCKER_RUN} rm -rfv third_party/php7.4-src
	@ ${DOCKER_RUN} rm -rfv third_party/libxml2
	@ ${DOCKER_RUN} rm -rfv third_party/libicu-src
	@ ${DOCKER_RUN} rm -rfv third_party/sqlite3.33-src

hooks:
	@ git config core.hooksPath githooks

js:
	@ npm install | ${TIMER}
	@ npx babel source --out-dir . | ${TIMER}

image:
	@ docker-compose build

pull-image:
	@ docker-compose pull

push-image:
	@ docker-compose push

########### NOPS ###########
third_party/php7.4-src/**.c:
third_party/php7.4-src/**.h:
source/**.c:
source/**.h:
