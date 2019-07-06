<template>
	<div>
		<van-nav-bar
		title="订单"
		left-arrow
		@click-left="backRoute"
		/>

		<div>
			<van-card v-for="(item, k) in orderList" :key='k'
			num="2"
			:price="item.price | fixedMoney"
			:desc="item.desc"  
			:title="item.title"
			:thumb="item.img"
			/>
		</div>
	</div>
</template>

<script>
export default{
	name: 'order',
	data(){
		return {
			orderList: [{img: 'http://localhost:8080/img/good-1.jpg', price: 2, desc: '描述1', title: '标题1'}, {img: 'http://localhost:8080/img/good-2.jpg', price: 3, desc: '描述2', title: '标题2'}]
		}
	},
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