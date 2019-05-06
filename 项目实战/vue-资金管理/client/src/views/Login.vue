<template>
	<div class="login">
		<div class="form-container">
			<div class="manage-tip">
				<span class="title">标题党</span>
			</div>
			<el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="60px" class="login-form">
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="loginUser.email" placeholder="请输入email"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="submit-btn" @click="submitForm('loginForm')">登录</el-button>
				</el-form-item>
				<div class="tiparea">
					<p>还没有账号？现在<router-link to='/register'>注册</router-link></p>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
import JWTDecode from 'jwt-decode'
export default {
	name: 'login',
	data() {
		return {
			loginUser: {
				email: '',
				password: '',
			},
			rules: {
				email: [{
					require: true,
					type: "email",
					message: "邮箱格式不正确",
					trigger: "blur"
				}],
				password: [{
					require: true,
					message: "密码不能为空",
					trigger: "blur"
				}, {
					min: 6,
					max: 30,
					message: "长度在6到30个字符之间",
					trigger: "blur"
				}]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.post('/user/login', this.loginUser).then((res) => {
						const data = res.data;
						if (data.code == 0) {
							const {token} = data;
							localStorage.setItem('eleToken', token)
							const decoded = JWTDecode(token)
							this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
							this.$store.dispatch("setUser", decoded);
							this.$message({
								message: data.msg,
								type: 'success'
							});
							this.$router.push('/index');
						}else{
							this.$message.error(data.msg);
						}
					});
				}
			});
		},
		isEmpty(value) {
			return (
				value === undefined ||
				value === null ||
				(typeof value === "object" && Object.keys(value).length === 0) ||
				(typeof value === "string" && value.trim().length === 0)
				);
		}
	}
}
</script>

<style scoped>
.login {
	position: relative;
	width: 100%;
	height: 100%;
	background: url(../assets/bg.jpg) no-repeat center center;
	background-size: 100% 100%;
}

.form-container{
	position: absolute;
	top: 20%;
	left: 34%;
	width: 370px;
	height: 210px;
	padding: 25px;
	border-radius: 5px;
	text-align: center;
}

.form-container .manage-tip .title{
	color: #fff;
	font-family: 'Microsoft YaHei';
	font-weight: bold;
	font-size: 26px;
}

.login-form{
	margin-top: 20px;
	padding: 20px 40px 20px 20px;
	border-radius: 5px;
	box-shadow: 0px 5px 10px #ccc;
	background-color: #fff;
}

.submit-btn{
	width: 100%;
}

.tiparea {
	text-align: right;
	font-size: 12px;
	color: #333;
}

.tiparea p a {
	color: #409eff;
}
</style>