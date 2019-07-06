const router = require('koa-router')()
const fs = require('fs')
const model = require('../config/mongodb')
const Goods = model.getModel('goods')

router.get('/insertGoodsInfo', async (ctx, next) => {
	// 遍历json文件将数据加入数据库
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
	// $route POST goodsinfo/getGoodsInfo
	// @desc return json
	// @access public
	let {
		name
	} = ctx.request.body

	// 查询商品数据
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
	// $route POST goodsinfo/getCategoryGoods
	// @desc return json
	// @access public
	let {
		sort
	} = ctx.request.body

	// 查询分类下的商品
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
}).get('/getSearchList', async (ctx, next) => {
	// $route get goodsinfo/getSearchList
	// @desc return json
	// @access public
	let {
		search
	} = ctx.request.query

	// 查询搜索内容
	const reg = new RegExp(search)

	let findResult = await Goods.find({
		name: {
			$regex: reg
		}
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