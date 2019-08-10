import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'loading',
		component: () =>
			import ('./views/Loading.vue')
	}, {
		path: '/home',
		name: 'home',
		component: () =>
			import ('./views/Home.vue')
	}]
})