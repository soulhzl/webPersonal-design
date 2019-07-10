const SERVERURL = "http://47.107.40.84:8888/"
const LOCALURL = "http://localhost:8080/"
// const LOCALURL = "http://47.107.40.84/"
// 服务器
/*const BASEURL = "http://47.107.40.84/"
const BKBASEURL = "http://47.107.40.84:8888/"*/
const URL = {
	registerUserTest: SERVERURL + 'user/register',
	// registerUserTest: '/user/register',
	loginUserTest: SERVERURL + 'user/login',
	// loginUserTest: '/user/login',
	home: LOCALURL + '/stable.json',
	getGoodsInfoTest: SERVERURL + 'goodsinfo/getGoodsInfo',
	// getGoodsInfoTest: '/goodsinfo/getGoodsInfo',
	getCategoryGoodsTest: SERVERURL + 'goodsinfo/getCategoryGoods',
	// getCategoryGoodsTest: '/goodsinfo/getCategoryGoods',
	getSearchListTest: SERVERURL + 'goodsinfo/getSearchList',
	// getSearchListTest: 'goodsinfo/getSearchList',
	saveAddressTest: SERVERURL + 'user/saveAddress',
	// saveAddressTest: 'user/saveAddress',
	getAddressListTest: SERVERURL + 'user/getAddressList',
	// getAddressListTest: 'user/getAddressList'
}
module.exports = URL