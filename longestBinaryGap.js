// Task: BinaryGap
// Description: 
// Find longest sequence of zeros in a binary string.
// A binary string is a sequence of 0's and 1's.

function longestBinaryGap(string) {
	let Gap = {
		start: null,
		length: null
	};
	let zeroGapLength = 0;
	for (let i=0 ; i < string.length; i++) {
		if (string[i] === "1") {
			if (Gap.length < zeroGapLength) {
				Gap.start = i - zeroGapLength;
				Gap.length = zeroGapLength;
			}
			zeroGapLength = 0;
		} else {
			zeroGapLength += 1;
		}
	}

	if (Gap.length < zeroGapLength) {
		Gap.start = string.length - zeroGapLength;
		Gap.length = zeroGapLength;
	}

	return Gap;
}

function test(numberOfTestString, maxLengthOfTestString, consoleLog) {
	const CONSOLE_LOG = consoleLog || false;
	const NUMBER_OF_TEST = numberOfTestString || 10;
	const MAX_LENGTH = maxLengthOfTestString || 10;
	let testStrings = getRandomizedArrayOfBinaryStrings(numberOfTestString, maxLengthOfTestString);

	console.log("starting timer...");
	console.time("timer");
	testMethod(testStrings, longestBinaryGap);
	console.timeEnd("timer");

	function getRandomizedArrayOfBinaryStrings(length, maxLengthOfTestString) {
		console.log(`randomizing array of binary strings (length=${length}, max string length=${maxLengthOfTestString})`);
		let testStrings = [];

		for (let i=0; i<length; i++) {
			let string = [];
		    let length = Math.floor(Math.random() * maxLengthOfTestString) + 1; // <1, maxLengthOfTestString>

		    for (let k=0; k<length; k++) {
		        string.push(Math.round(Math.random()));
		    }

		    testStrings.push(string.join(""));
		}

		return testStrings;
	}
	
	function testMethod(array, callback) {
		let length = array.length;
		for (let i=0; i<length; i++) {
		    let result = callback(array[i]);

		    if (CONSOLE_LOG) {
	    		console.log(`test string: ${array[i]}, result: ${JSON.stringify(result)}`);
		    }
		}
	}
}

test(10, 20, true); // numberOfTestString=10, maxLengthOfTestString=20, consoleLog=true