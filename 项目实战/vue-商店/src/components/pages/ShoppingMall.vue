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
	</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
	name: 'home',
	data (){
		return {
			carouselImg: [],
			category: [],
			adBanner: ""
		}
	},
	created(){
		// 加载显示数据
		axios({
			url: 'http://localhost:8080/ShoppingMall.json',
			method: 'get'
		}).then((res) => {
			if (res.status == 200) {
				const data = res.data.data;
				this.carouselImg = data.slides
				this.category = data.category
				this.adBanner = data.advertesPicture.PICTURE_ADDRESS
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
</style>
