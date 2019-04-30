const router = require('koa-router')();
const utils = require('utility');
const model = require('./model');
const User = model.getModel('user');
const _filter = {
	'pwd': 0,
	'__v': 0
};

const mymd5 = (pwd) => {
	const salt = 'soul_hzl';
	return utils.md5(utils.md5(pwd + salt));
}

router.get('/list', async (ctx, next) => {
	const {
		sex
	} = ctx.query;
	let result = '';
	// 查询用户数据
	result = await (() => {
		return new Promise((resolve, reject) => {
			User.find({
				sex
			}, _filter, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				resolve(JSON.stringify({
					code: 0,
					data: doc
				}));
			});
		});
	})();
	ctx.body = result;
	await next();
}).get('/info', async (ctx, next) => {
	const userid = ctx.cookies.get('userid');
	if (!userid) {
		ctx.body = JSON.stringify({
			code: 1
		});
	}
	let result = '';
	// 查询用户数据
	result = await (() => {
		return new Promise((resolve, reject) => {
			User.findOne({
				_id: userid
			}, _filter, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				if (doc) {
					resolve(JSON.stringify({
						code: 0,
						msg: '用户数据',
						data: doc
					}));
				} else {
					resolve('');
				}
			});
		});
	})();
	ctx.body = result;
	await next();
}).post('/reg', async (ctx, next) => {
	const {
		user,
		pwd,
		sex
	} = ctx.request.body;
	let result = '';
	// 查询是否存在重复用户
	result = await (() => {
		return new Promise((resolve, reject) => {
			User.findOne({
				user
			}, _filter, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				if (doc) {
					resolve(JSON.stringify({
						code: 1,
						msg: '用户名重复'
					}));
				} else {
					resolve('');
				}
			});
		});
	})();
	// 若无重复则添加进数据库
	if (result === '') {
		result = await (() => {
			return new Promise((resolve, reject) => {
				const md5pwd = mymd5(pwd);
				const userModel = new User({
					user,
					sex,
					pwd: md5pwd
				});
				userModel.save((err, doc) => {
					if (err) {
						reject(JSON.stringify({
							code: 1,
							msg: '服务器出错'
						}));
					}
					if (doc) {
						const {
							user,
							sex,
							_id
						} = doc;
						ctx.cookies.set(
							'userid', _id, {
								domain: 'localhost', // 写cookie所在的域名
								path: '/', // 写cookie所在的路径
								maxAge: 2 * 60 * 60 * 1000, // cookie有效时长
								expires: new Date('2018-02-08'), // cookie失效时间
								httpOnly: false, // 是否只用于http请求中获取
								overwrite: false // 是否允许重写
							});
						resolve(JSON.stringify({
							code: 0,
							msg: '创建用户成功',
							data: {
								user,
								sex,
								_id
							}
						}));
					} else {
						resolve('');
					}
				});
			});
		})();
	}
	ctx.body = result;
	await next();
}).post('/login', async (ctx, next) => {
	const {
		user,
		pwd
	} = ctx.request.body;
	let result = '';
	// 查询用户登录信息是否正确
	result = await (() => {
		return new Promise((resolve, reject) => {
			const md5pwd = mymd5(pwd);
			User.findOne({
				user,
				pwd: md5pwd
			}, _filter, (err, doc) => {
				if (err) {
					reject(JSON.stringify({
						code: 1,
						msg: '服务器出错'
					}));
				}
				if (doc) {
					ctx.cookies.set(
						'userid', doc._id, {
							domain: 'localhost', // 写cookie所在的域名
							path: '/', // 写cookie所在的路径
							maxAge: 2 * 60 * 60 * 1000, // cookie有效时长
							expires: new Date('2018-02-08'), // cookie失效时间
							httpOnly: false, // 是否只用于http请求中获取
							overwrite: false // 是否允许重写
						});
					resolve(JSON.stringify({
						code: 0,
						msg: '用户验证成功',
						data: doc
					}));
				} else {
					resolve(JSON.stringify({
						code: 1,
						msg: '用户验证失败'
					}));
				}
			});
		});
	})();
	ctx.body = result;
	await next();
}).post('/update', async (ctx, next) => {
	// 更新用户数据
	const userid = ctx.cookies.get('userid');
	if (!userid) {
		ctx.body = JSON.stringify({
			code: 1
		});
	}
	const body = ctx.request.body;
	let result = '';
	result = await (() => {
		return new Promise((resolve, reject) => {
			User.findByIdAndUpdate(userid, body, (err, doc) => {
				const data = Object.assign({}, {
					user: doc.user,
					sex: doc.sex
				}, body);
				resolve(JSON.stringify({
					code: 0,
					msg: '用户数据更新成功',
					data: data
				}));
			});
		});
	})();
	ctx.body = result;
	await next();
});

module.exports = router;