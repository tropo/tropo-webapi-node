/**
* A very simple node web server that will respond to requests
* with the Tropo WebAPI JSON version of "Hello, World!" 
*/

var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {
	
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	tropo.say("Hello, World!");
	
	// Render out the JSON for Tropo to consume.
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(tropowebapi.TropoJSON(tropo));

}).listen(8000); // Listen on port 8000 for requests.