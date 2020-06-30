import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/commcss/reset.css"
import "./assets/rem.js"
import 'vant/lib/index.css'; 
import { Rate, Icon,Swipe, SwipeItem  } from 'vant';
Vue.use(Rate);
Vue.use(Icon).use(Swipe).use(SwipeItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
