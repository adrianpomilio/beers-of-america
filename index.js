var hapi = require('hapi');
var Good = require('good');
var routes = require('./src/routes');
var mongoose = require('mongoose');
var db = mongoose.connection;
var server = new hapi.Server({
	connections: {
		routes: {
			cors: true
		}
	}
});

// configure hapi server
server.connection(
	{
		port: 8000
	}
);


// routes
server.route(routes);
// logging
server.register({
	register: Good,
	options: {
		reporters: [
			{
				reporter: require('good-console'),
				events: {
					response: '*',
					log: '*'
				}
			}
		]
	}
}, function (err) {
	if (err) {
		throw err; // something bad happened loading the plugin
	}

	server.start(function () {
		server.log('info', 'Server running at: ' + server.info.uri);
	});
});
// API documentation
server.register({ register: require('lout') }, function (err) {
});

// database connection
mongoose.connect('mongodb://localhost/beers-of-america');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Connected to mongo');
});

// start hapi
server.start(function () {
	console.log('Server running at:', server.info.uri);
});
