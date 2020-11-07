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
      <div class="itemlist flex">
        <img :src="orderdetail.cover" alt />
        <div>
          <p>{{ orderdetail.title }}</p>
          <div class="price flex_be" style="width: 4.6rem">
            <span>¥{{ orderdetail.price }}</span>
            <van-stepper
              v-model="orderdetail.num"
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
      <div @click="gopay" class="onsubmit">立即付款</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
// import wx from "weixin-jsapi";
// import { wexinPay } from "@/plugins/wechatPay";
export default {
  components: {},
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      navactivechoseid: (state) => state.navactivechoseid,
      orderTime: (state) => state.orderTime,
    }),
  },
  data() {
    return {
      message: "",
      value: 1,
      orderaddress: [],
      orderdetail: [],
      total: 0,
      creatime: "", // 开始时间
      daoTim: "", // 倒计时时间
      msg: "",
      timer: null, //定时器名称
      orderid:localStorage.getItem('orderid') //订单id
    };
  },
  created() {
    console.log(this.$route.query.bid);
    request
      .getBlueOrder({
        uid: this.userInfor.member_id,
        bid: this.$route.query.bid,
      })
      .then((res) => {
        
        if (res.code == 2) {
          this.$router.push({
            path: "/login",
          });
          return false;
        } else {
          this.orderaddress = res.data.address;
          this.orderdetail = res.data.goods;
          this.total = res.data.total;
          console.log(res, "图纸购买生成订单");
        }
      })
      .catch(() => {})
      .finally(() => {});
  },
  mounted() {
    // this.timer = setInterval(this.wxrequest, 300)
  },
  methods: {
    wxrequest(){
       request
      .getwxrequest({
        out_trade_no: this.orderid,
      })
      .then((data) => {
        alert(data.code==1)
        alert(JSON.stringify(data.code==0))
        if (data.code == 0){
          alert(JSON.stringify(data))
           this.$router.push({
            path: "/success",
            query:{
              price:this.total
            }
          });
        }
         
        
      });
    },
    wechatPay() {
      request
        .getBluePay({
          uid: this.userInfor.member_id,
          bid: this.$route.query.bid,
          address: this.orderaddress.id,
        })
        .then((res) => {
          console.log(res, "支付");
          
        let orderid=res.data.out_trade_no
          localStorage.setItem('orderid',orderid)
          this.wxrequest()
          if (res.code == 1) {
            this.$toast(res.message);
            
          } else if (res.code == 0) {
            let data = res.data.apiToay;
            WeixinJSBridge.invoke(
              "getBrandWCPayRequest",
              {
                appId: data.appId, //公众号名称，由商户传入
                timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
                nonceStr: data.nonceStr, //随机串
                package: data.package,
                signType: data.signType, //微信签名方式：
                paySign: data.paySign, //微信签名
                jsApiList: ["chooseWXPay"],
              },
              (ress) => {
                // var vm = this;
                if (ress.err_msg == "get_brand_wcpay_request:ok") {
                  this.$toast("支付成功");
                } else {
                  this.$toast("支付失败");
                  this.$router.push({
                    path: "/drawingOrder",
                    query: {
                      navactivechoseid: 0,
                    },
                  });
                }
              }
            );
          }
        })
        .catch(() => {
          this.$toast("系统异常,请重新登录");
          this.$router.push({
            path: "/login",
          });
        })
        .finally(() => {});
    },
    gopay() {
      if (typeof WeixinJSBridge == "undefined") {
        this.$toast("支付失败");
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            this.wechatPay,
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", this.wechatPay);
          document.attachEvent("onWeixinJSBridgeReady", this.wechatPay);
        }
      } else {
        this.wechatPay();
      }
    },
    go() {
      this.$router.go(-1);
    },
    // 收货地址
    gonewshippingAddr(orderaddress) {
      console.log(orderaddress);
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
   beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
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
  .h(156);
  background: @base-header-color;
  .margin(20, 20);
  .b-radius(10);
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
    margin-bottom: 0.2rem;
    margin-top: 0.25rem;
    line-height: 0.40rem;
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
