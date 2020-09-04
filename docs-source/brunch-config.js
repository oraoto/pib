module.exports = {
	files: {
		stylesheets: {joinTo: 'app.css'}
		, templates: {joinTo: 'include.js'}
		, javascripts: {
			entryPoints: {
				'app/DrupalWorker.js': 'DrupalWorker.js'
				, 'app/initialize.js': 'app.js'
			}
		}
	}
	, plugins: {
		babel: {
			presets:   ['@babel/preset-env']
			, plugins: ['@babel/plugin-proposal-class-properties']
		}
		, raw: {
			pattern: /\.(php)$/,
			wrapper: content => `module.exports = ${JSON.stringify(content)}`
		}
	}
	, modules: {
		autoRequire: {
			'DrupalWorker.js': ['DrupalWorker']
		}
	}
	, watcher: {
		awaitWriteFinish: true,
		usePolling: true
	}
};
