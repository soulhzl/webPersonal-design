<template>
	<div class="cube">
		<span class="cube-side front"></span>
		<span class="cube-side up" :style="{backgroundColor: upcolor}"><b class="cube-text">{{cubetext}}</b></span>
		<span class="cube-side down"></span>
		<span class="cube-side left"></span>
		<span class="cube-side right"></span>
		<span class="cube-side back"></span>
	</div>
</template>

<script>
export default{
	name: 'cube',
	props: ['cubetext', 'upcolor']
}
</script>

<style scoped>
.cube {
	display: block;
	position: relative;
	margin: 200px auto;
	width: 200px;
	height: 200px;
	transform-style: preserve-3d;
	transform: rotateX(-60deg) rotateY(50deg) rotateZ(0deg);
}

.cube-side {
	display: inline-block;
	position: absolute;
	width: 200px;
	height: 100px;
}

.cube-side.up {
	height: 200px;
	background-color: #cdcd9a;
	color: white;
	text-align: center;
	line-height: 200px;
	transform: rotateX(90deg) translateZ(100px);
}

.cube-side.down {
	height: 200px;
	background-color: #cdcd9a;
	transform: rotateX(-90deg) translateZ(0px);
	box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
}

.cube-side.left {
	background-color: #d9b3b3;
	transform: rotateY(-90deg) translateZ(100px);
}

.cube-side.right {
	background-color: #d9b3b3;
	transform: rotateY(90deg) translateZ(100px);
}

.cube-side.front {
	background-color: #a3d1d1;
	transform: translateZ(100px);
}

.cube-side.back {
	background-color: #a3d1d1;
	transform: translateZ(-100px) rotateY(180deg);
}

.cube-text{
	display: inline-block;
	font-size: 1.5rem;
	color: black;
	transform: rotateZ(50deg);
}
</style>