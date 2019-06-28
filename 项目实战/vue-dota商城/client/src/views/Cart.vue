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
			/>
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
			cartList: [],
			totalPrice: 0
		}
	},
	methods: {
		backRoute(){
			this.$router.go(-1)
		}
	},
	filters: {
		fixedMoney(money){
			return moneyFilter(money)
		}
	},
	mounted(){
		// 获取购物车列表
		let cart = JSON.parse(localStorage.cart)
		this.cartList = cart

		for(let i in this.cartList){
			this.totalPrice += this.cartList[i].num * this.cartList[i].price
		}

		this.totalPrice *= 100
	}
}
</script>

<style scoped>
.cart-area{
	margin-top: 0.5rem;
}
</style>