const PhpBinary = require('./php-web');

export class Php extends EventTarget
{
	constructor()
	{
		super();

		const FLAGS = {};

		this.returnValue = -1;

		this.onerror  = function () {};
		this.onoutput = function () {};
		this.onready  = function () {};

		console.log(PhpBinary);

		this.binary = new PhpBinary({

			postRun:  () => {
				const event = new CustomEvent('ready');
				this.dispatchEvent(event);
				this.onready(event)
			},

			print: (...chunks) =>{
				const event = new CustomEvent('output', {detail: chunks.map(c=>c+"\n")});
				this.dispatchEvent(event);
				this.onoutput(event);
			},

			printErr: (...chunks) => {
				const event = new CustomEvent('error', {detail: chunks.map(c=>c+"\n")});
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
