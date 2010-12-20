/**
 * Updating an Application to Add a Voice Token
 * The updateApplicationAddress() method can be used to add a voice token to your application; you can add a messaging token just by
 * changing the channel to "messaging" instead of "voice".
 * 
 */

require('../../lib/tropo-provisioning');
var sys = require('sys');

var userid = '';
var password = '';
var applicationID = '';

var p = new TropoProvision(userid, password);

p.updateApplicationAddress(applicationID, 'token', null, null, null, null, 'messaging', null, null, null);

p.addListener('responseCode', function(code) {
	sys.puts('Response code: ' + code);
});

p.addListener('responseBody', function(body) {
	sys.puts('Response body: ' + body);
});