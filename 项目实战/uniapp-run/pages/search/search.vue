<template>
	<view>
		search
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				uni.navigateBack()
			}
		},
		onNavigationBarSearchInputChanged(e){
			console.log(e.text)
		},
		onNavigationBarSearchInputConfirmed(e){
			console.log(e.text)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
