/**
 * A set of unit tests for the Tropo WebAPI classes.
 * run by executing:
 * ~$ node tropo-webapi-node/tests/tests.js
 */

require('../lib/tropo-webapi');
var assert = require('assert');
var util = require('util');

var sayExpected = '{"tropo":[{"say":{"value":"Hello, World.","name":"say","required":true,"voice":"carmen"}}]}';
var askExpected = '{"tropo":[{"ask":{"choices":{"value":"[5 DIGITS]"},"say":{"value":"Please say your account number."},"bargein":true,"name":"foo","required":true,"timeout":30}}]}';
var callExpected = '{"tropo":[{"call":{"to":"3055195825","name":"call"}}]}';
var conferenceExpected = '{"tropo":[{"conference":{"id":"1234","name":"foo","mute":false,"playTones":false,"terminator":"#"}}]}';
var hangupExpected = '{"tropo":[{"hangup":{}}]}';
var messageExpected = '{"tropo":[{"message":{"say":{"value":"This is an announcement"},"to":"3055195825","name":"message","answerOnMedia":false,"channel":"TEXT","from":"3055551212","network":"SMS","timeout":10,"voice":"kate"}}]}';
var recordExpected = '{"tropo":[{"record":{"beep":true,"choices":{"terminator":"#"},"maxSilence":5,"method":"POST","name":"foo","required":true,"say":{"value":"Please say your account number"}}}]}';

var numTests = 0;
var numFailed = 0;

console.log('***** Starting Test Run ************');
console.log(' ');
console.log('Say Test: ' + sayTest(sayExpected));
console.log('Ask Test: ' + askTest(askExpected));
console.log('Call Test: ' + callTest(callExpected));
console.log('Conference Test: ' + conferenceTest(conferenceExpected));
console.log('Hangup Test: ' + hangupTest(hangupExpected));
console.log('Message Test: ' + messageTest(messageExpected));
console.log('Record Test: ' + recordTest(recordExpected));
console.log('');
console.log('Total Tests Run: ' + numTests);
console.log('Total Failed: ' + numFailed);
console.log(' ');
console.log('***** Test Run Complete ************');

// A test for the Tropo Say object. 
function sayTest(expected) {

	var tropo = new TropoWebAPI();
	tropo.say("Hello, World.", null, null, "say", true, "carmen", null);
	return runTest(TropoJSON(tropo), expected);
	
}

// A test for the Tropo Ask object.
function askTest(expected) {

	var tropo = new TropoWebAPI();
	var say = new Say("Please say your account number.");
	var choices = new Choices("[5 DIGITS]");
	tropo.ask(choices, null, true, null, "foo", null, true, say, 30, null);
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Call object.
function callTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.call("3055195825", null, null, null, null, 'call');
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Conference object.
function conferenceTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.conference("1234", false, "foo", false, null, "#");
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
	tropo.message(say, "3055195825", false, "TEXT", "3055551212", 'message', "SMS", null, 10, "kate");
	return runTest(TropoJSON(tropo), expected);
	
}

// A test for the Tropo Record object.
function recordTest(expected) {

	var tropo = new TropoWebAPI();
	var say = new Say("Please say your account number");
	var choices = new Choices("[5 DIGITS]", null, "#");
	tropo.record(null, null, null, true, choices, null, 5, null, "POST", null, "foo", true, say);
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
