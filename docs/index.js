const inputArea   = document.getElementById('input');
const runButton   = document.getElementById('run');
const persistBox   = document.getElementById('persist');
const outputArea  = document.getElementById('output').contentDocument;
const defaultCode = '<?php phpinfo();';
const editor      = ace.edit("editor");

editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/php");
editor.setShowPrintMargin(false);

const Php = require('./Php').Php;

const php = new Php();

const init = () => {
	outputArea.open();
	outputArea.write("Click RUN");
	outputArea.close();

	runButton.disabled = false
	runButton.textContent = "Run"
	runButton.addEventListener('click', () => {

		outputArea.open();

		var code = editor.getValue();
		var query = new URLSearchParams();

		php.run(code).then(exitCode => {

			const style = document.createElement('style');

			style.textContent = "body{ white-space:pre; }";

			outputArea.head.append(style);

			if(exitCode || !persistBox.checked)
			{
				php.refresh();
			}

		});

		if (code.length < 1024)
		{
			query.append('code', encodeURIComponent(code));
			query.append('persist', persistBox.checked ? 1 : 0);
			history.replaceState({}, document.title, "?" + query.toString());
		}

		outputArea.close();
	});
}


php.addEventListener('ready', (event) => init());

php.addEventListener('output', (event) => {
	outputArea.write(event.detail.join("\n"));
});

const query = new URLSearchParams(document.location.search);

if(query.has('code'))
{
	editor.setValue(decodeURIComponent(query.get('code')));
}
else
{
	editor.setValue(defaultCode);
}

if(query.get('persist'))
{
	persistBox.checked = true;
}

outputArea.open();
