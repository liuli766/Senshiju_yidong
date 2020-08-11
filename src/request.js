import http from '@/http.js'
function getHomeData(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Index/index', params)
}
export default {
    getHomeData,//手机端首页
}