import * as constants from './constants';
import axios from 'axios';
import io from 'socket.io-client';
const socket = io('ws://localhost:8888');

// func:加载用户数据
// 错误信息
const errMsg = (msg) => ({
	msg,
	type: constants.ERR_MSG,
});

// 用户列表
const userList = (value) => ({
	...value,
	type: constants.USER_LIST,
});

//加载交流列表
export const handleUpdateList = (value) => {
	if (!value) {
		return errMsg('不能为空，错误错误！！！');
	}
	return async (dispatch) => {
		const res = await axios.get('user/list?sex=' + value);
		if (res.status === 200 && res.data.code === 0) {
			dispatch(userList(res.data));
		}
	};
};

// func:加载信息列表
// 信息列表
const msgList = (value, userid) => ({
	...value,
	userid,
	type: constants.MSG_LIST
});

// 加载信息列表
export const getMsgList = (url) => {
	let useUrl = 'chat/msglist';
	if (url) {
		useUrl = 'msgList';
	}
	return async (dispatch, getState) => {
		const res = await axios.get(useUrl);
		if (res.status === 200 && res.data.code === 0) {
			const userid = getState().get('user').get('_id');
			dispatch(msgList(res.data, userid));
		}
	};
};

// func:收发信息
// 发送信息
export const sendMess = (from, to, msg) => {
	return (dispatch) => {
		socket.emit('sendmess', {
			from,
			to,
			msg
		});
	};
};

// 接收信息
const recvmsg = (value, userid) => ({
	...value,
	userid,
	type: constants.MSG_RECV
});

// 接收信息
export const recvMess = () => {
	return (dispatch, getState) => {
		socket.on('recvmsg', (data) => {
			const userid = getState().get('user').get('_id');
			dispatch(recvmsg(data, userid));
		});
	};
};

// func:阅读后更新数量
// 更新数量
const msgRead = (from, userid, num) => ({
	from,
	userid,
	num,
	type: constants.MSG_READ
});

// 更新数量
export const readMess = (from) => {
	return async (dispatch, getState) => {
		const res = await axios.post('/chat/readmsg', {
			from
		});
		if (res.status === 200 && res.data.code === 0) {
			const userid = getState().get('user').get('_id');
			dispatch(msgRead(from, userid, res.data.num));
		}
	};
}