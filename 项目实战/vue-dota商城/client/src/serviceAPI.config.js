const BASEURL = "http://localhost:8888/"
const LOCALURL = "http://localhost:8080/"
// 服务器
/*const BASEURL = "http://47.107.40.84/"
const BKBASEURL = "http://47.107.40.84:8888/"*/
const URL = {
	registerUser: BASEURL + 'user/register',
	registerUserTest: '/user/register',
	loginUser: BASEURL + 'user/login',
	loginUserTest: '/user/login',
	home: LOCALURL + '/stable.json',
	getGoodsInfo: BASEURL + 'goodsinfo/getGoodsInfo',
	getGoodsInfoTest: '/goodsinfo/getGoodsInfo',
	getCategoryGoods: BASEURL + 'goodsinfo/getCategoryGoods',
	getCategoryGoodsTest: '/goodsinfo/getCategoryGoods',
	getSearchList: BASEURL + 'goodsinfo/getSearchList',
	getSearchListTest: 'goodsinfo/getSearchList',
	saveAddress: BASEURL + 'user/saveAddress',
	saveAddressTest: 'user/saveAddress',
	getAddressList: BASEURL + 'user/getAddressList',
	getAddressListTest: 'user/getAddressList'
}
module.exports = URL