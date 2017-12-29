/**
 * A very simple node web server that will respond to requests
 *  with a transfer to a SIP or PSTN number.
 */

var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {
	
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI(); 
	
	tropo.say('Please hold while your call is transferred.');
	tropo.transfer('mheadd@sip2sip.info', false, null, null, {'x-caller-name' : 'Mark Headd'}, null, null, true, '#', 60.0);
	
	// Render out the JSON for Tropo to consume.
	response.writeHead(200, {'Content-Type': 'application/json'}); 
	response.end(tropowebapi.TropoJSON(tropo));
	
}).listen(8000); // Listen on port 8000 for requests.