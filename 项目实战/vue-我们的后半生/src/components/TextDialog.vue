<template>
	<div class="dialog" ref="dialog">
		<span class="close" @click="closeDialog">X</span>
		<span class="title">{{age}}</span>
		<p>{{text}}</p>
	</div>
</template>

<script>
export default{
	name: 'textdialog',
	props: ['age', 'text'],
	methods: {
		closeDialog(){
			this.$refs.dialog.style.display = 'none'
		}
	}
}
</script>

<style scoped>
.dialog{
	width: 100%;
	height: 100%;
	padding: 10px;
	background-color: white;
	border-radius: 8px;
	text-align: center;
}

.close{
	position: absolute;
	right: 0.3rem;
	font-size: 0.5rem;
}

.title{
	font-weight: bold;
	font-size: 0.8rem;
}

p{
	font-size: 0.6rem;
}
</style>