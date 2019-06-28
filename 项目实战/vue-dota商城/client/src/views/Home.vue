<template>
	<div class="home-wrapper">
		<div class="search-bar">
			<van-row>
				<van-col span="2"><img src="../assets/images/logo.png" alt=""></van-col>
				<van-col span="5"><img src="../assets/images/shop.png" alt=""></van-col>
				<van-col span="13"><van-field left-icon="search" class="search-input" v-model="searchvalue" placeholder="请输入搜索内容" /></van-col>
				<van-col span="2"><router-link to="member"><van-icon name="contact" class="search-user"/></router-link></van-col>
			</van-row>
		</div>
		<div class="swipe-area">
			<van-swipe :autoplay="3000" :show-indicators="false" loop>
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<router-link :to="{name: 'goodsmess', params: {name: image.name}}"><img v-lazy="image.img" alt="" /></router-link>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="new-goods">
			<div class="new-title" :style="{backgroundImage: newgoodsbg}">新品销售</div>
			<swiper :options="swiperOption">
				<swiper-slide v-for='(item, k) in carouselList' :key='k'>
					<div>
						<router-link :to="{name: 'goodsmess', params: {name: item.name1}}"><img v-lazy="item.img1" alt='' class='new-goods-img'></router-link>
						<router-link :to="{name: 'goodsmess', params: {name: item.name2}}"><img v-lazy="item.img2" alt='' class='new-goods-img'></router-link>
						<router-link :to="{name: 'goodsmess', params: {name: item.name3}}"><img v-lazy="item.img3" alt='' class='new-goods-img'></router-link>
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="now-goods">
			<div class="now-title" :style="{backgroundImage: nowgoodsbg}">近期销售</div>
			<van-row>
				<van-col v-for='(item, k) in nowgoods' :key='k' span="12">
					<router-link :to="{name: 'goodsmess', params: {name: item.name}}" tag="div">
						<img v-lazy="item.img" alt=''>
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
	name: 'home',
	data(){
		return {
			scrollTop: 0,
			searchvalue: '',
			images: [],
			newgoodsbg: "url(" + require('../assets/images/bg-2.jpg') + ")",
			nowgoodsbg: "url(" + require('../assets/images/bg-1.jpg') + ")",
			swiperOption: {
				freeMode: true
			},
			carouselList:[],
			nowgoods: []
		}
	},
	filters: {
		fixedMoney(money){
			return moneyFilter(money)
		}
	},
	beforeRouteLeave (to, from, next) {
		// 记录页面滚动位置
		this.scrollTop = document.getElementById('app').scrollTop
		next()
	},
	beforeRouteEnter (to, from, next) {
		// 回到记录的滚动位置处
		next(vm => {
			document.getElementById('app').scrollTop = vm.scrollTop
		})
	},
	async mounted(){
		// 初始化首页信息
		let res = await this.$axios.get(url.home)
		let data = res.data.data
		this.images = data.homeList
		this.carouselList = data.carouselList
		this.nowgoods = data.nowgoodsList
	}
}
</script>

<style scoped>
/*搜索框*/
.search-bar{
	overflow: hidden;
	height: 1rem;
	line-height: 1rem;
	background-color: #e32332;
}

.search-bar img{
	width: 80%;
	margin-left: 0.1rem;
}

.search-input{
	height: 0.8rem;
	line-height: 0.8rem;
	margin-top: 0.1rem;
	margin-left: 0.3rem;
}

.van-cell{
	padding: 0 0.3rem;
}

.search-user{
	padding-left: 0.5rem;
	font-size: 0.7rem;
	color: white;
}

.swipe-area img{
	display: block;
	width: 100%;
}

.new-title,
.now-title{
	overflow: hidden;
	width: 100%;
	height: 0.9rem;
	line-height: 0.9rem;
	background-repeat: no-repeat;
	background-size:100%;
	font-size: 0.4rem;
	font-weight: bold;
	text-align: center;
	color: #648cde;
}

.new-goods-img{
	float: left;
	width: 33.3%;
}

.now-goods img{
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