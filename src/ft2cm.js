
var re=/(?:(\d+)['’](\d+)(?:''|[”"]))|(?:(\d+)(?:''|[”"]))|(?:(\d+)['’])/g;

function ft2cm(ftString, fixed, units, append) {

    return ftString.replace(re, function(m, f, i, ii, ff) {
        
        var n1 = ((f || ff || 0) / 0.032808 + (i || ii || 0) / 0.39370);        
        var n2 = n1.toFixed(fixed != null ? fixed : 2);
        var formated = n2 + (units || "");
        if(append) formated = m + " (" + formated +")";
        return formated;
    });

}
module.exports = ft2cm;
