import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/commcss/reset.css"
import "./assets/rem.js"
import 'vant/lib/index.css'; 
import Vant from 'vant';
import { Toast } from 'vant';
Vue.prototype.$toast=Toast
Vue.use(Vant);
Vue.prototype.$toast=Toast
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
