--TEST--
Check if example is loaded
--SKIPIF--
<?php
if (!extension_loaded('example')) {
	echo 'skip';
}
?>
--FILE--
<?php
echo 'The extension "example" is available';
?>
--EXPECT--
The extension "example" is available
