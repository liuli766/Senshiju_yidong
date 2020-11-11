import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// 解决导航组件重复点击报错， 更改原型上的push方法，进行了catch处理
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
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
    component: (resolve) => require(['@/views/buildLibrary.vue'], resolve)
  },
  { //私人定制
    path: '/PersonalTtailor',
    meta: {
      title: '私人定制'
    },
    component: (resolve) => require(['@/views/PersonalTtailor.vue'], resolve)
  },
  { //个人中心
    path: '/person',
    redirect: '/mine',
    meta: {
      title: '个人中心'
    },
    component: (resolve) => require(['@/views/mine.vue'], resolve)
  },
  { //建房百科
    path: '/buildEncyc',
    meta: {
      title: '建房百科'
    },
    component: (resolve) => require(['@/views/buildEncyc.vue'], resolve)
  },
  { //商务合作
    path: '/Business',
    meta: {
      title: '商务合作'
    },
    component: (resolve) => require(['@/views/Business.vue'], resolve)
  },
  { //设计团队详情
    path: '/desigerDetail',
    meta: {
      title: '设计团队详情'
    },
    component: (resolve) => require(['@/views/desigerDetail.vue'], resolve)
  },
  { //商品详情
    path: '/productDetail',
    meta: {
      title: '商品详情'
    },
    component: (resolve) => require(['@/views/productDetail.vue'], resolve)
  },
  { //订单待付款
    path: '/orderpay',
    meta: {
      title: '订单待付款'
    },
    component: (resolve) => require(['@/views/orderpay.vue'], resolve)
  },
  { //商家待发货
    path: '/stayGoods',
    meta: {
      title: '商家待发货'
    },
    component: (resolve) => require(['@/views/stayGoods.vue'], resolve)
  },
  { //物流信息
    path: '/logisticsInfo',
    meta: {
      title: '物流信息'
    },
    component: (resolve) => require(['@/views/logisticsInfo.vue'], resolve)
  },
  { //成品
    // path: '/product/:style/:area/:face_width/:depth/:plies/:function/:structure/:cost',
    path: '/product',
    meta: {
      title: '成品'
    },
    component: (resolve) => require(['@/views/product.vue'], resolve)
  },
  { //我的
    path: '/mine',
    meta: {
      title: '我的'
    },
    component: (resolve) => require(['@/views/mine.vue'], resolve)
  },
  { //新建收货地址
    path: '/newshippingAddr',
    meta: {
      title: '新建收货地址'
    },
    component: (resolve) => require(['@/views/newshippingAddr.vue'], resolve)
  },
  { //注册
    path: '/register',
    meta: {
      title: '注册'
    },
    component: (resolve) => require(['@/views/register.vue'], resolve)
  },
  { //登录
    path: '/login',
    meta: {
      title: '登录'
    },
    component: (resolve) => require(['@/views/login.vue'], resolve)
  },
  { //个人信息
    path: '/personInfo',
    meta: {
      title: '个人信息'
    },
    component: (resolve) => require(['@/views/personInfo.vue'], resolve)
  },
  { //确认支付
    path: '/surePay',
    meta: {
      title: '支付'
    },
    component: (resolve) => require(['@/views/surePay.vue'], resolve)
  },
  { //收藏列表
    path: '/collectionList',
    meta: {
      title: '收藏'
    },
    component: (resolve) => require(['@/views/collectionList.vue'], resolve)
  },
  { //图纸订单
    path: '/drawingOrder',
    meta: {
      title: '图纸订单'
    },
    component: (resolve) => require(['@/views/drawingOrder.vue'], resolve)
  },
  { //购物车页面
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: (resolve) => require(['@/views/cart.vue'], resolve)
  },
  {
    path: '/userxy',
    meta: {
      title: '用户协议'
    },
    component: (resolve) => require(['@/views/userxy.vue'], resolve)
  },
  { // 建房百科详情页
    path: '/buildencycDetail',
    meta: {
      title: '建房百科详情页'
    },
    component: (resolve) => require(['@/views/buildencycDetail.vue'], resolve)
  },
  { // 评论详情页
    path: '/commentDetail',
    meta: {
      title: '评论详情页'
    },
    component: (resolve) => require(['@/views/commentDetail.vue'], resolve)
  },
  { // 文章收藏
    path: '/piccolltList',
    meta: {
      title: '文章收藏'
    },
    component: (resolve) => require(['@/views/piccolltList.vue'], resolve)
  },
  { // 图纸收藏
    path: '/Drawingcollection',
    meta: {
      title: '图纸收藏'
    },
    component: (resolve) => require(['@/views/Drawingcollection.vue'], resolve)
  },
  { // 地址列表
    path: '/AddressList',
    meta: {
      title: '地址列表'
    },
    component: (resolve) => require(['@/views/AddressList.vue'], resolve)
  },
  { // 售后
    path: '/afterSale',
    meta: {
      title: '售后'
    },
    component: (resolve) => require(['@/views/afterSale.vue'], resolve)
  },
  { // 支付成功
    path: '/success',
    meta: {
      title: '支付成功'
    },
    component: (resolve) => require(['@/views/success.vue'], resolve)
  },
  { // 确认支付
    path: '/surepayblue',
    meta: {
      title: '确认支付'
    },
    component: (resolve) => require(['@/views/surepayblue.vue'], resolve)
  },
  { // 建房百科专题
    path: '/Display',
    meta: {
      title: '建房百科专题'
    },
    component: (resolve) => require(['@/views/Display.vue'], resolve)
  },
  { // 视屏详情
    path: '/videoDetail',
    meta: {
      title: '建房百科详情'
    },
    component: (resolve) => require(['@/views/videoDetail.vue'], resolve)
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
