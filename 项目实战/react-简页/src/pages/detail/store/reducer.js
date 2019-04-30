import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	title: '',
	content: ''
});


export default (state = defaultState, action) => {
	switch(action.type){
		case constants.INIT_DETAIL_LIST:
		return state.merge({
			title: action.title,
			content: action.content
		});
		default:
		return state;
	}
};