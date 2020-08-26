// self.importScripts('./php-worker.js', './PhpBase.js', './PhpWorker.js');

// const PhpWorker = require('./PhpWorker').PhpWorker;
// const php = new PhpWorker;

self.addEventListener('install', event => {
	console.log('SW installed',event);
	console.dir(event);
	// event.waitUntil(php);
});

self.addEventListener('activate', event => {
	console.log('SW activated',event);
	console.dir(event);
});

self.addEventListener('fetch', event => {
	console.log('SW fetched!',event);
	console.dir(event);
});
