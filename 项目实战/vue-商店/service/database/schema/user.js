const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema

//创建我们的用户Schema
const userSchema = new Schema({
	username: {
		unique: true,
		type: String
	},
	password: String,
	createAt: {
		type: Date,
		default: Date.now()
	},
	lastLoginAt: {
		type: Date,
		default: Date.now()
	}
}, {
	collection: 'user'
})

//发布模型
mongoose.model('User', userSchema)