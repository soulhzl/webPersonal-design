import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: () =>
      import ('./views/Index.vue'),
    children: [{
      path: '/',
      name: 'home',
      component: () =>
        import ('./views/Home.vue')
    }, {
      path: '/category',
      name: 'category',
      component: () =>
        import ('./views/Category.vue')
    }, {
      path: '/cart',
      name: 'cart',
      component: () =>
        import ('./views/Cart.vue')
    }, {
      path: '/member',
      name: 'member',
      component: () =>
        import ('./views/Member.vue')
    }]
  }, {
    path: '/login',
    name: 'login',
    component: () =>
      import ('./views/Login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () =>
      import ('./views/Register.vue')
  }, {
    path: '/goodsmess',
    name: 'goodsmess',
    component: () =>
      import ('./views/GoodsMess.vue')
  }, {
    path: '/categorypage',
    name: 'categorypage',
    component: () =>
      import ('./views/CategoryPage.vue')
  }, {
    path: '/address',
    name: 'address',
    component: () =>
      import ('./views/Address.vue')
  }, {
    path: '/addaddress',
    name: 'addaddress',
    component: () =>
      import ('./views/AddAddress.vue')
  }, {
    path: '/setting',
    name: 'setting',
    component: () =>
      import ('./views/Setting.vue')
  }, {
    path: '/order',
    name: 'order',
    component: () =>
      import ('./views/Order.vue')
  }, {
    path: '/ticket',
    name: 'ticket',
    component: () =>
      import ('./views/Ticket.vue')
  }, {
    path: '/test',
    name: 'test',
    component: () =>
      import ('./views/Test.vue')
  }, {
    path: '*',
    name: 'notfound',
    component: () =>
      import ('./views/NotFound.vue')
  }]
})

router.beforeEach((to, from, next) => {
  // 判断是否已经登录，有无token
  const isLogin = localStorage.eleToken ? true : false;
  // 如果路径为登录或注册，则无跳转
  if (to.path == '/login' || to.path == '/register') {
    next();
  } else {
    // 如果已经登录有token，才显示路由，否则跳转到登陆页面
    isLogin ? next() : next('/login')
  }
})

export default router