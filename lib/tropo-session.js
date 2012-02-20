var EventEmitter = require('events').EventEmitter;
var sys = require('sys');
var https = require('https');

var sessionUrlHost = 'api.tropo.com';
var sessionUrlPath = '/1.0/sessions?action=create&token=';

TropoSession = function() {
	this.responseBody;	
};

TropoSession.prototype = new EventEmitter;

TropoSession.prototype.makeApiCall =  function(token, parameters) {
	
	var self = this;
	
	var path = sessionUrlPath + token;
	
	for(item in parameters) {
		path += '&' + item + '=' + encodeURI(parameters[item]);
	}
	
	var requestOptions = {
		hostname: sessionUrlHost,
		port: 443,
		method: 'GET',
		path: path,
		headers: {'host': sessionUrlHost}
	};
	var request = https.request(requestOptions, function(response) {
		response.setEncoding('utf8');
		self.emit('responseCode', response.statusCode);
		response.addListener('data', function (chunk) {
			this.responseBody =  chunk;
		});
		response.addListener('end', function() {
			self.emit('responseBody', this.responseBody);
		});
	});

	request.end();
	         
};

exports.TropoSession = TropoSession;