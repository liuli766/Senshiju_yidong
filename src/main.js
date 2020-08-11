import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/commcss/reset.css"
import "./assets/rem.js"
import "./assets/commcss/animate.min.css"
import 'vant/lib/index.css'; 
import Vant from 'vant';
import { Toast } from 'vant';
Vue.prototype.$toast=Toast
Vue.use(Vant);
Vue.prototype.$toast=Toast
import axios from 'axios'
Vue.prototype.$axios=axios;
import qs from 'qs'; //用来解决vue中post请求（详情）
Vue.prototype.qs = qs;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
