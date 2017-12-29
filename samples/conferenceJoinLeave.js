var http = require('http');
var tropo_webapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {  
  
  request.addListener('data', function(data){
    json = data.toString();
  });
    
  request.addListener('end', function() {

	var session = JSON.parse(json);
	var tropo = new TropoWebAPI();
	var callerID = session.session.from.id;
	
    var join = new JoinPrompt("Please welcome " + callerID + " to the party!", null);
    var leave = new LeavePrompt(callerID + " has just decided to depart.", null);
    
    tropo.conference("1234", false, null, null, true, null, null, null, join, leave);
    
    response.end(TropoJSON(tropo));
});

}).listen(8000); 
console.log('Server running on port :8000');