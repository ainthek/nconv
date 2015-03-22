var printf = require("printf");
// TODO: fractional inches (?:(\d+) (\d+\/\d+)(?:''|[”"])) 
// will require more refactor
var re = /(?:(\d+\.?\d*)['’](\d+\.?\d*)(?:''|[”"]))|(?:(\d+\.?\d*)(?:''|[”"]))|(?:(\d+\.?\d*)['’])/g;

function ft2cm(ftString, format) {

    format || (format = "%(cm).2f");
    return ftString.replace(re, function(m, f, i, ii, ff) {
        var cm = ((f || ff || 0) / 0.032808 + (i || ii || 0) / 0.39370);
        return printf(format, {
            cm: cm,
            m: cm / 100,
            mm: cm * 10,
            ft: m
        });
    });
}
ft2cm.APPEND_TRANSLATED = "%(ft)s (%(cm).2f cm)";
ft2cm.APPEND_ORIGINAL = "%(cm).2f cm (%(ft)s)";
module.exports = ft2cm;
