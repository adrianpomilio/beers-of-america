var states = require('./routes/states');
var beers = require('./routes/beers');
var views = [
    {
		method: 'GET',
		path: '/{path*}',
		handler: {
			directory: {
				path: './src/public',
				listing: false,
				index: true
			}
		}
	},
    {
        method: 'GET',
        path: '/favicon.ico',
        handler: { file: './favicon.ico' },
        config: {
            cache: {
                expiresIn: 86400000,
                privacy: 'public'
            }
        }
    },
];

module.exports = [].concat(views, states, beers);
