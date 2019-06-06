const router = require('koa-router')()
const mongoose = require('mongoose')


router.post('/register', async (ctx, next) => {
	const User = mongoose.model('User')

	let newUser = new User(ctx.request.body)
	await newUser.save().then((res) => {
		ctx.body = {
			code: 200,
			message: '注册成功',
		}
	}).catch((err) => {
		ctx.body = {
			code: 500,
			message: 'error',
		}
	})
})

module.exports = router