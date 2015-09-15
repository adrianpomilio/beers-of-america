var apiKeys = require('../../keys.json');
var beer = req.param("name");
var url = apiKeys.brewery.url + 'search?q='+beer+'&type=beer&key='+apiKeys.brewery.apiKey;
