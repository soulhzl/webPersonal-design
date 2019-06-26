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
				<div class="goods-name">扭蛋手办</div>
				<div class="goods-desc">描述</div>
				<div class="goods-price">￥{{123 | fixedMoney}}</div>
			</div>
			<van-tabs swipeable sticky>
				<van-tab title="详情"><img src="http://localhost:8080/good-1-4.jpg" alt="" class='goods-img'></van-tab>
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
			/>
			<van-goods-action-button
			type="danger"
			text="立即购买"
			/>
		</van-goods-action>
	</div>
</template>

<script>
import { moneyFilter } from '../filter/moneyFilter'
export default{
	name: 'goods',
	data(){
		return {
			value: 5,
			goodsImg: ['http://localhost:8080/good-1.jpg', 'http://localhost:8080/good-1-1.jpg', 'http://localhost:8080/good-1-2.jpg', 'http://localhost:8080/good-1-3.jpg'],
			starSize: 0
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
		}
	},
	mounted(){
		// 设置星星大小
		let fontSize = window.innerWidth / 10
		fontSize = fontSize > 50 ? 50 : fontSize
		this.starSize = 0.4 * fontSize
	}
}
</script>

<style scoped>
.goods-area{
	margin-bottom: 50px;
}

.goods-img{
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