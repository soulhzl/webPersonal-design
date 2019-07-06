<template>
	<div>
		<van-nav-bar
		title="我的购物车"
		left-arrow
		@click-left="backRoute"
		/>
		<div class="cart-area">
			<van-card v-for="(item, k) in cartList" :key='k'
			:num="item.num"
			:price="item.price | fixedMoney"
			:desc="item.desc"  
			:title="item.name"
			:thumb="item.img"
			>
			<div slot="footer">
				<van-button size="mini" @click="subNum(item.id)">-</van-button>
				<van-button size="mini" @click="deleteGoods(item.id)">删除</van-button>
				<van-button size="mini" @click="addNum(item.id)">+</van-button>
			</div>
		</van-card>
	</div>
	<van-submit-bar
	:price="totalPrice"
	button-text="提交订单"
	/>
</div>
</template>

<script>
import { moneyFilter } from '../filter/moneyFilter'
export default{
	name: 'cart',
	data(){
		return {
			cartList: {},
			totalPrice: 0
		}
	},
	methods: {
		backRoute(){
			// 返回路由
			this.$router.go(-1)
		},
		subNum(id){
			// 减商品数量
			if (this.cartList[id].num == 1) {
				this.deleteGoods(id)
			}else{
				this.cartList[id].num = this.cartList[id].num - 1
				localStorage.cart = JSON.stringify(this.cartList)
				this.totalPrice -= this.cartList[id].price * 100
			}
		},
		addNum(id){
			// 加商品数量
			this.cartList[id].num = this.cartList[id].num + 1
			localStorage.cart = JSON.stringify(this.cartList)
			this.totalPrice += this.cartList[id].price * 100
		},
		deleteGoods(id){
			// 删除商品
			this.totalPrice -= this.cartList[id].num * this.cartList[id].price * 100
			this.$delete(this.cartList, id)
			localStorage.cart = JSON.stringify(this.cartList)
		},
		getGoodsInfo(){
			// 获取购物车列表
			let cart = localStorage.cart ? JSON.parse(localStorage.cart) : []
			this.cartList = cart
			
			this.caculateMoney()
		},
		caculateMoney(){
			// 计算总金额
			this.totalPrice = 0
			for(let i in this.cartList){
				this.totalPrice += this.cartList[i].num * this.cartList[i].price
			}

			this.totalPrice *= 100
		}
	},
	filters: {
		fixedMoney(money){
			return moneyFilter(money)
		}
	},
	activated(){
		this.getGoodsInfo()
	},
	mounted(){
		this.getGoodsInfo()
	}
}
</script>

<style scoped>
.cart-area{
	margin-top: 0.5rem;
}
</style>