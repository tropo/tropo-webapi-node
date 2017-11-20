/**
* Tropo action classes.
*
*/
Ask = function(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout, allowSignals) {
    this.choices = (say.event !== null) ? choices : serializeProperty(choices);
    this.attempts = attempts;
    this.bargein = bargein;
    this.minConfidence = minConfidence;
    this.name = name;
    this.recognizer = recognizer;
    this.required = required;
    this.say = say;
    this.timeout = timeout;
    this.voice = voice;
    this.interdigitTimeout = interdigitTimeout;
    this.sensitivity = sensitivity;
    this.speechCompleteTimeout = speechCompleteTimeout;
    this.speechIncompleteTimeout = speechIncompleteTimeout;
    this.allowSignals = allowSignals;
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
};

LeavePrompt = function(value, voice){
    this.value = value;
    this.voice = voice;
};

MachineDetection = function(introduction, voice){
    this.introduction = introduction;
    this.voice = voice;
};

Message = function(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice, promptLogSecurity) {
    if (say == null) {
        throw new Error("Missing required property: 'say'");
    }

    if (to == null) {
        throw new Error("Missing required property: 'to'");
    }

    if (name == null) {
        throw new Error("Missing required property: 'name'");
    }

    if (say instanceof Say) {
        this.say = say;
    } else if (Object.prototype.toString.call(say) === "[object String]") {
        if (say.length > 0) {
            this.say = new Say(say);
        } else {
            throw new Error("Required property: 'say' must be a instance of Say or a valid string");
        }
    } else {
        throw new Error("Required property: 'say' must be a instance of Say or a valid string");
    }
    
    if (Object.prototype.toString.call(to) === "[object String]") {
        if (to.length > 0) {
            this.to = to;
        } else {
            throw new Error("Property: 'to' must be a valid string or an valid array of strings");
        }
    } else if (Object.prototype.toString.call(to) === '[object Array]') {
        if (to.length > 0) {
            for (var i = 0; i < to.length; i++) {
                if (Object.prototype.toString.call(to[i]) === '[object String]') {
                    if (to[i].length == 0) {
                        throw new Error("Property: 'to' must be a valid string or an valid array of strings");
                    }
                } else {
                    throw new Error("Property: 'to' must be a valid string or an valid array of strings");
                }
            }
            this.to = to;
        } else {
            throw new Error("Property: 'to' must be a valid string or an valid array of strings");
        }
    } else {
        throw new Error("Property: 'to' must be a valid string or an valid array of strings");
    }

    if (Object.prototype.toString.call(name) === '[object String]') {
        if (name.length > 0) {
            this.name = name;
        } else {
            throw new Error("Required property: 'name' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'name' must be a valid string");
    }

    if (answerOnMedia == null) {
        this.answerOnMedia = answerOnMedia;
    } else {
        if (Object.prototype.toString.call(answerOnMedia) === '[object Boolean]') {
            this.answerOnMedia = answerOnMedia;
        } else {
            throw new Error("Property: 'answerOnMedia' must be a Boolean");
        }
    }
    if (channel == null) {
        this.channel = channel;
    } else {
        if (Object.prototype.toString.call(channel) === '[object String]') {
            if (channel.length > 0) {
                this.channel = channel;
            } else {
                throw new Error("Property: 'channel' must be a valid string");
            }
        } else {
            throw new Error("Property: 'channel' must be a valid string");
        }
    }
    if (from == null) {
        this.from = from;
    } else {
        if (Object.prototype.toString.call(from) === '[object String]') {
            if (from.length > 0) {
                this.from = from;
            } else {
                throw new Error("Property: 'from' must be a valid string");
            }
        } else {
            throw new Error("Property: 'from' must be a valid string");
        }
    }
    if (network == null) {
        this.network = network;
    } else {
        if (Object.prototype.toString.call(network) === '[object String]') {
            if (network.length > 0) {
                this.network = network;
            } else {
                throw new Error("Property: 'network' must be a valid string");
            }
        } else {
            throw new Error("Property: 'network' must be a valid string");
        }
    }
    if (required == null) {
        this.required = required;
    } else {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }
    if (timeout == null) {
        this.timeout = timeout;
    } else {
        if (Object.prototype.toString.call(timeout) === '[object Number]') {
            this.timeout = timeout;
        } else {
            throw new Error("Property: 'timeout' must be a number");
        }
    }
    if (voice == null) {
        this.voice = voice;
    } else {
        if (Object.prototype.toString.call(voice) === '[object String]') {
            if (voice.length > 0) {
                this.voice = voice;
            } else {
                throw new Error("Property: 'voice' must be a valid string");
            }
        } else {
            throw new Error("Property: 'voice' must be a valid string");
        }
    }
    if (promptLogSecurity == null) {
        this.promptLogSecurity = promptLogSecurity;
    } else {
        if (Object.prototype.toString.call(promptLogSecurity) === '[object String]') {
            this.promptLogSecurity = promptLogSecurity;
        } else {
            throw new Error("Property: 'promptLogSecurity' must be a string");
        }
    }
};

On = function(event, name, next, required, say, ask, message, wait) {
    this.event = event;
    this.name = name;
    this.next = next;
    this.required = required;
    this.say = say;
    this.ask = ask;
    this.message = message;
    this.wait = wait;
};

Record = function(attempts, asyncUpload, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout) {
    this.attempts = attempts;
	this.asyncUpload = asyncUpload;
    this.bargein = bargein;
    this.beep = beep;
    this.choices = choices;
    this.format = format;
    this.maxSilence = maxSilence;
    this.maxTime = maxTime;
    this.method = method;
    this.minConfidence = minConfidence;
    this.name = name;
    this.required = required;
    this.say = say;
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
    this.calledID = result.result.calledID;
    this.connectedDuration = result.result.connectedDuration;
    this.actions = result.result.actions;
    this.name = result.result.actions.name;
    this.attempts = result.result.actions.attempts;
    this.disposition = result.result.actions.disposition;
    this.confidence = result.result.actions.confidence;
    this.interpretation = result.result.actions.interpretation;
    this.utterance = result.result.actions.utterance;
    this.value = result.result.actions.value;
    this.concept = result.result.actions.concept;
    this.xml = result.result.actions.xml;


    return this;
};

Say = function(value, as, event, name, required, voice, allowSignals, promptLogSecurity) {
    if (value == null) {
        throw new Error("Missing required property: 'value'");
    }
    if (Object.prototype.toString.call(value) === '[object String]') {
        if (value.length == 0) {
            throw new Error("Required property: 'value' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'value' must be a valid string");
    }
    if(event != null){
        var say = new Array();
        for (var i=0;i<event.length;i++){
            say[i] = event[i];
        }
        say[event.length] = {"value":value};
        return say;
    }else{
        this.value = value;

        if (as == null) {
            this.as = as;
        } else {
            if (Object.prototype.toString.call(as) === '[object String]') {
                if (as.length > 0) {
                    this.as = as;
                } else {
                    throw new Error("Property: 'as' must be a valid string");
                }
            } else {
                throw new Error("Property: 'as' must be a valid string");
            }
        }
        if (name == null) {
            this.name = name;
        } else {
            if (Object.prototype.toString.call(name) === '[object String]') {
                if (name.length > 0) {
                    this.name = name;
                } else {
                    throw new Error("Property: 'name' must be a valid string");
                }
            } else {
                throw new Error("Property: 'name' must be a valid string");
            }
        }
        if (required == null) {
            this.required = required;
        } else {
            if (Object.prototype.toString.call(required) === '[object Boolean]') {
                this.required = required;
            } else {
                throw new Error("Property: 'required' must be a Boolean");
            }
        }
        if (voice == null) {
            this.voice = voice;
        } else {
            if (Object.prototype.toString.call(voice) === '[object String]') {
                if (voice.length > 0) {
                    this.voice = voice;
                } else {
                    throw new Error("Property: 'voice' must be a valid string");
                }
            } else {
                throw new Error("Property: 'voice' must be a valid string");
            }
        }
        if (allowSignals == null) {
            this.allowSignals = allowSignals;
        } else {
            if (Object.prototype.toString.call(allowSignals) === '[object String]') {
                this.allowSignals = allowSignals;
            } else if (Object.prototype.toString.call(allowSignals) === '[object Array]') {
                if (allowSignals.length > 0) {
                    for (var i = 0; i < allowSignals.length; i++) {
                        if (Object.prototype.toString.call(allowSignals[i]) === '[object String]') {
                        } else {
                            throw new Error("Property: 'allowSignals' must be a string or an array of strings");
                        }
                    }
                    this.allowSignals = allowSignals;
                } else {
                    throw new Error("Property: 'allowSignals' must be a string or an array of strings");
                }
            } else {
                throw new Error("Property: 'allowSignals' must be a string or an array of strings");
            }
        }
        if (promptLogSecurity == null) {
            this.promptLogSecurity = promptLogSecurity;
        } else {
            if (Object.prototype.toString.call(promptLogSecurity) === '[object String]') {
                this.promptLogSecurity = promptLogSecurity;
            } else {
                throw new Error("Property: 'promptLogSecurity' must be a string");
            }
        }
        return this;
    }
};

//TODO: Complete Session object.
Session = function(json) {
    var session = JSON.parse(json);
    this.id = session.session.id;
    this.accountId = session.session.accountId;
    this.timestamp = session.session.timestamp;
    this.userType = session.session.userType;
    this.initialText = session.session.initialText;
    this.callId = session.session.callId
    this.to;
    this.from;
    this.headers;
    this.parameters;

    return this;
};

StartRecording = function(asyncUpload, format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI) {
	this.asyncUpload = asyncUpload;
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

Transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat, machineDetection, playTones, voice) {
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
    this.playTones = playTones;
    this.voice = voice;
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
