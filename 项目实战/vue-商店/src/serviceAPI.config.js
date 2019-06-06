const BASEURL = "http://localhost:8080/"
const BKBASEURL = "http://localhost:3000/"
const URL = {
	getShoppingMallInfo: BASEURL + 'ShoppingMall.json',
	getGoodsInfo: BASEURL + 'ShoppingMall.json',
	registerUser: BKBASEURL + 'user/register',
}
module.exports = URL