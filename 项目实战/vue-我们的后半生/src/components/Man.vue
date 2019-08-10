<template>
	<div class='man animate'>
		<div class='eyes'></div>
	</div>
</template>

<script>
export default{
	name: 'man'
}
</script>

<style scoped>
.man {
	z-index: 99;
	position: relative;
	height: 257px;
	width: 180px;
	background: url("../assets/img/man.png");
}

.man .eyes:after, .man .eyes:before {
	content: "";
	display: block;
	position: absolute;
	top: 100px;
	height: 8px;
	width: 5px;
	background: #1a181b;
	border-radius: 50%;
}

.man .eyes:after {
	right: 70px;
}

.man .eyes:before {
	left: 70px;
}

.man.animate {
	animation: animate 0.75s steps(19) infinite;
}

.man.animate .eyes {
	position: relative;
	animation: eyes_running .75s reverse infinite;
}

.man.animate .eyes:before, .man.animate .eyes:after {
	animation: eyes_blink 5s .2s alternate infinite linear;
}

@keyframes animate {
	to {
		background-position: -3420px;
	}
}

@keyframes eyes_blink {
	0% {
		top: 100px;
		height: 8px;
	}

	10% {
		top: 100px;
		height: 8px;
	}

	11% {
		top: 103px;
		height: 2px;
	}

	13% {
		top: 103px;
		height: 2px;
	}

	14% {
		top: 100px;
		height: 8px;
	}

	30% {
		top: 100px;
		height: 8px;
	}

	34% {
		top: 100px;
		height: 8px;
	}

	36% {
		top: 103px;
		height: 2px;
	}

	38% {
		top: 100px;
		height: 8px;
	}

	40% {
		top: 103px;
		height: 2px;
	}

	42% {
		top: 100px;
		height: 8px;
	}

	99.9999% {
		top: 100px;
		height: 8px;
	}
}

@keyframes eyes_running {
	0% {
		top: 20px;
	}

	22% {
		top: 9px;
	}

	46% {
		top: 17px;
	}

	72% {
		top: 9px;
	}

	100% {
		top: 20px;
	}
}
</style>