// 公共reducer
import {
	combineReducers
} from 'redux-immutable';
import {
	reducer as userReducer
} from '../pages/user/store';
import {
	reducer as chatReducer
} from '../pages/chat/store';

const reducer = combineReducers({
	user: userReducer,
	chat: chatReducer
});

export default reducer;