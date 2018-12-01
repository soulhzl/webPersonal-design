var http = require('http');
var querystring = require('querystring');

var postHTML = 
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>';

  http.createServer(function(req, res){
  	var body = '';
  	req.on('data',function(chunk){
  		body += chunk;
  	});

  	req.on('end', function(){
  		body = querystring.parse(body);

  		res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});

  		if(body.name && body.url){
  			res.write(body.name);
  			res.write('<br />');
  			res.write(body.url);
  		}else{
  			res.write(postHTML);
  		}
  		res.end();
  	})
  }).listen(8080);