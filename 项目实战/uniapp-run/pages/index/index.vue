<template>
	<view class="content">
		<swiper-tab :tabBars='tabBars' :tabIndex="tabIndex" @ontabtab="ontabtab"></swiper-tab>
		
		<view class="uni-tab-bar">
		<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}" :current="tabIndex" @change="onswipertab">
			<swiper-item v-for="(sitem, sindex) in swiperList" :key="sindex">
				<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(sindex)">
					<template v-if="sitem.list.length > 0">
					<block v-for="(item, index) in sitem.list" :key="index">
					<list-wrapper :item="item" />
					</block>
					<load-more :text="sitem.loadText"></load-more>
					</template>
					<template v-else>
						<not-found></not-found>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		</view>
	</view>
</template>

<script>
	import listWrapper from '../../components/index/list-wrapper/list-wrapper'
	import swiperTab from '../../components/index/swiper-tab/swiper-tab'
	import loadMore from '../../components/common/load-more'
	import notFound from '../../components/common/not-found'
	export default {
		data() {
			return {
				swiperHeight: 0,
				tabIndex: 0,
				swiperList: [
					{
						loadText: '下拉加载更多',
						list: [{
							userPic: '/static/home.png',
							userName: '昵称',
							isAdd: true,
							title: '我是标题',
							type: 'image',
							imageUrl: '/static/kai.jpg',
							videoNum: 0,
							videoTime: '20:00',
							smileOrSad: {
								type: 0,
								smileNum: 0,
								sadNum: 0
							},
							commentNum: 0,
							shareNum: 0
						}, {
							userPic: '/static/home.png',
							userName: '昵称',
							isAdd: false,
							title: '我是标题',
							type: 'video',
							imageUrl: '/static/bg.jpg',
							videoNum: 0,
							videoTime: '20:00',
							smileOrSad: {
								type: 0,
								smileNum: 0,
								sadNum: 0
							},
							commentNum: 0,
							shareNum: 0
						}]
					},{
						loadText: '下拉加载更多',
						list: [{
							userPic: '/static/home.png',
							userName: '昵称',
							isAdd: true,
							title: '我是标题',
							type: 'image',
							imageUrl: '/static/bg.jpg',
							videoNum: 0,
							videoTime: '20:00',
							smileOrSad: {
								type: 0,
								smileNum: 0,
								sadNum: 0
							},
							commentNum: 0,
							shareNum: 0
						}]
					},{
						loadText: '下拉加载更多',
						list: [{
							userPic: '/static/home.png',
							userName: '昵称',
							isAdd: true,
							title: '我是标题',
							type: 'image',
							imageUrl: '/static/kai.jpg',
							videoNum: 0,
							videoTime: '20:00',
							smileOrSad: {
								type: 0,
								smileNum: 0,
								sadNum: 0
							},
							commentNum: 0,
							shareNum: 0
						}, {
							userPic: '/static/home.png',
							userName: '昵称',
							isAdd: false,
							title: '我是标题',
							type: 'video',
							imageUrl: '/static/bg.jpg',
							videoNum: 0,
							videoTime: '20:00',
							smileOrSad: {
								type: 0,
								smileNum: 0,
								sadNum: 0
							},
							commentNum: 0,
							shareNum: 0
						}]
					},{
						loadText: '下拉加载更多',
						list: []
					},{
						loadText: '下拉加载更多',
						list: []
					},{
						loadText: '下拉加载更多',
						list: []
					},{
						loadText: '下拉加载更多',
						list: []
					}
				],
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperHeight = height
				}
			})
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:"../search/search"
			})
		},
		onNavigationBarButtonTap(e){
				switch(e.index){
					case 0:
					break;
					case 1:
					uni.navigateTo({
						url:"../publish/publish"
					})
					break;
				}
		},
		components: {
			listWrapper,
			swiperTab,
			loadMore,
			notFound
		},
		methods: {
			ontabtab(index) {
				this.tabIndex = index
			},
			onswipertab(e){
				this.tabIndex = e.detail.current
			},
			loadMore(index){
				if(this.swiperList[index].loadText != '下拉加载更多' || this.swiperList[this.tabIndex].list.length == 0){
					return
				}
				this.swiperList[index].loadText = '加载中。。。'
				setTimeout(() => {
					this.swiperList[index].list.push({
							userPic: '/static/home.png',
							userName: '昵称',
							isAdd: true,
							title: '我是标题',
							type: 'image',
							imageUrl: '/static/kai.jpg',
							videoNum: 0,
							videoTime: '20:00',
							smileOrSad: {
								type: 0,
								smileNum: 0,
								sadNum: 0
							},
							commentNum: 0,
							shareNum: 0
						})
						this.swiperList[index].loadText = '下拉加载更多'
				}, 1000)
			}
		}
	}
</script>

<style>
</style>
