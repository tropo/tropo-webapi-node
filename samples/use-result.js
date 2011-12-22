/**
* A very simple node web server that demonstrates how to use
* the Tropo Result object.
*/


var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {  

  // Get the pathname for the current request.
  var pathname = require('url').parse(request.url).pathname;
  
  // Add a listener for the data event (incoming data from the HTTP request)
  request.addListener('data', function(data){
    json = data.toString();
  });
    
  // Add a listener for the EOF event on the incoming stream.
  request.addListener('end', function() {
  
  	 try {
  	 	
  	 	 // Create a new instance of the TropoWebAPI object.
		 var tropo = new tropowebapi.TropoWebAPI(); 
	      
	     // The path for the first step in the application flow (ask the caller for input). 
	     if(pathname == '/') {
	     
	     	var say = new Say("Please enter a number one through 5.");
			var choices = new Choices("1,2,3,4,5");
			tropo.ask(choices, 3, false, null, "foo", null, true, say, 5, null);
			tropo.on("continue", null, '/selection', true);
			response.writeHead(200, {'Content-Type': 'application/json'});   
		    response.end(tropowebapi.TropoJSON(tropo));
	     
	     }
	     
	     // The second step in the application flow - input is submitted via Result JSON delivered from Tropo.
	     if(pathname == '/selection') {
	     
	     	// Create a new instance of the Result object and give it the JSON delivered from Tropo.
	    	var result = Result(json);
		    tropo.say("Your selection was, " +  result.interpretation + ". Goodbye.");
		    tropo.hangup();
		    response.writeHead(200, {'Content-Type': 'application/json'});   
		    response.end(tropowebapi.TropoJSON(tropo));
	     
	     }
  	 }
  	 
  	 catch(e) {
  	 	response.writeHead(501, {'Content-Type': "text/plain"});
      	//sys.log(e.message);
      	response.end(e.message + "");
  	 }
  })  

}).listen(8000); // Listen on port 8000 for requests.