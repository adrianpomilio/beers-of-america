var state = require('../src/models/State');
var states = require('../states.js');

var mongoose = require('mongoose');
var db = mongoose.connection;

console.log(state);
console.log(states);
// database connection
mongoose.connect('mongodb://localhost/beers-of-america');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Connected to mongo');
});


states.states.forEach(function(item){
	var obj = new state.State(item);
	console.log(obj);
	loadData(obj);
});

function loadData(obj){
	obj.save(function (err, res) {
		if (err) throw err;

	});
}
