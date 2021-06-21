import { PhpBase } from './PhpBase';

const PhpBinary = require('./php-webview');

export class PhpWebview extends PhpBase
{
	constructor(args = {})
	{
		super(PhpBinary, args);
	}
}
