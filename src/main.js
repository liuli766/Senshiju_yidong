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
import './assets/commcss/iconfont.css'
Vue.prototype.$toast = Toast
Vue.use(Vant);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.prototype.$toast = Toast
import axios from 'axios'
Vue.prototype.$axios = axios;
import qs from 'qs'; //用来解决vue中post请求（详情）
Vue.prototype.qs = qs;
import smartParse from 'vue-smart-parse';//智能识别
Vue.use(smartParse)
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
