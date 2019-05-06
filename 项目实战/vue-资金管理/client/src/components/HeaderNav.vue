<template>
	<header class="head-nav">
		<el-row>
			<el-col :span='6' class='logo-container'>
				<img src="../assets/logo.png" class="logo" alt="">
				<span class="title">标题党</span>
			</el-col>
			<el-col :span='6' class='user'>
				<div class="userinfo">
					<img :src="user.avatar" class="avatar" alt="">
					<div class="welcome">
						<p class="name comename">欢迎</p>
						<p class="name avatarname">{{user.name}}</p>
					</div>
					<span class="username">
						<el-dropdown trigger='click' @command='setDialogInfo'>
							<span class="el-dropdown-link">
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command='info'>个人信息</el-dropdown-item>
								<el-dropdown-item command='logout'>退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</span>
				</div>
			</el-col>
		</el-row>
	</header>
</template>

<script>
	export default {
		name: 'headnav',
		computed: {
			user(){
				return this.$store.getters.user;
			}
		},
		methods: {
			setDialogInfo(cmdItem){
				switch(cmdItem) {
					case 'info':
					this.showInfoList();
					break;
					case 'logout':
					this.logout();
					break;
				}
			},
			showInfoList() {
				this.$router.push('/infoshow');
			},
			logout() {
				localStorage.removeItem('eleToken');
				this.$store.dispatch('clearCurrentState');
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
.head-nav{
	width: 100%;
	min-width: 600px;
	height: 60px;
	padding: 5px;
	border-bottom: 1px solid #1f2d3d;
	background-color: #324057;
	color: #fff;
}

.logo-container {
	min-width: 400px;
	line-height: 60px;
}
.logo {
	display: inline-block;
	width: 50px;
	height: 50px;
	margin-right: 5px;
	vertical-align: middle;
}
.title {
	vertical-align: middle;
	font-size: 22px;
	font-family: "Microsoft YaHei";
	letter-spacing: 3px;
}
.user {
	float: right;
	padding-right: 10px;
	line-height: 60px;
	text-align: right;
}
.avatar {
	display: inline-block;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	vertical-align: middle;
}
.welcome {
	display: inline-block;
	width: auto;
	padding: 0 5px;
	vertical-align: middle;
}
.name {
	line-height: 20px;
	text-align: center;
	font-size: 14px;
}
.comename {
	font-size: 12px;
}
.avatarname {
	color: #409eff;
	font-weight: bolder;
}
.username {
	margin-right: 5px;
	cursor: pointer;
}
.el-dropdown {
	color: #fff;
}
</style>