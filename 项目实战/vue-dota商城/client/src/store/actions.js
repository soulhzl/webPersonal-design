// 将数据提交给mutations
import Type from './type.js'
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
	updateAddress: ({
		commit
	}, addressDetail) => {
		commit(Type.UPDATE_ADDRESS, addressDetail)
	}
}