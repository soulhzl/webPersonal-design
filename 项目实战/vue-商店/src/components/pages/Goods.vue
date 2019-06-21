<template>
	<div>
		<div class="goods-navbar">
			<van-nav-bar
			title="商品详情"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
			/>
		</div>
		<div class="topimage-div">
			<img :src="goodsInfo.IMAGE1" class="goods-img" />
		</div>
		<div class="goods-name">{{goodsInfo.NAME}}</div>
		<div class="goods-price">价格：{{goodsInfo.PRESENT_PRICE | moneyFilter}}</div>
		<div>
			<van-tabs swipeable sticky>
				<van-tab title="商品详情">
					<div class="detail" v-html="goodsInfo.DETAIL"></div>
				</van-tab>
				<van-tab title="评价">
					正在制作中
				</van-tab>
			</van-tabs>

		</div>
		<div class="goods-bottom">
			<div>
				<van-button size="large" type="primary" @click="addGoodsToCart">加入购物车</van-button>
			</div>
			<div>
				<van-button size="large" type="danger">直接购买</van-button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
import url from '@/serviceAPI.config'
import {toMoney} from '@/filter/moneyFilter'
export default{
	name: 'goods',
	data(){
		return {
			goodsId: '',
			goodsInfo: {}
		}
	},
	methods: {
		async getInfo(){
			let res = await axios({
				url: url.getDetailGoodsInfo,
				method: 'post',
				data: {
					goodsId: this.goodsId
				}
			})

			if (res.data.code == 200 && res.data.message != '获取不到数据') {
				this.goodsInfo = res.data.message
			}else{
				Toast('服务器错误，数据取得失败')
			}

		},
		onClickLeft(){
			this.$router.go(-1)
		},
		addGoodsToCart(){
			let cartInfo = localStorage.cartInfo ? JSON.parse(localStorage.cartInfo) : []

			let isHaveGoods=cartInfo.find(cart=>cart.goodsId==this.goodsId)

			if(!isHaveGoods){
				let newGoodsInfo={
					goodsId:this.goodsInfo.ID,
					Name:this.goodsInfo.NAME,
					price:this.goodsInfo.PRESENT_PRICE,
					image:this.goodsInfo.IMAGE1,
					count:1
				}
				cartInfo.push(newGoodsInfo) 
				localStorage.cartInfo=JSON.stringify(cartInfo) 
				Toast.success('添加成功')

			}else{
				Toast.success('已有此商品')
			}
			this.$router.push({name:'Cart'})  
		}
	},
	filters: {
		moneyFilter(money){
			return toMoney(money)
		}
	},
	created(){
		this.goodsId = this.$route.query.goodsId ? this.$route.query.goodsId : this.$route.params.goodsId
		this.getInfo()
	}
}
</script>

<style scoped>
.goods-img{
	width: 100%;
}

.detail{
	font-size:0px;
}

.goods-name{
	background-color: #fff;
}

.goods-price{
	background-color: #fff;
}

.goods-bottom{
	display: flex;
	flex-direction: row;
	flex-flow: nowrap;
	position: fixed;
	bottom:0px;
	left:0px;
	width:100%;
	background-color: #FFF;
}

.goods-bottom > div{
	flex:1;
	padding:5px;
}
</style>