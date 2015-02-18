function ft2cm(ftString, fixed) {
	return ftString.replace(/(?:(\d+)')?(?:(\d+)'')?/, function(m, f, i) {
		console.log(f, i);
		// rounding or toFixed or both ?
		return ((f || 0) / 0.032808 + (i || 0) / 0.39370).toFixed(fixed != null ? fixed : 2);
	});
};
module.exports = ft2cm;