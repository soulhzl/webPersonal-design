const router = require('koa-router')()
const mongoose = require('mongoose')
const utils = require('utility')

// 密码加密
const mymd5 = (pwd) => {
	const salt = 'soul_hzl'
	return utils.md5(utils.md5(pwd + salt))
}

router.post('/register', async (ctx, next) => {
	try {
		const User = mongoose.model('User')

		let {
			username,
			password
		} = ctx.request.body

		const md5pwd = mymd5(password)

		let newUser = new User({
			username,
			password: md5pwd
		})

		let result = await newUser.save()

		if (result) {
			ctx.body = {
				code: 200,
				message: '注册成功',
			}
		} else {
			ctx.body = {
				code: 200,
				message: '注册失败',
			}
		}

	} catch (err) {
		ctx.body = {
			code: 500,
			message: 'error',
		}
	}
	await next()
}).post('/login', async (ctx, next) => {
	try {
		const User = mongoose.model('User')

		let {
			username,
			password
		} = ctx.request.body

		const md5pwd = mymd5(password)

		let result = await User.findOne({
			username
		}).exec()

		if (result) {
			if (result.password === md5pwd) {
				ctx.body = {
					code: 200,
					message: result
				}
			}
		} else {
			ctx.body = {
				code: 200,
				message: '用户不存在'
			}
		}

	} catch (err) {
		ctx.body = {
			code: 500,
			message: 'error',
		}
	}
	await next()
})

module.exports = router