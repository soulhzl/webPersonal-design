<template>
	<div>
		<van-nav-bar
		title="用户登录"
		left-text="返回"
		left-arrow
		@click-left="goBack"
		/>

		<div class="register-panel">
			<van-field
			v-model="username"
			label="用户名"
			icon="clear"
			placeholder="请输入用户名"
			:error-message="usernameErrorMsg"
			required
			@click-icon="username = ''"
			/>

			<van-field
			v-model="password"
			type="password"
			label="密码"
			placeholder="请输入密码"
			:error-message="passwordErrorMsg"
			required
			/>
			<div class="register-button">
				<van-button type="primary" size="large" @click='loginAction' :loading="openLoading" loading-text="登录中...">登录</van-button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
import url from '@/serviceAPI.config'
export default{
	name: 'login',
	data(){
		return {
			username: '',
			password: '',
			openLoading: false,   
			usernameErrorMsg:'',  
			passwordErrorMsg:'',  
		}
	},
	methods:{
		goBack(){
			this.$router.go(-1)
		},
		async loginUser(){
			this.openLoading = true
			let res = await axios({
				url: url.loginUser,
				method: 'post',
				data: {
					username: this.username,
					password: this.password
				}
			})

			if (res.data.code == 200 && res.data.message !== '用户不存在') {
				new Promise((resolve, reject) => {
					localStorage.userInfo = this.username
					setTimeout(() => {
						resolve()
					}, 500)
				}).then(() => {
					Toast.success('登录成功')
					this.openLoading = false
					this.$router.push('/')
				}).catch((err) => {
					Toast.fail('登录状态保存失败')
					this.openLoading = false
				})
			}else{
				Toast.fail('登录失败')
				this.openLoading = false
			}

		},
		checkForm(){
			let isOK = true
			if (this.username.length < 5) {
				this.usernameErrorMsg = '用户名不能小于五位'
				isOK = false
			}else{
				this.usernameErrorMsg = ''
			}

			if (this.password.length < 6) {
				this.passwordErrorMsg = '密码不能小于六位'
				isOK = false
			}else{
				this.passwordErrorMsg = ''
			}
			return isOK
		},
		loginAction(){
			this.checkForm() && this.loginUser()
		}
	},
	created(){
		if (localStorage.userInfo) {
			Toast.success('您已经登录')
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.register-panel{
	width:96%;
	margin:20px auto;
	padding-bottom:50px;
	border-radius: 5px;
}

.register-button{
	padding-top:10px;
}
</style>