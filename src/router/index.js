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
    component: Home,
    meta: {
      title: '首页'
    },
  },
  { //设计团队
    path: '/buildLibrary',
    meta: {
      title: '设计团队'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/buildLibrary.vue')
  },
  { //私人定制
    path: '/PersonalTtailor',
    meta: {
      title: '私人定制'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalTtailor.vue')
  },
  { //个人中心
    path: '/person',
    redirect: '/mine',
    meta: {
      title: '个人中心'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  { //建房百科
    path: '/buildEncyc',
    meta: {
      title: '建房百科'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/buildEncyc.vue')
  },
  { //商务合作
    path: '/Business',
    meta: {
      title: '商务合作'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  { //设计团队详情
    path: '/desigerDetail',
    meta: {
      title: '设计团队详情'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/desigerDetail.vue')
  },
  { //商品详情
    path: '/productDetail',
    meta: {
      title: '商品详情'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/productDetail.vue')
  },
  { //订单待付款
    path: '/orderpay',
    meta: {
      title: '订单待付款'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/orderpay.vue')
  },
  { //商家待发货
    path: '/stayGoods',
    meta: {
      title: '商家待发货'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/stayGoods.vue')
  },
  { //物流信息
    path: '/logisticsInfo',
    meta: {
      title: '物流信息'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/logisticsInfo.vue')
  },
  { //成品
    path: '/product',
    meta: {
      title: '成品'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
  },
  { //我的
    path: '/mine',
    meta: {
      title: '我的'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  { //新建收货地址
    path: '/newshippingAddr',
    meta: {
      title: '新建收货地址'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/newshippingAddr.vue')
  },
  { //注册
    path: '/register',
    meta: {
      title: '注册'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  { //登录
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  { //个人信息
    path: '/personInfo',
    meta: {
      title: '个人信息'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/personInfo.vue')
  },
  { //确认支付
    path: '/surePay',
    meta: {
      title: '支付'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/surePay.vue')
  },
  { //收藏列表
    path: '/collectionList',
    meta: {
      title: '收藏'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/collectionList.vue')
  },
  { //图纸订单
    path: '/drawingOrder',
    meta: {
      title: '图纸订单'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/drawingOrder.vue')
  },
  { //购物车页面
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
  },
  { 
    path: '/userxy',
    meta: {
      title: '用户协议'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/userxy.vue')
  },
  { // 建房百科详情页
    path: '/buildencycDetail',
    meta: {
      title: '建房百科详情页'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/buildencycDetail.vue')
  },
  { // 评论详情页
    path: '/commentDetail',
    meta: {
      title: '评论详情页'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/commentDetail.vue')
  },
  { // 文章收藏
    path: '/piccolltList',
    meta: {
      title: '文章收藏'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/piccolltList.vue')
  },
  { // 图纸收藏
    path: '/Drawingcollection',
    meta: {
      title: '图纸收藏'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Drawingcollection.vue')
  },
  { // 地址列表
    path: '/AddressList',
    meta: {
      title: '地址列表'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AddressList.vue')
  },
  { // 售后
    path: '/afterSale',
    meta: {
      title: '售后'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/afterSale.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => { // 路由标题
  window.document.title = to.meta.title
  next()
})
router.afterEach(() => { // 打开任何页面都会显示顶部
  window.scrollTo(0, 0)
})
export default router
