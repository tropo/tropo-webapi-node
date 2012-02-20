/**
 * A set of unit tests for the Tropo WebAPI classes.
 * run by executing:
 * ~$ node tropo-webapi-node/tests/tests.js
 */

require('../lib/tropo-webapi');
var assert = require('assert');
var util = require('util');

var sayExpected = '{"tropo":[{ "say":{"value":"Hello, World.","required":true,"voice":"carmen"}}]}';
var askExpected = '{"tropo":[{ "ask":{"choices":{"value":"[5 DIGITS]"},"bargein":true,"name":"foo","required":true,"say":{"value":"Please say your account number."},"timeout":30}}]}';
var callExpected = '{"tropo":[{ "call":{"to":"3055195825"}}]}';
var conferenceExpected = '{"tropo":[{ "conference":{"id":1234,"mute":false,"name":"foo","playTones":false,"terminator":"#"}}]}'
var hangupExpected = '{"tropo":[{ "hangup":{}}]}';
var messageExpected = '{"tropo":[{ "message":{"say":{"value":"This is an announcement"},"to":"3055195825","answerOnMedia":false,"channel":"TEXT","from":"3055551212","network":"SMS","timeout":10,"voice":"kate"}}]}'
var recordExpected = '{"tropo":[{ "record":{"beep":true,"choices":{"value":"[5 DIGITS]"},"maxSilence":5,"method":"POST","name":"foo","required":true,"say":{"value":"Please say your account number"}}}]}';

var numTests = 0;
var numFailed = 0;

util.puts('***** Starting Test Run ************');
util.puts(' ');
util.puts('Say Test: ' + sayTest(sayExpected));
util.puts('Ask Test: ' + askTest(askExpected));
util.puts('Call Test: ' + callTest(callExpected));
util.puts('Conference Test: ' + conferenceTest(conferenceExpected));
util.puts('Hangup Test: ' + hangupTest(hangupExpected));
util.puts('Message Test: ' + messageTest(messageExpected));
util.puts('Record Test: ' + recordTest(recordExpected));
util.puts('');
util.puts('Total Tests Run: ' + numTests);
util.puts('Total Failed: ' + numFailed);
util.puts(' ');
util.puts('***** Test Run Complete ************');

// A test for the Tropo Say object. 
function sayTest(expected) {

	var tropo = new TropoWebAPI();
	tropo.say("Hello, World.", null, null, true, "carmen");
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
	tropo.call("3055195825");
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Conference object.
function conferenceTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.conference(1234, false, "foo", false, null, "#");
	return runTest(TropoJSON(tropo), expected);
}

// A test for the Tropo Hangup object.
function hangupTest(expected) {
	
	var tropo = new TropoWebAPI();
	tropo.hangup();
	return runTest(TropoJSON(tropo), expected)
}

// A test for the Tropo Message object.
function messageTest(expected) {
	
	var tropo = new TropoWebAPI();
	var say = new Say("This is an announcement");
	tropo.message(say, "3055195825", false, "TEXT", "3055551212", null, "SMS", null, 10, "kate");
	return runTest(TropoJSON(tropo), expected)
	
}

// A test for the Tropo Record object.
function recordTest(expected) {

	var tropo = new TropoWebAPI();
	var say = new Say("Please say your account number");
	var choices = new Choices("[5 DIGITS]");
	tropo.record(null, null, true, choices, null, 5, null, "POST", null, "foo", true, say);
	return runTest(TropoJSON(tropo), expected)

}

// A helper method to run the assertion test.
function runTest(actual, expected) {

	numTests++;
	try { 
		assert.equal(actual, expected)
		return 'Passed.';
	}
	
	catch (err) {
		numFailed++;
		return 'Failed.\n' + err;
	}

}
