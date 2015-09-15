var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var statesSchema = new Schema({
	name: {type:String},
	abbr: {type:String},
	class: {type:String},
    d: {type:String}

});

var state = Mongoose.model('state', statesSchema);

module.exports = {
	State: state
};
