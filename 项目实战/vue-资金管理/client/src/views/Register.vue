<template>
	<div class="register">
		<div class="form-container">
			<div class="manage-tip">
				<span class="title">标题党</span>
				<el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="80px" class="register-form">
					<el-form-item label="用户名" prop="name">
						<el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input v-model="registerUser.email" placeholder="请输入email"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="repassword">
						<el-input type="password" v-model="registerUser.repassword" placeholder="请确认密码"></el-input>
					</el-form-item>
					<el-form-item label="选择身份">
						<el-select v-model="registerUser.identity" placeholder="请选择身份">
							<el-option label="管理员" value="manager">
							</el-option>
							<el-option label="员工" value="employee">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" class="submit-btn" @click="submitForm('registerForm')">注册</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'register',
	data() {
		var validatePass2 = (rule, value, callback) => {
			if (value !== this.registerUser.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			registerUser: {
				name: '',
				email: '',
				password: '',
				repassword: '',
				identity: ''
			},
			rules: {
				name: [{
					require: true,
					message: "用户名不能为空",
					trigger: "blur"
				}, {
					min: 2,
					max: 30,
					message: "长度在2到30个字符之间",
					trigger: "blur"
				}],
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
				}],
				repassword: [{
					require: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}, {
					min: 6,
					max: 30,
					message: "长度在6到30个字符之间",
					trigger: "blur"
				},{
					validator: validatePass2,
					trigger: "blur"
				}]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.post('/user/register', this.registerUser).then((res) => {
						const data = res.data;
						if (data.code == 0) {
							this.$message({
								message: data.msg,
								type: 'success'
							});
							this.$router.push('/login');
						}
						else{
							this.$message.error(data.msg);
						}
					});
				}
			});
		}
	}
}
</script>

<style scoped>
.register {
	position: relative;
	width: 100%;
	height: 100%;
	background: url(../assets/bg.jpg) no-repeat center center;
	background-size: 100% 100%;
}

.form-container{
	position: absolute;
	top: 10%;
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

.register-form{
	margin-top: 20px;
	padding: 20px 40px 20px 20px;
	border-radius: 5px;
	box-shadow: 0px 5px 10px #ccc;
	background-color: #fff;
}

.submit-btn{
	width: 100%;
}
</style>