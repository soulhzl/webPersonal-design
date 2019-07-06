<template>
	<swiper :options="swiperOption">
				<swiper-slide>
					<div>
						<img v-lazy="img" alt='' class='new-goods-img'>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div>
						<img v-lazy="img" alt='' class='new-goods-img'>
					</div>
				</swiper-slide>
			</swiper>
</template>

<script>
	export default{
		name: 'text',
		data(){
		return {
			img: 'http://localhost:8080/img/swiper-1.jpg',
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