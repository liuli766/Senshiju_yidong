<template>
  <!-- 确认支付页 -->
  <div class="surepay">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>确认支付</span>
    </div>
    <!--  -->
    <div class="pickup_type flex_be">
      <span>取货方式</span>
      <span>快递</span>
    </div>
    <div class="addr flex_be">
      <div class="flex_be">
        <van-icon name="location-o" />
        <span>请填写收货地址</span>
      </div>
      <van-icon name="arrow" />
    </div>
    <!--  -->
    <div class="itemlist flex">
      <img src="../assets/logo.png" alt />
      <div>
        <p>A116新农村一层四合院别墅设计图纸</p>
        <div class="price flex_be">
          <span>¥598.00</span>
          <van-stepper v-model="value" theme="round" button-size="22" />
        </div>
      </div>
    </div>
    <!--  -->
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
    <!--  -->
    <div class="money">
        <div class="flex_be"><span>商品金额</span><span>¥598.00</span></div>
        <div class="flex_be"><span>运费</span><span>¥0.00</span></div>
    </div>
    <div  class="btn">
         <van-submit-bar :price="3050" button-text="立即付款" @submit="onSubmit" />
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      value:1
    };
  },
  methods: {
      onSubmit(){

      }
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
  .lh(156);
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
    .mb(61);
  }
  .price {
    span {
      color: #fd3723;
    }
    .van-stepper{
        .padding(6,8);
        border: 1px solid #DCDCDC;
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
.money{
    background: @base-header-color;
    .margin(0, 20);
    .padding(0,30);
    .fs(26);
    color: #030303;
    >div{
        .lh(88);
    }
    div:nth-of-type(1){
        border-bottom: 1px solid #F3F3F3;
    }
}
</style>
<style>
.price .van-stepper__plus,
.price .van-stepper__minus {
  background: #f5f5f5 !important;
  color: #898989 !important;
  border: 0 !important;
}
.btn .van-submit-bar__button--danger{
    margin-left: 2.66rem !important;
}
</style>
