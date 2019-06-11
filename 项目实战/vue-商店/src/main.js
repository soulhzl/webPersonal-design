import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	Button,
	Row,
	Col,
	Swipe,
	SwipeItem,
	Lazyload,
	List,
	Field,
	NavBar,
	Tab,
	Tabs,
	PullRefresh,
	Tabbar,
	TabbarItem,
	Stepper,
	CellGroup,
	Cell
} from 'vant'
import './assets/iconfont.css'

Vue.config.productionTip = false
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Tab).use(Tabs).use(PullRefresh).use(Tabbar).use(TabbarItem).use(Stepper).use(Cell).use(CellGroup)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')