/**
* Tropo action classes.
*
*/
Ask = function(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice) {
	this.choices = serializeProperty(choices);
	this.attempts = attempts;
	this.bargein = bargein;
	this.minConfidence = minConfidence;
	this.name = name;
	this.recognizer = recognizer;
	this.required = required;
	this.say = serializeProperty(say);
	this.timeout = timeout;
	this.voice = voice;	
};

Call = function(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout) {
	this.to = to;
	this.answerOnMedia = answerOnMedia;
	this.channel = channel;
	this.from = from;
	this.headers = serializeProperty(headers);
	this.name = name;
	this.network = network;
	this.recording = (typeof(recording) == 'Object') ? serializeProperty(recording) : recording;
	this.required = required;
	this.timeout = timeout;
};

Choices = function(value, mode, terminator) {
	this.value = value;
	this.mode = mode;
	this.terminator = terminator;
};

Conference = function(id, mute, name, playTones, required, terminator) {
	this.id = id;
	this.mute = mute;
	this.name = name;
	this.playTones = playTones;
	this.required = required;
	this.terminator = terminator;
};

Hangup = function() {};

Message = function(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice) {
	this.say = serializeProperty(say);
	this.to = to;
	this.answerOnMedia = answerOnMedia;
	this.channel = channel;
	this.from = from;
	this.name = name;
	this.network = network;
	this.required = required;
	this.timeout = timeout;
	this.voice = voice;
};

On = function(event, name, next, required, say) {
	this.event = event;
	this.name = name;
	this.next = next;
	this.required = required;
	this.say = serializeProperty(say);
};

Record = function(attempts, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username) {
	this.attempts = attempts;
	this.bargein = bargein;
	this.beep = beep;
	this.choices = serializeProperty(choices);
	this.format = format;
	this.maxSilence = maxSilence;
	this.maxTime = maxTime;
	this.method = method;
	this.minConfidence = minConfidence;
	this.name = name;
	this.required = required;
	this.say = serializeProperty(say);
	this.timeout = timeout;
	this.transcription = (typeof(transcription) == 'Object') ? serializeProperty(transcription) : transcription;
	this.url = url;
	this.password = password;
	this.username = username;
};

Redirect = function(to, name, required) {
	this.to = to;
	this.name = name;
	this.required = required;
};

Reject = function() {};

Result = function(json) {
	var result = JSON.parse(json);
	this.sessionId = result.result.sessionId;
	this.callId = result.result.callId;
	this.state = result.result.state;
	this.sessionDuration = result.result.sessionDuration;
	this.sequence = result.result.sequence;
	this.complete = result.result.complete;
	this.error = result.result.error;
	this.actions = result.result.actions;		
	this.name = result.result.actions.name;
	this.attempts = result.result.actions.attempts;
	this.disposition = result.result.actions.disposition;
	this.confidence = result.result.actions.confidence;
	this.interpretation = result.result.actions.interpretation;
	this.utterance = result.result.actions.utterance;
	this.value = result.result.actions.value;
	this.concept = result.result.actions.concept;
	
	return this;
};

Say = function(value, as, name, required, voice) {
    this.value = value;
    this.as = as;
    this.name = name;
    this.required = required;
    this.voice = voice;
};

//TODO: Complete Session object.
Session = function(json) {
	var session = JSON.parse(json);
	this.id = session.session.id;
	this.accountId = session.session.accountId;
	this.timestamp = session.session.timestamp;
	this.userType = session.session.userType;
	this.initialText = session.session.initialText;
	this.to;
	this.from;
	this.headers;
	this.parameters;
	
	return this;
};

startRecording = function(format, method, url, username, password) {
	this.format = format;
	this.method = method;
	this.url = url;
	this.username = username ;
	this.password = password;
};

stopRecording = function() {};

Transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout) {
	this.to = to;
	this.answerOnMedia = answerOnMedia;
	this.choices = serializeProperty(choices);
	this.from = from;
	this.headers = serializeProperty(headers);
	this.name = name;
	this.on = (typeof(on) == 'Object') ? serializeProperty(on) : on;
	this.required = required;
	this.terminator = terminator;
	this.timeout = timeout;
};

// Helper method that serializes properties of Tropo action objects..
function serializeProperty(object) {
	return JSON.stringify(object, replaceNull);
}

// Helper method to remove null values from rendered JSON.
function replaceNull (key, value) {
    if (value === null) {
        return undefined;
   }
    return value;
};

exports.serializeProperty = serializeProperty;
exports.Ask = Ask;
exports.Call = Call;
exports.Choices = Choices;
exports.Conference = Conference;
exports.Hangup = Hangup;
exports.Message = Message;
exports.On = On;
exports.Record = Record;
exports.Redirect = Redirect;
exports.Reject = Reject;
exports.Result = Result;
exports.Say = Say;
exports.Session = Session;
exports.startRecording = startRecording;
exports.stopRecording = stopRecording;
exports.Transfer = Transfer;
exports.replaceNull = replaceNull;