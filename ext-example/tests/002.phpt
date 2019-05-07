--TEST--
example_test1() Basic test
--SKIPIF--
<?php
if (!extension_loaded('example')) {
	echo 'skip';
}
?>
--FILE--
<?php
$ret = example_test1();

var_dump($ret);
?>
--EXPECT--
The extension example is loaded and working!
NULL
