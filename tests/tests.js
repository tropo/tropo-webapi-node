/**
 * A set of unit tests for the Tropo WebAPI classes.
 * run by executing:
 * ~$ node tropo-webapi-node/tests/tests.js
 */

require('../lib/tropo-webapi');
var assert = require('assert');
var util = require('util');

var sayExpected = '{"tropo":[{"say":{"value":"Hello, World.","required":true,"voice":"carmen"}}]}';
var say1Expected = '{"tropo":[{"say":{"value":"Hello, World.","required":true,"voice":"carmen","media":"http://user:pass@server.com/1.jpg"}}]}';
var say2Expected = '{"tropo":[{"say":{"value":"Hello, World.","required":true,"voice":"carmen","media":["http://server.com/1.jpg","this is a inline text content","http://filehosting.tropo.com/account/1/2.text"]}}]}';
var askExpected = '{"tropo":[{"ask":{"choices":{"value":"[5 DIGITS]"},"say":{"value":"Please say your account number."},"bargein":true,"required":true,"timeout":30}}]}';
var callExpected = '{"tropo":[{"call":{"to":"3055195825"}}]}';
var conferenceExpected = '{"tropo":[{"conference":{"id":"1234","mute":false,"playTones":false,"terminator":"#"}}]}';
var hangupExpected = '{"tropo":[{"hangup":{}}]}';
var messageExpected = '{"tropo":[{"message":{"say":{"value":"This is an announcement"},"to":"3055195825","answerOnMedia":false,"channel":"TEXT","from":"3055551212","network":"SMS","timeout":10,"voice":"kate"}}]}';
var message1Expected = '{"tropo":[{"message":{"say":{"value":"This is an announcement","media":"http://user:pass@server.com/1.jpg"},"to":"3055195825","answerOnMedia":false,"channel":"TEXT","from":"3055551212","network":"MMS","timeout":10,"voice":"kate"}}]}';
var message2Expected = '{"tropo":[{"message":{"say":{"value":"This is an announcement","media":["http://server.com/1.jpg","this is a inline text content","http://filehosting.tropo.com/account/1/2.text"]},"to":"3055195825","answerOnMedia":false,"channel":"TEXT","from":"3055551212","network":"MMS","timeout":10,"voice":"kate"}}]}';
var recordExpected = '{"tropo":[{"record":{"beep":true,"choices":{"terminator":"#"},"maxSilence":5,"method":"POST","required":true,"say":{"value":"Please say your account number"}}}]}';

var numTests = 0;
var numFailed = 0;

console.log('***** Starting Test Run ************');
console.log(' ');
console.log('Say Test: ' + sayTest(sayExpected));
console.log('Say Test1: ' + say1Test(say1Expected));
console.log('Say Test2: ' + say2Test(say2Expected));
console.log('Ask Test: ' + askTest(askExpected));
console.log('Call Test: ' + callTest(callExpected));
console.log('Conference Test: ' + conferenceTest(conferenceExpected));
console.log('Hangup Test: ' + hangupTest(hangupExpected));
console.log('Message Test: ' + messageTest(messageExpected));
console.log('Message Test1: ' + message1Test(message1Expected));
console.log('Message Test2: ' + message2Test(message2Expected));
console.log('Record Test: ' + recordTest(recordExpected));
console.log('');
console.log('Total Tests Run: ' + numTests);
console.log('Total Failed: ' + numFailed);
console.log(' ');
console.log('***** Test Run Complete ************');

// A test for the Tropo Say object. 
function sayTest(expected) {

	var tropo = new TropoWebAPI();
	tropo.say("Hello, World.", null, null, null, true, "carmen", null);
	return runTest(TropoJSON(tropo), expected);
	
}

function say1Test(expected) {

    var tropo = new TropoWebAPI();
    tropo.say("Hello, World.", null, null, null, true, "carmen", null, null, "http://user:pass@server.com/1.jpg");
    return runTest(TropoJSON(tropo), expected);
    
}

function say2Test(expected) {

    var tropo = new TropoWebAPI();
    tropo.say("Hello, World.", null, null, null, true, "carmen", null, null, new Array("http://server.com/1.jpg","this is a inline text content","http://filehosting.tropo.com/account/1/2.text"));
    return runTest(TropoJSON(tropo), expected);
    
}

// A test for the Tropo Ask object.
function askTest(expected) {

	var tropo = new TropoWebAPI();
	var say = new Say("Please say your account number.");
	var choices = new Choices("[5 DIGITS]");
	tropo.ask(choices, null, true, null, null, null, true, say, 30, null);
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Call object.
function callTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.call("3055195825");
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Conference object.
function conferenceTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.conference("1234", false, null, false, null, "#");
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Hangup object.
function hangupTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.hangup();
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Message object.
function messageTest(expected) {
	
	var tropo = new TropoWebAPI();
	var say = new Say("This is an announcement");
	tropo.message(say, "3055195825", false, "TEXT", "3055551212", null, "SMS", null, 10, "kate");
	return runTest(TropoJSON(tropo), expected);
	
}

function message1Test(expected) {
    
    var tropo = new TropoWebAPI();
    var say = new Say("This is an announcement", null, null, null, null, null, null, null, "http://user:pass@server.com/1.jpg");
    tropo.message(say, "3055195825", false, "TEXT", "3055551212", null, "MMS", null, 10, "kate");
    return runTest(TropoJSON(tropo), expected);
    
}

function message2Test(expected) {
    
    var tropo = new TropoWebAPI();
    var say = new Say("This is an announcement", null, null, null, null, null, null, null, new Array("http://server.com/1.jpg","this is a inline text content","http://filehosting.tropo.com/account/1/2.text"));
    tropo.message(say, "3055195825", false, "TEXT", "3055551212", null, "MMS", null, 10, "kate");
    return runTest(TropoJSON(tropo), expected);
    
}

// A test for the Tropo Record object.
function recordTest(expected) {

	var tropo = new TropoWebAPI();
	var say = new Say("Please say your account number");
	var choices = new Choices("[5 DIGITS]", null, "#");
	tropo.record(null, null, null, true, choices, null, 5, null, "POST", null, null, true, say);
	return runTest(TropoJSON(tropo), expected);

}

// A helper method to run the assertion test.
function runTest(actual, expected) {

	numTests++;
	try { 
		assert.equal(actual, expected);
		return 'Passed.';
	}
	
	catch (err) {
		numFailed++;
		return 'Failed.\n' + err;
	}

}
