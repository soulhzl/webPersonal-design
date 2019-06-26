<template>
	<div>
		<van-nav-bar
		title="订单"
		left-arrow
		@click-left="backRoute"
		/>
	</div>
</template>

<script>
export default{
	name: 'order',
	methods: {
		backRoute(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
</style>