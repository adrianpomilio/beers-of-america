var apiKeys = require('../../keys.json');
var beer = 'IPA';
var url = 'api.brewerydb.com/v2/search?q='+beer+'&type=beer&key='+apiKeys.brewery.apiKey;

module.exports = [
    {
    method: 'GET',
    path: '/beers/{query}',
    handler: {
        proxy: {
            mapUri: function(request, callback){
                var url='http://api.brewerydb.com/v2/search?q='+request.params.query+'&type=beer&key='+apiKeys.brewery.apiKey;
                console.log(request.params);
                callback(null, url);
                
              }
            }
          }
        }

];
