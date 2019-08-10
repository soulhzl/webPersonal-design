<template>
	<div class="dice" @click="throwDice">
		<div class="group" ref="dice">
			<div class="page page1"><span></span></div>
			<div class="page page2"><span></span><span></span></div>
			<div class="page page3"><span></span><span></span><span></span></div>
			<div class="page page4"><span></span><span></span><span></span><span></span></div>
			<div class="page page5"><span></span><span></span><span></span><span></span><span></span></div>
			<div class="page page6"><span></span><span></span><span></span><span></span><span></span><span></span></div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'dice',
	data(){
		return {
			dicenum: 1,
			isThrow: false
		}
	},
	methods: {
		throwDice(){
			if (!this.isThrow) {
				this.isThrow = true
				let randomnum = Math.ceil(Math.random()*6)
				let transform = ""
				let x = 0,y = 0 
				switch(randomnum){
					case 2:
					y = -90
					break;
					case 3:
					y = 90
					break;
					case 4:
					x = -90
					break;
					case 5:
					x = 90
					break;
					case 6:
					y = 180
					break;
					default:
					break;
				}
				transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)"
				if (this.dicenum == randomnum) {
					if (x == 0) {
						transform = "rotateX(360deg) rotateY(" + y + "deg)"
					}
					if (y == 0) {
						transform = "rotateX(" + x + "deg) rotateY(360deg)"
					}
				}
				this.dicenum = randomnum
				this.$refs.dice.style.transform = transform
				this.$emit('getDiceNum', this.dicenum)
				setTimeout(() => {
					this.isThrow = false
				}, 1000)
			}
		}
	}
}
</script>

<style scoped>
.dice{
	z-index: 99;
	perspective: 500px;
	overflow: hidden;
}

.group{
	position: relative;
	width: 200px;
	height: 200px;
	margin: 200px auto;
	border-radius: 20px;
	background-color: #E8E8E9;
	transform-style: preserve-3d;
	transform-origin: 50% 50% -100px;
	transition: transform 1s;
}

.page{
	overflow: hidden;
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #E0E0E0; 
	border-radius: 20px;
	background-color: #E8E8E9;
	text-align: center;
}

.page2{
	transform-origin: right;
	transform: rotateY(-90deg);
}

.page3{
	transform-origin: left;
	transform: rotateY(90deg);
}

.page4{
	transform-origin: top;
	transform: rotateX(-90deg);
}

.page5{
	transform-origin: bottom;
	transform: rotateX(90deg);
}

.page6{
	transform: translateZ(-200px);
}

.page span {
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background-color: #050505;
	box-shadow: inset 3px 3px 5px #000;
}

.page1 span{
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -25px;
	margin-left: -25px;
	background-color: #f00;
}

.page2 span {
	margin: 75px 25px;
}

.page3 span {
	position: absolute;
}

.page3 span:first-child {
	top: 20px;
	left: 20px;
} 

.page3 span:nth-child(2) {
	top: 75px;
	left: 75px;
}

.page3 span:last-child {
	bottom: 20px;
	right: 20px;
}

.page4 span {
	margin: 25px 25px;
}

.page5 span {
	margin: 25px 25px;
}

.page5 span:last-child {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -25px;
	margin-top: -25px;
}

.page6 span {
	margin: 7px 25px;
}

</style>