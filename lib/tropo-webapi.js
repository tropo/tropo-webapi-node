var base = require('./base');

/**
* Primary Tropo WebAPI class and prototype methods.
*
*/
TropoWebAPI = function() {
    this.tropo = new Array();
};

TropoWebAPI.prototype.ask = function(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout) {
    var ask = new base.Ask(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout);
    this.tropo.push(serializeObject("ask", ask));
};

TropoWebAPI.prototype.call = function(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals) {
    var call = new base.Call(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals);
    this.tropo.push(serializeObject("call", call));
};

TropoWebAPI.prototype.conference = function(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout) {
    var conference = new base.Conference(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout);
    this.tropo.push(serializeObject("conference", conference));
};

TropoWebAPI.prototype.hangup = function() {
    var hangup = new base.Hangup();
    this.tropo.push(serializeObject("hangup", hangup));
};

TropoWebAPI.prototype.message = function(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice) {
    var message = new base.Message(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice);
    this.tropo.push(serializeObject("message", message));
};

TropoWebAPI.prototype.on = function(event, name, next, required, say) {
    var on = new base.On(event, name, next, required, say);
    this.tropo.push(serializeObject("on", on));
};

TropoWebAPI.prototype.record = function(attempts, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout) {
    var record = new base.Record(attempts, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout);
    this.tropo.push(serializeObject("record", record));
};

TropoWebAPI.prototype.redirect = function(to, name, required) {
    var redirect = new base.Redirect(to, name, required);
    this.tropo.push(serializeObject("redirect", redirect));
};

TropoWebAPI.prototype.reject = function() {
    var reject = new base.Reject();
    this.tropo.push(serializeObject("reject", reject));
};

TropoWebAPI.prototype.say = function(value, as, event, name, required, voice, allowSignals) {
    var say = new base.Say(value, as, event, name, required, voice, allowSignals);
    this.tropo.push(serializeObject("say", say));
};

TropoWebAPI.prototype.startRecording = function(format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI) {
    var startRecording = new base.StartRecording(format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI);
    this.tropo.push(serializeObject("startRecording", startRecording));
};

TropoWebAPI.prototype.stopRecording = function() {
    var stopRecording = new base.StopRecording();
    this.tropo.push(serializeObject("stopRecording", stopRecording));
};

TropoWebAPI.prototype.transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat) {
    var transfer = new base.Transfer(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat);
    this.tropo.push(serializeObject("transfer", transfer));
};

TropoWebAPI.prototype.wait = function(milliseconds, allowSignals){
    var wait = new base.Wait(milliseconds, allowSignals);
    this.tropo.push(serializeObject("wait", wait));
};

exports.TropoWebAPI = TropoWebAPI;

/**
* Helper class to render JSON for Tropo WebAPI.
*
*/
TropoJSON = function(object) {
    return JSON.stringify(object).replace(/\\/g, "").replace(/"{/g, "{").replace(/}"/g, "}");
};
exports.TropoJSON = TropoJSON;

//TODO: Complete header method.
Headers = function() {

};
exports.Headers = Headers;

// Helper method that serializes objects that are properties of the primary Tropo object.
function serializeObject(name, object) {
    return "{ \"" + name + "\":" + JSON.stringify(object, base.replaceNull) + "}";
}


