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
console.log(routes);

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
