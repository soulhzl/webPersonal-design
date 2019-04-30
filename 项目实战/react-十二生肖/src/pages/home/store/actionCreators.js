import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const initNavList = (data) => ({
	type: constants.INIT_NAV_LIST,
	list: fromJS(data.navList)
});

export const getNavList = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const data = res.data.data;
			dispatch(initNavList(data));
		}).catch(() => {
			console.log('error');
		});
	};
};

export const changeBg = (bg, selectedId) => ({
	type: constants.CHANGE_BG,
	bg,
	selectedId
});