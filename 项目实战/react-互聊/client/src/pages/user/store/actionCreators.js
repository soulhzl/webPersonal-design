import * as constants from './constants';
import axios from 'axios';

// func:保存用户数据
// 错误信息
const errMsg = (msg) => ({
	msg,
	type: constants.ERR_MSG,
});

// 注册/登录用户信息
const userInfo = (value) => ({
	...value,
	type: constants.INFO_AUTH,
});

// 处理注册用户信息
export const handleRegInfo = (value) => {
	const {
		user,
		pwd,
		repeatpwd,
		sex
	} = value;
	if (!user || !pwd) {
		return errMsg('用户名与密码不能为空');
	}
	if (pwd !== repeatpwd) {
		return errMsg('密码输入不一致');
	}
	return async (dispatch) => {
		const res = await axios.post('/user/reg', {
			user,
			pwd,
			sex
		});
		if (res.status === 200) {
			if (res.data.code === 1) {
				dispatch(errMsg(res.data.msg));
			} else {
				dispatch(userInfo(res.data.data));
			}
		}
	};
};

// 处理登录用户信息
export const handleLoginInfo = (value) => {
	const {
		user,
		pwd
	} = value;
	if (!user || !pwd) {
		return errMsg('用户名与密码不能为空');
	}
	return async (dispatch) => {
		const res = await axios.post('/user/login', {
			user,
			pwd
		});
		if (res.status === 200) {
			const tmpData = JSON.parse(JSON.stringify(value));
			tmpData.sex = res.data.sex;
			if (res.data.code === 1) {
				dispatch(errMsg(res.data.msg));
			} else {
				dispatch(userInfo(res.data.data));
			}
		}
	};
};

//处理更新用户信息
export const handleUpdateInfo = (value) => {
	const {
		avatar,
		title,
		desc
	} = value;
	if (!avatar || !title || !desc) {
		return errMsg('请将详细信息都填写完整！');
	}
	return async (dispatch) => {
		const res = await axios.post('/user/update', {
			...value
		});
		if (res.status === 200) {
			if (res.data.code === 1) {
				dispatch(errMsg(res.data.msg));
			} else {
				dispatch(userInfo(res.data.data));
			}
		}
	};
};

// func:加载用户数据
// 加载用户数据
export const loadData = (data) => ({
	...data,
	type: constants.LOAD_DATA
});

// func:清除用户数据
// 清除用户数据
export const handleLogoutSub = () => ({
	type: constants.LOGOUT
});