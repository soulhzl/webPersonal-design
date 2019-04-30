import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const initData = (data) => ({
	type: constants.INIT_HOME_DATA,
	topicList: fromJS(data.topicList),
	articleList: fromJS(data.articleList),
	recommendList: fromJS(data.recommendList),
	writerList: fromJS(data.writerList)
});

const addData = (data, page) => ({
	type: constants.ADD_DATA,
	articleList: fromJS(data.articleList),
	page
});

export const toggleScroll = (data) => {
	return {
		type: constants.TOGGLE_SCROLL,
		data
	};
};

export const getHomeData = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const data = res.data.data;
			dispatch(initData(data));
		}).catch(() => {
			console.log('error');
		});
	};
};

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const data = res.data.data;
			dispatch(addData(data, page + 1));
		}).catch(() => {
			console.log('error');
		});
	};
}