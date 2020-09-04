"use strict";

import { PhpWeb as PHP } from 'php-wasm/PhpWeb';

window.PHP = PHP;
const php  = new PHP;

let session_id = '';

const serviceWorker = navigator.serviceWorker;

if(serviceWorker)
{
	serviceWorker.register(`${location.pathname}DrupalWorker.js`).catch(error => {
		console.log('Error, ', error);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const input  = document.querySelector('.input  textarea');
	const stdout = document.querySelector('.stdout > * > div.scroller');
	const stderr = document.querySelector('.stderr > * > div.scroller');
	const stdret = document.querySelector('.stdret > * > div.scroller');
	const run    = document.querySelector('[data-run]');
	const token  = document.querySelector('[data-tokenize]');
	const status = document.querySelector('[data-status]');
	const editor = ace.edit(input);
	const ret    = document.querySelector('#ret');

	const stdoutFrame = document.querySelector('.stdout > * > iframe');
	const stderrFrame = document.querySelector('.stderr > * > iframe');
	const stdretFrame = document.querySelector('.stdret > * > iframe');
	const openFile    = document.getElementById('openFile');
	const exitBox     = document.querySelector('#exit')
	const exitLabel   = exitBox.querySelector('span');
	const persistBox  = document.getElementById('persist');
	const singleBox   = document.getElementById('singleExpression');

	const renderAs = Array.from(document.querySelectorAll('[name=render-as]'));

	openFile.addEventListener('input', event =>{

		const reader = new FileReader();

		reader.onload = (event) => {
			editor.setValue(event.target.result);
		};

		reader.readAsText(event.target.files[0]);

	});

	const query = new URLSearchParams(location.search);

	editor.session.setMode("ace/mode/php");
	editor.setTheme('ace/theme/monokai')

	status.innerText = 'php-wasm loading...';

	php.addEventListener('ready', event => {

		if(serviceWorker)
		{
			serviceWorker.addEventListener('message', event => {

				console.log(event.data);

				exitLabel.innerText = '_';

				status.innerText = 'Executing...';

				stdoutFrame.srcdoc = ' ';
				stderrFrame.srcdoc = ' ';
				stdretFrame.srcdoc = ' ';

				while(stdout.firstChild)
				{
					stdout.firstChild.remove();
				}

				while(stderr.firstChild)
				{
					stderr.firstChild.remove();
				}

				while(stdret.firstChild)
				{
					stdret.firstChild.remove();
				}

				const code = `
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

$path = $request->path;
$path = preg_replace('/^\/php-wasm/', '', $path);

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

require $script;`;

				php.run(code).then(exitCode => {
					exitLabel.innerText = exitCode;
					status.innerText = 'php-wasm ready!';
				}).finally(
					() => {
						if(!persistBox.checked)
						{
							php.refresh();
						}
					}
				);
			});
		}

		status.innerText = 'php-wasm ready!';

		run.removeAttribute('disabled');

		token && token.addEventListener('click', () => {

			const url     = '/drupal-7.59/install.php';
			const options = {method: 'GET'};

			fetch(url, options).then(r=> r.text()).then(r => {
				console.log('Done');
			});

		});

		run.addEventListener('click', () => {

			exitLabel.innerText = '_';

			status.innerText = 'Executing...';

			stdoutFrame.srcdoc = ' ';
			stderrFrame.srcdoc = ' ';
			stdretFrame.srcdoc = ' ';

			while(stdout.firstChild)
			{
				stdout.firstChild.remove();
			}

			while(stderr.firstChild)
			{
				stderr.firstChild.remove();
			}

			while(stdret.firstChild)
			{
				stdret.firstChild.remove();
			}

			let code = editor.session.getValue();

			if(code.length < 1024)
			{
				query.set('code', encodeURIComponent(code));
				query.set('persist', persistBox.checked ? 1 : 0);
				query.set('single-expression', singleBox.checked ? 1 : 0);
				history.replaceState({}, document.title, "?" + query.toString());
			}

			const func = singleBox.checked
				? 'exec'
				: 'run';

			if(singleBox.checked)
			{
				code = code.replace(/^\s*<\?php/, '');
				code = code.replace(/\?>\s*/, '');
			}

			php[func](code).then(ret=>{

				status.innerText = 'php-wasm ready!';

				const content = String(ret);

				stdret.innerText = content;
				stdretFrame.srcdoc = content;

				exitLabel.innerText = '_';

				if(!singleBox.checked)
				{
					setTimeout(() => exitLabel.innerText = ret, 100);
				}
			}).finally(() => {
				if(!persistBox.checked)
				{
					php.refresh();
				}
			});
		});
	});

	const outputBuffer = [];

	php.addEventListener('output', (event) => {
		const row = document.createElement('div');
		const content = event.detail.join('');

		outputBuffer.push(content);

		requestIdleCallback(()=>{

			if(!outputBuffer)
			{
				return;
			}

			const chunk = outputBuffer.join('');

			document.createTextNode(chunk);

			stdout.append(chunk);
			stdoutFrame.srcdoc += chunk;

			while(outputBuffer.pop()){};

		});

	});

	const errorBuffer = [];

	php.addEventListener('error', (event) => {
		const content = event.detail.join("\n");

		try{
			const cookies = JSON.parse(content);

			if(cookies.session_id)
			{
				session_id = cookies.session_id;
			}

		}catch{}

		errorBuffer.push(content);

		requestIdleCallback(()=>{

			if(!errorBuffer)
			{
				return;
			}

			const chunk = errorBuffer.join('');

			document.createTextNode(chunk);

			stderr.append(chunk);
			stderrFrame.srcdoc += chunk;

			while(errorBuffer.pop()){};

		});
	});

	ret.style.display = 'none';

	singleBox.addEventListener('input', event=>{
		if(event.target.checked)
		{
			exitBox.style.display = 'none';
			ret.style.display = 'flex';
		}
		else
		{
			exitBox.style.display = 'flex';
			ret.style.display = 'none';
		}
	});

	exitLabel.innerText = '_';

	if(query.has('code'))
	{
		editor.setValue(decodeURIComponent(query.get('code')));
	}
	if(query.has('render-as'))
	{
		document.querySelector(`[name=render-as][value=${query.get('render-as')}]`).checked = true;
	}

	persistBox.checked = Number(query.get('persist'));
	singleBox.checked  = Number(query.get('single-expression'));

	if(singleBox.checked)
	{
		exitBox.style.display = 'none';
		ret.style.display = 'flex';
	}
	else
	{
		exitBox.style.display = 'flex';
		ret.style.display = 'none';
	}

	setTimeout(() => editor.selection.moveCursorFileStart(), 150);

	renderAs.map(radio => {

		if(query.get('render-as') === 'html')
		{

			stdout.style.display = 'none';
			stdoutFrame.style.display = 'flex';

			stderr.style.display = 'none';
			stderrFrame.style.display = 'flex';

			stdret.style.display = 'none';
			stdretFrame.style.display = 'flex';
		}
		else
		{
			stdout.style.display = 'flex';
			stdoutFrame.style.display = 'none';

			stderr.style.display = 'flex';
			stderrFrame.style.display = 'none';

			stdret.style.display = 'flex';
			stdretFrame.style.display = 'none';
		}

		radio.addEventListener('change', event => {

			const type = event.target.value;

			query.set('render-as', type);
			history.replaceState({}, document.title, "?" + query.toString());

			if(type === 'html')
			{

				stdout.style.display = 'none';
				stdoutFrame.style.display = 'flex';

				stderr.style.display = 'none';
				stderrFrame.style.display = 'flex';

				stdret.style.display = 'none';
				stdretFrame.style.display = 'flex';
			}
			else
			{
				stdout.style.display = 'flex';
				stdoutFrame.style.display = 'none';

				stderr.style.display = 'flex';
				stderrFrame.style.display = 'none';

				stdret.style.display = 'flex';
				stdretFrame.style.display = 'none';
			}

		});
	});

});

