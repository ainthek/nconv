var ft2cm = require("../src/ft2cm.js");
var assert = require("./assert.js"); //extended node/assert library

describe("f2cm", function() {
	it("feet and inches", function() {
		assert.equal(ft2cm("6'1''"), 185.42); //TODO: make test to comare with some other calculator
	});
	it("feet", function() {
		assert.equal(ft2cm("1'"), 30.48); //TODO: make test to comare with some other calculator
	});
	it("inches", function() {
		assert.equal(ft2cm("1''"), 2.54); //TODO: make test to comare with some other calculator
	});
	//....
	//....

	it("detect and replace in string", function() {
		assert.equal(ft2cm("I'm 5'2'' high"), "I'm 157.48 high"); //TODO: make test to comare with some other calculator
	});

	it("fwo times", function() {
		assert.equal(ft2cm("6'1'' and 6'1''"), "185.42 and 185.42"); //TODO: make test to comare with some other calculator
	});
	it("feet space inches", function() {
		assert.equal(ft2cm("6' 1''"), "182.88 2.54"); //TODO: make test to comare with some other calculator
	});

	it("toFixed", function() {
		assert.equal(ft2cm("6'",0), "183"); //TODO: make test to comare with some other calculator
	});

	it("add units", function() {
		assert.equal(ft2cm("6'",0,"cm"), "183cm"); //TODO: make test to comare with some other calculator
	});
	it("add units", function() {
		assert.equal(ft2cm("6'",2," cm"), "182.88 cm"); //TODO: make test to comare with some other calculator
	});
	
});