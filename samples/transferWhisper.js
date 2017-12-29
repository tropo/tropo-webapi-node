var express = require('express');
var app = express();
var tropowebapi = require('tropo-webapi');
var bodyParser = require('body-parser')
 
// Required to process the HTTP body.
// req.body has the Object while req.rawBody has the JSON string.
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res) {

    console.log('In the first resource');
    var tropo = new tropowebapi.TropoWebAPI();
    console.log('1');

    var say = new Say("Press 1 to accept this call or any other number to reject");
    var choices = new Choices("1", "dtmf", null);

    var whisper = new Array();
    console.log('3');
    // 
    var ask = new Ask(choices, null, null, null, "color", null, null, say, 60, null);
    whisper[0] = new On("connect", null, null, null, null, ask, null, null);
    console.log('4');
           
     var say = new Say("You are now being connected");
     whisper[1]= new On("connect", null, null, null, say, null, null, null);
     console.log('5');
       
    tropo.say("Please hold while you are being transferred");
    tropo.transfer("+14071234321", null, null, null, null, "foo", whisper, true, "*", null, null, null, null); 
    console.log('6');
    
    var incompleteSay = new Say("You are now being disconnected");
    tropo.on("incomplete", null, "/hangup", null, incompleteSay);    

    
    res.send(tropowebapi.TropoJSON(tropo));


});
app.post('/hangup', function(req, res){
    var tropo = new tropowebapi.TropoWebAPI();
    tropo.hangup();
    res.send(tropowebapi.TropoJSON(tropo));
});
app.listen(8000);