<template>
	<div>
		<van-nav-bar
		title="添加地址"
		left-arrow
		@click-left="backRoute"
		/>
		<van-address-edit
		:area-list="areaList"
		show-postal
		show-delete
		show-set-default
		show-search-result
		:search-result="searchResult"
		/>
	</div>
</template>

<script>
export default{
	name: 'address',
	data(){
		return {
			areaList: {},
      searchResult: [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
		}
	},
	methods: {
		backRoute(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
</style>