/**
* A simple application showing how to use simple routing logic.<b> 
* A more simplistic version of what can be accomplised with frameworks 
* like Express.
*/


var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {  
  
  // Reject the request if not POST
  if(request.method != 'POST') {
  	response.writeHead(500);
  	response.end();
  }
  
  else {
  
	  // Get the pathname for the current request.
	  var pathname = require('url').parse(request.url).pathname;
	
	  // Add a listener for the data event (incoming data from the HTTP request)
	  request.addListener('data', function(data){
	    json = data.toString();
	  });
	    
	  // Add a listener for the EOF event on the incoming stream.
	  request.addListener('end', function() {
	    
	    // Create a new instance of the TropoWebAPI object.
	    var tropo = new tropowebapi.TropoWebAPI();
	
	    if(pathname == '/') {
	    
	        // Create a new instance of the Session object and give it the JSON delivered from Tropo.
	    	var session = Session(json);
	    	
	    	tropo.say("Welcome to my Tropo Web API node demo for " + session.userType + ".");
	
			// Demonstrates how to use the base Tropo action classes.
			var say = new Say("Please enter your 5 digit zip code.");
			var choices = new Choices("[5 DIGITS]");
		
			// Action classes can be passes as parameters to TropoWebAPI class methods.
			tropo.ask(choices, 3, false, null, "foo", null, true, say, 5, null);
			tropo.on("continue", null, '/answer', true);
			
	    }
	    
	    if(pathname == '/answer') {
	    
	        // Create a new instance of the Session object and give it the JSON delivered from Tropo.
	    	var result = Result(json);
	    	zip = result.interpretation;    	
	    	tropo.say("Your zip code is " + zip + ".");
	    	tropo.hangup();
	    
	    }
	  
	    // Render out the JSON for Tropo to consume.
	    response.writeHead(200, {'Content-Type': 'application/json'});   
	    response.end(tropowebapi.TropoJSON(tropo));
	
	  })  
  }  

}).listen(8000);
