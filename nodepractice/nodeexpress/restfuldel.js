var express = require('express');
var app = express();
var fs = require('fs');

app.get('/deleteuser', function(req, res){
	fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err,data){
		data = JSON.parse( data );
		delete data["user" + 2];
		console.log(data);
		res.end( JSON.stringify(data));
	});
});

var server = app.listen(8080, function(){

});