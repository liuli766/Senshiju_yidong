<template>
  <!-- 图纸订单 -->
  <div class="drawingorder">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>图纸订单</span>
    </div>
    <van-search v-model="seachdata" placeholder="请输入订单号或商品名称" />
    <nav>
      <span
        v-for="(item,k) in navlist"
        :key="k"
        @click="swichChose(k)"
        :class="{activ_chose:navactivechoseid===k}"
      >{{item}}</span>
    </nav>
      <orderlist :orderlist="orderlist" v-if="navactivechoseid==0" :navid=0 />
      <orderlist :orderlist="orderlist1" v-if="navactivechoseid==1" :navid=1 />
      <orderlist :orderlist="orderlist2" v-if="navactivechoseid==2" :navid=2 />
  </div>
</template>

<script>
import { mapState } from "vuex";
import orderlist from "@/components/orderlist.vue";
export default {
  computed: mapState({
    navactivechoseid: state => state.navactivechoseid
  }),
  components: {
    orderlist
  },
  data() {
    return {
      seachdata: "",
      navlist: ["待付款", "待发货", "待收货"],
      navid: 0,
      orderlist: [
        {
          img: require("../assets/logo.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        },
        {
          img: require("../assets/logo.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        },
        {
          img: require("../assets/logo.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        },
        {
          img: require("../assets/logo.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        }
      ],
      orderlist1: [
        {
          img: require("../assets/item.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        },
        {
          img: require("../assets/item.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        }
      ],
      orderlist2: [
        {
          img: require("../assets/img/1.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        },
        {
          img: require("../assets/item.png"),
          p: "A116新农村一层四合院别墅设计图纸",
          num: 1,
          price: "198.00"
        }
      ]
    };
  },
  created() {
  },
  methods: {
    swichChose(k) {
      this.$store.commit("gonav", k);
      this.navid = k;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.drawingorder {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  .mb(100);
  overflow: scroll;}
  
.nav_bar {
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  span {
    .ml(249);
  }
}
nav {
  background: @base-header-color;
  .padding(0, 30);
  .lh(89);
  .mb(13);
  span {
    .mr(66);
  }
  .activ_chose {
    color: #f2a930;
    border-bottom: 1px solid #f2a930;
  }
}
</style>