(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-355bd6e4"],{1493:function(t,e,n){},ee86:function(t,e,n){"use strict";var c=n("1493"),i=n.n(c);i.a},f01a:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collectionList"},[n("div",{staticClass:"nav_bar flex"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:t.go}}),n("span",[t._v("文章的收藏")])],1),0==t.articleList.length?n("div",{staticClass:"list flex"},[t._v("没有收藏的文章")]):t._l(t.articleList,(function(e,c){return n("div",{key:c,staticClass:"list flex",on:{click:function(n){return t.gopicdetail(e)}}},[n("img",{attrs:{src:e.cover,alt:""}}),n("div",[n("p",[t._v(t._s(e.title))]),n("div",{staticClass:"flex_be colltbtn"},[n("span",{staticStyle:{color:"#666"}},[t._v(t._s(e.add_time))]),n("span",{staticClass:"text_cen",on:{click:function(n){return n.stopPropagation(),t.qxcollect(e.object_id)}}},[t._v("已收藏")])])])])}))],2)},i=[],o=(n("d3b7"),n("5530")),a=n("2f62"),l=n("2ade"),s={computed:Object(o["a"])({},Object(a["b"])({token:function(t){return t.token},userInfor:function(t){return t.userInfor},headimg:function(t){return t.headimg}})),data:function(){return{articleList:[]}},created:function(){this.collect(2)},methods:{gopicdetail:function(t){var e=t.object_id;this.$router.push({path:"/buildencycDetail",query:{id:e}})},go:function(){this.$router.go(-1)},collect:function(t){var e=this;l["a"].fachcollect({uid:this.userInfor.member_id,type:t}).then((function(t){console.log(t),e.articleList=t.data})).catch((function(){})).finally((function(){}))},qxcollect:function(t){var e=this;l["a"].getCancelcollect({uid:this.userInfor.member_id,c_id:t,type:2}).then((function(t){e.collect(2),console.log(t,"取消收藏"),e.$toast("取消成功")})).catch((function(){e.$toast("取消失败")})).finally((function(){}))}}},r=s,u=(n("ee86"),n("2877")),f=Object(u["a"])(r,c,i,!1,null,"30ee5aa5",null);e["default"]=f.exports}}]);