export class UniqueIndex
{
	constructor()
	{
		const map = new Map();
		const set = new WeakMap();

		let index = 0;

		Object.defineProperty(this, 'add', {
			configurable: false
			, writable:   false
			, value: (callback) => {

				const existing = set.has(callback);

				if(existing)
				{
					return existing;
				}

				const newIndex = ++index;

				set.set(callback, newIndex);
				map.set(newIndex, callback);

				return newIndex;
			}
		});

		Object.defineProperty(this, 'has', {
			configurable: false
			, writable:   false
			, value: (callback) => {
				if(set.has(callback))
				{
					return set.get(callback);
				}
			}
		});

		Object.defineProperty(this, 'get', {
			configurable: false
			, writable:   false
			, value: (index) => {
				if(map.has(index))
				{
					return map.get(index);
				}
			}
		});

		Object.defineProperty(this, 'remove', {
			configurable: false
			, writable:   false
			, value: (index) => {

				const callback = map.get(index);

				if(callback)
				{
					set.delete(callback)
					map.delete(index)
				}
			}
		});
	}
}
