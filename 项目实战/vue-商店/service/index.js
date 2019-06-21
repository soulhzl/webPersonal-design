const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const cors = require('koa2-cors')

const db = require('./database/init')
const userrouter = require('./appApi/user');
const goodsrouter = require('./appApi/goods');

(async () => {
	await db.connect()
	db.initSchemas()
})()

app.use(bodyParser())

app.use(cors())

router.use('/user', userrouter.routes())
router.use('/goods', goodsrouter.routes())

// 路由运用
app.use(router.routes()).use(router.allowedMethods())

app.listen(8888)