<template>
	<div class="monster" :style="monster">
		<div class="eye">
			<div class="eyeball" :style="{backgroundColor: monster.facecolor}"></div>
		</div>
		<div class="mouth" :style="{backgroundColor: monster.facecolor}"></div>
	</div>
</template>

<script>
export default{
	name: 'monster',
	props: ['monsterPer'],
	data(){
		return {
			monster: {}
		}
	},
	created(){
		// 判断有无基础属性
		if (this.monsterPer) {
			this.monster = {
				width: this.monsterPer.width,
				height: this.monsterPer.height,
				backgroundColor: this.monsterPer.bodycolor,
				borderRadius: this.monsterPer.borderradius,
				facecolor: this.monsterPer.facecolor
			}
		}
	}
}
</script>

<style scoped>
.monster {
	z-index: 99;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 110px;
	height: 100px;
	margin: 10px;
	background-color: #e55A54;
	border-radius: 50%;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
	animation: jumping 0.8s infinite alternate;
}

.monster .eye {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
	height: 40%;
	border-radius: 50%;
	background-color: #fff;
}

.monster .eyeball {
	width: 50%;
	height: 50%;
	border-radius: 50%;
	background-color: #0C4475;
	animation: eyemove 1.6s infinite alternate;

}

.monster .mouth {
	width: 32%;
	height: 12px;
	margin-top: 15%;
	border-radius: 12px;
	background-color: white;
}

.monster:before,
.monster:after {
	content: "";
	display: block;
	position: absolute;
	left: 50%;
	top: -10px;
	width: 20%;
	height: 10px;
	background-color: #fff;
	border-radius: 10px;
}

.monster:before {
	transform: translateX(-70%) rotate(45deg);
}

.monster:after {
	transform: translateX(-30%) rotate(-45deg);
}

@keyframes jumping {
	50% {
		top: 0;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
	}
	100% {
		top: -50px;
		box-shadow: 0px 120px 50px rgba(0, 0, 0, 0.2);
	}
}


@keyframes eyemove {
	0%,
	10% {
		transform: translate(50%);
	}
	90%,
	100% {
		transform: translate(-50%);
	}
}

</style>