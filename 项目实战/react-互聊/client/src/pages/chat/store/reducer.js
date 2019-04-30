import {
	fromJS
} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	list: [],
	chatMsg: [],
	unread: 0,
	users: {}
});

// 将用户信息保存
const addUserMsg = (state, action) => {
	const {
		type,
		...data
	} = action;
	const users = JSON.parse(data.users);
	const userid = data.userid;
	return state.merge({
		chatMsg: [...state.get('chatMsg'), ...data.data],
		unread: data.data.filter((v) => !v.read && v.to === userid).length,
		users: users
	});
};

// 将接收信息保存
const addRecvMsg = (state, action) => {
	const {
		type,
		userid,
		...data
	} = action;
	const num = data.to === userid ? 1 : 0;
	return state.merge({
		chatMsg: [...state.get('chatMsg'), data],
		unread: state.get('unread') + num
	});
};

// 将读取后的消息减去
const redReadMsg = (state, action) => {
	return state.merge({
		chatMsg: state.get('chatMsg').map(v => ({
			...v,
			read: v.from === action.from ? true : v.read
		})),
		unread: state.get('unread') - action.num
	});
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.USER_LIST:
			return state.set('list', action.data); //加载交流列表
		case constants.MSG_LIST:
			return addUserMsg(state, action); //加载交流列表
		case constants.MSG_RECV:
			return addRecvMsg(state, action); //加载交流列表
		case constants.MSG_READ:
			return redReadMsg(state, action); //加载交流列表
		case constants.ERR_MSG:
			return state.set('msg', action.msg); //信息错误报错
		default:
			return state;
	}
};