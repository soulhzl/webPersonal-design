<template>
	<div>
		<van-nav-bar
		title="详情"
		left-arrow
		@click-left="backRoute"
		/>
		<div class="goods-wrapper">
			<van-row>
				<van-col v-for='(item, k) in nowgoods' :key='k' span="12">
					<router-link to="goods" tag="div">
						<img v-lazy="item.img" alt='' class="goods-img">
						<div class="goods-name">{{item.name}}</div>
						<div class="goods-price">￥{{item.price | fixedMoney}}</div>
					</router-link>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
import { moneyFilter } from '../filter/moneyFilter'
export default{
	name: 'categorypage',
	data(){
		return {
			nowgoods: [{img: 'http://localhost:8080/good-1.jpg', name: '冰女玩偶', price: 123},{img: 'http://localhost:8080/good-2.jpg', name: '扭蛋', price: 234},{img: 'http://localhost:8080/good-3.jpg', name: 'TI玩偶', price: 345},{img: 'http://localhost:8080/good-4.jpg', name: 'TI扭蛋', price: 456},{img: 'http://localhost:8080/good-5.jpg', name: '女王', price: 567},{img: 'http://localhost:8080/good-6.jpg', name: '龙骑', price: 678}]
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
.goods-wrapper{
	margin-top: 0.5rem;
}

.goods-img{
	width: 100%;
}

.goods-price{
	color: red;
}

.goods-name,
.goods-price{
	text-align: center;
	font-size: 0.4rem;
}
</style>