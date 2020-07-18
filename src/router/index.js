import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// 解决导航组件重复点击报错， 更改原型上的push方法，进行了catch处理
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buildLibrary',
    component: () => import(/* webpackChunkName: "about" */ '../views/buildLibrary.vue')
  },
  {
    path: '/PersonalTtailor',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalTtailor.vue')
  },
  {
    path: '/buildLog',
    component: () => import(/* webpackChunkName: "about" */ '../views/buildLog.vue')
  },
  {
    path: '/buildEncyc',
    component: () => import(/* webpackChunkName: "about" */ '../views/buildEncyc.vue')
  },
  {
    path: '/Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  {
    path: '/desigerDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/desigerDetail.vue')
  },
  {
    path: '/productDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/productDetail.vue')
  },
  {
    path: '/orderpay',
    component: () => import(/* webpackChunkName: "about" */ '../views/orderpay.vue')
  },
  {
    path: '/stayGoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/stayGoods.vue')
  },
  {
    path: '/logisticsInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/logisticsInfo.vue')
  },
  {
    path: '/product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
  },
  {
    path: '/mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  {
    path: '/newshippingAddr',
    component: () => import(/* webpackChunkName: "about" */ '../views/newshippingAddr.vue')
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/personInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/personInfo.vue')
  },
  {
    path: '/surePay',
    component: () => import(/* webpackChunkName: "about" */ '../views/surePay.vue')
  },
  {
    path: '/collectionList',
    component: () => import(/* webpackChunkName: "about" */ '../views/collectionList.vue')
  },
  {
    path: '/drawingOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/drawingOrder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach(() => { // 打开任何页面都会显示顶部
  window.scrollTo(0, 0)
})
export default router
