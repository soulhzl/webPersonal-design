<template>
	<div>
		<van-nav-bar
		title="设置"
		left-arrow
		@click-left="backRoute"
		/>
	</div>
</template>

<script>
export default{
	name: 'setting',
	methods: {
		backRoute(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
</style>