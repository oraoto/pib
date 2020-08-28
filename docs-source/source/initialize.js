"use strict";

const PHP = require('php-wasm/PhpWeb').PhpWeb;

document.addEventListener('DOMContentLoaded', function () {

	const input  = document.querySelector('.input  textarea');
	const stdret = document.querySelector('.stdret > * > *');
	const stdout = document.querySelector('.stdout > * > *');
	const stderr = document.querySelector('.stderr > * > *');
	const run    = document.querySelector('[data-run]');
	const status = document.querySelector('[data-status]');
	const editor = ace.edit(input);
	const ret    = document.querySelector('#ret');

	const exitBox    = document.querySelector('#exit')
	const exitLabel  = exitBox.querySelector('span');
	const persistBox = document.getElementById('persist');
	const singleBox  = document.getElementById('single-expression');

	editor.session.setMode("ace/mode/php");
	editor.setTheme('ace/theme/monokai')

	status.innerText = 'php-wasm loading...';
	const php = new PHP;

	const query = new URLSearchParams(location.search);

	php.addEventListener('ready', (event) => {
		status.innerText = 'php-wasm ready!';

		run.addEventListener('click', () => {

			status.innerText = 'Executing...';

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
				history.replaceState({}, document.title, "?" + query.toString());
			}

			// const runCode = code.replace(/^<\?php/, '');

			console.log(code);

			const func = singleBox.checked
				? 'exec'
				: 'run';

			if(singleBox.checked)
			{
				code = code.replace(/^\s*<\?php/, '');
				code = code.replace(/\?>\s*/, '');
			}

			console.log(func);

			php[func](code).then(ret=>{

				if(!singleBox.checked)
				{
					exitLabel.innerText = ret;
				}

				status.innerText = 'php-wasm ready!';

				const row = document.createElement('div');

				row.innerText = ret;
				row.setAttribute('tabindex', -1);

				row.classList.add('row');

				stdret.append(row);

			});

		});
	});

	php.addEventListener('output', (event) => {

		console.log('output', event);

		const row = document.createElement('div');

		row.innerText = event.detail.join("\n");
		row.setAttribute('tabindex', -1);

		row.classList.add('row');

		stdout.append(row);
	});

	php.addEventListener('error', (event) => {

		console.log('error', event);

		const row = document.createElement('div');

		row.innerText = event.detail.join("\n");
		row.setAttribute('tabindex', -1);

		row.classList.add('row');

		stderr.append(row);
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

		console.log(ret, event.target.checked)

	});

	exitLabel.innerText = '_';

	if(query.has('code'))
	{
		editor.setValue(decodeURIComponent(query.get('code')));
		editor.selection.moveCursorFileStart();
	}
	else
	{
		editor.setValue(`
<?php
fwrite( fopen('php://stdout', 'w'), "This is STDOUT\\n" );
fwrite( fopen('php://stderr', 'w'), "This is STDOUT\\n" );
`);

		editor.selection.moveCursorFileEnd();
	}


});
