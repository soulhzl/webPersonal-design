<template>
	<div>
		<van-nav-bar
		title="地址"
		left-arrow
		@click-left="backRoute"
		/>
		<van-address-list
		v-model="chosenAddressId"
		:list="list"
		@add="addAddress"
		@edit="editAddress"
		/>
	</div>
</template>

<script>
import url from '@/serviceAPI.config.js'
export default{
	name: 'address',
	data(){
		return {
			chosenAddressId: '1',
			list: []
		}
	},
	methods: {
		backRoute(){
			// 返回路由
			this.$router.go(-1)
		},
		addAddress(){
			this.$router.push('addaddress')
		},
		editAddress(item, index){
			this.$router.push({name: 'addaddress', params: {item, index, operate: 'edit'}})
		}
	},
	activated(){
		if (this.$store.getters.address) {
			this.list = this.$store.getters.address
		}
	},
	async mounted(){
		// 获取地址列表
		let res = await this.$axios.post(url.getAddressListTest, {_id: this.$store.getters.user.id})
		
		if (res.data.code == 0 && res.data.msg) {
			this.list = res.data.msg
			this.$store.dispatch('updateAddress', {addressDetail: this.list})
		}
	}
}
</script>

<style scoped>
</style>