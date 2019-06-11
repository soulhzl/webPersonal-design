const BASEURL = "http://localhost:8080/"
const BKBASEURL = "http://localhost:3000/"
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