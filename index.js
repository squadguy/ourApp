//Declare dependencies
var express = require('express');
var path = require('path');

var app = express();

//configure app

app.set('view engine', 'ejs'); //needed to tell app what type of view files we're using
app.set('views', path.join(__dirname, 'views'));//ties view with directory/views

//routing
app.get('/', function(req, res){
	res.render('main', { });
	console.log('someone visted our page... YAHOO!');
});

app.get('/contact', function(req, res){
	res.render('contact', { });
	console.log('We made it to contact');
});
	
//establish our server

app.listen(1337, function(){
	console.log('Server is running');
});
