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
export default {
  getHomeData,//手机端首页
  getTeam, //设计团队
  getTeamDetail, //设计师详情
  getComment, //评论
  getupdown,//文章评论顶（1）-踩（2）
  getCommentDetail, //文章评论详情
  getTeamwork, //合作请求
  loginByMsg, //短信验证码登录
}