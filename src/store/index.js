import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navactivechoseid:0
  },
  mutations: {
    gonav(state,num){
      state.navactivechoseid=num
    }
  },
  actions: {
  },
  modules: {
  }
})
