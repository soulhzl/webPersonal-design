<template>
	<div class="home">
		<!-- searchbar-area -->
		<div class="search-bar">
			<van-row gutter="5">
				<van-col span="3" class="center-wrapper"><span class="iconfont location-icon">&#xe611;</span></van-col>
				<van-col span="16">
					<input type="text" class="search-input" placeholder="请输入搜索内容" />
				</van-col>
				<van-col span="5" class="center-wrapper"><van-button size="mini">查找</van-button></van-col>

			</van-row>
		</div>
		<!-- carousel-area -->
		<div class="swiper-area">
			<van-swipe :autoplay='1000'>
				<van-swipe-item v-for='(item, index) in carouselImg' :key='index'>
					<img v-lazy="item.image" alt='' class="carousel-img">
				</van-swipe-item>
			</van-swipe>
		</div>
		<!-- type-bar-area -->
		<div class="type-bar">
			<div v-for='(cate, index) in category' :key='index'>
				<img v-lazy='cate.image' class="category-img" alt=''/>
				<span class="category-word">{{cate.mallCategoryName}}</span>
			</div>
		</div>
		<!-- AD-banner-area -->
		<div class="ad-banner">
			<img v-lazy="adBanner" class="ad-banner-img">
		</div>
		<!-- recommend-area -->
		<div class="recommend-area">
			<div class="recommend-title">商品推荐</div>
			<div class="recommend-body">
				<swiper :options='swiperOption'>
					<swiper-slide v-for="(item, key) in recommend" :key="key">
						<div class="recommend-item">
							<img v-lazy="item.image" alt="" class="recommend-img" >
							<div>{{item.goodsName}}</div>
							<div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<!-- floor-area -->
		<floor :floorData='floor1' :floorTitle='floorName.floor1'></floor>
		<floor :floorData='floor2' :floorTitle='floorName.floor2'></floor>
		<floor :floorData='floor3' :floorTitle='floorName.floor3'></floor>
		<!-- hot-area -->
		<div class="hot-area">
			<div class="hot-title">热卖商品</div>
			<div class="hot-goods">
				<van-list>
					<van-row gutter="20">
						<van-col span="12" v-for="( item, index) in hotGoods" :key="index">
							<goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
						</van-col>
					</van-row>
				</van-list>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import floor from '../component/floorComponent'
import goodsInfo from '../component/goodsInfoComponent'
import {toMoney} from '@/filter/moneyFilter'
import url from '@/serviceAPI.config'
export default {
	name: 'home',
	data (){
		return {
			swiperOption: {
				slidesPerView: 3
			},
			carouselImg: [],
			category: [],
			recommend: [],
			floorName: {},
			floor1: [],
			floor2: [],
			floor3: [],
			adBanner: "",
			hotGoods: []
		}
	},
	components: {
		swiper,
		swiperSlide,
		floor,
		goodsInfo
	},
	filters:{
		moneyFilter(money){
			return toMoney(money)
		}
	},
	created(){
		// 加载显示数据
		axios({
			url: url.getShoppingMallInfo,
			method: 'get'
		}).then((res) => {
			if (res.status == 200) {
				const data = res.data.data;
				this.carouselImg = data.slides
				this.category = data.category
				this.adBanner = data.advertesPicture.PICTURE_ADDRESS
				this.recommend = data.recommend
				this.floorName = data.floorName
				this.floor1 = data.floor1
				this.floor2 = data.floor2
				this.floor3 = data.floor3
				this.hotGoods = data.hotGoods
				console.log(data)
			}
		}).catch((err) => {
			console.log(err)
		})
	}
}
</script>

<style scoped>
.search-bar{
	overflow: hidden;
	height: 2.2rem;
	background-color: #1CA1E2;
	line-height: 2.2rem;
}

.center-wrapper{
	text-align: center;
}

.location-icon{
	font-size: 1.3rem;
	color: white;
}

.search-input{
	width: 100%;
	height: 1.3rem;
	border-top:0px;
	border-left:0px;
	border-right:0px;
	border-bottom: 1px solid 1px !important ;
	background-color: #1CA1E2;
	color:#fff;
}

.swiper-area{
	overflow: hidden;
	max-height: 9rem;
}

.carousel-img{
	width: 100%;
}

.type-bar{
	display: flex;
	justify-content: space-between;
	margin: 0.7rem 0;
}

.type-bar div{
	flex: 1;
	text-align: center;
}

.category-img{
	width: 80%;
}

.category-word{
	display: block;
	font-size: 0.5rem;
}

.ad-banner{
	background-color: #eee;
}

.ad-banner-img{
	width: 100%;
}

.hot-area{
	margin-top: 0.3rem;
	text-align: center;
	font-size:0.85rem;
	color: #1CA1E2;
}

.recommend-area{
	margin-top: 0.3rem;
	background-color: #fff;
}

.recommend-title{
	padding: 0.2rem;
	border-bottom: 1px solid #eee;
	font-size: 0.8rem;
	color: #1CA1E2;
}

.recommend-item{
	width: 99%;
	font-size: 0.3rem;
	text-align: center;
}

.recommend-img{
	width: 80%;
}
</style>
