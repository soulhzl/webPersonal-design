<template>
	<view>
		<uni-nav-bar :statusBar="true" rightText="发布" leftIcon="back" @clickLeft="clickLeft" @clickRight="clickRight">
			<view class="c-margin-auto c-flex-jcc" @tap="selectMode">
				{{mode}}
				<view class="icon iconfont icon-bofang image-xiazai"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="输入吧~~"></textarea>
		</view>
		<upload-image @upload="upload"></upload-image>
	</view>
</template>

<script>
	let listItem = ['所有人可见', '仅自己可见']
	import uniNavBar from '../../components/index/uni-nav-bar/uni-nav-bar.vue'
	import uploadImage from '../../components/index/upload-image/upload-image.vue'
	export default {
		data() {
			return {
				isGet: true,
				mode: '所有人可见',
				text: '',
				imageList: []
			}
		},
		components: {
			uniNavBar,
			uploadImage
		},
		onBackPress() {
			if(!this.text && this.imageList.length < 1){
				return
			}
			if (this.isGet) {
				this.saveText()
				return true
			}
		},
		methods: {
			clickLeft() {
				uni.navigateBack()
			},
			clickRight() {
				console.log('submit')
			},
			selectMode() {
				uni.showActionSheet({
					itemList: listItem,
					success: (res) => {
						this.mode = listItem[res.tapIndex]
					}
				})
			},
			upload(list) {
				this.imageList = list
			},
			saveText(){
				uni.showModal({
					content: '是否保存内容？',
					confirmText: '保存',
					complete: (e) => {
						if (e.confirm) {
				
						}else{
							
						}
						this.isGet = false
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style scoped>
	.uni-textarea {
		border: 1upx solid #eee;
	}
</style>
