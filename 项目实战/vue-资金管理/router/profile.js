const router = require('koa-router')();
const passport = require('koa-passport');
const model = require('../config/mongodb');
const Profile = model.getModel('profile');

router.post('/add', async (ctx, next) => {
	// $route POST profile/add
	// @desc return json
	// @access private
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			const profileFields = {};
			const body = ctx.request.body;
			if (body.type) {
				profileFields.type = body.type;
			}
			if (body.descripe) {
				profileFields.descripe = body.descripe;
			}
			if (body.income) {
				profileFields.income = body.income;
			}
			if (body.expend) {
				profileFields.expend = body.expend;
			}
			if (body.cash) {
				profileFields.cash = body.cash;
			}
			if (body.remark) {
				profileFields.remark = body.remark;
			}
			let result = '';
			result = await (() => {
				return new Promise((res, rej) => {
					new Profile(profileFields).save((err, doc) => {
						if (err) {
							res(JSON.stringify({
								code: 1,
								msg: '出错'
							}));
						}
						if (doc) {
							res(JSON.stringify({
								code: 0,
								doc
							}));
						}
					});
				});
			})();
			ctx.body = result;
		}
		await next();
	})(ctx, next);
}).get('/', async (ctx, next) => {
	// $route GET profile
	// @desc return all json
	// @access private
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			let result = '';
			result = await (() => {
				return new Promise((res, rej) => {
					Profile.find({}, (err, doc) => {
						if (err) {
							res(JSON.stringify({
								code: 1,
								msg: '出错'
							}));
						}
						if (doc) {
							res(JSON.stringify({
								code: 0,
								doc
							}));
						}
					});
				});
			})();
			ctx.body = result;
		}
		await next();
	})(ctx, next);
}).get('/:id', async (ctx, next) => {
	// $route GET profile/:id
	// @desc return json
	// @access private
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			let result = '';
			result = await (() => {
				return new Promise((res, rej) => {
					Profile.findOne({
						_id: ctx.params.id
					}, (err, doc) => {
						if (err) {
							res(JSON.stringify({
								code: 1,
								msg: '出错'
							}));
						}
						if (doc) {
							res(JSON.stringify({
								code: 0,
								doc
							}));
						}
					});
				});
			})();
			ctx.body = result;
		}
		await next();
	})(ctx, next);
}).post('/edit/:id', async (ctx, next) => {
	// $route POST profile/edit/:id
	// @desc return json
	// @access private
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			const profileFields = {};
			const body = ctx.request.body;
			if (body.type) {
				profileFields.type = body.type;
			}
			if (body.descripe) {
				profileFields.descripe = body.descripe;
			}
			if (body.income) {
				profileFields.income = body.income;
			}
			if (body.expend) {
				profileFields.expend = body.expend;
			}
			if (body.cash) {
				profileFields.cash = body.cash;
			}
			if (body.remark) {
				profileFields.remark = body.remark;
			}
			let result = '';
			result = await (() => {
				return new Promise((res, rej) => {
					Profile.findOneAndUpdate(ctx.params.id, {
						$set: profileFields
					}, {
						new: true
					}, (err, doc) => {
						if (err) {
							res(JSON.stringify({
								code: 1,
								msg: '出错'
							}));
						}
						if (doc) {
							res(JSON.stringify({
								code: 0,
								doc
							}));
						}
					});
				});
			})();
			ctx.body = result;
		}
		await next();
	})(ctx, next);
}).get('/delete/:id', async (ctx, next) => {
	// $route GET profile/delete/:id
	// @desc return json
	// @access private
	return passport.authenticate('jwt', async (err, user, info, status) => {
		if (user) {
			let result = '';
			result = await (() => {
				return new Promise((res, rej) => {
					Profile.findOneAndRemove(ctx.params.id, (err, doc) => {
						if (err) {
							res(JSON.stringify({
								code: 1,
								msg: '出错'
							}));
						}
						if (doc) {
							res(JSON.stringify({
								code: 0,
								msg: '删除成功'
							}));
						}
					});
				});
			})();
			ctx.body = result;
		}
		await next();
	})(ctx, next);
});

module.exports = router;