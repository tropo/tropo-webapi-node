/**
 * Showing with the Express framwork http://expressjs.com/
 * Express must be installed for this sample to work
 */

var tropowebapi = require('tropo-webapi');
var express = require('express');
var app = express.createServer();

/**
 * Required to process the HTTP body
 * req.body has the Object while req.rawBody has the JSON string
 */
app.configure(function(){
	app.use(express.bodyDecoder());
});

app.post('/', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	// Use the say method https://www.tropo.com/docs/webapi/say.htm
	tropo.say("Welcome to my Tropo Web API node demo.");

	// Demonstrates how to use the base Tropo action classes.
	var say = new Say("Please enter your 5 digit zip code.");
	var choices = new Choices("[5 DIGITS]");

	// Action classes can be passes as parameters to TropoWebAPI class methods.
	// use the ask method https://www.tropo.com/docs/webapi/ask.htm
	tropo.ask(choices, 3, false, null, "foo", null, true, say, 5, null);
	// use the on method https://www.tropo.com/docs/webapi/on.htm
	tropo.on("continue", null, "/answer", true);
	
    res.send(tropowebapi.TropoJSON(tropo));
});

app.post('/answer', function(req, res){
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	tropo.say("Your zip code is " + req.body['result']['actions']['interpretation']);
	
	res.send(tropowebapi.TropoJSON(tropo));
});

app.listen(8000);
console.log('Server running on http://0.0.0.0:8000/')