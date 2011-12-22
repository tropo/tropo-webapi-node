/**
 * Deleting an Application
 * Use the deleteApplication() method to remove an application. This cannot be undone; once an application has been
 * deleted, it cannot be restored without recreating it from scratch.
 * 
 */

var tropowebapi = require('tropo-webapi');
var sys = require('sys');

var userid = '';
var password = '';
var applicationID = '';

var p = new tropowebapi.TropoProvision(userid, password);

p.deleteApplication(applicationID);

p.addListener('responseCode', function(code) {
	sys.puts('Response code: ' + code);
});

p.addListener('responseBody', function(body) {
	sys.puts('Response body: ' + body);
});