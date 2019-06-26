import Vue from 'vue'
import fastClick from 'fastclick'
import {
	Field,
	Cell,
	CellGroup,
	Button,
	NavBar,
	Tabbar,
	TabbarItem,
	Row,
	Col,
	Icon,
	Swipe,
	SwipeItem,
	Lazyload,
	SubmitBar,
	Card,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Tab,
	Tabs,
	Rate
} from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from './http'
import 'swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'
import './assets/styles/iconfont/iconfont.js'

Vue.config.productionTip = false
fastClick.attach(document.body) //移动点击延迟事件
Vue.prototype.$axios = axios //http请求
Vue.use(Field).use(Cell).use(CellGroup).use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload).use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Tab).use(Tabs).use(Rate).use(VueAwesomeSwiper) //vant组件引入

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')