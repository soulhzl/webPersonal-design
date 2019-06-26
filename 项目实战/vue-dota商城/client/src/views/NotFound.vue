<template>
	<div class="notfound-wrapper">
		<div class="svg-wrapper">
			<svg class="icon svg-404" aria-hidden="true">
				　　<use :xlink:href="'#icon-icon-test'"></use>
			</svg>
			<svg class="icon svg-ku" aria-hidden="true">
				　　<use :xlink:href="'#icon-ku'"></use>
			</svg>
		</div>
		<div class="back-wrapper">
		<p class="notfound-tip">抱歉！您所访问的页面不存在！</p>
		<van-button type="info" to='/index'>返回首页</van-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'notfound'
}
</script>

<style scoped>
.notfound-wrapper{
	overflow: hidden;
	padding-bottom: 100%;
	background: linear-gradient(#dcb5ff, #ffe66f);
}
.svg-wrapper{
	position: relative;
	overflow: hidden;
	padding-bottom: 10rem;
	margin-top: 1rem;
}
.svg-404{
	position: absolute;
	left: 5rem;
	width: 5rem;
	height: 5rem;
}
.svg-ku{
	position: absolute;
	top: 3.5rem;
	left: 0;
	width: 6rem;
	height: 6rem;
}
.back-wrapper{
	text-align: center;
}
.notfound-tip{
	color: #4f4f4f;
	font-size: 0.5rem;
	text-align: center;
}
</style>