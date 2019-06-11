<template>
	<div>
		<div class="navbar-div">
			<van-nav-bar title="购物车" /> 
		</div>
		<div class="card-title">
			<van-button size="small" type="danger" @click="clearCart" plain>清空购物车</van-button>
		</div>
		<div class="cart-list">
			<div class="pang-row" v-for="(item,index) in cartInfo" :key="index">
				<div class="pang-img"><img :src="item.image" width="100%" /></div>
				<div class="pang-text">
					<div class="pang-goods-name">{{item.Name}}</div>

					<div class="pang-control">
						<van-stepper v-model="item.count" />
					</div>
				</div>
				<div class="pang-goods-price">
					<div>
						￥{{item.price |moneyFilter}}
					</div>
					<div>
						x{{item.count}}
					</div>
					<div class="allPrice">
						￥{{item.price*item.count | moneyFilter}}
					</div>
				</div>
			</div>
		</div>
		<div class="totalMoney">
			商品总价：￥ {{totalMoney | moneyFilter}}
		</div>
	</div>
</template>

<script>
import {toMoney} from '@/filter/moneyFilter'
export default {
	name: 'cart',
	data(){
		return {
			cartInfo: [],
			isEmpty: false
		}
	},
	methods: {
		getCartInfo(){
			if (localStorage.cartInfo) {
				this.cartInfo = JSON.parse(localStorage.cartInfo)
			}
			this.isEmpty = this.cartInfo.length > 0 ? true : false
		},
		clearCart(){
			localStorage.removeItem('cartInfo')
			this.cartInfo=[]
		}
	},
	filters: {
		moneyFilter(money){
			return toMoney(money)
		}
	},
	computed: {
		totalMoney(){
			let allMoney = 0
            this.cartInfo.forEach((item,index) => {
               allMoney += item.price*item.count
            });

            localStorage.cartInfo=JSON.stringify(this.cartInfo)

            return allMoney
		}
	},
	created(){
		this.getCartInfo()
	}
}
</script>

<style scoped>
.cart-list{
	background-color: #fff;
}

.pang-row{
	display: flex;
	flex-direction: row;
	flex-wrap:nowrap;
	padding:0.5rem;
	border-bottom:1px solid #E4E7ED;
	font-size:0.85rem;
}

.pang-img{
	flex:6;
}

.pang-text{
	flex:14;
	padding-left:10px;
}

.pang-control{
	padding-top: 10px;
}

.pang-goods-price{
	flex:4;
	text-align: right;
}

.totalMoney{
	padding: 5px;
	border-bottom:1px solid #E4E7ED;
	background-color: #fff;
	text-align: right;
}

.card-title{
	height: 2rem;
	padding:5px;
	border-bottom:1px solid #E4E7ED;
	background-color: #fff;
	line-height:2rem;
	text-align: right;
}
</style>