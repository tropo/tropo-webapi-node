
/**
 * Updating an Application to Add a Number from the Pool
 * the updateApplicationAddress() method can be used to add a number from the pool of available Tropo numbers, 
 * based on a specified prefix.
 * 
 */

var tropowebapi = require('tropo-webapi');
var sys = require('sys');

var userid = '';
var password = '';
var applicationID = '';

var p = new tropowebapi.TropoProvision(userid, password);

p.updateApplicationAddress(applicationID, 'number', '1407', null, null, null, null, null, null, null);

p.addListener('responseCode', function(code) {
	sys.puts('Response code: ' + code);
});

p.addListener('responseBody', function(body) {
	sys.puts('Response body: ' + body);
});