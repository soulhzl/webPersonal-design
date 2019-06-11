<template>
		<div>
			<div class="floor-title">{{floorTitle}}</div>
			<!-- floor-one-area -->
			<div class="floor-one-area">
				<div class="floor-anomaly">
					<div class="floor-one"><img v-lazy="floorData0.image" class="whole-img" alt=""/></div>
					<div>
						<div class="floor-two"><img v-lazy="floorData1.image" class="whole-img" alt=""/></div>
						<div><img v-lazy="floorData2.image" class="whole-img" alt=""/></div>
					</div>
				</div>
			</div>
			<!-- floor-rule-area -->
			<div class="floor-rule">
				<div v-for='(item, index) in floorData.slice(3)' :key="index">
					<img v-lazy="item.image" alt="" class="whole-img">
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name: 'floor',
		props: ['floorData', 'floorTitle'],
		data(){
			return {
				floorData0: {},
				floorData1: {},
				floorData2: {}
			}
		},
		watch:{
			floorData(){
				this.floorData0 = this.floorData[0]
				this.floorData1 = this.floorData[1]
				this.floorData2 = this.floorData[2]
			}
		}
	}
</script>

<style scoped>

.floor-title{
	margin: 0.8rem 0 0.5rem 0;
	font-size: 0.85rem;
	color: #1CA1E2;
	text-align: center;
}

.floor-one-area{
	border-top: 1px solid #ddd;
}

.floor-anomaly{
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #ddd;
	background-color: #fff;
}

.floor-anomaly div{
	width:10rem;
	box-sizing: border-box;
}

.floor-one{
	border-right:1px solid #ddd;
}

.floor-two{
	border-bottom:1px solid #ddd;
}

.whole-img{
	width: 100%;
}

.floor-rule{
	display: flex;
	flex-direction: row;
	flex-wrap:wrap;
	background-color: #fff;
}

.floor-rule div{
	box-sizing: border-box;
	width:10rem;
	border-bottom:1px solid #ddd;
}

.floor-rule div:nth-child(odd){
	border-right: 1px solid #ddd;
}
</style>