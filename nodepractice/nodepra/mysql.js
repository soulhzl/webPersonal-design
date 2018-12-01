// mysql数据库
var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database: 'test'
});

connection.connect();

connection.query("select * from test",function(err, res, fields){
	console.log(res);
	console.log('The solution is: ', res[0].first);
	connection.end();
});