const router = require('koa-router')()
const fs = require('fs')
const model = require('../config/mongodb')
const Goods = model.getModel('goods')

router.get('/insertGoodsInfo', async (ctx, next) => {
	fs.readFile('./data_json/goods.json', 'utf8', (err, data) => {
		data = JSON.parse(data)
		let saveCount = 0
		data.goods.map(async (val, index) => {
			let findResult = await Goods.findOne({
				name: val.name
			})

			if (findResult) {
				console.log('保存失败,数据已存在')
			} else {

				let goodsModel = new Goods(val)
				let res = await goodsModel.save()
				if (res) {
					saveCount++
					console.log('保存成功' + saveCount)
				} else {
					console.log('保存失败')
				}

			}
		})
	})
	ctx.body = "开始导入数据"
	await next()
}).post('/getGoodsInfo', async (ctx, next) => {
	let {
		name
	} = ctx.request.body

	let findResult = await Goods.findOne({
		name
	})

	if (findResult) {
		ctx.body = {
			code: 0,
			data: findResult
		}
	} else {
		ctx.body = {
			code: 1,
			msg: '获取不到数据'
		}
	}

	await next()
}).post('/getCategoryGoods', async (ctx, next) => {
	let {
		sort
	} = ctx.request.body

	let findResult = await Goods.find({
		sort
	})

	if (findResult) {
		ctx.body = {
			code: 0,
			data: findResult
		}
	} else {
		ctx.body = {
			code: 1,
			msg: '获取不到数据'
		}
	}

	await next()
})

module.exports = router