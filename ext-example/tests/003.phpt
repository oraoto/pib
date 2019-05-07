--TEST--
example_test2() Basic test
--SKIPIF--
<?php
if (!extension_loaded('example')) {
	echo 'skip';
}
?>
--FILE--
<?php
var_dump(example_test2());
var_dump(example_test2('PHP'));
?>
--EXPECT--
string(11) "Hello World"
string(9) "Hello PHP"
