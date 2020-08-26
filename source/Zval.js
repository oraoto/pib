export class ZVal
{
	constructor(wrappedValue)
	{
		this.wrapped  = wrappedValue;
		this.refCount = 1;
	}
}
