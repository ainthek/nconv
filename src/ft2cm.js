var printf = require("printf");
var re = /(?:(\d+)['’](\d+)(?:''|[”"]))|(?:(\d+)(?:''|[”"]))|(?:(\d+)['’])/g;

function ft2cm(ftString, format) {

    format || (format = "%(cm).2f");
    return ftString.replace(re, function(m, f, i, ii, ff) {
        var cm = ((f || ff || 0) / 0.032808 + (i || ii || 0) / 0.39370);
        return printf(format, {
            cm: cm,
            ft: m
        });
    });
}
module.exports = ft2cm;
