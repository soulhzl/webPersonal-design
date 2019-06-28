<template>
	<div>
		<van-nav-bar
		title="设置"
		left-arrow
		@click-left="backRoute"
		/>

		<van-cell-group>
			<van-cell title="设置1" is-link to="notfound" />
			<van-cell title="设置2" is-link to="notfound" />
			<van-cell title="设置3" is-link to="notfound" />
			<van-cell title="设置4" is-link to="notfound" />
			<van-cell title="设置5" is-link to="notfound" />
			<van-cell title="设置6" is-link to="notfound" />
			<van-cell title="设置7" is-link to="notfound" />
			<van-cell title="设置8" is-link to="notfound" />
			<van-cell title="设置9" is-link to="notfound" />
			<van-cell title="设置10" is-link to="notfound" />
		</van-cell-group>
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