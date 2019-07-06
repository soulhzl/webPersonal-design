const router = require('koa-router')()
const utils = require('utility')
const jwt = require('jsonwebtoken')
const passport = require('koa-passport')
const model = require('../config/mongodb')
const config = require('../config/config')
const User = model.getModel('user')

// 密码加密
const mymd5 = (pwd) => {
	const salt = 'soul_hzl'
	return utils.md5(utils.md5(pwd + salt))
}

router.post('/register', async (ctx, next) => {
	// $route POST user/register
	// @desc return json
	// @access public
	const {
		name,
		pwd
	} = ctx.request.body

	// 查询是否存在用户
	let findResult = await User.findOne({
		name
	})

	if (findResult) {

		ctx.body = {
			code: 1,
			msg: '用户已存在'
		}

	} else {

		const userModel = new User({
			name,
			password: mymd5(pwd)
		})
		// 将用户数据保存进数据库
		let saveResult = await userModel.save()

		if (saveResult) {

			ctx.body = {
				code: 0,
				msg: '注册成功'
			}

		} else {

			ctx.body = {
				code: 1,
				msg: '出错'
			}
		}

	}

	await next()

}).post('/login', async (ctx, next) => {
	// $route POST user/login
	// @desc return token
	// @access public
	const {
		name,
		pwd
	} = ctx.request.body

	// 查询是否存在用户
	let findResult = await User.findOne({
		name
	})

	// 当密码与查询结果相同则生成passport
	if (findResult && findResult.password === mymd5(pwd)) {
		const rule = {
			id: findResult.id,
			name: findResult.name
		}

		let jwtResult = jwt.sign(rule, config.secretOrKey, {
			expiresIn: 3600
		});

		if (jwtResult) {
			ctx.body = {
				code: 0,
				msg: '登录成功',
				token: 'Bearer ' + jwtResult
			};
		} else {
			ctx.body = {
				code: 1,
				msg: '验证出错'
			}
		}
	} else {
		ctx.body = {
			code: 1,
			msg: '用户不存在'
		}
	}

	await next()

}).post('/saveAddress', async (ctx, next) => {
	// $route POST user/saveAddress
	// @desc return json
	// @access public
	let {
		addressDetail
	} = ctx.request.body

	// 查询是否存在用户
	let findAddress = await User.findOne({
		_id: addressDetail._id
	})

	if (findAddress) {
		// 将地址更新存储进数据库
		let tmpArr = findAddress.address

		if (addressDetail.deleteid + 1) {
			tmpArr.splice(addressDetail.deleteid, 1)
		} else {
			if (addressDetail.id <= tmpArr.length) {
				// 更新地址
				tmpArr.splice(addressDetail.id - 1, 1, addressDetail)
			} else {
				// 添加地址
				tmpArr.push(addressDetail)
			}
		}
		let updateResult = await User.updateOne({
			_id: addressDetail._id
		}, {
			$set: {
				'address': tmpArr
			}
		})

		if (updateResult) {
			ctx.body = {
				code: 0,
				msg: updateResult
			}
		} else {
			ctx.body = {
				code: 1,
				msg: '出错'
			}
		}
	} else {
		ctx.body = {
			code: 1,
			msg: '用户不存在'
		}
	}

	await next()
}).post('/getAddressList', async (ctx, next) => {
	// $route POST user/getAddressList
	// @desc return json
	// @access public
	let {
		_id
	} = ctx.request.body

	// 查询用户对应存储的地址
	let findResult = await User.findOne({
		_id
	})

	if (findResult) {
		ctx.body = {
			code: 0,
			msg: findResult.address
		}
	} else {
		ctx.body = {
			code: 1,
			msg: '出错'
		}
	}

	await next()
}).get('/current', async (ctx, next) => {
	// $route GET user/current
	// @desc return current user
	// @access private
	// 校验token
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			ctx.body = {
				id: user.id,
				name: user.name
			}
		} else {
			ctx.body = JSON.stringify({
				code: 1,
				msg: 'token验证失败'
			})
		}
		await next();
	})(ctx, next)
})

module.exports = router