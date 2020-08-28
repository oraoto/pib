module.exports = {
	files: {
		stylesheets: {joinTo: 'app.css'}
		, javascripts: {
			entrypoints: {
				'app.js': {
					'app.js': 'app/initialize.js'
				}
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
