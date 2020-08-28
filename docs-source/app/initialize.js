"use strict";

const serviceWorker = navigator.serviceWorker;

// if(serviceWorker)
// {
// 	serviceWorker.register('/DrupalWorker.js').then(registration => {

// 		console.log('Success!');

// 	}).catch(error => {
// 		console.log('Error, ', error);
// 	});

// 	serviceWorker.addEventListener('message', event => {
// 		console.log(event);
// 	});
// }

const PHP = require('php-wasm/PhpWeb').PhpWeb;

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

	const openFile = document.getElementById('openFile');

	console.log(stdoutFrame, stderrFrame, stdretFrame);

	const exitBox    = document.querySelector('#exit')
	const exitLabel  = exitBox.querySelector('span');
	const persistBox = document.getElementById('persist');
	const singleBox  = document.getElementById('singleExpression');

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
	const php = new PHP;


	php.addEventListener('ready', (event) => {
		status.innerText = 'php-wasm ready!';

		run.removeAttribute('disabled');

		token && token.addEventListener('click', () => {

			const body = new FormData();

			body.append('foo', 'bar');

			const options = {method: 'POST', body};

			fetch('/drupal/home?something=1', options).then(r=> r.text()).then(r => {
				// console.log(r);
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

			if(!persistBox.checked)
			{
				php.refresh();
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
			});
		});
	});

	const outputBuffer = [];

	php.addEventListener('output', (event) => {
		const row = document.createElement('div');
		const content = event.detail.join('');

		outputBuffer.push(content);

		requestAnimationFrame(()=>{

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
		stderr.innerText += content;
		stderrFrame.srcdoc += content;
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

