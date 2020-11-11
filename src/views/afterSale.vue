<template>
  <div>
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>售后</span>
    </div>
    <div class="main" v-if="orderlist.length !== 0">
      <div class="flex">
        <img :src="item.cover" alt />
        <div class="right">
          <p>{{ item.title }}</p>
          <span>{{ item.num }}</span>
        </div>
      </div>
      <div class="tuikuanbox">
        <span class="tuikuan">退款</span>
      </div>
    </div>
    <div class="main" v-else>暂未开通</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  computed: mapState({
    navactivechoseid: (state) => state.navactivechoseid,
    token: (state) => state.token,
    userInfor: (state) => state.userInfor,
    canelOrderItem: (state) => state.canelOrderItem,
  }),
  data() {
    return {
      orderlist: [],
    };
  },
  watch: {},
  created() {
    this.myorder();
  },
  methods: {
    myorder() {
      request
        .getMyOrders({
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          this.orderlist = res.data;
          this.orderlist = this.orderlist.filter((item) => item.status == 4); //待付款
          console.log(this.orderlist, "我的订单");
        })
        .catch(() => {
          this.vertical = false;
        })
        .finally(() => {
          this.vertical = false;
        });
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
.nav_bar {
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  .mb(36);
  span {
    .ml(249);
  }
}
.main {
  margin: 0.3rem;
  img {
    width: 1.56rem;
    height: 1.56rem;
    border-radius: 0.1rem;
  }
  .right {
    margin-left: 0.2rem;
    font-size: 0.26rem;
    width: 6.8rem;
    text-align: left;
    p {
      margin-bottom: 0.7rem;
    }
  }
  .tuikuanbox {
    display: flex;
    justify-content: flex-end;
  }
  .tuikuan {
    display: block;
    width: 1.5rem;
    height: 0.54rem;
    border: 2px solid #797979;
    border-radius: 0.27rem;
    text-align: center;
    line-height: 0.54rem;
  }
}
</style>