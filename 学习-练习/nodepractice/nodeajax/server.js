var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodeParser = bodyParser.urlencoded({extended: false});
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database: 'test'
});

connection.connect();

app.get('/index', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/form_post', urlencodeParser, function(req, res){
	var obj = {
		'usn' : req.body.usn,
		'pwd' : req.body.pwd
	};

	var sql = 'insert into test (usn,pwd) values(?,?)';
	var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com'];
	connection.query(sql,addSqlParams,function(err, resource){
		if (err) {
			console.log(err);
			return;
		}
		connection.end();
		res.end('success');
	});
});

var server = app.listen(8080, function(){

});