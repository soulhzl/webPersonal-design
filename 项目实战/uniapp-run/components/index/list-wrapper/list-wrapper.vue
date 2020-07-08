<template>
	<view>
		<view class="list-wrapper animate__animated animate__fadeInLeft">
			<view class="header c-flex c-flex-spb">
				<view class="header-left c-flex-jcc">
					<image class="header-left-image" :src="item.userPic"></image>
					<view>{{item.userName}}</view>
				</view>
				<view class="header-right" v-show="!isAdd" @tap="guanzhu">+关注</view>
			</view>
			<view class="title" @tap="openDetail">
				{{item.title}}
			</view>
			<view class="image c-flex-jcc" @tap="openDetail">
				<image :src="item.imageUrl" mode="widthFix"></image>
				<template v-if="item.type == 'video'">
					<view class="icon iconfont icon-bofang image-bofang"></view>
					<view class="image-times">{{item.videoNum}}次 {{item.videoTime}}</view>
				</template>
			</view>
			<view class="status c-flex c-flex-spb">
				<view class="status-zan c-flex-jcc">
						<view class="status-zan-left icon iconfont icon-valentine_-cupid-love-heart-god1" :class="{active: smileOrSad.type == 1}" @tap="caozuo('smile')">{{smileOrSad.smileNum}}</view>
						<view class="status-zan-right icon iconfont icon-valentine_-cupid-love-heart-god" :class="{active: smileOrSad.type == 2}" @tap="caozuo('sad')">{{smileOrSad.sadNum}}</view>
				</view>
				<view class="status-share c-flex-jcc">
						<view class="icon iconfont icon-pinglun status-share-left">{{item.commentNum}}</view>
						<view class="icon iconfont icon-fenxiang status-share-right c-flex-jcc">{{item.shareNum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		data(){
			return {
					isAdd: this.item.isAdd,
					smileOrSad: this.item.smileOrSad
			}
		},
		methods: {
			guanzhu() {
				this.isAdd = !this.isAdd
				uni.showToast({
					title: "关注成功"
				})
			},
			caozuo(type){
				switch(type){
					case 'smile':
					if(this.smileOrSad.type == 1){
						return
					}
					this.smileOrSad.smileNum++
					if(this.smileOrSad.type == 2){
						this.smileOrSad.sadNum--
					}
					this.smileOrSad.type = 1
					break;
					case 'sad':
					if(this.smileOrSad.type == 2){
						return
					}
					this.smileOrSad.sadNum++
					if(this.smileOrSad.type == 1){
						this.smileOrSad.smileNum--
					}
					this.smileOrSad.type = 2
					break;
				}
			},
			openDetail(){
				console.log(123)
			}
		}
	}
</script>

<style scoped>
	.list-wrapper {
		border-bottom: 1px solid #eee;
	}

	.list-wrapper .header-left,
	.list-wrapper .header-right {
		margin: 15upx;
	}

	.list-wrapper .header-left view {
		color: #777;
		font-size: 30upx;
	}

	.list-wrapper .header-left-image {
		width: 60upx;
		height: 60upx;
		margin-right: 10upx;
		border-radius: 5upx;
	}

	.list-wrapper .header-right {
		padding: 4upx 16upx;
		background-color: #eee;
		border-radius: 10upx;
	}

	.list-wrapper .title {
		margin-left: 15upx;
		font-size: 35upx;
	}

	.list-wrapper .image {
		position: relative;
	}

	.list-wrapper .image {
		width: 100%;
	}
	
	.list-wrapper .image image {
		width: 90%;
		border-radius: 20upx;
	}

	.list-wrapper .image-bofang,
	.list-wrapper .image-times {
		position: absolute;
	}

	.list-wrapper .image-bofang {
		font-size: 140upx;
		color: white;
	}

	.list-wrapper .image-times {
		bottom: 20upx;
		right: 50upx;
		padding: 5upx 20upx;
		border-radius: 25upx;
		background-color: rgba(33, 33, 33, 0.4);
		color: white;
	}

	.list-wrapper .status {
		color: #777;
	}

	.list-wrapper .status-zan,
	.list-wrapper .status-share {
		margin: 15upx;
	}

	.list-wrapper .status-zan-left,
	.list-wrapper .status-share-left {
		margin-right: 15upx;
	}

	.list-wrapper .status .active {
		color: red;
	}
</style>
