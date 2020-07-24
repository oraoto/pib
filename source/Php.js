const PhpWebBin = require('./php-web');

export class Php extends EventTarget
{
	constructor()
	{
		super();

		const FLAGS = {};

		this.returnValue = -1;

		this.onerror  = function () { console.log('READY!!!') };
		this.onoutput = function () {};
		this.onready  = function () {};

		this.binary = PhpWebBin({

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
				// this.onerror(event);
				this.dispatchEvent(event);
			}

		});
	}

	run(phpCode)
	{
		return new Promise(accept => this.binary.then(php => {

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
				, [`echo "\n"`]
			);

			console.log(phpCode, retVal);

			accept(retVal);

		}));

	}
}
