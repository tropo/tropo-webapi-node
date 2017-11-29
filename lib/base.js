/**
* Tropo action classes.
*
*/
Ask = function(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout, allowSignals, promptLogSecurity, asrLogSecurity, maskTemplate) {

    if (choices == null) {
        throw new Error("Missing required property: 'choices'");
    }

    if (say == null) {
        throw new Error("Missing required property: 'say'");
    }

    if (choices instanceof Choices) {
        if (choices.value == null) {
            throw new Error("Required property: 'value' of 'choices' must a valid string.");
        } else {
            if (Object.prototype.toString.call(choices.value) === "[object String]") {
                if (choices.value.length > 0) {
                    this.choices = choices;
                } else {
                    throw new Error("Required property: 'value' of 'choices' must a valid string."); 
                }
            } else {
                throw new Error("Required property: 'value' of 'choices' must a valid string.");
            }
        }
    } else if (Object.prototype.toString.call(choices) === "[object String]") {
        if (choices.length > 0) {
            this.choices = new Choices(choices);
        } else {
            throw new Error("Required property: 'choices' must be a instance of Choices or a valid string");
        }
    } else {
        throw new Error("Required property: 'choices' must be a instance of Choices or a valid string");
    }

    if (say instanceof Say) {
        this.say = say;
    } else if (Object.prototype.toString.call(say) === "[object String]") {
        if (say.length > 0) {
            this.say = new Say(say);
        } else {
            throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
        }
    } else if (Object.prototype.toString.call(say) === '[object Array]') {
        if (say.length > 0) {
            for (var i = 0; i < say.length; i++) {
                if (Object.prototype.toString.call(say[i]) === '[object Object]') {
                    if (!((Object.prototype.toString.call(say[i].value) === "[object String]") && (say[i].value.length > 0))) {
                        throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
                    }
                } else {
                    throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
                }
            }
            this.say = say;
        } else {
            throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
        }
    } else {
        throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
    }

    if (attempts == null) {
        this.attempts = attempts;
    } else {
        if (Object.prototype.toString.call(attempts) === '[object Number]') {
            if (attempts % 1 === 0) {
                this.attempts = attempts;
            } else {
                throw new Error("Property: 'attempts' must be a integer");
            }
        } else {
            throw new Error("Property: 'attempts' must be a integer");
        }
    }
    
    if (bargein == null) {
        this.bargein = bargein;
    } else {
        if (Object.prototype.toString.call(bargein) === '[object Boolean]') {
            this.bargein = bargein;
        } else {
            throw new Error("Property: 'bargein' must be a Boolean");
        }
    }
    
    if (minConfidence == null) {
        this.minConfidence = minConfidence;
    } else {
        if (Object.prototype.toString.call(minConfidence) === '[object Number]') {
            if (minConfidence % 1 === 0) {
                this.minConfidence = minConfidence;
            } else {
                throw new Error("Property: 'minConfidence' must be a integer");
            }
        } else {
            throw new Error("Property: 'minConfidence' must be a integer");
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
    
    if (recognizer == null) {
        this.recognizer = recognizer;
    } else {
        if (Object.prototype.toString.call(recognizer) === '[object String]') {
            if (recognizer.length > 0) {
                this.recognizer = recognizer;
            } else {
                throw new Error("Property: 'recognizer' must be a valid string");
            }
        } else {
            throw new Error("Property: 'recognizer' must be a valid string");
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

    if (interdigitTimeout == null) {
        this.interdigitTimeout = interdigitTimeout;
    } else {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }
    
    if (sensitivity == null) {
        this.sensitivity = sensitivity;
    } else {
        if (Object.prototype.toString.call(sensitivity) === '[object Number]') {
            this.sensitivity = sensitivity;
        } else {
            throw new Error("Property: 'sensitivity' must be a number");
        }
    }
    
    if (speechCompleteTimeout == null) {
        this.speechCompleteTimeout = speechCompleteTimeout;
    } else {
        if (Object.prototype.toString.call(speechCompleteTimeout) === '[object Number]') {
            this.speechCompleteTimeout = speechCompleteTimeout;
        } else {
            throw new Error("Property: 'speechCompleteTimeout' must be a number");
        }
    }
    
    if (speechIncompleteTimeout == null) {
        this.speechIncompleteTimeout = speechIncompleteTimeout;
    } else {
        if (Object.prototype.toString.call(speechIncompleteTimeout) === '[object Number]') {
            this.speechIncompleteTimeout = speechIncompleteTimeout;
        } else {
            throw new Error("Property: 'speechIncompleteTimeout' must be a number");
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
    if (asrLogSecurity == null) {
        this.asrLogSecurity = asrLogSecurity;
    } else {
        if (Object.prototype.toString.call(asrLogSecurity) === '[object String]') {
            this.asrLogSecurity = asrLogSecurity;
        } else {
            throw new Error("Property: 'asrLogSecurity' must be a string");
        }
    }
    if (maskTemplate == null) {
        this.maskTemplate = maskTemplate;
    } else {
        if (Object.prototype.toString.call(maskTemplate) === '[object String]') {
            if (maskTemplate.length > 0) {
                this.maskTemplate = maskTemplate;
            } else {
                throw new Error("Property: 'maskTemplate' must be a valid string");
            }
        } else {
            throw new Error("Property: 'maskTemplate' must be a valid string");
        }
    }
};

Call = function(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals, machineDetection, voice, callbackUrl, promptLogSecurity, label) {

    if (to == null) {
        throw new Error("Missing required property: 'to'");
    }

    if (name == null) {
        throw new Error("Missing required property: 'name'");
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
    if (headers == null) {
        this.headers = headers;
    } else {
        if (Object.prototype.toString.call(headers) === '[object Object]') {
            this.headers = headers;
        } else {
            throw new Error("Property: 'headers' must be a object");
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
    //this.recording = (typeof(recording) == 'Object') ? serializeProperty(recording) : recording;
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
    if (machineDetection == null) {
        this.machineDetection = machineDetection;
    } else {
        if (machineDetection instanceof MachineDetection) {
            this.machineDetection = machineDetection;
        }else if (Object.prototype.toString.call(machineDetection) === '[object Boolean]') {
            this.machineDetection = machineDetection;
        } else {
            throw new Error("Property: 'machineDetection' must be a boolean or a instance of machineDetection");
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
    if (callbackUrl == null) {
        this.callbackUrl = callbackUrl;
    } else {
        if (Object.prototype.toString.call(callbackUrl) === '[object String]') {
            if (callbackUrl.length > 0) {
                this.callbackUrl = callbackUrl;
            } else {
                throw new Error("Property: 'callbackUrl' must be a valid string");
            }
        } else {
            throw new Error("Property: 'callbackUrl' must be a valid string");
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
    if (label == null) {
        this.label = label;
    } else {
        if (Object.prototype.toString.call(label) === '[object String]') {
            if (label.length > 0) {
                this.label = label;
            } else {
                throw new Error("Property: 'label' must be a valid string");
            }
        } else {
            throw new Error("Property: 'label' must be a valid string");
        }
    }
};

Choices = function(value, mode, terminator) {

    if (value == null) {
        this.value = value;
    } else {
        if (Object.prototype.toString.call(value) === '[object String]') {
            if (value.length > 0) {
                this.value = value;
            } else {
                throw new Error("Required property: 'value' must be a valid string");
            }
        } else {
            throw new Error("Required property: 'value' must be a valid string");
        }
    }

    if (mode == null) {
        this.mode = mode;
    } else {
        if (Object.prototype.toString.call(mode) === '[object String]') {
            if (mode.length > 0) {
                this.mode = mode;
            } else {
                throw new Error("Property: 'mode' must be a valid string");
            }
        } else {
            throw new Error("Property: 'mode' must be a valid string");
        }
    }
    
    if (terminator == null) {
        this.terminator = terminator;
    } else {
        if (Object.prototype.toString.call(terminator) === '[object String]') {
            if (terminator.length > 0) {
                this.terminator = terminator;
            } else {
                throw new Error("Property: 'terminator' must be a valid string");
            }
        } else {
            throw new Error("Property: 'terminator' must be a valid string");
        }
    }
};

Conference = function(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout, joinPrompt, leavePrompt, promptLogSecurity) {

    if (id == null) {
        throw new Error("Missing required property: 'id'");
    }

    if (name == null) {
        throw new Error("Missing required property: 'name'");
    }

    if (Object.prototype.toString.call(id) === '[object String]') {
        if (id.length > 0) {
            this.id = id;
        } else {
            throw new Error("Required property: 'id' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'id' must be a valid string");
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
	this.id = id;
	this.name = name;

	if (mute == null) {
        this.mute = mute;
    } else {
        if (Object.prototype.toString.call(mute) === '[object Boolean]') {
            this.mute = mute;
        } else {
            throw new Error("Property: 'mute' must be a Boolean");
        }
    }

    if (playTones == null) {
        this.playTones = playTones;
    } else {
        if (Object.prototype.toString.call(playTones) === '[object Boolean]') {
            this.playTones = playTones;
        } else {
            throw new Error("Property: 'playTones' must be a Boolean");
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

    if (terminator == null) {
        this.terminator = terminator;
    } else {
        if (Object.prototype.toString.call(terminator) === '[object String]') {
            if (terminator.length > 0) {
                this.terminator = terminator;
            } else {
                throw new Error("Property: 'terminator' must be a valid string");
            }
        } else {
            throw new Error("Property: 'terminator' must be a valid string");
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
    if (interdigitTimeout == null) {
        this.interdigitTimeout = interdigitTimeout;
    } else {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }

    if (joinPrompt == null) {
        this.joinPrompt = joinPrompt;
    } else {
        if (joinPrompt instanceof JoinPrompt) {
            this.joinPrompt = joinPrompt;
        }else if (Object.prototype.toString.call(joinPrompt) === '[object Boolean]') {
            this.joinPrompt = joinPrompt;
        } else {
            throw new Error("Property: 'joinPrompt' must be a boolean or a instance of JoinPrompt");
        }
    }

    if (leavePrompt == null) {
        this.leavePrompt = leavePrompt;
    } else {
        if (leavePrompt instanceof LeavePrompt) {
            this.leavePrompt = leavePrompt;
        }else if (Object.prototype.toString.call(leavePrompt) === '[object Boolean]') {
            this.leavePrompt = leavePrompt;
        } else {
            throw new Error("Property: 'leavePrompt' must be a boolean or a instance of LeavePrompt");
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

Hangup = function() {};

JoinPrompt = function(value, voice){
    if (value == null) {
        throw new Error("Missing required property: 'value'");
    }
    if (Object.prototype.toString.call(value) === '[object String]') {
        if (value.length > 0) {
            this.value = value;
        } else {
            throw new Error("Required property: 'value' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'value' must be a valid string");
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
};

LeavePrompt = function(value, voice){
    if (value == null) {
        throw new Error("Missing required property: 'value'");
    }
    if (Object.prototype.toString.call(value) === '[object String]') {
        if (value.length > 0) {
            this.value = value;
        } else {
            throw new Error("Required property: 'value' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'value' must be a valid string");
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
};

MachineDetection = function(introduction, voice){
    if (introduction == null) {
        throw new Error("Missing required property: 'introduction'");
    }
    if (Object.prototype.toString.call(introduction) === '[object String]') {
        if (introduction.length > 0) {
            this.introduction = introduction;
        } else {
            throw new Error("Required property: 'introduction' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'introduction' must be a valid string");
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

On = function(event, name, next, required, say, ask, message, wait, post) {
    if (event == null) {
        throw new Error("Missing required property: 'event'");
    }
    if (Object.prototype.toString.call(event) === '[object String]') {
        if (event.length == 0) {
            throw new Error("Required property: 'event' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'event' must be a valid string");
    }
    this.event = event;
    //this.name = name;
    
    if (next == null) {
        this.next = next;
    } else {
        if (Object.prototype.toString.call(next) === '[object String]') {
            if (next.length > 0) {
                this.next = next;
            } else {
                throw new Error("Property: 'next' must be a valid string");
            }
        } else {
            throw new Error("Property: 'next' must be a valid string");
        }
    }
    //this.required = required;
    
    if (say == null) {
        this.say = say;
    } else {
        if (say instanceof Say) {
            this.say = say;
        } else if (Object.prototype.toString.call(say) === "[object String]") {
            if (say.length > 0) {
                this.say = new Say(say);
            } else {
                throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
            }
        } else if (Object.prototype.toString.call(say) === '[object Array]') {
            if (say.length > 0) {
                for (var i = 0; i < say.length; i++) {
                    if (Object.prototype.toString.call(say[i]) === '[object Object]') {
                        if (!((Object.prototype.toString.call(say[i].value) === "[object String]") && (say[i].value.length > 0))) {
                            throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
                        }
                    } else {
                        throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
                    }
                }
                this.say = say;
            } else {
                throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
            }
        } else {
            throw new Error("Required property: 'say' must be a instance of Say, a valid string or a valid array of objects");
        }
    }
    
    if (ask == null) {
        this.ask = ask;
    } else {
        if (ask instanceof Ask) {
            this.ask = ask;
        } else {
            throw new Error("Property: 'ask' must be a instance of Ask");
        }
    }

    //this.message = message;
    //this.wait = wait;
    if (post == null) {
        this.post = post;
    } else {
        if (Object.prototype.toString.call(post) === '[object String]') {
            if (post.length > 0) {
                this.post = post;
            } else {
                throw new Error("Property: 'post' must be a valid string");
            }
        } else {
            throw new Error("Property: 'post' must be a valid string");
        }
    }
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
    var oJson;
    var result;
    try {
        oJson = JSON.parse(json);
    } catch (e) {
        return null;
    }
    if (oJson.result == null) {
        return null;
    } else {
        result = oJson.result;
    }

    this.sessionId = (result.sessionId != null) ? result.sessionId : null;
    this.callId = (result.callId != null) ? result.callId : null;
    this.state = (result.state != null) ? result.state : null;
    this.sessionDuration = (result.sessionDuration != null) ? result.sessionDuration : null;
    this.sequence = (result.sequence != null) ? result.sequence : null;
    this.complete = (result.complete != null) ? result.complete : null;
    this.error = (result.error != null) ? result.error : null;
    this.calledid = (result.calledid != null) ? result.calledid : null;
    this.userType = (result.userType != null) ? result.userType : null;
    this.actions = (result.actions != null) ? result.actions : null;

    if (Object.prototype.toString.call(actions) === '[object Object]') {
        this.connectedDuration = (actions.connectedDuration != null) ? actions.connectedDuration : null;
        this.name = (actions.name != null) ? actions.name : null;
        this.attempts = (actions.attempts != null) ? actions.attempts : null;
        this.disposition = (actions.disposition != null) ? actions.disposition : null;
        this.confidence = (actions.confidence != null) ? actions.confidence : null;
        this.interpretation = (actions.interpretation != null) ? actions.interpretation : null;
        this.utterance = (actions.utterance != null) ? actions.utterance : null;
        this.value = (actions.value != null) ? actions.value : null;
        this.concept = (actions.concept != null) ? actions.concept : null;
        this.xml = (actions.xml != null) ? actions.xml : null;
        this.uploadStatus = (actions.uploadStatus != null) ? actions.uploadStatus : null;
        this.duration = (actions.duration != null) ? actions.duration : null;
        this.url = (actions.url != null) ? actions.url : null;
        this.actionUserType = (actions.userType != null) ? actions.userType : null;
    } else if (Object.prototype.toString.call(actions) === '[object Array]') {
        this.connectedDuration = (actions[0].connectedDuration != null) ? actions[0].connectedDuration : null;
        this.name = (actions[0].name != null) ? actions[0].name : null;
        this.attempts = (actions[0].attempts != null) ? actions[0].attempts : null;
        this.disposition = (actions[0].disposition != null) ? actions[0].disposition : null;
        this.confidence = (actions[0].confidence != null) ? actions[0].confidence : null;
        this.interpretation = (actions[0].interpretation != null) ? actions[0].interpretation : null;
        this.utterance = (actions[0].utterance != null) ? actions[0].utterance : null;
        this.value = (actions[0].value != null) ? actions[0].value : null;
        this.concept = (actions[0].concept != null) ? actions[0].concept : null;
        this.xml = (actions[0].xml != null) ? actions[0].xml : null;
        this.uploadStatus = (actions[0].uploadStatus != null) ? actions[0].uploadStatus : null;
        this.duration = (actions[0].duration != null) ? actions[0].duration : null;
        this.url = (actions[0].url != null) ? actions[0].url : null;
        this.actionUserType = (actions[0].userType != null) ? actions[0].userType : null;
    } else {
        this.connectedDuration = null;
        this.name = null;
        this.attempts = null;
        this.disposition = null;
        this.confidence = null;
        this.interpretation = null;
        this.utterance = null;
        this.value = null;
        this.concept = null;
        this.xml = null;
        this.uploadStatus = null;
        this.duration = null;
        this.url = null;
        this.actionUserType = null;
    }

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
	var oJson;
	var session;
	try {
		oJson = JSON.parse(json);
	} catch (e) {
		return null;
	}
	if (oJson.session == null) {
		return null;
	} else {
		session = oJson.session;
	}
	
	this.accountId = (session.accountId != null) ? session.accountId :null;
	this.callId = (session.callId != null) ? session.callId :null;
	this.from = (session.from != null) ? session.from :null;
	this.headers = (session.headers != null) ? session.headers :null;
	this.id = (session.id != null) ? session.id : null;
	this.initialText = (session.initialText != null) ? session.initialText :null;
	this.parameters = (session.parameters != null) ? session.parameters :null;
	this.timestamp = (session.timestamp != null) ? session.timestamp :null;
	this.to = (session.to != null) ? session.to :null;
	this.userType = (session.userType != null) ? session.userType :null;
	
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

Transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat, machineDetection, playTones, voice, callbackUrl, promptLogSecurity, label) {
    if (to == null) {
        throw new Error("Missing required property: 'to'");
    }

    if (name == null) {
        throw new Error("Missing required property: 'name'");
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

    if (choices == null && terminator == null) {
        this.choices = null;
    } else {
        if ((Object.prototype.toString.call(terminator) === '[object String]') && (terminator.length > 0)) {
            this.choices = new Choices(null, null, terminator);
        } else if ((Object.prototype.toString.call(choices) === '[object String]') && (choices.length > 0)) {
            this.choices = new Choices(null, null, choices);
        } else if (choices instanceof Choices) {
            if ((Object.prototype.toString.call(choices.terminator) === '[object String]') && (choices.terminator.length > 0)) {
                this.choices = new Choices(null, null, choices.terminator);
            } else {
                this.choices = null;
            }
        } else {
            this.choices = null;
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

    if (headers == null) {
        this.headers = headers;
    } else {
        if (Object.prototype.toString.call(headers) === '[object Object]') {
            this.headers = headers;
        } else {
            throw new Error("Property: 'headers' must be a object");
        }
    }

    if (on == null) {
        this.on = null;
    } else {
        if (on instanceof On) {
            this.on = on;
        } else if (Object.prototype.toString.call(on) === '[object Array]') {
            if (on.length > 0) {
                for (var i = 0; i < on.length; i++) {
                    if (on[i] instanceof On) {
                    } else {
                        throw new Error("Property: 'on' must be a instance of On or a valid array of On's objects");
                    }
                }
                this.on = on;
            } else {
                throw new Error("Property: 'on' must be a instance of On or a valid array of On's objects");
            }
        } else {
            throw new Error("Property: 'on' must be a instance of On or a valid array of On's objects");
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

    if (interdigitTimeout == null) {
        this.interdigitTimeout = interdigitTimeout;
    } else {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }

    if (ringRepeat == null) {
        this.ringRepeat = null;
    } else {
        if (Object.prototype.toString.call(ringRepeat) === '[object Number]') {
            if (ringRepeat % 1 === 0) {
                this.ringRepeat = ringRepeat;
            } else {
                throw new Error("Property: 'ringRepeat' must be a integer");
            }
        } else {
            throw new Error("Property: 'ringRepeat' must be a integer");
        }
    }

    if (machineDetection == null) {
        this.machineDetection = machineDetection;
    } else {
        if (machineDetection instanceof MachineDetection) {
            this.machineDetection = machineDetection;
        }else if (Object.prototype.toString.call(machineDetection) === '[object Boolean]') {
            this.machineDetection = machineDetection;
        } else {
            throw new Error("Property: 'machineDetection' must be a boolean or a instance of machineDetection");
        }
    }

    if (playTones == null) {
        this.playTones = playTones;
    } else {
        if (Object.prototype.toString.call(playTones) === '[object Boolean]') {
            this.playTones = playTones;
        } else {
            throw new Error("Property: 'playTones' must be a Boolean");
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

    if (callbackUrl == null) {
        this.callbackUrl = callbackUrl;
    } else {
        if (Object.prototype.toString.call(callbackUrl) === '[object String]') {
            if (callbackUrl.length > 0) {
                this.callbackUrl = callbackUrl;
            } else {
                throw new Error("Property: 'callbackUrl' must be a valid string");
            }
        } else {
            throw new Error("Property: 'callbackUrl' must be a valid string");
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

    if (label == null) {
        this.label = label;
    } else {
        if (Object.prototype.toString.call(label) === '[object String]') {
            if (label.length > 0) {
                this.label = label;
            } else {
                throw new Error("Property: 'label' must be a valid string");
            }
        } else {
            throw new Error("Property: 'label' must be a valid string");
        }
    }
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
