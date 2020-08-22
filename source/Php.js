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

		let binaryClass;

		switch(type)
		{
			case 'webview':
				binaryClass = require('./php-webview');
				break;

			case 'worker':
				binaryClass = require('./php-worker');
				break;

			case 'shell':
				binaryClass = require('./php-shell');
				break;

			case 'node':
				binaryClass = require('./php-node');
				break;

			case 'web':
				binaryClass = require('./php-web');
				break;
		}

		binaryClasses[type];

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
