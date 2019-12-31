import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    // beforeEnter: (to, from, next) => { // 单个路由独享钩子
    //   next()
    // }
  },
  {
    path: '/home',
    component: resolve => require(["../views/layout/layout.vue"], resolve),
    children: [{
      path: '/',
      name: 'home',
      component: resolve => require(["../views/home/home.vue"], resolve)
    },{
        path: 'demo',
        name: 'demo',
        component: resolve => require(["../views/demo/demo.vue"], resolve)
      }]
  },
  // {
  //   path: '/demo',
  //   name: 'demo',
  //   component: resolve => require(["../views/demo/demo.vue"], resolve)
  // },
  // { path: '*', redirect: '/' } // 错误输入重定向
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  if (store.state.user) {
    next()
  } else {
    if (to.path === '/') {
      next()
    } else {
      next('/')
    }
  }
})

export default router
