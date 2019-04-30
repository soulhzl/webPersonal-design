// 简易聊天
var server = require('net').createServer();
var port=4001;
var sockets = [];
server.on('connection', function(socket){
	console.log('new connection');
	sockets.push(socket);
	socket.on('data', function(data){
		console.log('got data');

		sockets.forEach(function(otherSocket){
			if (otherSocket !== socket) {
				otherSocket.write(data);
			}
		});
	});
});

server.on('close', function(){
	console.log('closed');
	var index = sockets.indexOf(socket);
	sockets.splice(index,1);
});

server.on('error', function(err){
	console.log('error', err.message);
});

server.listen(4001);