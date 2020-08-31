<template>
  <!--付款，发货，收货 -->
  <div class="orderlist">
    <main v-if="orderli.length!==0">
      <div @click="godetail(item,navid)" v-for="(item,k) in orderli" :key="k">
        <div class="tagname flex_be">
          <span>{{item.add_time}}</span>
          <span v-if="navactivechoseid===0" style="color:#FD3723">待付款</span>
          <span v-else-if="navactivechoseid===1" style="color:#FD3723">待发货</span>
          <span v-else-if="navactivechoseid===2" style="color:#FD3723">待收货</span>
        </div>
        <div class="flex">
          <img :src="item.cover" alt />
          <div class="right">
            <p>{{item.title}}</p>
            <div class="text_r">
              <van-icon name="cross" />
              <span>{{item.num}}</span>
            </div>
            <div>{{item.price}}</div>
          </div>
        </div>
        <div class="text_r price_pay" v-if="navactivechoseid===0">共{{item.num}}件 待付款:¥{{item.price}}</div>
        <div
          class="text_r price_pay"
          v-else-if="navactivechoseid===1"
        >共{{item.num}}件 待发货:¥{{item.price}}</div>
        <div
          class="text_r price_pay"
          v-else-if="navactivechoseid===2"
        >共{{item.num}}件 待收货:¥{{item.price}}</div>
        <div class="bor_red" v-if="navactivechoseid===0">
          <span class="text_cen" @click.stop="canelOrder(item)">取消订单</span>
          <span class="text_cen" @click="gopay">立即支付</span>
        </div>
        <div class="bor_red" v-if="navactivechoseid===1">
        </div>
        <div class="bor_red" v-if="navactivechoseid===2">
          <span class="text_cen" @click="goLogistics">查看物流</span>
        </div>
      </div>
    </main>
    <main v-else class="nodata">暂无数据</main>
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
  props: {
    orderli: {
      type: Array,
      default: () => [],
    },
    navid: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {};
  },
  watch: {},
  created() {
    console.log(this.orderli);
  },
  methods: {
    // 取消订单
    canelOrder(item) {
      console.log(item);
      request
        .getCancelOrder({
          oid: item.id,
        })
        .then((res) => {
          console.log(res);
          this.$parent.myorder();
          this.$toast({
            message: "取消成功",
            icon: "success",
          });
        })
        .catch(() => {
          this.$toast({
            message: "取消失败",
            icon: "error",
          });
        })
        .finally(() => {});
    },
    godetail(item, navid) {
      console.log(navid)
      //跳转详情
      if (navid === 0) {
        this.$router.push({
          path: "/orderpay",
          query: {
            oid: item.id,
          },
        });
      } else if (navid === 1) {
        this.$router.push({
          path: "/stayGoods",
        });
      } else if (navid === 2) {
        this.$router.push({
          path: "/productDetail",
        });
      }
    },
    goLogistics() {
      //跳转物流
      this.$router.push({
        path: "/logisticsInfo",
      });
    },
    gopay() {
      //跳转支付
      this.$router.push({
        path: "/logisticsInfo",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";

main {
  background: #fff;
  .b-radius(10);
  .margin(0, 20);
  .padding(0, 20, 36, 36);
  .tagname {
    .lh(83);
    border-bottom: 1px solid #f3f3f3;
    .mb(34);
  }
  img {
    .w(156);
    .h(156);
    .b-radius(10);
    .mr(9);
  }
  p {
    color: #2a2a2a;
    .fs(26);
    .lh(37);
  }
  .right {
    width: 80%;
  }
  .text_r {
    text-align: right;
    .pb(23);
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .price_pay {
    .mt(60);
    border-bottom: 1px solid #f3f3f3;
  }
  .bor_red {
    text-align: right;
    .mt(24);
    span:nth-of-type(1) {
      .lh(54);
      .w(150);
      border: 1px solid #797979;
      display: inline-block;
      .b-radius(27);
    }
    span:nth-of-type(2) {
      .lh(54);
      .w(150);
      border: 1px solid #fd3723;
      display: inline-block;
      .b-radius(27);
      .ml(20);
    }
    span:nth-last-of-type(1) {
      .lh(54);
      .w(150);
      border: 1px solid #fd3723;
      display: inline-block;
      .b-radius(27);
    }
  }
}
.nodata {
  color: #afafaf;
  .fs(30);
  background: #eee;
  text-align: center;
}
</style>