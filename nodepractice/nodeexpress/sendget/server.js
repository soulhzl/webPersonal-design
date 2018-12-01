var express = require('express');
var app = express();

app.get('/index', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res){
	var response = {
		'first' : req.query.first_name,
		'last' : req.query.last_name
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8080,function(){

});