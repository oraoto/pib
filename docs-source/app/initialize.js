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

		run.removeAttribute('disabled');

		run.addEventListener('click', () => {

			exitLabel.innerText = '_';

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

			if(!persistBox.checked)
			{
				php.refresh();
			}

			php[func](code).then(ret=>{

				status.innerText = 'php-wasm ready!';

				const content = String(ret);

				stdret.innerText = content;

				exitLabel.innerText = '_';

				if(!singleBox.checked)
				{
					setTimeout(() => exitLabel.innerText = ret, 100);
				}
			});
		});
	});

	php.addEventListener('output', (event) => {

		console.log('output', event);

		const row = document.createElement('div');

		const content = event.detail.join("\n");

		stdout.innerText += content;
	});

	php.addEventListener('error', (event) => {

		console.log('error', event);
		const content = event.detail.join("\n");

		stderr.innerText += content;
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

});
