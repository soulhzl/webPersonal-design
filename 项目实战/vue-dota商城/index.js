const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const passport = require('koa-passport')

const userrouter = require('./router/user')

const port = process.env.PORT || 8888

const app = new Koa()

// bodyparser post传递内容解析
app.use(bodyParser())

// passport 初始化
app.use(passport.initialize())

// 配置passport
require('./config/passport')(passport)

router.use('/user', userrouter.routes())

// 路由运用
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)