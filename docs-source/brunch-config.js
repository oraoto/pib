module.exports = {
	files: {
		stylesheets: {joinTo: 'app.css'}
		, javascripts: {
			entryPoints: {
				'app/worker.js':      'worker.js'
				, 'app/initialize.js':'app.js'
			}
		}
	}
	, plugins: {
		babel: {
			presets:   ['@babel/preset-env']
			, plugins: ["@babel/plugin-proposal-class-properties"]
		}
		, raw: {
			pattern: /\.tmp\.(.+)$/,
			wrapper: content => `module.exports = ${JSON.stringify(content)}`
		}
	}
};
