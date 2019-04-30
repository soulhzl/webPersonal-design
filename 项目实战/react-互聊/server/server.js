const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const userrouter = require('./user.js');
const chatrouter = require('./chat.js');

const model = require('./model');
const Chat = model.getModel('chat');

const app = new Koa();

const server = require('http').createServer(app.callback());

const io = require('socket.io')(server);

io.on('connection', (socket) => {
	socket.on('sendmess', (data) => {
		const {
			from,
			to,
			msg
		} = data;
		const chatid = [from, to].sort().join('_');
		Chat.create({
			chatid,
			from,
			to,
			content: msg
		}, (err, doc) => {
			io.emit('recvmsg', Object.assign({}, doc._doc));
		})
	});
});

// bodyparser post传递内容解析
app.use(bodyParser());

// 路由
router.get('/', async (ctx) => {
	ctx.body = 'server';
});

router.use('/user', userrouter.routes());
router.use('/chat', chatrouter.routes());

app.use(router.routes()).use(router.allowedMethods());

server.listen(8888);