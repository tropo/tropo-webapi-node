/**
* Tropo action classes.
*
*/
Ask = function(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout) {
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

Call = function(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals, machineDetection) {
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
    this.machineDetection = machineDetection;
};

Choices = function(value, mode, terminator) {
    this.value = value;
    this.mode = mode;
    this.terminator = terminator;
};

Conference = function(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout, joinPrompt, leavePrompt) {
    this.id = id;
    this.mute = mute;
    this.name = name;
    this.playTones = playTones;
    this.required = required;
    this.terminator = terminator;
    this.allowSignals = allowSignals;
    this.interdigitTimeout = interdigitTimeout;
    this.joinPrompt = joinPrompt;
    this.leavePrompt = leavePrompt;
};

Hangup = function() {};

JoinPrompt = function(value, voice){
    this.value = value;
    this.voice = voice;
}

LeavePrompt = function(value, voice){
    this.value = value;
    this.voice = voice;
}

MachineDetection = function(introduction, voice){
    this.introduction = introduction;
    this.voice = voice;
}

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

On = function(event, name, next, required, say, ask, message, wait) {
    this.event = event;
    this.name = name;
    this.next = next;
    this.required = required;
    this.say = (typeof(say) == 'Object') ? serializeProperty(say) : say;
    this.ask = ask;
    this.message = message;
    this.wait = wait;    
};

Record = function(attempts, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout) {
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
    this.userType = result.result.userType;
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

Say = function(value, as, event, name, required, voice, allowSignals) {
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
Session = function(json) {
    var session = JSON.parse(json);
    this.id = session.session.id;
    this.accountId = session.session.accountId;
    this.timestamp = session.session.timestamp;
    this.initialText = session.session.initialText;
    this.to;
    this.from;
    this.headers;
    this.parameters;

    return this;
};

StartRecording = function(format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI) {
    this.format = format;
    this.method = method;
    this.url = url;
    this.username = username ;
    this.password = password;
    this.transcriptionID = transcriptionID;
    this.transcriptionEmailFormat = transcriptionEmailFormat;
    this.transcriptionOutURI = transcriptionOutURI;
};

StopRecording = function() {};

Transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat, machineDetection) {
    this.to = to;
    this.answerOnMedia = answerOnMedia;
    this.choices = serializeProperty(choices);
    this.from = from;
    this.headers = serializeProperty(headers);
    this.name = name;
    if(typeof(on) == "Array"){
        this.on = "";
        var comma = "";
        for (var i=0;i<on.length;i++){
            this.on += comma + on[i];
            comma = ",";
        }
        
    }else{
        this.on = (typeof(on) == 'Object') ? serializeProperty(on) : on;
    }
    this.required = required;
    this.terminator = terminator;
    this.timeout = timeout;
    this.allowSignals = allowSignals;
    this.interdigitTimeout = interdigitTimeout;
    this.ringRepeat = ringRepeat;
    this.machineDetection = machineDetection;
};

Wait = function(milliseconds, allowSignals){
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
exports.JoinPrompt = JoinPrompt;
exports.LeavePrompt = LeavePrompt;
exports.MachineDetection = MachineDetection;
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