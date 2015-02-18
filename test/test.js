var ft2cm = require("../src/ft2cm.js");
var assert = require("./assert.js"); //extended node/assert library

describe("f2cm", function() {
	it("feet and inches", function() {
		assert.equal(ft2cm("6'1''"), 185.42); //TODO: make test to comare with some other calculator
	});
	//....
	//....

	it("detect and replace in string", function() {
		assert.equal(ft2cm("I'm 5'2'' high"), "I'm 157.48 high"); //TODO: make test to comare with some other calculator
	});
	
});