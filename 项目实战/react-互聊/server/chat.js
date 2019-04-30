const router = require('koa-router')();
const model = require('./model');
const Chat = model.getModel('chat');
const User = model.getModel('user');

router.get('/msglist', async (ctx, next) => {
	const userid = ctx.cookies.get('userid');
	let users = {};
	users = await (() => {
		return new Promise((resolve, reject) => {
			User.find({}, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				let tmp = {};
				doc.forEach((v) => {
					tmp[v._id] = {
						name: v.user,
						avatar: v.avatar
					};
				});
				resolve(JSON.stringify(tmp));
			});
		});
	})();
	let result = '';
	// 查询用户数据
	result = await (() => {
		return new Promise((resolve, reject) => {
			Chat.find({
				'$or': [{
					from: userid
				}, {
					to: userid
				}]
			}, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				resolve(JSON.stringify({
					code: 0,
					data: doc,
					users: users
				}));
			});
		});
	})();
	ctx.body = result;
	await next();
}).post('/readmsg', async (ctx, next) => {
	const userid = ctx.cookies.get('userid');
	const {
		from
	} = ctx.request.body;
	let result = '';
	result = await (() => {
		return new Promise((resolve, reject) => {
			Chat.update({
				from,
				to: userid
			}, {
				'$set': {
					read: true
				}
			}, {
				'multi': true
			}, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				resolve(JSON.stringify({
					code: 0,
					num: doc.nModified
				}));
			});
		})
	})();
	ctx.body = result;
	await next();
});

module.exports = router;