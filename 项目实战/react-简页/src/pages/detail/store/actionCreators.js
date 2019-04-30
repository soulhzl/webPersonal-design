import * as constants from './constants';
import axios from 'axios';

const initData = (data) => ({
		type: constants.INIT_DETAIL_LIST,
		title: data.title,
		content: data.content
});

export const getDetailList = (id) => {
	return (dispatch) => {
		axios.get('/api/detailList.json?id=' + id).then((res) => {
			const data = res.data.data;
			dispatch(initData(data));
		}).catch(() => {
			console.log('error');
		});
	};
}