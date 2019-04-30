var server = require('./server.js');
var router = require('./route.js');

server.start(router.route);