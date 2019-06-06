<template>
	<div>
		<van-nav-bar
		title="用户注册"
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
				<van-button type="primary" size="large" @click='registerAction' :loading="openLoading" loading-text="注册中...">马上注册</van-button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config'
import { Toast } from 'vant'
export default{
	name: 'register',
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
		registerUser(){
			this.openLoading = true
			axios({
				url: url.registerUser,
				method: 'post',
				data: {
					username: this.username,
					password: this.password
				}
			}).then((res) => {
				if (res.data.code == 200) {
					Toast.success('注册成功')
					this.openLoading = false
					this.$router.push('/')
				}else{
					Toast.fail('注册失败')
					this.openLoading = false
				}
			}).catch((err) => {
				Toast.fail('注册失败')
				this.openLoading = false
			})
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
		registerAction(){
				this.checkForm() && this.registerUser()
		}
	}
}
</script>

<style scoped>
.register-panel{
	width:96%;
	border-radius: 5px;
	margin:20px auto;
	padding-bottom:50px;
}

.register-button{
	padding-top:10px;
}
</style>