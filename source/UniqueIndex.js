export class UniqueIndex
{
	constructor()
	{
		const map = new Map();
		const set = new WeakMap();

		let id = 0;

		Object.defineProperty(this, 'add', {
			configurable: false
			, writable:   false
			, value: (callback) => {

				const existing = set.has(callback);

				if(existing)
				{
					return existing;
				}

				const newid = ++id;

				set.set(callback, newid);
				map.set(newid, callback);

				return newid;
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
			, value: (id) => {
				if(map.has(id))
				{
					return map.get(id);
				}
			}
		});

		Object.defineProperty(this, 'remove', {
			configurable: false
			, writable:   false
			, value: (id) => {

				const callback = map.get(id);

				if(callback)
				{
					set.delete(callback)
					map.delete(id)
				}
			}
		});
	}
}
