function ft2cm(ftString, fixed, units) {
	//’6”
	return ftString.replace(/(?:(\d+)['’](\d+)(?:''|”))|(?:(\d+)(?:''|”))|(?:(\d+)['’])/g, function(m, f, i, ii, ff) {
		//console.log(arguments);
		// rounding or toFixed or both ?
		return ((f || ff || 0) / 0.032808 + (i || ii || 0) / 0.39370).toFixed(fixed != null ? fixed : 2) + (units || "");
	});
};
module.exports = ft2cm;