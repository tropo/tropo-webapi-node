/**
 * Showing with the Express framwork http://expressjs.com/
 * Express must be installed for this sample to work
 */

var port = Number(process.env.PORT || 3000);

var tropowebapi = require('tropo-webapi');
var express = require('express');

var app = express();

app.post('/', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	// Use the say method https://www.tropo.com/docs/webapi/say.htm
	tropo.say("Hello World!");

    res.send(tropowebapi.TropoJSON(tropo));
});


app.listen(port);
console.log('Server running on: ' + port);
