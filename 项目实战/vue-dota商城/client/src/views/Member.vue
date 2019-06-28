<template>
	<div>
		<div class="member-wrapper">
			<img v-lazy="memberImg" alt=""/>
			<div class="member-name">昵称</div>
		</div>
		<van-cell-group>
			<van-cell title="地址" is-link to="address" />
			<van-cell title="订单" is-link to="order" />
			<van-cell title="优惠卷" is-link to="ticket" />
			<van-cell title="设置" is-link to="setting" />
		</van-cell-group>
	</div>
</template>

<script>
export default{
	name: 'member',
	data(){
		return {
			memberImg: "http://localhost:8080/img/errorimg.png"
		}
	}
}
</script>

<style scoped>
.member-wrapper{
	text-align: center;
	margin: 2rem;
}

.member-wrapper img{
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}

.member-name{
	font-size: 0.5rem;
	font-weight: bold;
}
</style>