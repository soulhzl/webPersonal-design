<template>
	<view>
		<view class="uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-tab" :show-scrollbar="false">
				<block v-for="(item, index) in tabBars" :key="item.id">
					<view class="swiper-tab-list" :class="{active: tabIndex == index}" @click="ontabtab(index)">{{item.name}}
						<view :class="{'active-border': tabIndex == index}"></view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number
		},
		methods: {
			ontabtab(index){
				this.$emit('ontabtab', index)
			}
		}
	}
</script>

<style scoped>
	.swiper-tab-list {
		color: #999;
	}

	.active {
		color: black;
		font-weight: bold;
	}

	.active-border {
		width: 50%;
		height: 10upx;
		margin: auto;
		background-color: orange;
		border-radius: 20upx;
	}
</style>
