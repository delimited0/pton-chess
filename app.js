var express 	= require('express');
var routes  	= require('./routes');
var http 		= require('http');
var path		= require('path');
var serveStatic = require('serve-static');
var fs 			= require('fs');
var favicon		= require('serve-favicon');

var app = express();

// mount your routes...
app.use(express.static(path.join(__dirname + '/public')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
// after static

// mount routes
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/people', routes.people);
app.get('/photos', routes.photos);
app.get('/calendar', routes.calendar);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
http.createServer(app).listen(app.get('port'), function(){
 	console.log('Express server listening on port ' + app.get('port'));
 	fs.readdir(__dirname + '/routes', function(err, files) {
 		console.log(files);
 	});
});