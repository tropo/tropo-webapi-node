/**
 * Updating an Application to Add an AIM Address
 * The updateApplicationAddress() method can be used to add an AIM account to your application. 
 * The same method can be used to add YAHOO, MSN, JABBER, GTALK and SKYPE.
 * 
 */

var tropowebapi = require('tropo-webapi');
var sys = require('sys');

var userid = '';
var password = '';
var applicationID = '';

var p = new tropowebapi.TropoProvision(userid, password);

p.updateApplicationAddress(applicationID, 'aim', null, null, null, null, null, 'AIMUser01', 'password', null);

p.addListener('responseCode', function(code) {
	sys.puts('Response code: ' + code);
});

p.addListener('responseBody', function(body) {
	sys.puts('Response body: ' + body);
});