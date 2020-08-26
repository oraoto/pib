import { PhpBase } from './PhpBase';

const PhpBinary = require('./php-node');

export class PhpNode extends PhpBase
{
	constructor()
	{
		super(PhpBinary);
	}
}
