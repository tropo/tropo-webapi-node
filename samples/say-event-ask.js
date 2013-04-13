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
	
	//Create event objects
	var e1 = {"value":"Sorry, I did not hear anything.","event":"timeout"};
    var e2 = {"value":"Sorry, that was not a valid option.","event":"nomatch:1"};
    var e3 = {"value":"Nope, still not a valid response","event":"nomatch:2"};
    
    //Create an array of all events
    var e = new Array(e1,e2,e3);
       
	// Demonstrates how to use the base Tropo action classes.
	var say = new Say("Please enter your 5 digit zip code.", null, e, null, null, null);
	var choices = new Choices("[5 DIGITS]");
	
	// Action classes can be passes as parameters to TropoWebAPI class methods.
	tropo.ask(choices, 3, false, null, "foo", null, true, say, 5, null);
	tropo.on("continue", null, "http://somefakehost.com:8000/", true);
	
	// Render out the JSON for Tropo to consume.
	response.writeHead(200, {'Content-Type': 'application/json'}); 
	response.send(tropowebapi.TropoJSON(tropo));

}).listen(8000); // Listen on port 8000 for requests.