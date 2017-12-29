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

    if (attempts != null) {
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
    
    if (bargein != null) {
        if (Object.prototype.toString.call(bargein) === '[object Boolean]') {
            this.bargein = bargein;
        } else {
            throw new Error("Property: 'bargein' must be a Boolean");
        }
    }
    
    if (minConfidence != null) {
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

    if (name != null) {
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
    
    if (recognizer != null) {
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
    
    if (required != null) {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }

    if (timeout != null) {
        if (Object.prototype.toString.call(timeout) === '[object Number]') {
            this.timeout = timeout;
        } else {
            throw new Error("Property: 'timeout' must be a number");
        }
    }

    if (voice != null) {
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

    if (interdigitTimeout != null) {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }
    
    if (sensitivity != null) {
        if (Object.prototype.toString.call(sensitivity) === '[object Number]') {
            this.sensitivity = sensitivity;
        } else {
            throw new Error("Property: 'sensitivity' must be a number");
        }
    }
    
    if (speechCompleteTimeout != null) {
        if (Object.prototype.toString.call(speechCompleteTimeout) === '[object Number]') {
            this.speechCompleteTimeout = speechCompleteTimeout;
        } else {
            throw new Error("Property: 'speechCompleteTimeout' must be a number");
        }
    }
    
    if (speechIncompleteTimeout != null) {
        if (Object.prototype.toString.call(speechIncompleteTimeout) === '[object Number]') {
            this.speechIncompleteTimeout = speechIncompleteTimeout;
        } else {
            throw new Error("Property: 'speechIncompleteTimeout' must be a number");
        }
    }

    if (allowSignals != null) {
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
    if (promptLogSecurity != null) {
        if (Object.prototype.toString.call(promptLogSecurity) === '[object String]') {
            this.promptLogSecurity = promptLogSecurity;
        } else {
            throw new Error("Property: 'promptLogSecurity' must be a string");
        }
    }
    if (asrLogSecurity != null) {
        if (Object.prototype.toString.call(asrLogSecurity) === '[object String]') {
            this.asrLogSecurity = asrLogSecurity;
        } else {
            throw new Error("Property: 'asrLogSecurity' must be a string");
        }
    }
    if (maskTemplate != null) {
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

    if (name != null) {
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

    if (answerOnMedia != null) {
        if (Object.prototype.toString.call(answerOnMedia) === '[object Boolean]') {
            this.answerOnMedia = answerOnMedia;
        } else {
            throw new Error("Property: 'answerOnMedia' must be a Boolean");
        }
    }
    if (channel != null) {
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
    if (from != null) {
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
    if (headers != null) {
        if (Object.prototype.toString.call(headers) === '[object Object]') {
            this.headers = headers;
        } else {
            throw new Error("Property: 'headers' must be a object");
        }
    }
    
    if (network != null) {
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
    if (required != null) {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }
    if (timeout != null) {
        if (Object.prototype.toString.call(timeout) === '[object Number]') {
            this.timeout = timeout;
        } else {
            throw new Error("Property: 'timeout' must be a number");
        }
    }
    if (allowSignals != null) {
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
    if (machineDetection != null) {
        if (machineDetection instanceof MachineDetection) {
            this.machineDetection = machineDetection;
        }else if (Object.prototype.toString.call(machineDetection) === '[object Boolean]') {
            this.machineDetection = machineDetection;
        } else {
            throw new Error("Property: 'machineDetection' must be a boolean or a instance of machineDetection");
        }
    }
    if (voice != null) {
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
    if (callbackUrl != null) {
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
    if (promptLogSecurity != null) {
        if (Object.prototype.toString.call(promptLogSecurity) === '[object String]') {
            this.promptLogSecurity = promptLogSecurity;
        } else {
            throw new Error("Property: 'promptLogSecurity' must be a string");
        }
    }
    if (label != null) {
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

    if (Object.prototype.toString.call(id) === '[object String]') {
        if (id.length > 0) {
            this.id = id;
        } else {
            throw new Error("Required property: 'id' must be a valid string");
        }
    } else {
        throw new Error("Required property: 'id' must be a valid string");
    }

    if (name != null) {
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

	if (mute != null) {
        if (Object.prototype.toString.call(mute) === '[object Boolean]') {
            this.mute = mute;
        } else {
            throw new Error("Property: 'mute' must be a Boolean");
        }
    }

    if (playTones != null) {
        if (Object.prototype.toString.call(playTones) === '[object Boolean]') {
            this.playTones = playTones;
        } else {
            throw new Error("Property: 'playTones' must be a Boolean");
        }
    }

    if (required != null) {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }

    if (terminator != null) {
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

    if (allowSignals != null) {
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
    if (interdigitTimeout != null) {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }

    if (joinPrompt != null) {
        if (joinPrompt instanceof JoinPrompt) {
            this.joinPrompt = joinPrompt;
        }else if (Object.prototype.toString.call(joinPrompt) === '[object Boolean]') {
            this.joinPrompt = joinPrompt;
        } else {
            throw new Error("Property: 'joinPrompt' must be a boolean or a instance of JoinPrompt");
        }
    }

    if (leavePrompt != null) {
        if (leavePrompt instanceof LeavePrompt) {
            this.leavePrompt = leavePrompt;
        }else if (Object.prototype.toString.call(leavePrompt) === '[object Boolean]') {
            this.leavePrompt = leavePrompt;
        } else {
            throw new Error("Property: 'leavePrompt' must be a boolean or a instance of LeavePrompt");
        }
    }

    if (promptLogSecurity != null) {
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

    if (name != null) {
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

    if (answerOnMedia != null) {
        if (Object.prototype.toString.call(answerOnMedia) === '[object Boolean]') {
            this.answerOnMedia = answerOnMedia;
        } else {
            throw new Error("Property: 'answerOnMedia' must be a Boolean");
        }
    }
    if (channel != null) {
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
    if (from != null) {
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
    if (network != null) {
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
    if (required != null) {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }
    if (timeout != null) {
        if (Object.prototype.toString.call(timeout) === '[object Number]') {
            this.timeout = timeout;
        } else {
            throw new Error("Property: 'timeout' must be a number");
        }
    }
    if (voice != null) {
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
    if (promptLogSecurity != null) {
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
    
    if (next != null) {
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
    
    if (say != null) {
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
    
    if (ask != null) {
        if (ask instanceof Ask) {
            this.ask = ask;
        } else {
            throw new Error("Property: 'ask' must be a instance of Ask");
        }
    }

    //this.message = message;
    //this.wait = wait;
    if (post != null) {
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

Record = function(attempts, asyncUpload, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout, promptLogSecurity) {

    if (name != null) {
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

    if (attempts != null) {
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

    if (asyncUpload != null) {
        if (Object.prototype.toString.call(asyncUpload) === '[object Boolean]') {
            this.asyncUpload = asyncUpload;
        } else {
            throw new Error("Property: 'asyncUpload' must be a Boolean");
        }
    }

    if (bargein != null) {
        if (Object.prototype.toString.call(bargein) === '[object Boolean]') {
            this.bargein = bargein;
        } else {
            throw new Error("Property: 'bargein' must be a Boolean");
        }
    }

    if (beep != null) {
        if (Object.prototype.toString.call(beep) === '[object Boolean]') {
            this.beep = beep;
        } else {
            throw new Error("Property: 'beep' must be a Boolean");
        }
    }

    if (choices != null) {
        if (choices instanceof Choices) {
            if (Object.prototype.toString.call(choices.terminator) === '[object String]') {
                if (choices.terminator.length > 0) {
                    this.choices = new Choices(null, null, choices.terminator);
                } else {
                    throw new Error("Property: 'terminator' of 'choices' must be a valid string");
                }
            } else {
                throw new Error("Property: 'terminator' of 'choices' must be a valid string");
            }
        } else {
            throw new Error("Property: 'choices' must be a instance of Choices");
        }
    }

    if (format != null) {
        if (Object.prototype.toString.call(format) === '[object String]') {
            if (format.length > 0) {
                this.format = format;
            } else {
                throw new Error("Property: 'format' must be a valid string");
            }
        } else {
            throw new Error("Property: 'format' must be a valid string");
        }
    }

    if (maxSilence != null) {
        if (Object.prototype.toString.call(maxSilence) === '[object Number]') {
            this.maxSilence = maxSilence;
        } else {
            throw new Error("Property: 'maxSilence' must be a number");
        }
    }

    if (maxTime != null) {
        if (Object.prototype.toString.call(maxTime) === '[object Number]') {
            this.maxTime = maxTime;
        } else {
            throw new Error("Property: 'maxTime' must be a number");
        }
    }

    if (method != null) {
        if (Object.prototype.toString.call(method) === '[object String]') {
            if (method.length > 0) {
                this.method = method;
            } else {
                throw new Error("Property: 'method' must be a valid string");
            }
        } else {
            throw new Error("Property: 'method' must be a valid string");
        }
    }

    if (required != null) {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }

    if (say != null) {
        if (say instanceof Say) {
            this.say = say;
        } else if (Object.prototype.toString.call(say) === "[object String]") {
            if (say.length > 0) {
                this.say = new Say(say);
            } else {
                throw new Error("Property: 'say' must be a instance of Say, a valid string or a valid array of objects");
            }
        } else if (Object.prototype.toString.call(say) === '[object Array]') {
            if (say.length > 0) {
                for (var i = 0; i < say.length; i++) {
                    if (Object.prototype.toString.call(say[i]) === '[object Object]') {
                        if (!((Object.prototype.toString.call(say[i].value) === "[object String]") && (say[i].value.length > 0))) {
                            throw new Error("Property: 'say' must be a instance of Say, a valid string or a valid array of objects");
                        }
                    } else {
                        throw new Error("Property: 'say' must be a instance of Say, a valid string or a valid array of objects");
                    }
                }
                this.say = say;
            } else {
                throw new Error("Property: 'say' must be a instance of Say, a valid string or a valid array of objects");
            }
        } else {
            throw new Error("Property: 'say' must be a instance of Say, a valid string or a valid array of objects");
        }
    }

    if (timeout != null) {
        if (Object.prototype.toString.call(timeout) === '[object Number]') {
            this.timeout = timeout;
        } else {
            throw new Error("Property: 'timeout' must be a number");
        }
    }

    if (transcription != null) {
        if (Object.prototype.toString.call(transcription) === '[object Object]') {
            if ((Object.prototype.toString.call(transcription.url) === "[object String]") && (transcription.url.length > 0)) {
                this.transcription = transcription;
            } else {
                throw new Error("Property: 'url' of 'transcription' must be a valid string");
            }
        } else if (Object.prototype.toString.call(transcription) === '[object Array]') {
            var transcriptions = new Array();
            for (var i = 0; i < transcription.length; i++) {
                if ((Object.prototype.toString.call(transcription[i].url) === "[object String]") && (transcription[i].url.length > 0)) {
                    transcriptions.push(transcription[i]);
                }
            }
            if (transcriptions.length > 0) {
                this.transcription = transcriptions;
            } else {
                this.transcription = null;
            }
        } else {
            throw new Error("Property: 'transcription' must be a object or a valid array of objects");
        }
    }

    var aRecordingURL = new Array();
    if ((Object.prototype.toString.call(url) === "[object String]") && (url.length > 0)) {
        var oRecordingURL = new Object();
        oRecordingURL.url = url;
        if ((Object.prototype.toString.call(username) === "[object String]") && (username.length > 0)) {
            oRecordingURL.username = username;
        }
        if ((Object.prototype.toString.call(password) === "[object String]") && (password.length > 0)) {
            oRecordingURL.password = password;
        }
        if ((Object.prototype.toString.call(method) === "[object String]") && (method.length > 0)) {
            oRecordingURL.method = method;
        }
        aRecordingURL.push(oRecordingURL);
    } else if (Object.prototype.toString.call(url) === '[object Object]') {
        if ((Object.prototype.toString.call(url.url) === "[object String]") && (url.url.length > 0)) {
            var oRecordingURL = new Object();
            oRecordingURL.url = url.url;
            if ((Object.prototype.toString.call(url.username) === "[object String]") && (url.username.length > 0)) {
                oRecordingURL.username = url.username;
            }
            if ((Object.prototype.toString.call(url.password) === "[object String]") && (url.password.length > 0)) {
                oRecordingURL.password = url.password;
            }
            if ((Object.prototype.toString.call(url.method) === "[object String]") && (url.method.length > 0)) {
                oRecordingURL.method = url.method;
            }
            aRecordingURL.push(oRecordingURL);
        }
    } else if (Object.prototype.toString.call(url) === '[object Array]') {
        for (var i = 0; i < url.length; i++) {
            if ((Object.prototype.toString.call(url[i].url) === "[object String]") && (url[i].url.length > 0)) {
                var oRecordingURL = new Object();
                oRecordingURL.url = url[i].url;
                if ((Object.prototype.toString.call(url[i].username) === "[object String]") && (url[i].username.length > 0)) {
                    oRecordingURL.username = url[i].username;
                }
                if ((Object.prototype.toString.call(url[i].password) === "[object String]") && (url[i].password.length > 0)) {
                    oRecordingURL.password = url[i].password;
                }
                if ((Object.prototype.toString.call(url[i].method) === "[object String]") && (url[i].method.length > 0)) {
                    oRecordingURL.method = url[i].method;
                }
                aRecordingURL.push(oRecordingURL);
            }
        }
    } else {}
    if (aRecordingURL.length == 1) {
        //this.recordingURL = aRecordingURL[0];
        this.url = aRecordingURL[0];
    } else if (aRecordingURL.length > 1) {
        //this.recordingURL = aRecordingURL;
        this.url = aRecordingURL;
    } else {
        //this.recordingURL = null;
        this.url = null;
    }
    //this.url = url;

    if (voice != null) {
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

    if (allowSignals != null) {
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

    if (interdigitTimeout != null) {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }

    if (promptLogSecurity != null) {
        if (Object.prototype.toString.call(promptLogSecurity) === '[object String]') {
            this.promptLogSecurity = promptLogSecurity;
        } else {
            throw new Error("Property: 'promptLogSecurity' must be a string");
        }
    }
};

Redirect = function(to, name, required) {
    if (to == null) {
        throw new Error("Missing required property: 'to'");
    } else {
        if ((Object.prototype.toString.call(to) === "[object String]") && (to.length > 0)) {
            this.to = to;
        } else {
            throw new Error("Required property: 'to' must be a valid string");
        }
    }

    if (name != null) {
        if ((Object.prototype.toString.call(name) === "[object String]") && (name.length > 0)) {
            this.name = name;
        } else {
            throw new Error("Property: 'name' must be a valid string");
        }
    }

    if (required != null) {
        if (Object.prototype.toString.call(required) === "[object Boolean]") {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a boolean");
        }
    }
};

Reject = function() {};

Result = function(json) {
    var oJson = JSON.parse(json);
    var result = oJson.result;

    this.sessionId = result.sessionId;
    this.callId = result.callId;
    this.state = result.state;
    this.sessionDuration = result.sessionDuration;
    this.sequence = result.sequence;
    this.complete = result.complete;
    this.error = result.error;
    this.calledid = result.calledid;
    this.userType = result.userType;
    this.actions = result.actions;

    if (Object.prototype.toString.call(actions) === '[object Object]') {
        this.connectedDuration = actions.connectedDuration;
        this.name = actions.name;
        this.attempts = actions.attempts;
        this.disposition = actions.disposition;
        this.confidence = actions.confidence;
        this.interpretation = actions.interpretation;
        this.utterance = actions.utterance;
        this.value = actions.value;
        this.concept = actions.concept;
        this.xml = actions.xml;
        this.uploadStatus = actions.uploadStatus;
        this.duration = actions.duration;
        this.url = actions.url;
        this.actionUserType = actions.userType;
    } else if (Object.prototype.toString.call(actions) === '[object Array]') {
        this.connectedDuration = actions[0].connectedDuration;
        this.name = actions[0].name;
        this.attempts = actions[0].attempts;
        this.disposition = actions[0].disposition;
        this.confidence = actions[0].confidence;
        this.interpretation = actions[0].interpretation;
        this.utterance = actions[0].utterance;
        this.value = actions[0].value;
        this.concept = actions[0].concept;
        this.xml = actions[0].xml;
        this.uploadStatus = actions[0].uploadStatus;
        this.duration = actions[0].duration;
        this.url = actions[0].url;
        this.actionUserType = actions[0].userType;
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

        if (as != null) {
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
        if (name != null) {
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
        if (required != null) {
            if (Object.prototype.toString.call(required) === '[object Boolean]') {
                this.required = required;
            } else {
                throw new Error("Property: 'required' must be a Boolean");
            }
        }
        if (voice != null) {
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
        if (allowSignals != null) {
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
        if (promptLogSecurity != null) {
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
	var	oJson = JSON.parse(json);
	var	session = oJson.session;
	
	this.accountId = session.accountId;
	this.callId = session.callId;
	this.from = session.from;
	this.headers = session.headers;
	this.id = session.id;
	this.initialText = session.initialText;
	this.parameters = session.parameters;
	this.timestamp = session.timestamp;
	this.to = session.to;
	this.userType = session.userType;
	
    return this;
};

StartRecording = function(asyncUpload, format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI, transcriptionLanguage) {

    if (asyncUpload != null) {
        if (Object.prototype.toString.call(asyncUpload) === '[object Boolean]') {
            this.asyncUpload = asyncUpload;
        } else {
            throw new Error("Property: 'asyncUpload' must be a Boolean");
        }
    }

    if (format != null) {
        if (Object.prototype.toString.call(format) === '[object String]') {
            if (format.length > 0) {
                this.format = format;
            } else {
                throw new Error("Property: 'format' must be a valid string");
            }
        } else {
            throw new Error("Property: 'format' must be a valid string");
        }
    }

    if (url != null) {
        if ((Object.prototype.toString.call(url) === '[object String]') && (url.length > 0)) {
            var oUrl = new Object();
            oUrl.url = url;
            if (username != null) {
                if ((Object.prototype.toString.call(username) === '[object String]') && (username.length >0)) {
                    oUrl.username = username;
                } else {
                    throw new Error("'username' must be a valid string");
                }
            }
            if (password != null) {
                if ((Object.prototype.toString.call(password) === '[object String]') && (password.length >0)) {
                    oUrl.password = password;
                } else {
                    throw new Error("'password' must be a valid string");
                }
            }
            if (method != null) {
                if ((Object.prototype.toString.call(method) === '[object String]') && (method.length >0)) {
                    oUrl.method = method;
                } else {
                    throw new Error("'method' must be a valid string");
                }
            }

            this.url = oUrl;
        } else if (Object.prototype.toString.call(url) === '[object Object]') {
            if (url.url == null) {
                throw new Error("Property: 'url' must be a valid string, a valid object or an array of objects");
            } else {
                if ((Object.prototype.toString.call(url.url) === '[object String]') && (url.url.length > 0)) {
                    this.url = url;
                } else {
                    throw new Error("Property: 'url' must be a valid string, a valid object or an array of objects");
                }
            }
        } else if ((Object.prototype.toString.call(url) === '[object Array]') && (url.length > 0)) {
            var aUrl = new Array();
            for (var i = 0; i < url.length; i++) {
                if ((Object.prototype.toString.call(url[i].url) === '[object String]') && (url[i].url.length >0)) {
                    aUrl.push(url[i]);
                }
            }
            if (aUrl.length > 0) {
                this.url = aUrl;
            } else {
                throw new Error("Property: 'url' must be a valid string, a valid object or an valid array of objects");
            }
        } else {
            throw new Error("Property: 'url' must be a valid string, a valid object or an array of objects");
        }
    }

    if (transcriptionID != null) {
        if ((Object.prototype.toString.call(transcriptionID) === '[object String]') && (transcriptionID.length > 0)) {
            this.transcriptionID = transcriptionID;
        } else {
            throw new Error("Property: 'transcriptionID' must be a valid string");
        }
    }

    if (transcriptionEmailFormat != null) {
        if ((Object.prototype.toString.call(transcriptionEmailFormat) === '[object String]') && (transcriptionEmailFormat.length > 0)) {
            this.transcriptionEmailFormat = transcriptionEmailFormat;
        } else {
            throw new Error("Property: 'transcriptionEmailFormat' must be a valid string");
        }
    }

    if (transcriptionOutURI != null) {
        if ((Object.prototype.toString.call(transcriptionOutURI) === '[object String]') && (transcriptionOutURI.length > 0)) {
            this.transcriptionOutURI = transcriptionOutURI;
        } else {
            throw new Error("Property: 'transcriptionOutURI' must be a valid string");
        }
    }

    if (transcriptionLanguage != null) {
        if ((Object.prototype.toString.call(transcriptionLanguage) === '[object String]') && (transcriptionLanguage.length > 0)) {
            this.transcriptionLanguage = transcriptionLanguage;
        } else {
            throw new Error("Property: 'transcriptionLanguage' must be a valid string");
        }
    }
};

StopRecording = function() {};

Transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat, machineDetection, playTones, voice, callbackUrl, promptLogSecurity, label) {
    if (to == null) {
        throw new Error("Missing required property: 'to'");
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

    if (name != null) {
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

    if (answerOnMedia != null) {
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

    if (from != null) {
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

    if (headers != null) {
        if (Object.prototype.toString.call(headers) === '[object Object]') {
            this.headers = headers;
        } else {
            throw new Error("Property: 'headers' must be a object");
        }
    }

    if (on != null) {
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

    if (required != null) {
        if (Object.prototype.toString.call(required) === '[object Boolean]') {
            this.required = required;
        } else {
            throw new Error("Property: 'required' must be a Boolean");
        }
    }

    if (timeout != null) {
        if (Object.prototype.toString.call(timeout) === '[object Number]') {
            this.timeout = timeout;
        } else {
            throw new Error("Property: 'timeout' must be a number");
        }
    }

    if (allowSignals != null) {
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

    if (interdigitTimeout != null) {
        if (Object.prototype.toString.call(interdigitTimeout) === '[object Number]') {
            this.interdigitTimeout = interdigitTimeout;
        } else {
            throw new Error("Property: 'interdigitTimeout' must be a number");
        }
    }

    if (ringRepeat != null) {
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

    if (machineDetection != null) {
        if (machineDetection instanceof MachineDetection) {
            this.machineDetection = machineDetection;
        }else if (Object.prototype.toString.call(machineDetection) === '[object Boolean]') {
            this.machineDetection = machineDetection;
        } else {
            throw new Error("Property: 'machineDetection' must be a boolean or a instance of machineDetection");
        }
    }

    if (playTones != null) {
        if (Object.prototype.toString.call(playTones) === '[object Boolean]') {
            this.playTones = playTones;
        } else {
            throw new Error("Property: 'playTones' must be a Boolean");
        }
    }

    if (voice != null) {
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

    if (callbackUrl != null) {
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

    if (promptLogSecurity != null) {
        if (Object.prototype.toString.call(promptLogSecurity) === '[object String]') {
            this.promptLogSecurity = promptLogSecurity;
        } else {
            throw new Error("Property: 'promptLogSecurity' must be a string");
        }
    }

    if (label != null) {
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
    if (milliseconds == null) {
        throw new Error("Missing required property: 'milliseconds'");
    } else {
        if ((Object.prototype.toString.call(milliseconds) === "[object Number]") && (milliseconds % 1 === 0)) {
            this.milliseconds = milliseconds;
        } else {
            throw new Error("Property: 'milliseconds' must be a integer");
        }
    }

    if (allowSignals != null) {
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
};

Answer = function(headers){
    if (headers != null) {
        if (Object.prototype.toString.call(headers) === '[object Object]') {
            this.headers = headers;
        } else {
            throw new Error("Property: 'headers' must be a object");
        }
    }
}

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
exports.Answer = Answer;
