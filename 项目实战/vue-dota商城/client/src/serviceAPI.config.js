const SERVERURL = "http://47.107.40.84:8888/"
const LOCALURL = "http://47.107.40.84/"
// 服务器
const URL = {
	registerUserTest: SERVERURL + 'user/register',
	loginUserTest: SERVERURL + 'user/login',
	home: LOCALURL + '/stable.json',
	getGoodsInfoTest: SERVERURL + 'goodsinfo/getGoodsInfo',
	getCategoryGoodsTest: SERVERURL + 'goodsinfo/getCategoryGoods',
	getSearchListTest: SERVERURL + 'goodsinfo/getSearchList',
	saveAddressTest: SERVERURL + 'user/saveAddress',
	getAddressListTest: SERVERURL + 'user/getAddressList',
}
module.exports = URL