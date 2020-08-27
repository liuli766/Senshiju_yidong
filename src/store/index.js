import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navactivechoseid: 0,
    token: localStorage.getItem('istoken'),//token信息
    userInfor: JSON.parse(localStorage.getItem('loginData')), //当前账号信息
    downNum: 0, //点赞数
    upNum: 0,//踩赞数
    headimg:localStorage.getItem('headImg'),
    canelOrderItem:'',
    cartList: [
      {
        id: 1,
        img: require("../assets/logo.png"),
        price: 598,
        intro: "A116新农村一层四合院别墅设计图纸",
        value: 1,
        cheakG: false,
        num: 1
      },
      {
        id: 2,
        img: require("../assets/logo.png"),
        price: 598,
        intro: "A116新农村一层四合院别墅设计图纸",
        value: 1,
        cheakG: false,
        num: 1
      },
      {
        id: 3,
        img: require("../assets/logo.png"),
        price: 598,
        intro: "A116新农村一层四合院别墅设计图纸",
        value: 1,
        cheakG: false,
        num: 1
      },
    ], //购物车
    add: [],  //添加到购物车的商品（已选商品）
    allCheck: false
  },
  getters: {
    loginData(state) {
      if (state.token) {
        return {
          token: state.token
        }
      }
      let token = localStorage.getItem('loginData')
      if (token) {
        return JSON.parse(token)
      }
      return {}
    },
    gettoken(state, getters) { //获取token
      const loginData = getters.loginData
      console.log(loginData, 1111)
      return loginData.token

    },

    //获取商品列表
    getShopList: state => state.cartList,
    //获取购物车列表
    addShopList: state => {
      return state.add.map(({ id, num }) => {
        console.log(num)
        let product = state.cartList.find(n => n.id == id);
        if (product) {
          return {
            ...product,
            num: num
          }
        }
      })
    },
    //获取总数量
    totalNum: (state, getters) => {
      let total = 0;
      getters.addShopList.map(n => {
        total += n.num;
        console.log(n)
      })
      console.log(total)
      return total;
    },

    //计算总价格
    totalPrice: (state, getters) => {
      let total = 0;
      getters.addShopList.map(n => {
        total += n.num * n.price
      })
      console.log(total)
      return total;
    },
  },
  mutations: {
    gonav(state, num) {
      state.navactivechoseid = num
    },
    settoken(state, data) { //vuex存放toke
      let token = localStorage.getItem('istoken')
      console.log(token)
      state.token = token
      state.userInfor = data
      localStorage.setItem("loginData", JSON.stringify(data))
    },
    cleartoken(state) { // 清除token
      state.token = ""
      state.userInfor = {}
      localStorage.removeItem('loginData');
      localStorage.removeItem('istoken');
    },
    //加入购物车
    addCart(state, { id }) {
      let record = state.add.find(n => n.id == id);
      if (!record) {
        state.add.push({
          id,
          num: 1
        })
      } else {
        record.num++;
      }
    },
    //删除单个物品
    deletShop(state, product) {
      state.add.forEach((item, i) => {
        if (item.id == product.id) {
          state.add.splice(i, 1)
        }
      })
    },
    //清空购物车
    clearCart(state) {
      state.add = [];
    },

    // 点赞数
    handdown(state,num) {
      state.downNum=num
    },
    // 头像
    uploadimg(state,img){
      state.userInfor.photo= img
      state.headimg=img
      state.userInfor.photo
    },
    // 取消订单
    canelOrderItem(state,data){
        state.canelOrderItem=data
    }
  },
  actions: {
    //加入购物车
    addToCart({ commit }, product) {
      commit('addCart', {
        id: product.id
      })
    },
    //清空购物车
    clearToCart({ commit }) {
      commit('clearCart')
    },
    //删除单个物品
    deletToShop({ commit }, product) {
      commit('deletShop', product)
    }
  },
  modules: {
  }
})
