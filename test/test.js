var ft2cm = require("../src/ft2cm.js");
var assert = require("./assert.js"); //extended node/assert library

describe("f2cm shell process", function() {
	it("feet and inches", function() {
		assert.equal(ft2cm("6'1''"), 185.42); //TODO: make test to comare with some other calculator
	});
});