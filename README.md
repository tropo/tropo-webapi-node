A Node.js module for the Tropo WebAPI (https://www.tropo.com/docs/webapi/). 

Very early yet, still lots of work to do.

Sample useage:

<pre>
require('../lib/tropo-webapi');
var sys = require('sys');

var tropo = new TropoWebAPI();

tropo.say("Hello, World.");

sys.puts(TropoJSON(tropo));
</pre>
