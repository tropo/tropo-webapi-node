/**
* A very simple node web server that demonstrates how to use
* the Tropo Session object.
*/

var sys = require('sys');
var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {  
  
  // Add a listener for the data event (incoming data from the HTTP request)
  request.addListener('data', function(data){
    json = data.toString();
  });
    
  // Add a listener for the EOF event on the incoming stream.
  request.addListener('end', function() {
    
    try {
    
    	// Create a new instance of the Session object and give it the JSON delivered from Tropo.
	    var session = Session(json);
	    
	    // Create a new instance of the TropoWebAPI object.
	    var tropo = new tropowebapi.TropoWebAPI(); 
	    
	    // Build the response with the userType property of the session object.
	    tropo.say("Your user type is, " + session.userType);
	    tropo.say('Goodbye.');
	    tropo.hangup();
	    
	    // Render out the JSON for Tropo to consume.
	    response.writeHead(200, {'Content-Type': 'application/json'});   
	    response.end(tropowebapi.TropoJSON(tropo));
    
    }
    
    catch(e) {
    	response.writeHead(501, {'Content-Type': "text/plain"});
      	//sys.log(e.message);
      	response.end(e.message + "");
    }
    
  })  

}).listen(8000); // Listen on port 8000 for requests.
