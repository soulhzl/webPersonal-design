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
					<router-link :to="{name: 'goodsmess', params: {name: item.name}}" tag="div">
						<img v-lazy="item.bgimg" alt='' class="goods-img">
						<div class="goods-name">{{item.name}}</div>
						<div class="goods-price">￥{{item.price | fixedMoney}}</div>
					</router-link>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
import url from '@/serviceAPI.config.js'
import { moneyFilter } from '../filter/moneyFilter'
export default{
	name: 'categorypage',
	data(){
		return {
			nowgoods: []
		}
	},
	methods: {
		backRoute(){
			// 返回路由
			this.$router.go(-1)
		},
		async getCategoryGoods(){
			// 保存路由参数
			localStorage.sort = this.$route.params.sort ? this.$route.params.sort : localStorage.sort
			
			// 获取分类商品
			let res = await this.$axios.post(url.getCategoryGoodsTest, {sort: localStorage.sort})

			if (res.data.code === 0) {
				this.nowgoods = res.data.data
			}else{
				this.nowgoods = []
			}
		}
	},
	filters: {
		fixedMoney(money){
			return moneyFilter(money)
		}
	},
	created(){
		this.getCategoryGoods()
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