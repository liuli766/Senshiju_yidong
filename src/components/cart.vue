<template>
  <!-- 购物车 -->
  <div class="cart">
    <div class="cartfff">
      <div class="cartbox" v-for="(item,index) in cartlist" :key="index">
        <div class="cartlist flex">
          <img src="../assets/logo.png" alt />
          <div class="red">￥598.00</div>
        </div>
        <div class="flex_be stepper">
          <span class="num">数量</span>
          <van-stepper v-model="item.value" @change='change(item.value,index)' />
        </div>
      </div>
      <button @click="goBuy">立即购买</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartlist: [
        {
          img: require("../assets/logo.png"),
          price: 598.0,
          value:1
        },
        {
          img: require("../assets/logo.png"),
          price: 598.0,
          value:1
        },
        {
          img: require("../assets/logo.png"),
          price: 598.0,
          value:1
        }
      ]
    };
  },
  methods: {
      change(value,s){
          console.log(value,s)  //value是当前购物车已选择的值，s是当前购物车下标
      },
      goBuy(){
          this.$router.push({
              path:'/orderpay'
          })
      }
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.cart {
  background: #aeaeae;
  .w(750);
  .pt(34);
  .cartfff {
    background: #fff;
    border-radius: 0.3rem 0.3rem 0 0;
    .pl(29);
    .pr(29);
    button {
      .w(691);
      .h(87);
      .b-radius(44);
      border: 0;
      outline: none;
      background: #ff2913;
      color: #fff;
      .fs(30);
      font-family: SimHei;
      font-weight: bold;
    }
  }

  .cartbox {
    .num {
      color: #aeaeae;
      .fs(30);
    }
    .stepper {
      .mt(28);
      .mb(32);
    }
  }
  .cartlist {
    .pt(34);
    .pb(14);
    border-bottom: 1px solid #f1f1f1;
    img {
      .w(148);
      .h(148);
      .mr(33);
    }
    .red {
      .fs(40);
      font-weight: bold;
      font-weight: bold;
      color: #fd3723;
      .lh(44);
      .mt(16);
    }
  }
}
</style>