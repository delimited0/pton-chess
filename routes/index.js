exports.index = function(req, res) {
	console.log(req.path);
	res.render('index', {
		title: 'Princeton Chess Club'
	});
};