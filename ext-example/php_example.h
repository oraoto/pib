/* example extension for PHP */

#ifndef PHP_EXAMPLE_H
# define PHP_EXAMPLE_H

extern zend_module_entry example_module_entry;
# define phpext_example_ptr &example_module_entry

# define PHP_EXAMPLE_VERSION "0.1.0"

# if defined(ZTS) && defined(COMPILE_DL_EXAMPLE)
ZEND_TSRMLS_CACHE_EXTERN()
# endif

#endif	/* PHP_EXAMPLE_H */
