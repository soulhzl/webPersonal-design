var fs = require('fs');
var zlib = require('zlib');
// 压缩文件
// fs.createReadStream('1.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('1.txt.gz'));

// 解压文件
// fs.createReadStream('1.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('jieya.txt'));