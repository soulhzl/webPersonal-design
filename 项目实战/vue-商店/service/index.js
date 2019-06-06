const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const utils = require('utility')
const cors = require('koa2-cors')

const db = require('./database/init');
const userrouter = require('./appApi/user')

// 密码加密
const mymd5 = (pwd) => {
	const salt = 'soul_hzl'
	return utils.md5(utils.md5(pwd + salt))
}

(async () => {
	await db.connect()
	db.initSchemas()
})()

app.use(bodyParser())

app.use(cors())

router.use('/user', userrouter.routes())

// 路由运用
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)