/**
 * Showing with the Express framwork http://expressjs.com/
 * Express must be installed for this sample to work
 */

require('../../lib/tropo-webapi');
var express = require('express');
var app = express.createServer();

app.post('/', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new TropoWebAPI();
	// Use the say method https://www.tropo.com/docs/webapi/say.htm
	tropo.say("Welcome to my Tropo Web API node demo.");
	// Use the on method https://www.tropo.com/docs/webapi/on.htm
	tropo.on("continue", null, "/one", true);
	
    res.send(TropoJSON(tropo));
});

app.post('/one', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new TropoWebAPI();
	tropo.say("Hello from resource one!");
	tropo.on("continue", null, "/two", true);
	
	res.send(TropoJSON(tropo));
});

app.post('/two', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new TropoWebAPI();
	tropo.say("Hello from resource two!");
	tropo.say("Well, enough of that. Goodbye.");
	
	res.send(TropoJSON(tropo));
});

app.listen(8000);
console.log('Server running on http://0.0.0.0:8000/')