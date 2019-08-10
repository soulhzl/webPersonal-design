const LOCALURL = "http://localhost:8080/"
// 本地
const URL = {
	registerUserTest: '/user/register',
	loginUserTest: '/user/login',
	home: LOCALURL + '/stable.json',
	getGoodsInfoTest: '/goodsinfo/getGoodsInfo',
	getCategoryGoodsTest: '/goodsinfo/getCategoryGoods',
	getSearchListTest: 'goodsinfo/getSearchList',
	saveAddressTest: 'user/saveAddress',
	getAddressListTest: 'user/getAddressList'
}
module.exports = URL