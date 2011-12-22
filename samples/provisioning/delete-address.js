/**
 * Deleting an Address
 * You can use the deleteApplicationAddress() method remove a phone number, IM account or token from an application.
 * 
 */

var tropowebapi = require('tropo-webapi');
var sys = require('sys');

var userid = '';
var password = '';
var applicationID = '';
var myNumber = '';

var p = new tropowebapi.TropoProvision(userid, password);

p.deleteApplicationAddress(applicationID, 'number', myNumber);

p.addListener('responseCode', function(code) {
	sys.puts('Response code: ' + code);
});

p.addListener('responseBody', function(body) {
	sys.puts('Response body: ' + body);
});