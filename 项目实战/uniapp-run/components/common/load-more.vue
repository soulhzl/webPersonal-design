<template>
	<view class="load-more">{{text}}</view>
</template>

<script>
	export default{
		props:{
			text: String
		}
	}
</script>

<style scoped>
	.load-more{
		color: #ccc;
		text-align: center;
		font-size: 35upx;
	}
</style>
