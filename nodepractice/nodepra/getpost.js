var http = require('http');
var url = require('url');
var util = require('util');

/*http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(8080);*/

http.createServer(function(req,res){
	var params = url.parse(req.url, true).query;
	res.write(params.name);
	res.end();
}).listen(8080);