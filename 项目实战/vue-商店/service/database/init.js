const mongoose = require('mongoose')
const glob = require('glob')
const {
	resolve
} = require('path')

const DB_URL = 'mongodb://localhost:27017/store'

mongoose.Promise = global.Promise

// 连接数据库
module.exports = {
	connect: function() {
		let maxConnectTimes = 0

		//连接数据库
		mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useFindAndModify: false
		})
		return new Promise((resolve, reject) => {

			//增加数据库连接的事件监听
			mongoose.connection.on('disconnected', () => {
				console.log('***********数据库断开***********')
				if (maxConnectTimes < 3) {
					maxConnectTimes++
					mongoose.connect(DB_URL, {
						useNewUrlParser: true,
						useFindAndModify: false
					})
				} else {
					reject()
					throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
				}

			})

			//数据库出现错误的时候
			mongoose.connection.on('error', (err) => {
				console.log('***********数据库错误***********')
				if (maxConnectTimes < 3) {
					maxConnectTimes++
					mongoose.connect(DB_URL, {
						useNewUrlParser: true,
						useFindAndModify: false
					})
				} else {
					reject(err)
					throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
				}
			})

			//链接打开的时候
			mongoose.connection.once('open', () => {
				console.log('MongoDB Connected successfully!')
				resolve()
			})

		})
	},
	initSchemas: function() {
		glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
	}
}