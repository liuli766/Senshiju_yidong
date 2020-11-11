<template>
  <!-- 确认支付页 -->
  <div class="surepay">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>确认支付</span>
    </div>
    <!--  -->
    <div class="pickup_type flex_be">
      <span>取货方式</span>
      <span>快递</span>
    </div>
    <div class="addr flex_be" @click="gonewshippingAddr(orderaddress)">
      <div class="flex_be">
        <van-icon name="location-o" />
        <span v-if="orderaddress.length == 0" @click="gonewshippingAddr1"
          >请填写收货地址</span
        >
        <div v-else>
          <span class="info" style="margin-bottom: 0.2rem; display: block"
            >{{ orderaddress.name }} {{ orderaddress.phone }}</span
          >
          <div class="flex_cen" style="font-size: 0.25rem">
            <span class="express">快递</span>
            {{ orderaddress.province }}{{ orderaddress.city
            }}{{ orderaddress.district }}{{ orderaddress.address }}
          </div>
        </div>
      </div>
      <van-icon name="arrow" />
    </div>
    <!--  -->
    <div style="padding-bottom: 1rem">
      <div class="itemlist flex" v-for="(item, k) in orderdetail" :key="k">
        <img :src="item.cover" alt />
        <div>
          <p>{{ item.title }}</p>
          <div class="price flex_be">
            <span>¥{{ item.price }}</span>
            <van-stepper
              v-model="item.num"
              theme="round"
              button-size="22"
              disabled
            />
          </div>
        </div>
      </div>

      <div class="message">
        <h6>买家留言</h6>
        <van-field
          v-model="message"
          rows="4"
          autosize
          type="textarea"
          placeholder="建议留言前先于商家沟通"
          show-word-limit
        />
      </div>

      <div class="money">
        <div class="flex_be">
          <span>商品金额</span>
          <span>¥{{ total }}</span>
        </div>
        <div class="flex_be">
          <span>运费</span>
          <span>¥0.00</span>
        </div>
      </div>
    </div>

    <div class="btn flex_be">
      <div>
        合计：
        <span style="color；#F93420">{{ total }}</span>
      </div>
      <div @click="onSubmit" class="onsubmit">立即付款</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";

export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      navactivechoseid: (state) => state.navactivechoseid,
    }),
  },
  data() {
    return {
      message: "",
      value: 1,
      orderaddress: [],
      orderdetail: [],
      total: 0,
    };
  },
  created() {
    console.log(this.$route.query.arr);

    request
      .getCartOrder({
        uid: this.userInfor.member_id,
        ids: this.$route.query.arr,
      })
      .then((res) => {
        console.log(res, "订单结算");
        this.orderaddress = res.data.address;
        this.orderdetail = res.data.goods;
        this.total = res.data.total;
      })
      .catch(() => {})
      .finally(() => {});
  },
  methods: {
    onSubmit() {
      this.gopay();
    },
    wechatPay() {
      request
        .getCartPay({
          uid: this.userInfor.member_id,
          ids: this.$route.query.arr,
        })
        .then((res) => {
          let data = res.data.apiToay;
          let vm = this;
          WeixinJSBridge.invoke(
            "getBrandWCPayRequest",
            {
              appId: data.appId, //公众号名称，由商户传入
              timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
              nonceStr: data.nonceStr, //随机串
              package: data.package,
              signType: data.signType, //微信签名方式：
              paySign: data.paySign, //微信签名
            },
            function (res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                vm.$toast("支付成功");
                setTimeout(function () {
                  vm.$router.push({
                    path: "/success",
                    query: {
                      price: res.data.total,
                    },
                  });
                }, 2000);
              } else {
                vm.$toast("支付失败");
                setTimeout(function () {
                  vm.$router.push({
                    path: "/orderpay",
                  });
                }, 2000);
              }
            }
          );
        })
        .catch(() => {
          this.$toast("系统异常");
        })
        .finally(() => {});
    },
    gopay() {
      let vm = this;
      if (typeof WeixinJSBridge == "undefined") {
        vm.$toast("支付失败");
        if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", vm.wechatPay, false);
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", vm.wechatPay);
          document.attachEvent("onWeixinJSBridgeReady", vm.wechatPay);
        }
      } else {
        vm.wechatPay();
      }
    },
    go() {
      this.$router.push({
        path: "/cart",
      });
    },
    // 收货地址
    gonewshippingAddr(orderaddress) {
      this.$router.push({
        path: "/newshippingAddr",
        query: {
          item: orderaddress,
        },
      });
    },
    gonewshippingAddr1() {
      this.$router.push({
        path: "/newshippingAddr",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.surepay {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: auto;
}
.nav_bar {
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  .mb(18);
  span {
    .ml(33);
  }
}
.pickup_type {
  background: @base-header-color;
  .lh(108);
  .pr(57);
  .pl(78);
  .margin(0, 20);
  .b-radius(10);
  .fs(28);
  color: #2c2c2c;
  font-family: SimHei;
  span:nth-of-type(2) {
    font-weight: bold;
  }
}
.addr {
  // .lh(156);
  background: @base-header-color;
  .margin(20, 20);
  .b-radius(10);
  padding: 0.3rem;
  .van-icon {
    .mr(47);
  }
  .flex_be {
    color: #000000;
    .fs(27);
    .van-icon {
      .mr(26);
      .ml(31);
      .fs(38);
    }
  }
}
.itemlist {
  background: @base-header-color;
  .padding(30, 42, 30, 30);
  .margin(0, 20);
  align-items: center;
  .b-radius(10);
  .fs(28);
  .mb(18);
  img {
    .w(158);
    .h(157);
    .mr(19);
  }
  p {
    .mb(61);
  }
  .price {
    span {
      color: #fd3723;
    }
    .van-stepper {
      .padding(6,8);
      border: 1px solid #dcdcdc;
      .b-radius(29);
    }
  }
}
.message {
  .h(319);
  background: @base-header-color;
  .padding(0, 30);
  .pb(30);
  .b-radius(10);
  .margin(0, 20);
  h6 {
    .lh(83);
    color: #030303;
    .fs(26);
    font-family: SimHei;
    font-weight: 400;
  }
  .van-cell {
    background: #f5f5f5;
  }
}
.money {
  background: @base-header-color;
  .margin(0, 20);
  .padding(0,30);
  .fs(26);
  color: #030303;
  > div {
    .lh(88);
  }
  div:nth-of-type(1) {
    border-bottom: 1px solid #f3f3f3;
  }
}
.btn {
  position: fixed;
  width: 100%;
  height: 0.88rem;
  background: #fff;
  border-top: 1px solid #eee;
  bottom: 0;
  padding: 0 0.3rem;
  font-size: 0.28rem;
  box-sizing: border-box;
}
.onsubmit {
  width: 2.19rem;
  height: 0.69rem;
  background: #fa3d29;
  border: 2px solid #f5f5f5;
  border-radius: 0.35rem;
  color: #fff;
  text-align: center;
  line-height: 0.69rem;
}
</style>
<style>
.price .van-stepper__plus,
.price .van-stepper__minus {
  background: #f5f5f5 !important;
  color: #898989 !important;
  border: 0 !important;
}
.btn .van-submit-bar__button--danger {
  margin-left: 2.66rem !important;
}
</style>
