<template>
  <!-- 订单待付款 -->
  <div>
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>订单详情</span>
    </div>
    <div class="flex_be stay">
      <span>订单待付款</span>
      <van-icon name="arrow" />
    </div>
    <main>
      <p>
        请尽快完成付款，还剩
        <span>
          <span style="color:#FA3D29;display: inline-block; ">
            <countdown :time="20*60*1000"  tag="p" >
              <template slot-scope="props">{{ props.minutes }}分{{ props.seconds==0 && props.minutes==0?canelOrder(orderdetail): props.seconds}}秒</template>
            </countdown>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;（超时按
          <span style="color:#FA3D29">取消订单</span>处理）
        </span>
      </p>
      <!--  -->
      <div class="flex_be addr" @click="gonewshippingAddr(orderaddress)">
        <div class="flex">
          <van-icon
            name="location-o"
            style="margin-right:0.28rem;align-self: flex-end;margin-bottom:0.1rem"
          />
          <div>
            <span class="info">{{orderaddress.name}} {{orderaddress.phone}}</span>
            <div class="flex_cen" style="font-size:0.25rem;">
              <span class="express">快递</span>
              {{orderaddress.province}}{{orderaddress.city}}{{orderaddress.district}}{{orderaddress.address}}
            </div>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>
      <!--  -->
      <div class="item">
        <div class="flex_be ser">
          <span>优选别墅图纸</span>
          <!-- <span>
            联系客服
            <van-icon name="chat-o" />
          </span>-->
        </div>
        <van-card
          :num="orderdetail.num"
          :price="orderdetail.price"
          :desc="orderdetail.title"
          :thumb="orderdetail.cover"
        />
      </div>
      <!--           origin-price="10.00" -->
      <!--  -->
      <div class="number">
        <div class="flex_be fs26">
          <span>商品金额</span>
          <span>¥{{orderdetail.price}}</span>
        </div>
        <div class="flex_be fs26">
          <span>优惠方式</span>
          <span>无</span>
        </div>
        <div class="flex_be fs26">
          <span>运费</span>
          <span>¥0.00</span>
        </div>
        <div class="flex_be fs26">
          <span>订单总价</span>
          <span>¥{{orderdetail.num*orderdetail.price}}</span>
        </div>
        <div class="flex_be bordert">
          <span>实际付款</span>
          <span>¥{{orderdetail.num*orderdetail.price}}</span>
        </div>
      </div>
      <div class="order_number fs26">
        <div class="flex_be">
          <div>
            <span>订单编号</span>
            <span class="tag-read">{{orderdetail.order_num}}</span>
          </div>
          <span class="copy text_cen" @click="copy($event,orderdetail.order_num)">复制</span>
        </div>
        <div>
          <span>下单时间</span>
          <span>{{orderdetail.add_time}}</span>
        </div>
      </div>
      <div class="flex_be bottom">
        <span @click="canelOrder(orderdetail)">取消订单</span>
        <button>立即支付</button>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import Clipboard from "clipboard";
// import CountDown from "vue2-countdown";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      navactivechoseid: (state) => state.navactivechoseid,
    }),
  },
  components: {
    // CountDown,
  },
  data() {
    return {
      img: require("../assets/logo.png"),
      aorder: "d2sg4hfha7hph555fd5558",
      orderaddress: [],
      orderdetail: [],
      counting: false,
      isStart: false,
      isEnd: false,
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      timer: null,
      btnInfo: "",
    };
  },
  created() {
    request
      .getOrderDetail({
        uid: this.userInfor.member_id,
        oid: this.$route.query.oid,
      })
      .then((res) => {
        console.log(res, "订单详情");
        this.orderaddress = res.data.address;
        this.orderdetail = res.data.detail;
      })
      .catch(() => {})
      .finally(() => {});

  },
  mounted() {},
  methods: {

    go() {
      this.$router.push({
        path: `drawingOrder?navactivechoseid=0`,
      });
    },
    // 取消订单
    canelOrder(item) {
      let oid = item.id;
      request
        .getCancelOrder({
          oid,
        })
        .then((res) => {
          console.log(res);
          this.$toast({
            message: "取消成功",
            icon: "success",
          });
          this.go()
        })
        .catch(() => {
          this.$toast({
            message: "取消失败",
            icon: "error",
          });
        })
        .finally(() => {});
    },
    copy(e, text) {
      var clipboard = new Clipboard(e.target, { text: () => text });
      clipboard.on("success", () => {
        this.$toast("复制成功");
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        this.$toast("复制失败");
        clipboard.destroy();
      });
    },
    gonewshippingAddr(orderaddress) {
      this.$router.push({
        path: "/newshippingAddr",
        query: {
          item: orderaddress,
        },
      });
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
  .mb(18);
  span {
    .ml(265);
  }
}
.stay {
  .h(214);
  background: #ff9936;
  color: #fff;
  .pr(30);
  .pl(30);
  .fs(32);
}
main {
  background: #f3f3f3;
  .pt(11);
  .pr(20);
  .pl(20);
  .pb(207);
  p {
    background: #fff;
    .h(91);
    .lh(91);
    .pl(8);
    .fs(26);
  }
  .addr {
    background: #fff;
    .mt(18);
    .h(142);
    .pl(27);
    .pr(47);
    .info {
      .fs(28);
      font-family: SimHei;
      font-weight: bold;
      .lh(30);
      display: block;
      .mb(22);
    }
    .express {
      width: 0.7rem;
      .h(26);
      .lh(26);
      background: #fb3c29;
      display: block;
      color: #fff;
      .fs(20);
      .padding(7, 7, 7, 7);
      .b-radius(5);
      .mr(17);
    }
  }
  .item {
    background: #fff;
    .mt(20);
    .ser {
      .pt(44);
      .pl(4);
      .pb(21);
      .pr(15);
      .fs(26);
      border-bottom: 1px solid #f3f3f3;
    }
  }
  .number {
    .mt(19);
    background: #fff;
    color: #2a2a2a;
    .pt(41);
    .pr(10);
    .pl(10);
    .fs26 {
      .fs(26);
      .mb(24);
    }
    .bordert {
      .pt(30);
      .pb(28);
      border-top: 1px solid #f3f3f3;
      .fs(26);
      color: #2a2a2a;
    }
  }
  .order_number {
    background: #fff;
    .mt(22);
    color: #2a2a2a;
    .lh(37);
    .padding(18, 10);
    .copy {
      .w(89);
      .lh(29);
      border: 1px solid #959595;
      .b-radius(15);
      display: inline-block;
    }
    > div:nth-of-type(1) {
      .mb(22);
    }
    div {
      span:nth-of-type(1) {
        .mr(38);
      }
    }
  }
}
.bottom {
  .fs(24);
  position: fixed;
  width: 100%;
  background: #fff;
  bottom: 0;
  left: 0;
  .h(92);
  .padding(0, 27);
  box-sizing: border-box;
  button {
    outline: none;
    border: 1px solid #ea2d19;
    color: #ea2d19;
    background: #fff;
    .padding(15, 30);
    .b-radius(27);
  }
}
</style>
<style>
.van-nav-bar__text {
  color: #000000;
  font-size: 0.3rem;
}
.van-nav-bar .van-icon {
  color: #000;
  font-size: 0.3rem;
}
.van-card__price {
  color: #fd3723;
  font-size: 0.28rem;
}
.van-card__origin-price {
  font-size: 0.28rem;
}
.van-card__num {
  color: #202020;
  font-size: 0.32rem;
}
.van-card__desc {
  color: #2a2a2a;
}
.van-ellipsis {
  overflow: inherit;
  white-space: normal;
  font-size: 0.26rem;
}
.van-icon::before {
  font-size: 0.24rem;
}
</style>