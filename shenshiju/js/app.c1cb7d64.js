(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"02f0b7d8"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"4f8d5349"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01d1":function(t,e,n){t.exports=n.p+"img/srdz.27e6998c.png"},"0d9e":function(t,e,n){t.exports=n.p+"img/jfbk.6adfee2e.png"},1840:function(t,e,n){t.exports=n.p+"img/jftk.115407f6.png"},"273e":function(t,e,n){t.exports=n.p+"img/c2.fb832df7.png"},"2ade":function(t,e,n){"use strict";var a=n("5530"),r=(n("d3b7"),n("bc3a")),o=n.n(r),i=n("4360"),c=n("4328"),s=n.n(c);function u(t,e){return new Promise((function(n,a){o.a.post(t,e).then((function(t){n(t)}),(function(t){a(t)})).catch((function(t){a(t)}))}))}function l(t,e){return new Promise((function(n,a){o.a.get(t,{params:e}).then((function(t){n(t)}),(function(t){a(t)})).catch((function(t){a(t)}))}))}o.a.defaults.timeout=5e3,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o.a.defaults.baseURL="http://villa.jisapp.cn",o.a.interceptors.request.use((function(t){return i["a"].state.token&&(t.headers["x-authorize-token"]=i["a"].state.token),"post"===t.method&&(t.data=s.a.stringify(t.data)),t}),(function(t){return console.log("错误的传参"),Promise.reject(t)})),o.a.interceptors.response.use((function(t){return t.data.success?t.data:Promise.resolve(t.data)}),(function(t){return console.log(t),Promise.reject(t)}));var f={fetchPost:u,fetchGet:l};function d(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/index",e)}function p(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/designs",e)}function m(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/Team/design_detail",e)}function h(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/comment",e)}function b(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/up_down",e)}function v(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/comment_detail",e)}function g(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/teamwork",e)}function _(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Login/loginByMsg",e)}function x(t){var e=Object(a["a"])({},t);return f.fetchPost("api/Common/sendMsg",e)}function y(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Member/carts",e)}function C(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Member/cancel_order",e)}function O(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/get_article",e)}function j(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/protocol",e)}function P(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Index/do_comment",e)}function w(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Member/join_cart",e)}function k(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Common/cates",e)}function E(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/Home/hots",e)}function S(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/Home/blue_detail",e)}function I(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Member/del_cart",e)}function L(){return f.fetchPost("/index/Team/private_imgs")}function D(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/Team/pri_drawings",e)}function T(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/upd_info",e)}function N(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/up_image",e)}function A(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/sel_collect",e)}function $(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/cancel_collect",e)}function M(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/Home/info_detail",e)}function U(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Common/collect",e)}function z(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/add_ress",e)}function H(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/address",e)}function B(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/upd_ress",e)}function J(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/del_ress",e)}function R(t){var e=Object(a["a"])({},t);return f.fetchPost("/index/User/my_orders",e)}function q(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Member/order_detail",e)}function G(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Common/art_class",e)}function V(t){var e=Object(a["a"])({},t);return f.fetchPost("/api/Member/edit_cart",e)}e["a"]={getHomeData:d,getTeam:p,getTeamDetail:m,getComment:h,getupdown:b,getCommentDetail:v,getTeamwork:g,loginByMsg:_,getCode:x,getCarts:y,getCancelOrder:C,getArticle:O,getProtocol:j,getDoComment:P,getJoinCart:w,getCate:k,getHots:E,getProDetail:S,getReduceCart:I,getDrawings:L,teamDrawings:D,getupInfo:T,uploadimg:N,fachcollect:A,getCancelcollect:$,getInfo:M,getCollect:U,getAddr:z,getAddress:H,getUpdress:B,getRemoveAddr:J,getMyOrders:R,getOrderDetail:q,getArtClass:G,getEditCart:V}},"339f":function(t,e,n){"use strict";var a=n("a445"),r=n.n(a);r.a},"36dd":function(t,e,n){t.exports=n.p+"img/b2.f1ca73a9.png"},"38b2":function(t,e,n){t.exports=n.p+"img/grzx.d13eb244.png"},"3ac6":function(t,e,n){t.exports=n.p+"img/sjtd.492e1f90.png"},4062:function(t,e,n){},4360:function(t,e,n){"use strict";n("7db0"),n("4160"),n("d81d"),n("a434"),n("159b");var a=n("5530"),r=n("2b0e"),o=n("2f62");r["a"].use(o["a"]),e["a"]=new o["a"].Store({state:{navactivechoseid:0,token:localStorage.getItem("istoken"),userInfor:JSON.parse(localStorage.getItem("loginData")),downNum:0,upNum:0,headimg:localStorage.getItem("headImg"),canelOrderItem:"",cartNum:1,cartList:[],add:[],allCheck:!1},getters:{loginData:function(t){if(t.token)return{token:t.token};var e=localStorage.getItem("loginData");return e?JSON.parse(e):{}},gettoken:function(t,e){var n=e.loginData;return console.log(n,1111),n.token},getShopList:function(t){return t.cartList},addShopList:function(t){return t.add.map((function(e){var n=e.id,r=e.num;console.log(r);var o=t.cartList.find((function(t){return t.id==n}));if(o)return Object(a["a"])(Object(a["a"])({},o),{},{num:r})}))},totalNum:function(t,e){var n=0;return e.addShopList.map((function(t){n+=t.num,console.log(t)})),n},totalPrice:function(t,e){var n=0;return e.addShopList.map((function(t){n+=t.num*t.price})),n}},mutations:{datanum:function(t,e){console.log(t.cartList);for(var n=0;n<t.cartList.length;n++)t.cartList[n]=e},gonav:function(t,e){t.navactivechoseid=e,console.log(t.navactivechoseid)},settoken:function(t,e){t.token=e.token,t.userInfor=e,localStorage.setItem("loginData",JSON.stringify(e)),t.headimg=e.photo},cleartoken:function(t){t.token="",t.userInfor={},localStorage.removeItem("loginData"),localStorage.removeItem("istoken")},addCart:function(t,e){var n=e.id,a=t.add.find((function(t){return t.id==n}));a?a.num++:t.add.push({id:n,num:1})},deletShop:function(t,e){t.add.forEach((function(n,a){n.id==e.id&&t.add.splice(a,1)}))},clearCart:function(t){t.add=[]},handdown:function(t,e){t.downNum=e},uploadimg:function(t,e){t.userInfor.photo=e,t.headimg=e,t.userInfor.photo},canelOrderItem:function(t,e){t.canelOrderItem=e}},actions:{addToCart:function(t,e){var n=t.commit;n("addCart",{id:e.id})},clearToCart:function(t){var e=t.commit;e("clearCart")},deletToShop:function(t,e){var n=t.commit;n("deletShop",e)}},modules:{}})},"493b":function(t,e,n){t.exports=n.p+"img/type2.070497a0.png"},"494c":function(t,e,n){t.exports=n.p+"img/type1.54f25ed2.png"},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.22712850.png"},5013:function(t,e,n){t.exports=n.p+"img/type4.54b1a12b.png"},"539c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={},c=i,s=n("2877"),u=Object(s["a"])(c,r,o,!1,null,null,null),l=u.exports,f=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"flex_ar",attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/product"}},[a("div",[a("img",{attrs:{src:n("1840"),alt:""}}),a("span",[t._v("建房图库")])])]),a("router-link",{attrs:{to:"/buildLibrary"}},[a("div",[a("img",{attrs:{src:n("3ac6"),alt:""}}),a("span",[t._v("设计团队")])])]),a("router-link",{attrs:{to:"/PersonalTtailor"}},[a("div",[a("img",{attrs:{src:n("01d1"),alt:""}}),a("span",[t._v("私人定制")])])]),a("router-link",{attrs:{to:"/buildEncyc"}},[a("div",[a("img",{attrs:{src:n("0d9e"),alt:""}}),a("span",[t._v("建房百科")])])]),a("router-link",{attrs:{to:"/Business"}},[a("div",[a("img",{attrs:{src:n("b12a"),alt:""}}),a("span",[t._v("商务合作")])])]),a("router-link",{attrs:{to:"/person"}},[a("div",[a("img",{attrs:{src:n("38b2"),alt:""}}),a("span",[t._v("个人中心")])])])],1),t._m(0),t._m(1),a("div",{staticClass:"tel"},[t._v(" 24小时服务电话: "),a("a",{attrs:{href:"tel:"+t.phone}},[t._v(t._s(t.phone))])]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),a("div",{staticClass:"show text_cen"},[a("h3",[t._v("定制案例展示")]),a("span",[t._v("Custom-made case show")]),a("div",{staticClass:"dpic flex_be"},t._l(t.dzlist,(function(e,n){return a("img",{directives:[{name:"show",rawName:"v-show",value:n>0,expression:"index>0"}],key:n,attrs:{alt:"",src:t.link+e.cover}})})),0),a("div",{staticClass:"xpic flex_be"},t._l(t.dzlist,(function(e,n){return a("img",{key:n,attrs:{alt:"",src:t.link+e.cover}})})),0)]),t._m(8),a("tabbar",{attrs:{tabid:0}})],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo text_cen"},[a("img",{attrs:{src:n("4ffd"),alt:""}}),a("h4",[t._v("专注新农村自建房别墅设计")]),a("p",[t._v("四川别墅之家建筑科技有限公司,专注于新农村自建房设计、乡村别墅设计、别墅室内装修设计、园林景观设计，以及施工和建材一站式服务，公司采取传统的公司经营和现代互联网相结合的方式，以创新的设计理念，服务于中国新农村和城镇建设。公司拥有专业的设计团队，结合客户的需求为出发点为您打造一个理想的家园")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex showpic"},[a("img",{attrs:{src:n("ca849"),alt:""}}),a("img",{attrs:{src:n("36dd"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"process text_cen"},[n("h3",[t._v("定制设计服务流程")]),n("span",[t._v("Custom service process")]),n("div",{staticClass:"flex_be"},[n("div",{staticClass:"bg_color flex_cen flex_col"},[n("span",[t._v("1")]),n("span",[t._v("设计前 沟通")])]),n("div",{staticClass:"bg_color flex_cen flex_col"},[n("span",[t._v("2")]),n("span",[t._v("平面图 设计")])]),n("div",{staticClass:"bg_color flex_cen flex_col"},[n("span",[t._v("3")]),n("span",[t._v("效果图 设计")])]),n("div",{staticClass:"bg_color flex_cen flex_col"},[n("span",[t._v("4")]),n("span",[t._v("施工图 设计")])]),n("div",{staticClass:"bg_color flex_cen flex_col"},[n("span",[t._v("5")]),n("span",[t._v("审单 发货")])]),n("div",{staticClass:"bg_color flex_cen flex_col"},[n("span",[t._v("6")]),n("span",[t._v("施工 指导")])])]),n("div",{staticClass:"sanjiao"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design text_cen"},[a("h3",[t._v("设计范围")]),a("span",[t._v("design range")]),a("img",{attrs:{src:n("775a"),alt:""}}),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type_box"},[a("div",{staticClass:"flex_be type"},[a("img",{attrs:{src:n("a778"),alt:""}}),a("div",[a("h6",[t._v("中式别墅")]),a("p",[t._v("CHINESE VILLA")]),a("p",[a("span",[t._v("中式大宅")]),t._v("，传世府邸，居高境界，源远流长 ")])])]),a("img",{attrs:{src:n("494c"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type_box"},[a("div",{staticClass:"flex_be type"},[a("div",{staticStyle:{position:"static"}},[a("h6",[t._v("四合院")]),a("p",[t._v("QUADRANGLE")]),a("p",[a("span",[t._v("传统合院")]),t._v("，礼遇中式院落，历史悠久 ")])]),a("img",{staticStyle:{width:"3.28rem,height:3.08rem"},attrs:{src:n("273e"),alt:""}})]),a("img",{attrs:{src:n("493b"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type_box"},[a("div",{staticClass:"flex_be type"},[a("img",{staticStyle:{width:"3.57rem,height:3.36rem"},attrs:{src:n("68db"),alt:""}}),a("div",[a("h6",[t._v("欧式别墅")]),a("p",[t._v("EUROPEAN VILLAS")]),a("p",[a("span",[t._v("浪漫与典雅")]),t._v("，奢华与贵气同在 ")])])]),a("img",{attrs:{src:n("7978"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type_box"},[a("div",{staticClass:"flex_be type"},[a("div",{staticStyle:{position:"static"}},[a("h6",[t._v("现代别墅")]),a("p",[t._v("MODERN VILLA")]),a("p",[a("span",[t._v("简而不凡")]),t._v("，时尚又大气，摩登新选择 ")])]),a("img",{attrs:{src:n("af4f"),alt:""}})]),a("img",{attrs:{src:n("5013"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text_cen"},[a("img",{attrs:{src:n("4ffd"),alt:""}}),a("h4",[t._v("匠心如一，百年坚守")]),a("p",[t._v("Ingenuity as one, hundred years of perseverance")])])}],m=n("2ade"),h=n("7eac"),b={name:"Home",data:function(){return{phone:17683242994,dzlist:[],link:"http://villa.jisapp.cn",flag:!1}},components:{tabbar:h["a"]},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.flag=!0,m["a"].getHomeData().then((function(t){console.log(t,"首页")})).catch((function(){})).finally((function(){})),m["a"].getDrawings({}).then((function(e){console.log(e,"定制图纸"),t.dzlist=e.data.praise})).catch((function(){})).finally((function(){}))}}},v=b,g=(n("339f"),Object(s["a"])(v,d,p,!1,null,"c153da0e",null)),_=g.exports;a["a"].use(f["a"]);var x=f["a"].prototype.push;f["a"].prototype.push=function(t){return x.call(this,t).catch((function(t){return t}))};var y=[{path:"/",name:"Home",component:_,meta:{title:"首页"}},{path:"/buildLibrary",meta:{title:"设计团队"},component:function(){return n.e("about").then(n.bind(null,"fb4c"))}},{path:"/PersonalTtailor",meta:{title:"私人定制"},component:function(){return n.e("about").then(n.bind(null,"4049"))}},{path:"/person",redirect:"/mine",meta:{title:"个人中心"},component:function(){return n.e("about").then(n.bind(null,"3cc8"))}},{path:"/buildEncyc",meta:{title:"建房百科"},component:function(){return n.e("about").then(n.bind(null,"dae6"))}},{path:"/Business",meta:{title:"商务合作"},component:function(){return n.e("about").then(n.bind(null,"e349"))}},{path:"/desigerDetail",meta:{title:"设计团队详情"},component:function(){return n.e("about").then(n.bind(null,"722a"))}},{path:"/productDetail",meta:{title:"商品详情"},component:function(){return n.e("about").then(n.bind(null,"2e1b"))}},{path:"/orderpay",meta:{title:"订单待付款"},component:function(){return n.e("about").then(n.bind(null,"4256"))}},{path:"/stayGoods",meta:{title:"商家待发货"},component:function(){return n.e("about").then(n.bind(null,"e7d0"))}},{path:"/logisticsInfo",meta:{title:"物流信息"},component:function(){return n.e("about").then(n.bind(null,"6bf7"))}},{path:"/product",meta:{title:"成品"},component:function(){return n.e("about").then(n.bind(null,"146f"))}},{path:"/mine",meta:{title:"我的"},component:function(){return n.e("about").then(n.bind(null,"3cc8"))}},{path:"/newshippingAddr",meta:{title:"新建收货地址"},component:function(){return n.e("about").then(n.bind(null,"b3c3"))}},{path:"/register",meta:{title:"注册"},component:function(){return n.e("about").then(n.bind(null,"7803"))}},{path:"/login",meta:{title:"登录"},component:function(){return n.e("about").then(n.bind(null,"dd7b"))}},{path:"/personInfo",meta:{title:"个人信息"},component:function(){return n.e("about").then(n.bind(null,"c4e4"))}},{path:"/surePay",meta:{title:"支付"},component:function(){return n.e("about").then(n.bind(null,"a93c"))}},{path:"/collectionList",meta:{title:"收藏"},component:function(){return n.e("about").then(n.bind(null,"b02f"))}},{path:"/drawingOrder",meta:{title:"图纸订单"},component:function(){return n.e("about").then(n.bind(null,"eee5"))}},{path:"/cart",meta:{title:"购物车"},component:function(){return n.e("about").then(n.bind(null,"da83"))}},{path:"/userxy",meta:{title:"用户协议"},component:function(){return n.e("about").then(n.bind(null,"5715"))}},{path:"/buildencycDetail",meta:{title:"建房百科详情页"},component:function(){return n.e("about").then(n.bind(null,"5f59"))}},{path:"/commentDetail",meta:{title:"评论详情页"},component:function(){return n.e("about").then(n.bind(null,"8f47"))}},{path:"/piccolltList",meta:{title:"文章收藏"},component:function(){return n.e("about").then(n.bind(null,"f01a"))}},{path:"/Drawingcollection",meta:{title:"图纸收藏"},component:function(){return n.e("about").then(n.bind(null,"cd16"))}},{path:"/AddressList",meta:{title:"地址列表"},component:function(){return n.e("about").then(n.bind(null,"c542"))}},{path:"/afterSale",meta:{title:"售后"},component:function(){return n.e("about").then(n.bind(null,"67b5"))}}],C=new f["a"]({base:"/",routes:y});C.beforeEach((function(t,e,n){window.document.title=t.meta.title,n()})),C.afterEach((function(){window.scrollTo(0,0)}));var O=C,j=n("4360"),P=(n("d553"),n("f1a5"),n("4062"),n("157a"),n("b970")),w=n("d399"),k=n("bc3a"),E=n.n(k),S=n("4328"),I=n.n(S),L=n("2588"),D=n.n(L),T=n("407d"),N=n.n(T);a["a"].config.productionTip=!1,a["a"].prototype.$toast=w["a"],a["a"].use(P["a"]),a["a"].prototype.$toast=w["a"],a["a"].prototype.$axios=E.a,a["a"].prototype.qs=I.a,a["a"].use(D.a),a["a"].component(N.a.name,N.a),new a["a"]({router:O,store:j["a"],render:function(t){return t(l)}}).$mount("#app")},"68db":function(t,e,n){t.exports=n.p+"img/c3.1e2db561.png"},"775a":function(t,e,n){t.exports=n.p+"img/1.c2dcc50f.png"},7978:function(t,e,n){t.exports=n.p+"img/type3.0920e511.png"},"7eac":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("nav",{staticClass:"flex_ar"},t._l(t.tabbar,(function(e,a){return n("span",{key:a,class:{tab_active:t.tabid===a},on:{click:function(n){return t.tabChoes(a,e)}}},[t._v(t._s(e.tabname))])})),0)])},r=[],o=(n("a9e3"),{props:{tabid:{type:[String,Number],default:""}},data:function(){return{tabbar:[{tabname:"首页",url:"/"},{tabname:"成品",url:"/product"},{tabname:"定制",url:"/PersonalTtailor"},{tabname:"我的",url:"/mine"}]}},methods:{tabChoes:function(t,e){this.$router.push({path:e.url})}}}),i=o,c=(n("a981"),n("2877")),s=Object(c["a"])(i,a,r,!1,null,"3950af7e",null);e["a"]=s.exports},a445:function(t,e,n){},a778:function(t,e,n){t.exports=n.p+"img/c1.ebac83b4.png"},a981:function(t,e,n){"use strict";var a=n("539c"),r=n.n(a);r.a},af4f:function(t,e,n){t.exports=n.p+"img/c4.c88494f5.png"},b12a:function(t,e,n){t.exports=n.p+"img/swhz.814c0eaf.png"},ca849:function(t,e,n){t.exports=n.p+"img/b1.557a6b6d.png"},d553:function(t,e,n){},f1a5:function(t,e){(function(t,e){var n=t.getElementsByTagName("html")[0],a="orientationchange"in e?"orientationchange":"resize",r=function(){var e=t.documentElement.clientWidth||t.body.clientWidth;e&&(n.style.fontSize=e/750*100+"px")};e.addEventListener(a,r),t.addEventListener("DOMContentLoaded",r)})(document,window)}});
//# sourceMappingURL=app.c1cb7d64.js.map