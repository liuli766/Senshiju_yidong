(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df3b091a"],{"04f3":function(t,e,a){},"0817":function(t,e,a){"use strict";var i=a("99b6"),l=a.n(i);l.a},"146f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product"},[a("div",{staticClass:"serchbox"},[a("van-search",{staticStyle:{"overflow-x":"hidden"},attrs:{shape:"round",background:"#fff",placeholder:"请输入搜索内容"},on:{change:t.handserch},model:{value:t.searchContent,callback:function(e){t.searchContent=e},expression:"searchContent"}})],1),a("div",{staticClass:"dropdown flex_be"},[a("div",{staticClass:"all"},[t._v("全部")]),a("div",{staticClass:"dropdownbox"},[a("van-dropdown-menu",{attrs:{"active-color":"#FE9E15"}},[a("van-dropdown-item",{attrs:{options:t.cate1,title:"风格"},on:{change:function(e){return t.handchange1(t.value1)}},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("van-dropdown-item",{attrs:{options:t.cate2,title:"面宽"},on:{change:function(e){return t.handchange2(t.value2)}},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),a("van-dropdown-item",{attrs:{options:t.cate3,title:"进深"},on:{change:function(e){return t.handchange3(t.value3)}},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),a("van-dropdown-item",{attrs:{options:t.cate4,title:"占地"},on:{change:function(e){return t.handchange4(t.value4)}},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),a("van-dropdown-menu",{attrs:{"active-color":"#FE9E15"}},[a("van-dropdown-item",{attrs:{options:t.cate5,title:"层数"},on:{change:function(e){return t.handchange5(t.value5)}},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}}),a("van-dropdown-item",{attrs:{options:t.cate6,title:"功能"},on:{change:function(e){return t.handchange6(t.value6)}},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}}),a("van-dropdown-item",{attrs:{options:t.cate7,title:"造价"},on:{change:function(e){return t.handchange7(t.value7)}},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}}),a("van-dropdown-item",{attrs:{options:t.cate8,title:"结构"},on:{change:function(e){return t.handchange8(t.value8)}},model:{value:t.value8,callback:function(e){t.value8=e},expression:"value8"}})],1)],1)]),0!==t.productItemList.length?a("div",{staticClass:"list"},[a("productitem",{attrs:{productitem:t.productItemList}})],1):a("div",{staticClass:"list"},[a("p",{staticStyle:{"text-align":"center","padding-top":"0.3rem"}},[t._v("无相关产品")])]),a("tabbar",{attrs:{tabid:1}}),a("div",{staticClass:"wrap"},[a("scroll",{attrs:{onBottom:t.onBottom}})],1)],1)},l=[],s=(a("99af"),a("d81d"),a("d3b7"),a("2909")),r=a("5530"),n=a("bd46"),c=a("a433"),h=a("7eac"),o=a("2f62"),u=a("2ade"),f={components:{productitem:n["a"],tabbar:h["a"],scroll:c["a"]},computed:Object(r["a"])({},Object(o["b"])({token:function(t){return t.token},userInfor:function(t){return t.userInfor}})),watch:{searchContent:function(){this.handserch()}},data:function(){return{searchContent:"",value1:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,productItemList:[],cate1:[],cate2:[],cate3:[],cate4:[],cate5:[],cate6:[],cate7:[],cate8:[],filterSelData1:"全部",filterSelData2:"全部",filterSelData3:"全部",filterSelData4:"全部",filterSelData5:"全部",filterSelData6:"全部",filterSelData7:"全部",filterSelData8:"全部",filterlist:"全部",newtouter:[],page:1}},created:function(){var t=this;u["a"].getCate({cate_id:""}).then((function(e){console.log(e,"分类"),t.filterlist=e.data.list,t.cate1=e.data.list[0].child,t.cate2=e.data.list[1].child,t.cate3=e.data.list[2].child,t.cate4=e.data.list[3].child,t.cate5=e.data.list[4].child,t.cate6=e.data.list[5].child,t.cate7=e.data.list[6].child,t.cate8=e.data.list[7].child,t.cate1.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate2.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate3.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate4.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate5.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate6.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate7.map((function(t,e){t.text=t.cate_name,t.value=e})),t.cate8.map((function(t,e){t.text=t.cate_name,t.value=e}))})).catch((function(){})).finally((function(){})),console.log(this.$route.query),this.filterSelData1=this.$route.query.style,this.filterSelData2=this.$route.query.area,this.filterSelData3=this.$route.query.face_width,this.filterSelData4=this.$route.query.depth,this.filterSelData5=this.$route.query.plies,this.filterSelData6=this.$route.query.function,this.filterSelData7=this.$route.query.structure,this.filterSelData8=this.$route.query.cost,this.page=1,this.productItemList=[],this.getdata()},methods:{onBottom:function(){console.log("bottom"),this.page++,this.getdata()},handserch:function(){var t=this;u["a"].getHots({page:this.page,search:this.searchContent}).then((function(e){console.log(e),t.productItemList=[],t.getdata()})).catch((function(){})).finally((function(){}))},getdata:function(){var t=this;u["a"].getHots({page:this.page,style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8,search:this.searchContent}).then((function(e){console.log(e,"图纸展示"),1==t.page&&(t.productItemList=e.data),t.page>1&&(t.productItemList=[].concat(Object(s["a"])(t.productItemList),Object(s["a"])(e.data))),0==e.data.length&&t.$toast("没有更多数据了")})).catch((function(){})).finally((function(){}))},handchange1:function(t){console.log(t);var e=[];this.cate1.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData1=e[0],console.log(this.filterSelData1),this.getdata(this.filterSelData1),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.style)},handchange2:function(t){console.log(t);var e=[];this.cate2.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData2=e[0],this.getdata(this.filterSelData2),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.area)},handchange3:function(t){console.log(t);var e=[];this.cate3.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData3=e[0],this.getdata(this.filterSelData3),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.face_width)},handchange4:function(t){console.log(t);var e=[];this.cate4.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData4=e[0],this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.depth)},handchange5:function(t){console.log(t);var e=[];this.cate5.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData5=e[0],this.getdata(this.filterSelData5),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.plies)},handchange6:function(t){console.log(t);var e=[];this.cate6.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData6=e[0],this.getdata(this.filterSelData6),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.function)},handchange7:function(t){console.log(t);var e=[];this.cate7.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData7=e[0],this.getdata(this.filterSelData7),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.structure)},handchange8:function(t){console.log(t);var e=[];this.cate8.map((function(a){a.value==t&&e.push(a.cate_name)})),this.filterSelData8=e[0],this.getdata(this.filterSelData8),this.$router.push({path:"/product",query:{style:this.filterSelData1,area:this.filterSelData2,face_width:this.filterSelData3,depth:this.filterSelData4,plies:this.filterSelData5,function:this.filterSelData6,structure:this.filterSelData7,cost:this.filterSelData8}}),this.page=1,this.productItemList=[],this.getdata(this.$route.query.cost)}}},d=f,p=(a("0817"),a("d829"),a("2877")),S=Object(p["a"])(d,i,l,!1,null,"72fbcb60",null);e["default"]=S.exports},"99b6":function(t,e,a){},d829:function(t,e,a){"use strict";var i=a("04f3"),l=a.n(i);l.a}}]);