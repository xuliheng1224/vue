// import HelloWorld from '../components/HelloWorld'
import VueRouter from 'vue-router'

const routes = [{
  path: '/',
  name: 'HelloWorld',
  // component: HelloWorld
  component: resolve => require(['@/components/HelloWorld'], resolve)
},
{
  path: '/mine',
  name: '/mine',
  // component: r => require.ensure([], () => r(require('../components/mine/mine')), 'mine')
  component: resolve => require(['@/components/mine/mine'], resolve)
},
{
  path: '/mine/information/:id',
  name: '/mine/information',
  // component: r => require.ensure([], () => r(require('../components/mine/information')), 'mine')
  component: resolve => require(['@/components/mine/information'], resolve)
}]

const router = new VueRouter({
  routes
})

export default router
