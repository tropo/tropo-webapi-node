var EventEmitter = require('events').EventEmitter;
var sys = require('sys');
var http = require('http');

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
	
	var tropo = http.createClient(80, sessionUrlHost);
	var request = tropo.request('GET', path, {'host': sessionUrlHost});

	request.end();

	request.on('response', function (response) {
	  response.setEncoding('utf8');
	  self.emit('responseCode', response.statusCode);
	  response.addListener('data', function (chunk) {
		  this.responseBody =  chunk;
	  });
	  response.addListener('end', function() {
		  self.emit('responseBody', this.responseBody);
	  });
	});
	         
};

exports.TropoSession = TropoSession;