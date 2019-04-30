var fs = require('fs');
var data = '看我不把你写残';
// 读取流
/*var readStream = fs.createReadStream('1.txt');

readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
	data+=chunk;
	console.log('dataing');
});

readStream.on('end',function(){
	console.log('end:' + data);	
});

readStream.on('error',function(e){
	console.log(e);
});*/


// 写入流
/*var writeStream = fs.createWriteStream('1.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish',function(){
	console.log('finish');
});

writeStream.on('error', function(e){
	console.log(e);
});*/


// 管道
// var readStream = fs.createReadStream('1.txt');

// var writeStream = fs.createWriteStream('2.txt');

// readStream.pipe(writeStream);