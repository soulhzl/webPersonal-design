<template>
	<div>
		<van-nav-bar
		title="分类"
		/>
		<van-row>
			<van-col v-for='(item, k) in category' :key='k' span="12" class="category-area">
				<router-link :to="{name: 'categorypage', params: {sort: item.name}}" tag="div">
					<img :src="item.img" alt=''>
					<div class="category-name">{{item.name}}</div>
				</router-link>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import url from '@/serviceAPI.config.js'
export default{
	name: 'category',
	data(){
		return {
			category: []
		}
	},
	async mounted(){
		// 初始化分类
		let res = await this.$axios.get(url.home)
		let data = res.data.data
		this.category = data.categoryList
	}
}
</script>

<style scoped>
.category-area{
	margin-top: 0.5rem;
	text-align: center;
}

.category-area img{
	width: 80%;
	margin: 0 auto;
}

.category-name{
	text-align: center;
	font-size: 0.4rem;
}
</style>