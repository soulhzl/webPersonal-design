const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const render = require('koa-art-template');
const path = require('path');
const session = require('koa-session');
const subrouter = require('./subrouter.js');
const app = new Koa();
// session 保存session
app.keys = ['some secret hurr'];

const CONFIG = {
	key: 'koa:sess',
	maxAge: 86400000,
	autoCommit: true,
	overwrite: true,
	httpOnly: true,
	signed: true,
	rolling: false,
	renew: false,
};

app.use(session(CONFIG, app));

// art-template 模板HTML文件显示
render(app, {
	root: path.join(__dirname, 'views'),
	extname: '.html',
	debug: process.env.NODE_ENV !== 'production'
});

// bodyparser post传递内容解析
app.use(bodyParser());

// static 静态文件
app.use(serve(__dirname + '/static'));

// 中间件
app.use(async (ctx, next) => {
	ctx.body = '中间件';
	await next();
});

// router 路由导向
router.get('/', async (ctx) => {
	console.log(ctx);
	// console.log(ctx.session.user);
	await ctx.render("index", {
		title: "world",
		list: [1, 2, 3, 4, 5]
	});
}).get('/news', async (ctx, next) => {
	ctx.session.user = 'user';
	await next();
}).get('/news', async (ctx, next) => {
	ctx.body = ctx.request.query;
	await next();
}).post('/add', async (ctx, next) => {
	ctx.body = ctx.request.body;
	await next();
});

router.use('/ewai', subrouter.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3333);