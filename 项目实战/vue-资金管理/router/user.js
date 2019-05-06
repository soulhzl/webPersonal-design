const router = require('koa-router')();
const utils = require('utility');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const passport = require('koa-passport');
const model = require('../config/mongodb');
const config = require('../config/config');
const User = model.getModel('user');

const mymd5 = (pwd) => {
	const salt = 'soul_hzl';
	return utils.md5(utils.md5(pwd + salt));
}

router.post('/register', async (ctx, next) => {
	// $route POST user/register
	// @desc return json
	// @access public
	const {
		name,
		email,
		password,
		identity
	} = ctx.request.body;
	let result = '';
	const avatar = gravatar.url(email, {
		s: '200',
		r: 'pg',
		d: 'mm'
	});
	result = await (() => {
		return new Promise((res, rej) => {
			User.findOne({
				email
			}, (err, doc) => {
				if (doc) {
					res(JSON.stringify({
						code: 1,
						msg: '用户已存在'
					}));
				} else {
					const userModel = new User({
						name,
						email,
						avatar,
						identity,
						password: mymd5(password)
					});
					userModel.save((err, doc) => {
						if (err) {
							res(JSON.stringify({
								code: 1,
								msg: '出错'
							}));
						}
						if (doc) {
							res(JSON.stringify({
								code: 0,
								msg: '注册成功'
							}))
						}
					});
				}
			})
		})
	})();
	ctx.body = result;
	await next();
}).post('/login', async (ctx, next) => {
	// $route POST user/login
	// @desc return token
	// @access public
	const {
		email,
		password,
	} = ctx.request.body;
	let result = '';
	result = await (() => {
		return new Promise((res, rej) => {
			User.findOne({
				email
			}, (err, doc) => {
				if (doc && mymd5(password) === doc.password) {
					const rule = {
						id: doc.id,
						name: doc.name,
						avatar: doc.avatar,
						identity: doc.identity
					}
					// jwt.sign('规则', "加密名字", "过期时间", "函数");
					jwt.sign(rule, config.secretOrKey, {
						expiresIn: 3600
					}, (err, token) => {
						res(JSON.stringify({
							code: 0,
							msg: '登录成功',
							token: 'Bearer ' + token
						}));
					});
				} else {
					res(JSON.stringify({
						code: 1,
						msg: '用户不存在'
					}));
				}
			})
		})
	})();
	ctx.body = result;
	await next();
}).get('/current', async (ctx, next) => {
	// $route GET user/current
	// @desc return current user
	// @access private
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			ctx.body = {
				id: user.id,
				name: user.name,
				email: user.email,
				identity: user.identity
			}
		} else {
			ctx.body = JSON.stringify({
				code: 1,
				msg: 'token验证失败'
			})
		}
		await next();
	})(ctx, next);
});

module.exports = router;