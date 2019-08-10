<template>
	<div>
		<div class="corpse"></div>
	</div>
</template>

<script>
export default{
	name: 'corpse'
}
</script>

<style scoped>
.corpse {
	position: relative;
	z-index: 99;
	width: 200px;
	height: 312px;
	background-image: url("../assets/img/corpse.png");
	animation: play 1.8s steps(10) infinite;
}

@keyframes play {
	from {
		background-position: 0px;
	}
	to {
		background-position: -2000px;
	}
}
</style>