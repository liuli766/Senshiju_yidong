import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navactivechoseid:0,
    token: localStorage.getItem('istoken'),//token信息
    userInfor:JSON.parse(localStorage.getItem('loginData')), //当前账号信息
  },
  getters: {
    loginData (state) {
      if(state.token) {
        return {
          token:state.token
        }
      }
      let token = localStorage.getItem('loginData')
      if(token) {
        return JSON.parse(token)
      }
      return {}
    },
    gettoken(state,getters) {
      const loginData = getters.loginData
      console.log(loginData,1111)
      return loginData.token
      
    }
  },
  mutations: {
    gonav(state,num){
      state.navactivechoseid=num
    },
    settoken(state, data) { //vuex存放toke
      let token = localStorage.getItem('istoken')

      state.token = token
      state.userInfor=data
      localStorage.setItem("loginData", JSON.stringify(data))
    },
    cleartoken(state) { // 清除token
      state.token = ""
      state.userInfor={}
      localStorage.removeItem('loginData');
      localStorage.removeItem('istoken');
    },

  },
  actions: {
  },
  modules: {
  }
})
