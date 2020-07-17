<template>
  <!--付款，发货，收货 -->
  <div class="orderlist">
    <main>
      <div class="tagname flex_be">
        <span>2020-07-16 13:49:52</span>
        <span>待收货</span>
      </div>
      <div class="flex">
        <img src="../assets/logo.png" alt />
        <div class="right">
          <p>A116新农村一层四合院别墅设计图纸</p>
          <div class="text_r">
            <van-icon name="cross" />1
          </div>
          <div>¥598.00</div>
        </div>
      </div>
      <div class="text_r price_pay">共1件 待付款:¥598.00</div>
      <div class="bor_red">
        <span class="text_cen">查看物流</span>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.orderlist {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
}
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
  }
  .price_pay {
    .mt(60);
    border-bottom: 1px solid #f3f3f3;
  }
  .bor_red {   
    text-align: right;
    .mt(24);
    span {
      .lh(54);
      .w(150);
      border: 1px solid #fd3723;
      display: inline-block;
      .b-radius(27);
    }
  }
}
</style>