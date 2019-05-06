import Type from './type'
export default {
	[Type.SET_AUTHENTICATED](state, isAuthenticated) {
		if (isAuthenticated) {
			state.isAuthenticated = isAuthenticated;
		} else {
			state.isAuthenticated = false;
		}
	},

	[Type.SET_USER](state, user) {
		if (user) {
			state.user = user;
		} else {
			state.user = {};
		}
	}
}