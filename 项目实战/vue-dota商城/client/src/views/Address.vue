<template>
	<div>
		<van-nav-bar
		title="地址"
		left-arrow
		@click-left="backRoute"
		/>
	</div>
</template>

<script>
export default{
	name: 'address',
	methods: {
		backRoute(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
</style>