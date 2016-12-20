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
     it("inches (whitespaces not supported)", function() {
        assert.equal(ft2cm("1 ''"), "1 ''");
    });
    //....
    //....

    it("detect and replace in string", function() {
        assert.equal(ft2cm("I'm 5'2'' high"), "I'm 157.48 high");
    });

    it("detect and append in string", function() {
        // TODO: fix the api of the function
        assert.equal(ft2cm("I'm 5'2'' high", "%(ft)s (%(cm).2f cm)"), "I'm 5'2'' (157.48 cm) high");
    });

    it("multiple times", function() {
        assert.equal(ft2cm("6'1'' and 6'1''"), "185.42 and 185.42");
    });
    it("feet space inches", function() {
        assert.equal(ft2cm("6' 1''"), "182.88 2.54");
    });

    it("toFixed", function() {
        assert.equal(ft2cm("6'", "%(cm).0f"), "183");
    });

    it("add units", function() {
        assert.equal(ft2cm("6'", "%(cm).0fcm"), "183cm");
    });
    it("add units", function() {
        assert.equal(ft2cm("6'", "%(cm).2f cm"), "182.88 cm");
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
        assert.equal(ft2cm("I'm 5'2'' high", "%(ft)s (%(cm).2f cm)"), "I'm 5'2'' (157.48 cm) high");
    });

    it("1.0 API allows for translated and append original", function() {
        // draft of new API 
        assert.equal(ft2cm("I'm 5'2'' high", "%(cm).2f cm (which in US was %(ft)s)"), "I'm 157.48 cm (which in US was 5'2'') high");
    });

    it("1.0 API exposes APPEND_TRANSLATED format as constant", function() {
        // draft of new API, use some reasonable template string format (printf ?)
        // of course string will look different, this is just idea ;-)
        assert.equal(ft2cm("I'm 5'2'' high", ft2cm.APPEND_TRANSLATED), "I'm 5'2'' (157.48 cm) high");
    });

    it("1.0 API exposes APPEND_ORIGINAL format as constant", function() {
        // draft of new API 
        assert.equal(ft2cm("I'm 5'2'' high", ft2cm.APPEND_ORIGINAL), "I'm 157.48 cm (5'2'') high");
    });

	it("1.0 API multiple times", function() {
        assert.equal(ft2cm("6'1'' and 6'1''",ft2cm.APPEND_TRANSLATED), "6'1'' (185.42 cm) and 6'1'' (185.42 cm)");
    });

	it("Meters are also supported as output, use %(m)", function() {
        assert.equal(ft2cm('6’1"',"%(m).1f"), 1.9);
    });
    it("Millimeters are also supported as output, use %(mm)", function() {
        assert.equal(ft2cm('6’1"',"%(mm).0f mm"), "1854 mm");
    });

    it("Decimal inches", function() {
        assert.equal(ft2cm('1.1"'), "2.79");
    });
    it("Decimal ft", function() {
        assert.equal(ft2cm("1.1'"), "33.53");
    });

    it.skip("Fractional inches", function() {
        // TODO: implement this feature
        assert.equal(ft2cm('1 3/4"'), "4.45");
    });


    

});
