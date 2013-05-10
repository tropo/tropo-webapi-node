/**
* Tropo action classes.
*
*/
function Ask(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout) {
    this.choices = (say.event !== null) ? choices : serializeProperty(choices);
    this.attempts = attempts;
    this.bargein = bargein;
    this.minConfidence = minConfidence;
    this.name = name;
    this.recognizer = recognizer;
    this.required = required;
    this.say = (say.event !== null) ? say : serializeProperty(say);
    this.timeout = timeout;
    this.voice = voice;
    this.interdigitTimeout = interdigitTimeout;
    this.sensitivity = sensitivity;
    this.speechCompleteTimeout = speechCompleteTimeout;
    this.speechIncompleteTimeout = speechIncompleteTimeout;
};

function Call(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals) {
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
    this.allowSignals = allowSignals;
};

function Choices(value, mode, terminator) {
    this.value = value;
    this.mode = mode;
    this.terminator = terminator;
};

function Conference(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout) {
    this.id = id;
    this.mute = mute;
    this.name = name;
    this.playTones = playTones;
    this.required = required;
    this.terminator = terminator;
    this.allowSignals = allowSignals;
    this.interdigitTimeout = interdigitTimeout;
};

function Hangup() {};

function Message(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice) {
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

function On(event, name, next, required, say) {
    this.event = event;
    this.name = name;
    this.next = next;
    this.required = required;
    this.say = serializeProperty(say);
};

function Record(attempts, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout) {
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
    this.voice = voice;
    this.allowSignals = allowSignals;
    this.interdigitTimeout = interdigitTimeout;
};

function Redirect(to, name, required) {
    this.to = to;
    this.name = name;
    this.required = required;
};

function Reject() {};

function Result(json) {
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

function Say(value, as, event, name, required, voice, allowSignals) {
    if(event != null){
        var say = new Array();
        for (var i=0;i<event.length;i++){
            say[i] = event[i];
        }
        say[event.length] = {"value":value};
        return say;
    }else{
        this.value = value;
        this.as = as;
        this.name = name;
        this.required = required;
        this.voice = voice;
        this.allowSignals = allowSignals;
        return this;
    }
};

//TODO: Complete Session object.
function Session(json) {
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

function StartRecording(format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI) {
    this.format = format;
    this.method = method;
    this.url = url;
    this.username = username ;
    this.password = password;
    this.transcriptionID = transcriptionID;
    this.transcriptionEmailFormat = transcriptionEmailFormat;
    this.transcriptionOutURI = transcriptionOutURI;
};

function StopRecording() {};

function Transfer(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat) {
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
    this.allowSignals = allowSignals;
    this.interdigitTimeout = interdigitTimeout;
    this.ringRepeat = ringRepeat;
};

function Wait(milliseconds, allowSignals){
    this.milliseconds = milliseconds;
    this.allowSignals = allowSignals;
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
exports.StartRecording = StartRecording;
exports.StopRecording = StopRecording;
exports.Transfer = Transfer;
exports.replaceNull = replaceNull;
exports.Wait = Wait;