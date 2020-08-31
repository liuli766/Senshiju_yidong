<template>
  <!-- 图纸订单 -->
  <div class="drawingorder">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>图纸订单</span>
    </div>
    <van-search v-model="seachdata" placeholder="请输入订单号或商品名称" />
    <nav>
      <span
        v-for="(item,k) in navlist"
        :key="k"
        @click="swichChose(k)"
        :class="{activ_chose:navactivechoseid==k}"
      >{{item}}</span>
    </nav>
    <orderlist :orderli="orderlist" v-if="navactivechoseid==0||navid==0" :navid="0" />
    <orderlist :orderli="orderlist1" v-if="navactivechoseid==1|| navid==1" :navid="1" />
    <orderlist :orderli="orderlist2" v-if="navactivechoseid==2 ||navid==2" :navid="2" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import orderlist from "@/components/orderlist.vue";
import request from "@/request.js";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  components: {
    orderlist,
  },
  data() {
    return {
      seachdata: "",
      navlist: ["待付款", "待发货", "待收货"],
      navid: 0,
      navactivechoseid: 0,
      orderlist: [],
      orderlist1: [],
      orderlist2: [],
    };
  },
  watch: {
    orderlist2(){
      this.swichChose(this.navactivechoseid)
    }
  },
  created() {
    this.navactivechoseid = this.$route.query.navactivechoseid;
    
  },
  mounted() {
    this.myorder();
  },
  methods: {
    // 我的订单
    myorder() {
      request
        .getMyOrders({
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          this.vertical = true;
          this.orderlist = res.data;
          this.orderlist1 = res.data;
          this.orderlist2 = res.data;
          this.orderlist = this.orderlist.filter((item) => item.status == 1); //待付款
          this.orderlist1 = this.orderlist1.filter((item) => item.status == 2); //待发货
          console.log(this.orderlist1, "我的订单");
          this.orderlist2 = this.orderlist2.filter((item) => item.status == 3); //待付款
        })
        .catch(() => {
          this.vertical = false;
        })
        .finally(() => {
          this.vertical = false;
        });
    },
    swichChose(k) {
      this.navid = k;
      this.navactivechoseid = k;
      this.$store.commit("gonav", this.navactivechoseid);
    },

    go() {
      this.$router.go(-1);
    },
  },
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
  overflow: scroll;
}

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