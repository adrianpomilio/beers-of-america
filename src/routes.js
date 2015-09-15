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
];

module.exports = [].concat(views, states, beers);
