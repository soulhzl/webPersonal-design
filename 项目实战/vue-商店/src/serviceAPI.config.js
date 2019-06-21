const BASEURL = "http://localhost:8080/"
const BKBASEURL = "http://localhost:8888/"
// 服务器
/*const BASEURL = "http://47.107.40.84/"
const BKBASEURL = "http://47.107.40.84:8888/"*/
const URL = {
	getShoppingMallInfo: BASEURL + 'ShoppingMall.json',
	getGoodsInfo: BASEURL + 'ShoppingMall.json',
	registerUser: BKBASEURL + 'user/register',
	loginUser: BKBASEURL + 'user/login',
	getDetailGoodsInfo: BKBASEURL + 'goods/getDetailGoodsInfo',
	getCategoryList: BKBASEURL + 'goods/getCategoryList',
	getCategorySubList: BKBASEURL + 'goods/getCategorySubList',
	getGoodsListByCategorySubID: BKBASEURL + 'goods/getGoodsListByCategorySubID'
}
module.exports = URL