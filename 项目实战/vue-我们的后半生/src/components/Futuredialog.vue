<template>
	<div class="futurelog">
		{{text}}
	</div>
</template>

<script>
export default{
	name: 'futurelog',
	props: ['text']
}
</script>

<style scoped>
.futurelog{
	z-index: 99;
    position: relative;
    width: 250px;
    height: 100px;
    padding: 5px;
    border: 5px solid #09F;
    background-color: #FFF;
    font-size: 0.5rem;
}

.futurelog:before,.futurelog:after{
    content: "";
    display: block;
    position: absolute; 
    bottom: -40px;
    left: 100px;
    border-width: 20px;
    border-style: solid dashed dashed;
    border-color: #09F transparent transparent;
    font-size: 0;
    line-height: 0;
}

.futurelog:after{
    bottom: -33px;
    border-color: #FFF transparent transparent;
}
</style>