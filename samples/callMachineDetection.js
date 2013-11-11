var express = require('express');
var app = express.createServer();
var sys = require('sys');
var tropowebapi = require('tropo-webapi');
 
// Required to process the HTTP body.
// req.body has the Object while req.rawBody has the JSON string.
app.configure(function(){
    app.use(express.bodyParser());
});

app.post('/', function(req, res) {

    var tropo = new tropowebapi.TropoWebAPI();
    
    mc = new MachineDetection("This is a test. Please hold while I determine if you are a Machine or Human. Processing. Finished. THank you for your patience.", "Victor")
    tropo.call("+14071234321", null, null, "14075559090", null, "call", null, null, true, 60, null, mc);
    tropo.on("continue", null, "/call", true);

    res.send(tropowebapi.TropoJSON(tropo));
});

app.post('/call', function(req, res){
	
    var tropo = new tropowebapi.TropoWebAPI();

    var userType = req.body['result']['userType'];
    tropo.say("You are a " + userType);

    res.send(tropowebapi.TropoJSON(tropo));
});