const PhpNode    = require('./php-node');
const PhpShell   = require('./php-shell');
const PhpWeb     = require('./php-web');
const PhpWebView = require('./php-webview');
const PhpWorker  = require('./php-worker');

export class Php extends EventTarget
{
	constructor(type = 'web')
	{
		super();

		const FLAGS = {};

		this.returnValue = -1;

		this.onerror  = function () {};
		this.onoutput = function () {};
		this.onready  = function () {};

		const binaryClasses = {
			webview : PhpWebView
			, worker: PhpWorker
			, shell : PhpShell
			, node  : PhpNode
			, web   : PhpWeb
		};

		const binaryClass = binaryClasses[type];

		this.binary = new binaryClass({

			postRun:  () => {
				const event = new CustomEvent('ready');
				this.dispatchEvent(event);
				this.onready(event)
			},

			print: (...chunks) =>{
				const event = new CustomEvent('output', {detail: chunks});
				this.dispatchEvent(event);
				this.onoutput(event);
			},

			printErr: (...chunks) => {
				const event = new CustomEvent('error', {detail: chunks});
				this.onerror(event);
				this.dispatchEvent(event);
			}

		}).then(php=>{

			const retVal = php.ccall(
				'pib_init'
				, 'number'
				, ["string"]
				, []
			);

			return php;

		}).catch(error => console.log(error));
	}

	run(phpCode)
	{
		return this.binary.then(php => {

			const retVal = php.ccall(
				'pib_eval'
				, 'number'
				, ["string"]
				, [`?>${phpCode}`]
			);

			php.ccall(
				'pib_eval'
				, 'number'
				, ["string"]
				, [`fwrite(fopen('php://stdout', 'w'), PHP_EOL);`]
			);

			return retVal;

		});
	}

	refresh()
	{
		return this.binary.then(php => {

			return php.ccall(
				'pib_refresh'
				, 'number'
				, []
				, []
			);

		}).catch(error => console.log(error));
	}
}
