var m = require('../models/State');

module.exports = [

	{
		method: 'GET',
		path: '/states',
		handler: function (request, reply) {

			m.State.find(function (err, res) {
				if (err) throw err;
				console.log(res);
				reply(res);
			}).sort({name: 1});
		},
		config: {
			description: 'return all states',
			tags: ['api', 'states', 'get-all']
		}
	},
	{
		method: 'GET',
		path: '/states/{id}',
		handler: function (request, reply) {
			var state = request.params.id;
			m.State.find({_id: state}, function (err, res) {
				if (err) throw err;
				reply(res[0]);
			});
		},
		config: {
			description: 'return group by id',
			tags: ['api', 'user-management', 'groups', 'get']
		}
	}
];
