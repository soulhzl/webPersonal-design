<template>
	<div>
		<div class="goods-area">
			<van-nav-bar
			title="商品"
			left-arrow
			@click-left="backRoute"
			/>
			<div class="goods-info">
				<van-swipe :show-indicators="false" loop>
					<van-swipe-item v-for="(image, index) in goodsImg" :key="index">
						<img v-lazy="image" alt="" class='goods-img'/>
					</van-swipe-item>
				</van-swipe>
				<div class="goods-name">{{name}}</div>
				<div class="goods-desc">{{desc}}</div>
				<div class="goods-price">￥{{price | fixedMoney}}</div>
			</div>
			<van-tabs swipeable sticky>
				<van-tab title="详情">
					<div v-for="(detail, index) in detail" :key="index">
						<img v-lazy="detail" alt="" class='goods-img'>
					</div>
				</van-tab>
				<van-tab title="评论">
					<div>
						<div class="commet">好评度</div>
						<van-rate
						v-model="value"
						:size="starSize"
						color="#f44"
						void-icon="star"
						void-color="#eee"
						class="goods-star"
						/>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<van-goods-action>
			<van-goods-action-icon
			icon="chat-o"
			text="客服"
			/>
			<van-goods-action-icon
			icon="cart-o"
			text="购物车"
			/>
			<van-goods-action-button
			type="warning"
			text="加入购物车"
			@click="addCart"
			/>
			<van-goods-action-button
			type="danger"
			text="立即购买"
			@click="buyClick"
			/>
		</van-goods-action>
		<van-sku
		v-model="showBase"
		:sku="sku"
		:goods="goodsInfo"
		:goods-id="id"	
		:initial-sku="initialSku"
		@buy-clicked="skuBuyClick"
		@add-cart="skuAddCart"
		/>
	</div>
</template>

<script>
import { Notify } from 'vant';
import url from '@/serviceAPI.config.js'
import { moneyFilter } from '../filter/moneyFilter'
export default{
	name: 'goodsmess',
	data(){
		return {
			value: 0,
			goodsImg: [],
			desc: '',
			detail: [],
			name: '',
			price: 0,
			starSize: 0,
			bgimg: '',
			num: 1,
			id: '',
			showBase: false,
			goodsInfo: {},
			sku: {},
			initialSku: {}
		}
	},
	filters: {
		fixedMoney(money){
			return moneyFilter(money)
		}
	},
	methods: {
		backRoute(){
			this.$router.go(-1)
		},
		saveCart(selectedNum){
			// 将商品加入购物车
			let cartInfo = localStorage.cart ? JSON.parse(localStorage.cart) : {}
			if (this.id) {

				if (!cartInfo[this.name]) {
					cartInfo[this.name] = {
						img: this.bgimg,
						desc: this.desc,
						price: this.price,
						name: this.name,
						num: this.num,
						id: this.id
					}

				}else{
					cartInfo[this.name].num = cartInfo[this.name].num + 1
				}
				if (selectedNum) {
					cartInfo[this.name].num = selectedNum
				}

				localStorage.cart = JSON.stringify(cartInfo)

				Notify({
					message: '已加入购物车',
					duration: 1000,
					background: '#1989fa'
				});

			}
			else{
				Notify({
					message: '无此商品',
					duration: 1000
				});
			}
		},
		addCart(){
			this.saveCart()
		},
		buyClick(){
			this.showBase = !this.showBase
		},
		skuAddCart(data){
			this.saveCart(data.selectedNum)
		},
		skuBuyClick(data){
			console.log(data)
		}
	},
	async created(){
		localStorage.goodsname = this.$route.params.name ? this.$route.params.name : localStorage.goodsname
		// 设置星星大小
		let fontSize = window.innerWidth / 10
		fontSize = fontSize > 50 ? 50 : fontSize
		this.starSize = 0.4 * fontSize
		// 获取指定商品信息
		let res = await this.$axios.post(url.getGoodsInfoTest, {name: localStorage.goodsname})

		if (res.data.code === 0) {
			let data = res.data.data
			this.goodsImg = data.carouselimg
			this.value = data.commet
			this.desc = data.desc
			this.detail = data.detail
			this.name = data.name
			this.price = data.price
			this.bgimg = data.bgimg
			this.id = data._id
			this.goodsInfo = {
				title: this.name,
				picture: this.bgimg
			}
			this.sku = {
				tree: [
				{
					k: '个体', 
					v: [
					{
						id: '1', 
						name: '个体'
					}
					],
					k_s: 's1' 
				}
				],
				list: [
				{
					id: 2259,
					price: this.price * 100,
					s1: '1',
					stock_num: 9999
				}
				]
			}
			this.initialSku = {
				s1: '1',
				selectedNum: 3
			}
		}else{
			this.goodsImg = ["http://localhost:8080/img/errorimg.png"]
			this.value = 0
			this.desc = '无法获取数据'
			this.detail = []
			this.name = ''
			this.price = 0
			this.bgimg = ["http://localhost:8080/img/errorimg.png"]
			this.id = ''
			this.goodsInfo = {}
			this.sku = {}
			this.initialSku = {}
		}
	}
}
</script>

<style scoped>
.goods-area{
	margin-bottom: 50px;
}

.goods-img{
	display: block;
	width: 100%;
}

.goods-name,
.goods-desc,
.goods-price{
	margin: 0.2rem 0.3rem;
	font-size: 0.5rem;
}

.goods-desc{
	font-size: 0.4rem;
	color: #9a9a9a;
}

.goods-price{
	color: red;
}

.commet{
	display: inline-block;
	margin: 0.4rem;
	font-size: 0.4rem;
}

.goods-star{
	display: inline-block;
}
</style>