// 文件读取
var fs = require('fs');

/*fs.readFile('1.txt', function(e, res){
	console.log(res.toString());
	console.log(__filename);
	console.log(__dirname);
});*/

// 打开文件
/*fs.open('1.txt', 'r+', function(e,fd){
	if (e) {
		console.log('error');
	}
	console.log(fd);
});*/

// 写入文件
fs.writeFile('1.txt', '写写写写写',function(err){
	if (err) {
		console.log(err);
	}

	fs.readFile('1.txt',function(e,res){
		console.log(res.toString());
	});
});