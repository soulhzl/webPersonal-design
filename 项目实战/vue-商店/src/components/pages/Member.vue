<template>
	<div>
        <div>
            <van-nav-bar  title="会员中心" />
        </div>
        <div class="top">
           <img src="../../assets/images/errorimg.png" class="top-img" />
        </div>
        <div class="login">
            <router-link to='/login' tag='div'><van-button type="warning">我要登录</van-button></router-link>
            <router-link to='/register' tag='div'><van-button type="primary">我要注册</van-button></router-link>
        </div>
        <div>
            <van-cell-group>
                <van-cell title="会员卡" is-link />
                <van-cell title="地址管理" is-link  />
                <van-cell title="我的订单" is-link  />
                <van-cell title="会员权益" is-link />
                <van-cell title="联系我们" is-link  />
            </van-cell-group>
        </div>
    </div>
</template>

<script>
export default{
	name: 'member'
}
</script>

<style scoped>
.top-img{
	width:70px;
	height: 70px;
	border-radius: 50px;
}

.top{
	height:5rem;
	padding-top:2rem;
	background-color: #EEA2AD;
	text-align: center;
}

.login{
	display: flex;
	flex-direction: row;
	padding:10px;

	background-color: #fff;
}

.login div{
	flex:1;
	text-align: center;
}
</style>