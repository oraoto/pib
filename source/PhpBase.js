import { UniqueIndex } from './UniqueIndex';

const STR = 'string';
const NUM = 'number';

export class PhpBase extends EventTarget
{
	constructor(PhpBinary)
	{
		super();

		const FLAGS = {};

		this.returnValue = -1;

		this.onerror  = function () {};
		this.onoutput = function () {};
		this.onready  = function () {};

		const callbacks = new UniqueIndex;
		const targets   = new UniqueIndex;

		this.binary = new PhpBinary({

			callbacks, targets,

			postRun:  () => {
				const event = new CustomEvent('ready');
				this.dispatchEvent(event);
				this.onready(event)
			},

			print: (...chunks) =>{
				console.log(chunks);
				const event = new CustomEvent('output', {detail: chunks.map(c=>c+"\n")});
				this.dispatchEvent(event);
				this.onoutput(event);
			},

			printErr: (...chunks) => {
				console.log(chunks);
				const event = new CustomEvent('error', {detail: chunks.map(c=>c+"\n")});
				this.onerror(event);
				this.dispatchEvent(event);
			}

		}).then(php=>{

			const retVal = php.ccall(
				'pib_init'
				, NUM
				, [STR]
				, []
			);

			return php;

		}).catch(error => console.log(error));
	}

	run(phpCode)
	{
		return this.binary.then(php => php.ccall(
			'pib_run'
			, NUM
			, [STR]
			, [`?>${phpCode}`]
		));
	}

	exec(phpCode)
	{
		return this.binary.then(php => php.ccall(
			'pib_exec'
			, STR
			, [STR]
			, [phpCode]
		));
	}

	refresh()
	{
		const call = this.binary.then(php => php.ccall(
			'pib_refresh'
			, NUM
			, []
			, []
		));

		call.catch(error => console.log(error));

		return call;
	}
}
