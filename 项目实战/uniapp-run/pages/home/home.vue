<template>
	<view>
		<uni-nav-bar :statusBar="true" @clickRight="clickRight">
			<view slot="left">
				<view class="nav-bar-icon">
					<view class="icon iconfont icon-bofang image-xiazai"></view>
				</view>
			</view>
			<view class="c-flex-jcc nav-bar-middle">
				<block v-for="(item, index) in tabList" :key="index">
					<view :class="{'tab-active': index == tabIndex}" @tap="clickTab(index)">
						{{item.text}}
						<view v-if="index == tabIndex" class="nav-bar-middle-line"></view>
					</view>
				</block>
			</view>
			<view slot="right">
				<view class="nav-bar-icon">
					<view class="icon iconfont icon-bofang image-xiazai"></view>
				</view>
			</view>
		</uni-nav-bar>
		<view class="guanzhu-wrapper c-flex">
			<view class="guanzhu-left">
				<image mode="widthFix" src="../../static/跑跑.jpg"></image>
			</view>
			<view class="guanzhu-right">
				<view class="guanzhu-right-one c-flex-jcc c-flex-spb">
					<view class="c-flex-jcc right-one-left">
						<view>先生</view>
						<view class="icon iconfont icon-bofang image-xiazai">12</view>
					</view>
					<view class="c-flex-jcc right-one-right">
						<view>+关注</view>
						<view>X</view>
					</view>
				</view>
				<view class="guanzhu-right-two">
					我是标题
				</view>
				<view class="guanzhu-right-three c-flex-jcc">
					<!-- <image class='mode1' src="../../static/bg.jpg" mode="widthFix"></image>
					<view class="icon iconfont icon-bofang image-bofang"></view>
					<view class="image-times">1次播放 20:00</view> -->
					<view class="c-flex-jcc">
						<image class="mode2" mode="widthFix" src="../../static/bg.jpg"></image>
						<view>跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑跑</view>
					</view>
				</view>
				<view class="guanzhu-right-four c-flex-jcc c-flex-spb">
					<view class="c-flex-jcc guanzhu-right-four-left">
						<view>深圳</view> 
						<view>龙岗</view>
					</view>
					<view class="c-flex-jcc guanzhu-right-four-right">
						<view class="c-flex-jcc">
							<view class="icon iconfont icon-valentine_-cupid-love-heart-god1"></view>
							<view>0</view>
						</view>
						<view class="c-flex-jcc">
							<view class="icon iconfont icon-valentine_-cupid-love-heart-god1"></view>
							<view>0</view>
						</view>
						<view class="c-flex-jcc">
							<view class="icon iconfont icon-valentine_-cupid-love-heart-god1"></view>
							<view>0</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/index/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				tabIndex: 0,
				tabList: [{
					index: 0,
					text: '关注'
				}, {
					index: 1,
					text: '话题'
				}]
			}
		},
		components: {
			uniNavBar
		},
		methods: {
			clickTab(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style scoped>
	.nav-bar-icon view {
		font-size: 60upx !important;
		margin-left: 20upx;
	}

	.nav-bar-middle {
		margin: 0 auto;
	}

	.nav-bar-middle>view {
		position: relative;
		margin: 15upx;
		font-size: 30upx;
		color: #aaa;
	}

	.nav-bar-middle-line {
		position: absolute;
		bottom: -10upx;
		width: 100%;
		height: 10upx;
		border-radius: 20upx;
		background-color: orange;
	}

	.tab-active {
		color: black !important;
		font-weight: bold;
	}

	.guanzhu-left {
		margin: 25upx 10upx 10upx 30upx;
	}

	.guanzhu-left image {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}

	.guanzhu-right {
		width: 100%;
		border-bottom: 1px solid #eee;
	}

	.guanzhu-right-one view view {
		margin: 10upx;
	}

	.guanzhu-right-one .right-one-left view:nth-of-type(1) {
		font-size: 30upx;
		color: #777;
	}
	
	.guanzhu-right-one .right-one-left view:nth-of-type(2){
		height: 14upx;
		line-height: 14upx;
		padding: 8upx;
		background-color: #66B3FF;
		border-radius: 20upx;
		font-size: 4upx;
		color: white;
	}
	
	.guanzhu-right-one .right-one-right view:nth-of-type(1){
			padding: 4upx 16upx;
			background-color: #eee;
	}
		
	.guanzhu-right-one .right-one-right view:nth-of-type(2){
		color: #ccc;
	}
	
	.guanzhu-right-two{
		font-size: 35upx;
	}
	
	.guanzhu-right-three{
		position: relative;
		width: 100%;
		background-color: #eee;
	}
	
	.guanzhu-right-three .mode1{
		width: 100%;
		border-radius: 20upx;
	}
	
	.guanzhu-right-three .image-bofang,
	.guanzhu-right-three .image-times {
		position: absolute;
	}
	
	.guanzhu-right-three .image-bofang {
		font-size: 140upx;
		color: white;
	}
	
	.guanzhu-right-three .image-times {
		bottom: 20upx;
		right: 20upx;
		padding: 5upx 20upx;
		border-radius: 25upx;
		background-color: rgba(33, 33, 33, 0.4);
		color: white;
	}
	
	.guanzhu-right-three .mode2{
		width: 90%;
		flex: 1;
		margin: 10upx;
		border-radius: 20upx;
	}
	
	.guanzhu-right-three view{
		flex: 3;
		width: 100%;
	}
	
	.guanzhu-right-four{
		color: #aaa;
	}
	
	.guanzhu-right-four .guanzhu-right-four-left view{
		margin: 0 10upx;
	}
	
	.guanzhu-right-four .guanzhu-right-four-right view{
		margin: 0 5upx;
	}
</style>
