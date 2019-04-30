var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({extended: false});

// mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://qzsk:qzsk@localhost:27017/qzsk_db";

// 加解密
const crypto = require('crypto');
// 加密
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
// 解密
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
// 路由index
app.get('/index', function(req, res){
	res.sendFile(__dirname + '/' + 'indexmongo.html');
});
// 路由处理from提交的注册数据
app.post('/form_reg_post', urlencodeParser, function(req, res){
	var obj = {
		'usn' : req.body.usn,
		'pwd' : req.body.pwd
	};

	// 插入数据
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("qzsk_db");
        var key = 'key';
        var pwd = aesEncrypt(obj.pwd, key);
        var myobj = { usn: obj.usn, pwd: pwd };
        dbo.collection("user"). find({"usn":obj.usn}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            if (result.length == 0) {
                dbo.collection("user").insertOne(myobj, function(ierr, iresult) {
                    if (err) throw err;
                    res.end(JSON.stringify(iresult));
                });
                res.send('success');
            }else{
                res.send('fail');
            }
            db.close();
        });

        
    });
});

// 路由处理from提交的登录数据
app.post('/form_login_post', urlencodeParser, function(req, res){
    var obj = {
        'usn' : req.body.usn,
        'pwd' : req.body.pwd
    };

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("qzsk_db");
        var key = 'key';
        if (err) throw err;
        dbo.collection("user"). find({"usn":obj.usn}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            result[0].pwd = aesDecrypt(result[0].pwd+'', 'key');
            if (result[0].pwd == obj.pwd) {
                res.send('success');
            }else{
                res.send('fail');
            }
            db.close();
        });
    });

});

var server = app.listen(8080, function(){

});