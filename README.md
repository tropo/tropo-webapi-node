Tropo WebAPI Node.js Library
============================

A [Node.js](http://nodejs.org/ "Node.js") module for the [Tropo WebAPI](https://www.tropo.com/docs/webapi/ "Tropo WebAPI"). 

Installation
============

To get started you will first need to have Node.js installed. Howtonode has a good write-up on [installing Node.js on Windows, Ubuntu and OSX](http://howtonode.org/how-to-install-nodejs "Installing Node.js"). 


If you have Node.js installed, and are using the Node Package Manager (npm), just do:

~$ npm install tropo-webapi -g

If you install with npm, then you can reference the tropo Node library in your node.js scripts like this:

<pre>
require('tropo-webapi');
</pre>

If you do not have npm installed, then you will then want to create a directory for your project, you may want to use a convention like this:

<pre>
	./project
	|-lib
	|-public
	|--css
	|--js
	|-vendor
</pre>

Add this declaration to your server.js starting file

<pre>
	var tropowebapi = require('tropo-webapi');
</pre>

Running
-------

You may then run your script from within the project directory with:

<pre>
	node server.js
</pre>

Sample Usage
============

Generate a JSON Doc
-------------------

<pre>
	var tropowebapi = require('tropo-webapi');
	var sys = require('sys');

	var tropo = new tropowebapi.TropoWebAPI(); 

	tropo.say("Hello, World.");

	sys.puts(tropowebapi.TropoJSON(tropo));
</pre>

Respond to a Tropo WebAPI Session
---------------------------------

<pre>
	/**
	* A very simple node web server that will respond to requests
	* with the Tropo WebAPI JSON version of "Hello, World!" 
	*/

	var http = require('http');
	var tropowebapi = require('tropo-webapi');

	var server = http.createServer(function (request, response) {

		// Create a new instance of the TropoWebAPI object.
		var tropo = new tropowebapi.TropoWebAPI(); 
		tropo.say("Hello, World!");

		// Render out the JSON for Tropo to consume.
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(tropowebapi.TropoJSON(tropo));

	}).listen(8000); // Listen on port 8000 for requests.
</pre>

Samples
=======

You may run the included samples from within the tropo-webapi-node directory as follows:

<pre>
	node samples/hello-word-http.js
</pre>

We have also included several examples for the [Express.js](http://expressjs.com/ "Express.js") Node framework. This may be run from within the tropo-webapi-node library as follows:

<pre>
	node samples/express/hello-world.js
</pre>