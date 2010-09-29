A [Node.js](http://nodejs.org/ "Node.js") module for the [Tropo WebAPI](https://www.tropo.com/docs/webapi/ "Tropo WebAPI"). 

Sample usage:

<pre>
require('../lib/tropo-webapi');
var sys = require('sys');

var tropo = new TropoWebAPI();

tropo.say("Hello, World.");

sys.puts(TropoJSON(tropo));
</pre>
