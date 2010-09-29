/**
* A very simple node web server that demonstrates how to use
* the Tropo Result object.
*/


var http = require('http');
var tropo = require('../lib/tropo-webapi');

var server = http.createServer(function (request, response) {  

  // Add a listener for the data event (incoming data from the HTTP request)
  request.addListener('data', function(data){
    json = data.toString();
  });
    
  // Add a listener for the EOF event on the incoming stream.
  request.addListener('end', function() {
      
    // Create a new instance of the Session object and give it the JSON delivered from Tropo.
    var result = Result(json);
    
    // Create a new instance of the TropoWebAPI object.
    var tropo = new TropoWebAPI();
    
    // Build the response.
    tropo.say("Your select was, " +  result.interpretation);
    tropo.hangup();
    
    // Render out the JSON for Tropo to consume.
    response.writeHead(200, {'Content-Type': 'application/json'});   
    response.end(TropoJSON(tropo));

  })  

}).listen(8000); // Listen on port 8000 for requests.