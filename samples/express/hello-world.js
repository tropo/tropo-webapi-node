/**
 * Showing with the Express framwork http://expressjs.com/
 * Express must be installed for this sample to work
 */

var tropowebapi = require('tropo-webapi');
var express = require('express');

var app = express.createServer();

app.post('/', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	// Use the say method https://www.tropo.com/docs/webapi/say.htm
	tropo.say("Hello World!");

    res.send(tropowebapi.TropoJSON(tropo));
});


app.listen(8000);
console.log('Server running on http://0.0.0.0:8000/')