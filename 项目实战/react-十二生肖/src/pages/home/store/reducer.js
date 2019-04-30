import * as constants from './constants';
import {
	fromJS
} from 'immutable';

const defaultState = fromJS({
	navList: [],
	carouselBg: 'http://img4.a0bi.com/upload/ttq/20180404/1522846291654.jpg',
	selectedId: 1
});

const changeBg = (state, action) => {
	return state.merge({
		'carouselBg': action.bg,
		'selectedId': action.selectedId
	});
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.INIT_NAV_LIST:
			return state.set('navList', action.list);
		case constants.CHANGE_BG:
			return changeBg(state, action);
		default:
			return state;
	}
};