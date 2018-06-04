#include "sapi/embed/php_embed.h"
#include <emscripten.h>

int EMSCRIPTEN_KEEPALIVE pib_eval(char *code) {
    int ret = 0;
    PHP_EMBED_START_BLOCK(0, NULL)
        ret = zend_eval_string(code, NULL, "PIB");
    PHP_EMBED_END_BLOCK()
    return ret;
}
