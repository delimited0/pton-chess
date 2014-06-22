/**
 * Tab routes
 */

exports.index = function(req, res) {
	console.log(req.path);
	res.render('index', {
		title: 'Princeton Chess Club'
	});
};

exports.news = function(req, res) {
	console.log(req.path);
	res.render('news', {
		title: 'News'
	});
};

exports.about = function(req, res) {
	console.log(req.path);
	res.render('about', {
		title: 'About'
	});
}; 

exports.people = function(req, res) {
	console.log(req.path);
	res.render('people', {
		title: 'People'
	});
};

exports.photos = function(req, res) {
	console.log(req.path);
	res.render('photos', {
		title: 'Photos'
	});
};

exports.calendar = function(req, res) {
	console.log(req.path);
	res.render('calendar', {
		title: 'Calendar'
	});
};

/**
 * Gallery routes
 */

exports.frick_gallery = function(req, res) {
	console.log(req.path);
	res.render('frick_gallery', {
		title: 'Frick Gallery'
	});
};
