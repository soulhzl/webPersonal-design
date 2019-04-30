import {
	fromJS
} from 'immutable';
import * as constants from './constants';
import {
	getRedirectPath
} from '../../../util';

const defaultState = fromJS({
	user: '',
	sex: 'boy',
	avatar: '',
	company: '',
	desc: '',
	money: '',
	title: '',
	msg: '',
	_id: '',
	redirectTo: ''
});

// 将要注册/登录的用户信息保存
const addUserInfoAuth = (state, action) => {
	const {
		pwd,
		type,
		...data
	} = action;
	return state.merge({
		...data,
		msg: '',
		redirectTo: getRedirectPath(data.sex, data.avatar)
	});
};

// 将要加载的用户信息保存
const addUserInfo = (state, action) => {
	const {
		pwd,
		type,
		...data
	} = action;
	return state.merge({
		...data,
		msg: '用户数据加载成功',
	});
};

// 清除数据
const cleanInfo = (state, action) => {
	return state.merge({
		user: '',
		sex: 'boy',
		avatar: '',
		company: '',
		desc: '',
		money: '',
		title: '',
		msg: '',
		_id: '',
		redirectTo: '/login'
	})
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.INFO_AUTH:
			return addUserInfoAuth(state, action); //修改用户信息
		case constants.LOAD_DATA:
			return addUserInfo(state, action); //加载用户信息
		case constants.LOGOUT:
			return cleanInfo(state, action); //清除用户信息
		case constants.ERR_MSG:
			return state.set('msg', action.msg); //信息错误报错
		default:
			return state;
	}
};