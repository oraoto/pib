#include "sapi/embed/php_embed.h"
#include <emscripten.h>
#include <stdlib.h>

int main() { return 0; }

int EMSCRIPTEN_KEEPALIVE pib_init()
{
	putenv("USE_ZEND_ALLOC=0");

	return php_embed_init(0, NULL);
}

int EMSCRIPTEN_KEEPALIVE pib_eval(char *code)
{
	int retVal = 0;

	zend_try
	{
		retVal = zend_eval_string(code, NULL, "php shell code");
	}
	zend_catch
	{
		fflush(stderr);
	}

	zend_end_try();

	fflush(stdout);

	return retVal == FAILURE;
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
