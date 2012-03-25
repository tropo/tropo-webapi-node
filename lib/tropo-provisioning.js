var EventEmitter = require('events').EventEmitter;
var https = require('https');
var base = require('./base');

var provisioningUrlHost = 'api.tropo.com';
var provisioningUrlPath = '/v1/';

TropoProvision = function(userid, password) {
	this.userid = userid;
	this.password = password;
};

TropoProvision.prototype = new EventEmitter;

TropoProvision.prototype.createApplication = function(name, voiceUrl, messagingUrl, platform, partition) {
	payload = base.serializeProperty(new Application(null, name, voiceUrl, messagingUrl, platform, partition));
	var path = provisioningUrlPath + 'applications';
	this.makeApiCall('POST', provisioningUrlHost, path, payload);
};

TropoProvision.prototype.updateApplicationAddress = function(applicationID, type, prefix, number, city, state, channel, username, password, token) {
	payload = base.serializeProperty(new Address(type, prefix, number, city, state, channel, username, password, token));
	var path = provisioningUrlPath + 'applications/' + applicationID + '/addresses';
	return this.makeApiCall('POST', provisioningUrlHost, path, payload);
};

TropoProvision.prototype.updateApplicationProperty = function(applicationID, href, name, voiceUrl, messagingUrl, platform, partition) {
	payload = base.serializeProperty(new Application(null, href, name, voiceUrl, messagingUrl, platform, partition));
	var path = provisioningUrlPath + 'applications/' + applicationID;
	return this.makeApiCall('PUT', provisioningUrlHost, path, payload);
};

TropoProvision.prototype.deleteApplication = function(applicationID) {
	var path = provisioningUrlPath + 'applications/' + applicationID;
	return this.makeApiCall('DELETE', provisioningUrlHost, path, null);
};

TropoProvision.prototype.deleteApplicationAddress = function(applicationID, type, address) {
	var path = provisioningUrlPath + 'applications/' + applicationID + '/addresses/' + type + '/' + address;
	return this.makeApiCall('DELETE', provisioningUrlHost, path, null);
};

TropoProvision.prototype.viewApplications = function() {
	var path = provisioningUrlPath + 'applications';
	return this.makeApiCall('GET', provisioningUrlHost, path, null);
};

TropoProvision.prototype.viewSpecificApplication = function(applicationID) {
	var path = provisioningUrlPath + 'applications/' + applicationID;
	return this.makeApiCall('GET', provisioningUrlHost, path, null);	
};

TropoProvision.prototype.viewAddresses = function(applicationID, type, address) {
	var path = provisioningUrlPath + 'applications/' + applicationID + '/addresses';
	var validTypes = ['number', 'sip', 'aim', 'skype'];
	if ((type != null) && validTypes.indexOf(type) >= 0) {
		path += '/' + type;
		if(address != null) path += '/' + address;
	}
	return this.makeApiCall('GET', provisioningUrlHost, path, null);
};

TropoProvision.prototype.viewExchanges = function() {
	var path = provisioningUrlPath + 'exchanges';
	return this.makeApiCall('GET', provisioningUrlHost, path, null);
};

TropoProvision.prototype.viewAvailableAddresses = function(prefix) {
	var path = '/addresses?available&prefix='+prefix;
	return this.makeApiCall('GET', provisioningUrlHost, path, null);
};

TropoProvision.prototype.makeApiCall = function(method, host, path, payload) {
	
	var self = this;
	
	// Set up basic auth.
	var auth = 'Basic ' + new Buffer(this.userid + ':' + this.password).toString('base64');
	
	// Set up request headers.
	var payloadLength = payload === null ? 0 : payload.length;
	var headers =  {'host': host, 'Authorization': auth , 'Content-Length': payloadLength, 'Content-Type': 'application/json'};
	
	// Set up the HTTP client, set headers and stream the JSON body.
	var requestOptions = {
		hostname: host,
		port: 443,
		method: method,
		path: path,
		headers: headers
	};
	var request = https.request(requestOptions, function(response) {
		// Process the response.
		var data = '';
		self.emit('responseCode', response.statusCode);
		response.setEncoding('utf8');
		response.on('data', function(chunk) {
			data = data + chunk;
		});
		response.on('end', function() {
			self.emit('responseBody', data);
		});
	});
	if(payload) {
		request.write(payload);
	}
	request.end();
	
};

exports.TropoProvision = TropoProvision;

// Objects representing provisioning resources.
Application = function(href, name, voiceUrl, messagingUrl, platform, partition) {
	this.href = href;
	this.name = name;
	this.voiceUrl = voiceUrl;
	this.messagingUrl = messagingUrl;
	this.platform = platform;
	this.partition = partition;
	
};

Address = function(type, prefix, number, city, state, channel, username, password, token) {
	this.type = type;
	this.prefix = prefix;
	this.city = city;
	this.state = state;
	this.channel = channel;
	this.username = username;
	this.password = password;
	this.token = token;
};

Exchange = function(prefix, city, state, country) {
	this.prefix = prefix;
	this.city = city;
	this.state = state;
	this.country = country;
};

