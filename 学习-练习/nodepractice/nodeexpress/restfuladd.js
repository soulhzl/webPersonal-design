var express = require('express');
var app = express();
var fs = require('fs');

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
};

app.get('/adduser', function(req, res){
	fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err,data){
		data = JSON.parse( data );
		data["user4"] = user["user4"];
		console.log(data);
		res.end( JSON.stringify(data));
	});
});

var server = app.listen(8080, function(){

});