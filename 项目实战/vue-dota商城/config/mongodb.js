const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/themeshop' //数据库链接

// 连接数据库
mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useFindAndModify: false
})
// 模型
const models = {
	user: {
		'name': {
			'type': String,
			'require': true
		},
		'password': {
			'type': String,
			'require': true
		},
		'email': {
			'type': String,
			'require': true
		},
		'avatar': {
			'type': String
		},
		'identity': {
			'type': String,
			'require': true
		},
		'date': {
			'type': Date,
			'default': Date.now
		}
	},
	goods: {
		'name': {
			'type': String,
			'require': true
		},
		'bgimg': {
			'type': String,
			'require': true
		},
		'carouselimg': {
			'type': Array,
			'require': true
		},
		'price': {
			'type': Number,
			'require': true
		},
		'desc': {
			'type': String,
			'require': true
		},
		'detail': {
			'type': Array,
			'require': true
		},
		'commet': {
			'type': Number,
			'require': true
		},
		'sort': {
			'type': String,
			'require': true
		}
	}
}
// 遍历数据库模型
for (let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}
// 获取数据库模型
module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
}