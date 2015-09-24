var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var beerSchema = new Schema({
	nameDisplay: {type:String},
	description: {type:String}
});

var beer = Mongoose.model('beer', beerSchema);

module.exports = {
	Beer: beer
};
