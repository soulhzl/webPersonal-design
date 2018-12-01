// 创建集合
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://qzsk:qzsk@localhost:27017/qzsk_db";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	console.log("数据库已创建!");
	var dbase = db.db("qzsk_db");
	dbase.createCollection('test', function (err, res) {
		if (err) throw err;
		console.log("创建集合!");
		db.close();
	});
});


// 插入数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://qzsk:qzsk@localhost:27017/qzsk_db?authSource=admin";
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("qzsk_db");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("test").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});