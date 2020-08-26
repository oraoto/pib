import { PhpBase } from './PhpBase';

const PhpBinary = require('./php-webview');

export class PhpWebview extends PhpBase
{
	constructor()
	{
		super(PhpBinary);
	}
}
