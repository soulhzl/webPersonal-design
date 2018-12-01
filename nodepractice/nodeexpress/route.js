var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('get请求');
});

app.post('/', function(req, res){
	res.send('post请求');
});

app.get('/deluser', function(req, res){
	res.send('删除页面');
});

app.get('/listuser', function(req, res){
	res.send('用户页面');
});

app.get('/ab*cd', function(req, res) {   
   res.send('正则匹配');
});

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(host);
	console.log(port);
});
