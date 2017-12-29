/**
* A very simple node web server that will respond to requests
* with a request to enter a 5 digit zip code.
*/

var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {

	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	tropo.say("Welcome to my Tropo Web API node demo.");
	
	// Demonstrates how to use the base Tropo action classes.
	var say = new Say("Please enter your 5 digit zip code.");
	var choices = new Choices("[5 DIGITS]");
	
	// Action classes can be passes as parameters to TropoWebAPI class methods.
	tropo.ask(choices, 3, false, null, "foo", null, true, say, 5, null);
	tropo.on("continue", null, "http://somefakehost.com:8000/", true);
	
	// Render out the JSON for Tropo to consume.
	response.writeHead(200, {'Content-Type': 'application/json'}); 
	response.end(tropowebapi.TropoJSON(tropo));

}).listen(8000); // Listen on port 8000 for requests.