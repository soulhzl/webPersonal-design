import Type from './type'
export default {
	setAuthenticated: ({
		commit
	}, isAuthenticated) => {
		commit(Type.SET_AUTHENTICATED, isAuthenticated)
	},

	setUser: ({
		commit
	}, user) => {
		commit(Type.SET_USER, user)
	},

	clearCurrentState: ({
		commit
	}) => {
		commit(Type.SET_AUTHENTICATED, false);
		commit(Type.SET_USER, null);
	}
}