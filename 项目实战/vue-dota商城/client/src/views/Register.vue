<template>
	<div class="register-wrapper">
		<div class="register-title">
			<img src="../assets/images/title.png" alt="" class="title-img">
		</div>
		<div class="register-area">
			<div class="register-area-title">欢迎登录刀塔商店</div>
			<van-field @change="validate" :error-message="usererror" v-model="name" placeholder="请输入用户名" left-icon="user-o" class="border-top"/>
			<van-field @change="validate" :error-message="pwderror" v-model="pwd" placeholder="请输入密码" type="password" left-icon="bag-o"/>
			<van-field @change="validate" :error-message="rpwderror" v-model="repwd" placeholder="请确认密码" type="password" left-icon="bag-o" class="border-bottom"/>
		</div>
		<div class="register-btnarea">
			<van-button class="div-btn" @click="clickReg">注册</van-button>
			<van-button to="/login" class="reg-btn div-btn">返回</van-button>
		</div>
	</div>
</template>

<script>
import { Notify } from 'vant';
import url from '@/serviceAPI.config.js'
export default{
	name: 'register',
	data () {
		return {
			name: '',
			pwd: '',
			repwd: '',
			usererror: '',
			pwderror: '',
			rpwderror: ''
		}
	},
	methods: {
		validate(){
			// 验证表单填写数据
			// 验证用户名
			if (this.name.length < 6 && this.name !== '') {
				this.usererror = '用户名必须大于六位数'
			}else{
				this.usererror = ''
			}
			// 验证密码
			if (this.pwd.length < 6 && this.pwd !== '') {
				this.pwderror = '密码必须大于六位数'
			}else{
				this.pwderror = ''
			}
			// 验证密码与确认密码是否相同
			if (this.pwd !== this.repwd && this.pwd !== '' && this.repwd !== '') {
				this.rpwderror = '两次密码不配对'
			}else{
				this.rpwderror = ''
			}
		},
		async clickReg(){
			// 判断表单数据是否正确
			if (!this.usererror && !this.pwderror && !this.rpwderror && this.name && this.pwd && this.repwd) {
				// 向后台发送请求
				let res = await this.$axios.post(url.registerUserTest, {name: this.name, pwd: this.pwd})
				let data = res.data
					// 判断用户是否已被注册
					if (data.code === 0) {
						Notify({
							message: data.msg,
							duration: 1000,
							background: '#1989fa'
						});
						this.$router.push('/login')
					}else{
						Notify({
							message: data.msg,
							duration: 1000,
						});
					}

				}else{
					Notify({
						message: '填写有错！请仔细查看~',
						duration: 1000
					});
				}
			}
		}
	}
	</script>

	<style scoped>
	.register-wrapper{
		overflow: hidden;
		width: 100%;
		height: 100%;
		background: url('../assets/images/bg.gif');
		background-size: cover;
		background-repeat:no-repeat;
		background-position: center;
	}

	.register-title{
		margin: 2rem 0;
		text-align: center;
	}

	.title-img,
	.register-area{
		width: 80%;
	}

	.register-area{
		margin: 0 auto;
	}

	.register-area-title{
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

	.register-btnarea{
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