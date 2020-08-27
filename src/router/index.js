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
  { //首页
    path: '/',
    name: 'Home',
    component: Home
  },
  { //设计团队
    path: '/buildLibrary',
    component: () => import(/* webpackChunkName: "about" */ '../views/buildLibrary.vue')
  },
  { //私人定制
    path: '/PersonalTtailor',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalTtailor.vue')
  },
  { //个人中心
    path: '/person',
    redirect: '/mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  { //建房百科
    path: '/buildEncyc',
    component: () => import(/* webpackChunkName: "about" */ '../views/buildEncyc.vue')
  },
  { //商务合作
    path: '/Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  { //设计团队详情
    path: '/desigerDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/desigerDetail.vue')
  },
  { //商品详情
    path: '/productDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/productDetail.vue')
  },
  { //订单待付款
    path: '/orderpay',
    component: () => import(/* webpackChunkName: "about" */ '../views/orderpay.vue')
  },
  { //商家待发货
    path: '/stayGoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/stayGoods.vue')
  },
  { //物流信息
    path: '/logisticsInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/logisticsInfo.vue')
  },
  { //成品
    path: '/product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
  },
  { //我的
    path: '/mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  { //新建收货地址
    path: '/newshippingAddr',
    component: () => import(/* webpackChunkName: "about" */ '../views/newshippingAddr.vue')
  },
  { //注册
    path: '/register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  { //登录
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  { //个人信息
    path: '/personInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/personInfo.vue')
  },
  { //确认支付
    path: '/surePay',
    component: () => import(/* webpackChunkName: "about" */ '../views/surePay.vue')
  },
  { //收藏列表
    path: '/collectionList',
    component: () => import(/* webpackChunkName: "about" */ '../views/collectionList.vue')
  },
  { //图纸订单
    path: '/drawingOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/drawingOrder.vue')
  },
  { //购物车页面
    path: '/cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
  },
  { 
    path: '/userxy',
    component: () => import(/* webpackChunkName: "about" */ '../views/userxy.vue')
  },
  { // 建房百科详情页
    path: '/buildencycDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/buildencycDetail.vue')
  },
  { // 评论详情页
    path: '/commentDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/commentDetail.vue')
  },
  { // 文章收藏
    path: '/piccolltList',
    component: () => import(/* webpackChunkName: "about" */ '../views/piccolltList.vue')
  },
  { // 图纸收藏
    path: '/Drawingcollection',
    component: () => import(/* webpackChunkName: "about" */ '../views/Drawingcollection.vue')
  },
  { // 地址列表
    path: '/AddressList',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddressList.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach(() => { // 打开任何页面都会显示顶部
  window.scrollTo(0, 0)
})
export default router
