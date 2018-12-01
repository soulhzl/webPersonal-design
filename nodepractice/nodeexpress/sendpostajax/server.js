var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({extended: false});



app.get('/index', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post',urlencodeParser, function(req, res){
	var response = {
		'first' : req.body.first_name,
		'last' : req.body.last_name
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8080,function(){

});