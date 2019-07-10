<template>
	<div>
		<van-nav-bar
		title="设置"
		left-arrow
		@click-left="backRoute"
		/>

		<van-cell-group>
			<van-cell title="用户设置" is-link to="me" />
		</van-cell-group>
	</div>
</template>

<script>
export default{
	name: 'setting',
	methods: {
		backRoute(){
			// 返回路由
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
</style>