<template>
	<swiper :options="swiperOption">
				<swiper-slide>
					<div>
						<img :src="img" alt='' class='new-goods-img'>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div>
						<img :src="img" alt='' class='new-goods-img'>
					</div>
				</swiper-slide>
			</swiper>
</template>

<script>
	export default{
		name: 'text',
		data(){
		return {
			img: 'http://47.107.40.84/img/swiper-1.jpg',
			swiperOption: {
				freeMode: true
			}
		}
	}
	}
</script>

<style scoped>
.new-goods-img{
width: 100%;
}
</style>