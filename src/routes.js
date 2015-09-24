var m = require('./models/Beer');
var states = require('./routes/states');
var beers = require('./routes/beers');
var views = [
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
        {
		method: 'GET',
		path: '/favorites',
		handler: function (request, reply) {
            m.Beer.find(function (err, res) {
				if (err) throw err;

				reply(res);
			});
		}
	},
    {
        method: 'POST',
        path: '/favorites',
        handler: function (request, reply) {
            console.log(JSON.parse(request.payload));
    		var beer = new m.Beer(JSON.parse(request.payload));
    		beer.save(function (err, res) {
    			if (err) throw err;
    			reply(res);
		          });
        }
	},
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
	}
];

module.exports = [].concat(views, states, beers);
