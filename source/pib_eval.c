#include "sapi/embed/php_embed.h"
#include <emscripten.h>
#include <stdlib.h>

#include "zend_closures.h"
#include "../php7.4-src/ext/vrzno/php_vrzno.h"

// #define SQLITE_API EMSCRIPTEN_KEEPALIVE
#include "sqlite3.h"
#include "sqlite3.c"

int main() { return 0; }

int EMSCRIPTEN_KEEPALIVE pib_init()
{
	putenv("USE_ZEND_ALLOC=0");

	return php_embed_init(0, NULL);
}

char *EMSCRIPTEN_KEEPALIVE pib_eval(char *code)
{
	char *retVal = "";

	zend_try
	{
		zval retZv;

		zend_eval_string(code, &retZv, "php-wasm");

		convert_to_string(&retZv);

		retVal = Z_STRVAL(retZv);
	}
	zend_catch
	{
		retVal = "--ERROR--";
	}

	zend_end_try();

	return retVal;
}

void EMSCRIPTEN_KEEPALIVE pib_destroy()
{
	return php_embed_shutdown();
}

int EMSCRIPTEN_KEEPALIVE pib_refresh()
{
	pib_destroy();

	return pib_init();
}

int EMSCRIPTEN_KEEPALIVE exec_callback(zend_function *fptr)
{
	int retVal = vrzno_exec_callback(fptr);

	fflush(stdout);

	return retVal;
}

int EMSCRIPTEN_KEEPALIVE del_callback(zend_function *fptr)
{
	return vrzno_del_callback(fptr);
}
