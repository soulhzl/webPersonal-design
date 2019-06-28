<template>
	<div class="login-wrapper">
		<div class="login-title">
			<img src="../assets/images/title.png" alt="" class="title-img">
		</div>
		<div class="login-area">
			<div class="login-area-title">欢迎登录刀塔商店</div>
			<van-field @change="validate" :error-message="nameerror" v-model="name" placeholder="请输入用户名" left-icon="user-o" class="border-top"/>
			<van-field @change="validate" :error-message="pwderror" v-model="pwd" placeholder="请输入密码" type="password" left-icon="bag-o" class="border-bottom"/>
		</div>
		<div class="login-btnarea">
			<van-button class="div-btn" @click="clickLogin">登录</van-button>
			<van-button to="/register" class="reg-btn div-btn">注册</van-button>
		</div>
	</div>
</template>

<script>
import { Notify } from 'vant';
import JWTDecode from 'jwt-decode'
import url from '@/serviceAPI.config.js'
export default{
	name: 'login',
	data () {
		return {
			name: '',
			pwd: '',
			nameerror: '',
			pwderror: ''
		}
	},
	methods: {
		isEmpty(value) {
			return (
				value === undefined ||
				value === null ||
				(typeof value === "object" && Object.keys(value).length === 0) ||
				(typeof value === "string" && value.trim().length === 0)
				);
		},
		validate(){
			// 验证表单填写数据
			// 验证用户名
			if (this.name) {
				this.nameerror = ''
			}else{
				this.nameerror = '用户名不能为空'
			}
			// 验证密码
			if (this.pwd) {
				this.pwderror = ''
			}else{
				this.pwderror = '密码不能为空'
			}
		},
		async clickLogin(){
			// 判断表单数据是否正确
			if (this.name && this.pwd && !this.pwderror && !this.nameerror) {
			// 向后台发送请求
			let res = await this.$axios.post(url.loginUserTest, {name: this.name, pwd: this.pwd})
			let data = res.data
			if (data.code == 0) {
				const { token } = data
				// 本地存储token
				localStorage.setItem('eleToken', token)
				const decoded = JWTDecode(token)
				// 将解析的token存进store
				this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded))
				this.$store.dispatch("setUser", decoded)
				Notify({
					message: data.msg,
					duration: 1000,
					background: '#1989fa'
				});
				this.$router.push('/index')
			}else{
				Notify({
					message: data.msg,
					duration: 1000,
				});
			}
		}
	}
}
}
</script>

<style scoped>
.login-wrapper{
	overflow: hidden;
	width: 100%;
	height: 100%;
	background: url('../assets/images/bg.gif');
	background-size: cover;
	background-repeat:no-repeat;
	background-position: center;
}

.login-title{
	margin: 2rem 0;
	text-align: center;
}

.title-img,
.login-area{
	width: 80%;
}

.login-area{
	margin: 0 auto;
}

.login-area-title{
	margin: 0.5rem;
	text-align: center;
	font-size: 0.5rem;
	color: #fff;
}

.border-top{
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
}

.border-bottom{
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
}

.login-btnarea{
	margin-top: 1rem
}

.div-btn{
	display: block;
	width: 70%;
	margin: 0.5rem auto;
	border-radius: 0.5rem;
}

.reg-btn{
	width: 60%;
}
</style>