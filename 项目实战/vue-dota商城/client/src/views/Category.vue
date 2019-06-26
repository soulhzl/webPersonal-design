<template>
	<div>
		<van-nav-bar
		title="分类"
		/>
		<van-row>
			<van-col v-for='(item, k) in category' :key='k' span="12" class="category-area">
				<router-link to="categorypage" tag="div">
					<img v-lazy="item.img" alt=''>
					<div class="category-name">{{item.name}}</div>
				</router-link>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default{
	name: 'category',
	data(){
		return {
			category: [{img: 'http://localhost:8080/category-2.jpg', name: '特别限量'}, {img: 'http://localhost:8080/category-1.jpg', name: '游戏手办'}, {img: 'http://localhost:8080/category-3.jpg', name: '毛绒玩具'}, {img: 'http://localhost:8080/category-4.jpg', name: '生活用品'}]
		}
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