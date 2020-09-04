<?php
ini_set('session.save_path', '/home/web_user');
session_start();
session_id('${session_id}');

$stdErr = fopen('php://stderr', 'w');
$errors = [];

register_shutdown_function(function() use($stdErr, &$errors){
    fwrite($stdErr, json_encode(['session_id' => session_id()]) . "\n" );
    fwrite($stdErr, var_export($errors,1) . "\n");
});

set_error_handler(function(...$args) use($stdErr, &$errors){
	$errors[] = $args;
});

$request = (object) json_decode(
	'${JSON.stringify(event.data)}'
	, JSON_OBJECT_AS_ARRAY
);

parse_str(substr($request->_GET, 1), $_GET);

$_POST = $request->_POST;

$origin  = 'http://localhost:3333';
$docroot = '/preload/drupal-7.59';
$script  = 'index.php';

$path    = $request->path;

$_SERVER['REQUEST_URI']     = $path;
$_SERVER['REMOTE_ADDR']     = '127.0.0.1';
$_SERVER['SERVER_NAME']     = $origin;
$_SERVER['SERVER_PORT']     = 3333;
$_SERVER['REQUEST_METHOD']  = 'GET';
$_SERVER['SCRIPT_FILENAME'] = $docroot . '/' . $script;
$_SERVER['SCRIPT_NAME']     = $docroot . '/' . $script;
$_SERVER['PHP_SELF']        = $docroot . '/' . $script;
$_SERVER['DOCUMENT_ROOT']   = '/';

$databases['default']['default'] = array(
	'database' => '/drupal-7.db'
	, 'driver' => 'sqlite'
);

chdir($docroot);

require $script;
