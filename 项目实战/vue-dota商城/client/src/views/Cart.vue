<template>
	<div>
		<van-nav-bar
		title="我的购物车"
		left-arrow
		@click-left="backRoute"
		/>
		<div class="cart-area">
			<van-card v-for="(item, k) in cartList" :key='k'
			num="2"
			:price="item.price | fixedMoney"
			:desc="item.desc"  
			:title="item.title"
			:thumb="item.img"
			/>
		</div>
		<van-submit-bar
		:price="3050"
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
			cartList: [{img: 'http://localhost:8080/good-1.jpg', price: 2, desc: '描述1', title: '标题1'}, {img: 'http://localhost:8080/good-2.jpg', price: 3, desc: '描述2', title: '标题2'}]
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
	}
}
</script>

<style scoped>
.cart-area{
	margin-top: 0.5rem;
}
</style>