import http from '@/http.js'
function getHomeData(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/index', params)
}
function getTeam(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/designs', params)
}
function getTeamDetail(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Team/design_detail', params)
}
function getComment(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/comment', params)
}
function getupdown(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/up_down', params)
}
function getCommentDetail(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/comment_detail', params)
}
function getTeamwork(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/teamwork', params)
}
function loginByMsg(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Login/loginByMsg', params)
}
function getCode(data) {
  let params = {
    ...data
  }
  return http.fetchPost('api/Common/sendMsg', params)
}
function getCarts(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Member/carts', params)
}
function getCancelOrder(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Member/cancel_order', params)
}
function getArticle(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/get_article', params)
}
function getProtocol(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/protocol', params)
}
function getDoComment(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/do_comment', params)
}
function getJoinCart(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Member/join_cart', params)
}
function getCate(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Common/cates', params)
}
function getHots(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/hots', params)
}
function getProDetail(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/blue_detail', params)
}
function getReduceCart(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Member/del_cart', params)
}
function getDrawings() {
  return http.fetchPost('/index/Team/private_imgs')
}
function teamDrawings(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Team/pri_drawings', params)
}
function getupInfo(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/upd_info', params)
}
function uploadimg(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/up_image', params)
}
function fachcollect(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/sel_collect', params)
}
function getCancelcollect(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/cancel_collect', params)
}
function getInfo(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/info_detail', params)
}
function getCollect(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Common/collect', params)
}
function getAddr(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/add_ress', params)
}
function getAddress(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/address', params)
}
function getUpdress(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/upd_ress', params)
}
function getRemoveAddr(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/del_ress', params)
}
function getMyOrders(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/my_orders', params)
}
function getOrderDetail(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Member/order_detail', params)
}
function getArtClass(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Common/art_class', params)
}
export default {
  getHomeData,//手机端首页
  getTeam, //设计团队
  getTeamDetail, //设计师详情
  getComment, //评论
  getupdown,//文章评论顶（1）-踩（2）
  getCommentDetail, //文章评论详情
  getTeamwork, //合作请求
  loginByMsg, //短信验证码登录
  getCode,//发送短信
  getCarts, //购物车信息
  getCancelOrder, //取消订单
  getArticle, //百科文章
  getProtocol, //用户协议/商务合作
  getDoComment,//文章评论内容
  getJoinCart,//加入购物车
  getCate,//分类
  getHots, //热门图纸分类
  getProDetail, //图纸详情
  getReduceCart, //删除购物车
  getDrawings, //营业执照
  teamDrawings,// 定制图纸展示
  getupInfo, //修改个人资料
  uploadimg, // 上传图片
  fachcollect,//文章，图纸收藏
  getCancelcollect,// 取消收藏
  getInfo,//百科详情
  getCollect,//收藏
  getAddr,//添加收货地址
  getAddress, //收货地址展示
  getUpdress,//修改地址
  getRemoveAddr,// 删除收货地址
  getMyOrders,//我的订单
  getOrderDetail,//订单详情
  getArtClass,//百科分类收藏
}