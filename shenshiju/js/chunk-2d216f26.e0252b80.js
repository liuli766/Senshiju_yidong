(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216f26"],{c542:function(t,e,d){"use strict";d.r(e);var s=function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"AddressList"},[d("van-address-list",{attrs:{list:t.AddressList,"default-tag-text":"默认"},on:{add:t.onAdd,edit:t.onEdit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},n=[],i=(d("d81d"),d("d3b7"),d("5530")),r=d("2f62"),o=d("2ade"),a={computed:Object(i["a"])({},Object(r["b"])({token:function(t){return t.token},userInfor:function(t){return t.userInfor},headimg:function(t){return t.headimg}})),data:function(){return{chosenAddressId:"1",AddressList:[]}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;o["a"].getAddress({uid:this.userInfor.member_id}).then((function(e){e.data.map((function(e){t.vertical=!0,e.tel=e.phone,t.chosenAddressId=e.id,0==e.is_default?e.is_default=!1:e.is_default=!0,e.isDefault=e.is_default})),t.AddressList=e.data.reverse(),console.log(t.AddressList,"地址展示")})).catch((function(){})).finally((function(){}))},onAdd:function(){this.$router.push({path:"/newshippingAddr"})},onEdit:function(t,e){console.log(t),this.$router.push({path:"/newshippingAddr",query:{item:t,id:e}})}}},u=a,c=d("2877"),l=Object(c["a"])(u,s,n,!1,null,null,null);e["default"]=l.exports}}]);