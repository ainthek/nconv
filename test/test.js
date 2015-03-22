var ft2cm = require("../src/ft2cm.js");
var assert = require("./assert.js"); //extended node/assert library

describe("f2cm", function() {
	it("feet and inches", function() {
		assert.equal(ft2cm("6'1''"), 185.42); 
	});
	it("feet", function() {
		assert.equal(ft2cm("1'"), 30.48); 
	});
	it("inches", function() {
		assert.equal(ft2cm("1''"), 2.54); 
	});
	//....
	//....

	it("detect and replace in string", function() {
		assert.equal(ft2cm("I'm 5'2'' high"), "I'm 157.48 high"); 
	});

	it("detect and append in string", function() {
		// TODO: fix the api of the function
		assert.equal(ft2cm("I'm 5'2'' high","%(ft)s (%(cm).2f cm)"), "I'm 5'2'' (157.48 cm) high"); 
	});

	it("fwo times", function() {
		assert.equal(ft2cm("6'1'' and 6'1''"), "185.42 and 185.42"); 
	});
	it("feet space inches", function() {
		assert.equal(ft2cm("6' 1''"), "182.88 2.54"); 
	});

	it("toFixed", function() {
		assert.equal(ft2cm("6'","%(cm).0f"), "183"); 
	});

	it("add units", function() {
		assert.equal(ft2cm("6'","%(cm).0fcm"), "183cm"); 
	});
	it("add units", function() {
		assert.equal(ft2cm("6'","%(cm).2f cm"), "182.88 cm"); 
	});
	//.......
	it("feet - Foot and inch marks", function() {
		assert.equal(ft2cm("6’"), "182.88"); 
	});
	it("inches - Foot and inch marks", function() {
		assert.equal(ft2cm("1”"), "2.54"); 
	});

	it("feet and inches - Foot and inch marks", function() {
		assert.equal(ft2cm("6’1”"), 185.42);  
	});


	it("inches - quite as inch mark", function() {
		assert.equal(ft2cm('1"'), 2.54); 
	});
	it("feet and inches - quite as inch mark", function() {
		assert.equal(ft2cm('6’1"'), 185.42);  
	});

	it("1.0 API allows for original and append translated ", function() {
		// draft of new API, use some reasonable template string format (printf ?)
		// of course string will look different, this is just idea ;-)
		assert.equal(ft2cm("I'm 5'2'' high","%(ft)s (%(cm).2f cm)"), "I'm 5'2'' (157.48 cm) high"); 
	});

	it("1.0 API allows for translated and append original", function() {
		// draft of new API 
		assert.equal(ft2cm("I'm 5'2'' high","%(cm).2f cm (which in US was %(ft)s)"), "I'm 157.48 cm (which in US was 5'2'') high"); 
	});

	
});