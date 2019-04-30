import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writerList: [],
	articlePage: 1,
	showScroll: false
});

const initHomeData = (state, action) => {
	return state.merge({
		topicList: action.topicList,
		articleList: action.articleList,
		recommendList: action.recommendList,
		writerList: action.writerList
	});
};

const addData = (state, action) => {
	return state.merge({
		articleList: state.get('articleList').concat(action.articleList),
		articlePage: action.page
	});
};

export default (state = defaultState, action) => {
	switch(action.type){
		case constants.INIT_HOME_DATA:
		return initHomeData(state, action);
		case constants.ADD_DATA:
		return addData(state, action);
		case constants.TOGGLE_SCROLL:
		return state.set('showScroll', action.data);
		default:
		return state;
	}
};