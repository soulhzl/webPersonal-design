<template>
	<div>
		<van-nav-bar
		title="优惠卷"
		left-arrow
		@click-left="backRoute"
		/>

			<van-coupon-list
			:coupons="coupons"
			:chosen-coupon="chosenCoupon"
			:disabled-coupons="disabledCoupons"
			@change="onChange"
			@exchange="onExchange"
			/>
	</div>
</template>

<script>
export default{
	name: 'ticket',
	data() {
		return {
			chosenCoupon: -1,
			coupons: [{
				available: 1,
				condition: '无使用门槛\n最多优惠12元',
				reason: '',
				value: 150,
				name: '优惠券名称',
				startAt: 1489104000,
				endAt: 1514592000,
				valueDesc: '1.5',
				unitDesc: '元'
			}],
			disabledCoupons: [{
				available: 1,
				condition: '无使用门槛\n最多优惠12元',
				reason: '',
				value: 150,
				name: '优惠券名称',
				startAt: 1489104000,
				endAt: 1514592000,
				valueDesc: '1.5',
				unitDesc: '元'
			}]
		}
	},
	methods: {
		backRoute(){
			// 返回路由
			this.$router.go(-1)
		},
		onChange(index) {
			this.chosenCoupon = index;
		},
		onExchange(code) {
			this.coupons.push(coupon);
		}
	}
}
</script>

<style scoped>
</style>