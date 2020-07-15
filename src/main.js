import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/commcss/reset.css"
import "./assets/rem.js"
import 'vant/lib/index.css'; 
import { Rate, Icon,Swipe, SwipeItem,Popup,Checkbox, CheckboxGroup,GoodsAction, GoodsActionIcon, GoodsActionButton,Toast,Stepper,NavBar,Card,Search,DropdownMenu, DropdownItem,AddressEdit } from 'vant';
Vue.use(Rate);
Vue.use(Icon).use(Swipe).use(SwipeItem).use(Popup ).use(Checkbox).use(CheckboxGroup).use(Toast).use(Stepper).use(NavBar).use(Card).use(Search).use(DropdownMenu).use(DropdownItem).use(AddressEdit);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
