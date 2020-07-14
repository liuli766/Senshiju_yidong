<template>
  <!-- 订单待付款 -->
  <div>
    <van-nav-bar left-text="订单详情" left-arrow @click-left="onClickLeft" />
    <div class="flex_be stay">
      <span>订单待付款</span>
      <van-icon name="arrow" />
    </div>
    <main>
      <p>
        请尽快完成付款，还剩
        <span>
          20分（超时按
          <span>取消订单</span>处理）
        </span>
      </p>
      <!--  -->
      <div class="flex_be addr">
        <div class="flex">
          <van-icon name="location-o" style="margin-right:0.28rem;align-self: flex-end;" />
          <div>
            <span class="info">瞅瞅 18720459981</span>
            <div class="flex_cen" style="font-size:0.25rem;">
              <span class="express">快递</span>四川省成都市武侯区清江西路东苑338号
            </div>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>
      <!--  -->
      <div class="item">
        <div class="flex_be ser">
          <span>优选别墅图纸</span>
          <span>
            联系客服
            <van-icon name="chat-o" />
          </span>
        </div>
        <van-card
          num="1"
          price="598.00"
          origin-price="10.00"
          desc="A116新农村一层四合院别墅设计图纸乡村 自建一层中式风格房子"
          thumb="/assets/logo.jpeg"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {}
  }
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
}
main {
  background: #f3f3f3;
  .pt(11);
  .pr(20);
  .pl(20);
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
      .w(52);
      .h(26);
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
  font-size:0.28rem;
}
.van-card__origin-price{
    font-size:0.28rem;
}
.van-card__num {
  color: #202020;
  font-size:0.32rem;
}
.van-card__desc {
  color: #2a2a2a;
}
.van-ellipsis {
  overflow: inherit;
  white-space: normal;
  font-size:0.26rem;
}
.van-icon::before{
    font-size: 0.24rem;
}
</style>