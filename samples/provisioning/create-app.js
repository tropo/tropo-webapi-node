/**
 * Creating a New Application
 * Use the createApplication() method to add a brand new application. 
 * You can define a voice and messaging URL in the Request Body, but this 
 * method won't assign any addresses. You'll need to update the
 * application once it's created to add a phone number or IM account.
 * 
 */

var tropowebapi = require('tropo-webapi');
var sys = require('sys');

var userid = '';
var password = '';
var name = 'My Awesome Node App';
var voiceURL = 'http://somefakehost.com/tropo/app.json';
var messagingURL = 'http://somefakehost.com/tropo/app.json';
var platform = 'webapi';
var partition = 'staging';

var p = new tropowebapi.TropoProvision(userid, password);

p.createApplication(name, voiceURL, messagingURL, platform, partition);

p.addListener('responseCode', function(code) {
	sys.puts('Response code: ' + code);
});

p.addListener('responseBody', function(body) {
	sys.puts('Response body: ' + body);
});

