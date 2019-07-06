// 将actions提交的数据进行操作
import Type from './type'
export default {
	[Type.SET_AUTHENTICATED](state, isAuthenticated) {
		if (isAuthenticated) {
			state.isAuthenticated = isAuthenticated
		} else {
			state.isAuthenticated = false
		}
	},
	[Type.SET_USER](state, user) {
		if (user) {
			state.user = user
		} else {
			state.user = {}
		}
	},
	[Type.UPDATE_ADDRESS](state, addressDetail) {
		if (addressDetail.addressDetail) {
			if (addressDetail.addressDetail instanceof Array) {
				state.address = addressDetail.addressDetail
			} else {
				if (addressDetail.operate == "edit") {
					state.address.splice(addressDetail.index - 1, 1, addressDetail.addressDetail)
				} else {
					state.address.push(addressDetail.addressDetail)
				}
			}
		} else {
			if (addressDetail.operate == "delete") {
				state.address.splice(addressDetail.index, 1)
			}
		}
	}
}