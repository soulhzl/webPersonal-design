const router = require('koa-router')()
const mongoose = require('mongoose')
const fs = require('fs')

router.get('/insertAllGoodsInfo', async (ctx, next) => {
	fs.readFile('./data_json/goods.json', 'utf8', (err, data) => {
		data = JSON.parse(data)
		let saveCount = 0
		const Goods = mongoose.model('Goods')
		data.RECORDS.map((val, index) => {
			let newGoods = new Goods(val)
			newGoods.save().then(() => {
				saveCount++
				console.log('成功' + saveCount)
			}).catch(error => {
				console.log('失败：' + error)
			})
		})
	})
	ctx.body = "开始导入数据"
	await next()
}).get('/insertAllCategory', async (ctx, next) => {
	fs.readFile('./data_json/category.json', 'utf8', (err, data) => {
		data = JSON.parse(data)
		let saveCount = 0
		const Category = mongoose.model('Category')
		data.RECORDS.map((val, index) => {
			let newCategory = new Category(val)
			newCategory.save().then(() => {
				saveCount++
				console.log('成功' + saveCount)
			}).catch(error => {
				console.log('失败' + error)
			})
		})
	})
	ctx.body = "开始导入数据"
	await next()
}).get('/insertAllCategorySub', async (ctx, next) => {
	fs.readFile('./data_json/category_sub.json', 'utf8', (err, data) => {
		data = JSON.parse(data)
		let saveCount = 0
		const CategorySub = mongoose.model('CategorySub')
		data.RECORDS.map((val, index) => {
			let newCategory = new CategorySub(val)
			newCategory.save().then(() => {
				saveCount++
				console.log('成功' + saveCount)
			}).catch(error => {
				console.log('失败' + error)
			})
		})
	})
	ctx.body = "开始导入数据"
	await next()
}).post('/getDetailGoodsInfo', async (ctx, next) => {
	try {
		let {
			goodsId
		} = ctx.request.body

		const Goods = mongoose.model('Goods')

		let result = await Goods.findOne({
			ID: goodsId
		}).exec()

		if (result) {
			ctx.body = {
				code: 200,
				message: result
			}
		} else {
			ctx.body = {
				code: 200,
				message: '获取不到数据'
			}
		}

	} catch (err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
	await next()
}).get('/getCategoryList', async (ctx, next) => {
	try {
		const Category = mongoose.model('Category')

		let result = await Category.find().exec()

		if (result) {
			ctx.body = {
				code: 200,
				message: result
			}
		} else {
			ctx.body = {
				code: 200,
				message: '获取不到数据'
			}
		}

	} catch (err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
	await next()
}).post('/getCategorySubList', async (ctx, next) => {
	try {
		let {
			categoryId
		} = ctx.request.body

		const CategorySub = mongoose.model('CategorySub')

		let result = await CategorySub.find({
			MALL_CATEGORY_ID: categoryId
		}).exec()

		if (result) {
			ctx.body = {
				code: 200,
				message: result
			}
		} else {
			ctx.body = {
				code: 200,
				message: '获取不到数据'
			}
		}

	} catch (err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
	await next()
}).post('/getGoodsListByCategorySubID', async (ctx, next) => {
	try {
		let {
			categorySubId,
			page
		} = ctx.request.body

		let num = 10
		let start = (page - 1) * num

		const Goods = mongoose.model('Goods')

		let result = await Goods.find({
			SUB_ID: categorySubId
		}).skip(start).limit(num).exec()

		if (result) {
			ctx.body = {
				code: 200,
				message: result
			}
		} else {
			ctx.body = {
				code: 200,
				message: '获取不到数据'
			}
		}

	} catch (err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
	await next()
})

module.exports = router