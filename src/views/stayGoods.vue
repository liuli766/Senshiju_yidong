<template>
  <!-- 商家待发货 -->
  <div class="staygoods">
    <van-nav-bar left-text="订单详情" left-arrow @click-left="onClickLeft" />
    <div class="flex_be stay">
      <span>商家待发货</span>
      <van-icon name="arrow" />
    </div>
    <main>
      <div class="flex_be addr" @click="gonewshippingAddr(orderaddress)">
        <div class="flex">
          <van-icon
            name="location-o"
            style="
              margin-right: 0.28rem;
              align-self: flex-end;
              margin-bottom: 0.1rem;
            "
          />
          <div>
            <span class="info"
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
      <div class="item">
        <div class="flex_be ser">
          <span>优选别墅图纸</span>
        </div>
        <van-card
          :num="orderdetail.num"
          :price="orderdetail.price"
          :desc="orderdetail.title"
          :thumb="orderdetail.cover"
        />
      </div>
      <!--  -->
      <div class="number">
        <div class="flex_be fs26">
          <span>商品金额</span>
          <span>¥{{ orderdetail.price }}</span>
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
          <span>¥{{ orderdetail.num * orderdetail.price }}</span>
        </div>
        <div class="flex_be bordert">
          <span>实际付款</span>
          <span>¥{{ orderdetail.num * orderdetail.price }}</span>
        </div>
      </div>
      <div class="order_number fs26">
        <div class="flex_be">
          <div>
            <span>订单编号</span>
            <span class="tag-read">{{ orderdetail.order_num }}</span>
          </div>
          <span class="copy text_cen" @click="copy($event, aorder)">复制</span>
        </div>
        <div>
          <span>下单时间</span>
          <span>2020-07-16 13:49:52</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import Clipboard from "clipboard";
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
      img: require("../assets/logo.png"),
      aorder: "d2sg4hfha7hph555fd5558",
      orderaddress: [],
      orderdetail: [],
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
  methods: {
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
          });
          this.onClickLeft();
        })
        .catch(() => {
          this.$toast({
            message: "取消失败",
          });
        })
        .finally(() => {});
    },
    gonewshippingAddr(orderaddress) {
      this.$router.push({
        path: "/newshippingAddr",
        query: {
          item: orderaddress,
        },
      });
    },
    onClickLeft() {
      this.$router.push({
        path: `drawingOrder?navactivechoseid=1`,
      });
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
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
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
      .w(70);
      .h(26);
      .lh(26);
      background: #fb3c29;
      display: block;
      color: #fff;
      .fs(20);
      .padding(7, 7, 7, 7);
      .b-radius(5);
      .mr(17);
      text-align: center;
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