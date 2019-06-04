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
	Lazyload
} from 'vant'
import './assets/iconfont.css'

Vue.config.productionTip = false
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')