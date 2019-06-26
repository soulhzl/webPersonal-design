<template>
	<div>
		<van-nav-bar
		title="优惠卷"
		left-arrow
		@click-left="backRoute"
		/>
	</div>
</template>

<script>
export default{
	name: 'ticket',
	methods: {
		backRoute(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
</style>