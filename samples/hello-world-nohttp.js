/**
* A simple example demonstrating how to produce JSON for the 
* Tropo WebAPI. Execute by doing:
* ~$ node path/to/tropo-webapi-node/samples/sample-1.js 
*/

var tropowebapi = require('tropo-webapi');
var sys = require('sys');

// Create a new instance of the TropoWebAPI object.
var tropo = new tropowebapi.TropoWebAPI();

// Say something and then hangup. (Note, null values are excluded from rendered JSON.)
tropo.say("Hello, World.", null, null, true, "carmen");
tropo.hangup();

// Write out the rendered JSON.
sys.puts(tropowebapi.TropoJSON(tropo));  