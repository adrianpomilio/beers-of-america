var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/beers-of-america", function(err, db) {
	if(err) { return console.dir(err); }

	console.log(db.getCollectionNames());

});
