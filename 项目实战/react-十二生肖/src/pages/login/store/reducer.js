import * as constants from './constants';
import {
	fromJS
} from 'immutable';

const defaultState = fromJS({
	regOrLogin: false
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_REG:
			return state.set('regOrLogin', true);
		case constants.CHANGE_LOGIN:
			return state.set('regOrLogin', false);
		default:
			return state;
	}
};