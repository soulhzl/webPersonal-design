import * as constants from './constants';
import axios from 'axios';

const changeLogin = () => ({
	type: constants.LOGIN,
	value: true
});

export const loginAct = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin());
			}else{
				alert('登录失败');
			}
		});
	}
}

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
});