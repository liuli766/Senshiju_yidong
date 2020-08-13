<template>
  <!-- 购物车 -->
  <div class="cart">
    <!-- <div class="cartfff">
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
    </div>-->
    <!-- 购物车 -->
    <div class="business">
      <div class="nav_bar flex">
        <van-icon name="arrow-left" />
        <span>购物车</span>
      </div>
    </div>
    <!-- 管理 -->
    <div class="admin flex_be">
      <div class="adminl">
        <span class="xyq"></span>
        <span>图纸</span>
      </div>
      <div>
        <img class="cl" src="../assets/img/qq.png" alt />
        <span>管理</span>
      </div>
    </div>
    <!-- 购物车条数 -->
    <div class="itemlist flex" v-for="(item,k) in cartlist" :key="k">
      <img :src="item.img" alt />
      <div>
        <p>{{item.intro}}</p>
        <div class="price flex_be">
          <span>￥{{item.price}}</span>
          <van-stepper v-model="item.value" theme="round" button-size="22" @change='change(item.value,index)' />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="flex">
      <div class="ggcheck">
        <!-- <span class="gg"><van-icon name="success" /></span> -->
        <span class="ggh"></span>
        <span>全选</span>
      </div>
      <div class="flex flex_col">
        <span>¥598.00</span>
        <span>含运费</span>
      </div>
      <div>结算（1）</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
       radio: '1',
      cartlist: [
        {
          img: require("../assets/logo.png"),
          price: 598.0,
          intro:'A116新农村一层四合院别墅设计图纸',
          value: 1,
        },
        {
          img: require("../assets/logo.png"),
          price: 598.0,
          intro:'A116新农村一层四合院别墅设计图纸',
          value: 1,
        },
        {
          img: require("../assets/logo.png"),
          price: 598.0,
          intro:'A116新农村一层四合院别墅设计图纸',
          value: 1,
        },
      ],
    };
  },
  methods: {
    change(value, s) {
      console.log(value, s); //value是当前购物车已选择的值，s是当前购物车下标
    },
    goBuy() {
      this.$router.push({
        path: "/orderpay",
      });
    },
    handcheck(){
      this.radio='0'
    }
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
.cart {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: scroll;
}
.cart {
  // background: #aeaeae;
  .w(750);
  // .pt(34);
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
.admin {
  box-sizing: border-box;
  .mb(19);
  .w(710);
  .h(108);
  .padding(0,30);
  border-radius: 0.1rem;
  background: #fff;
  .xyq {
    display: inline-block;
    .w(20);
    .h(20);
    border-radius: 50%;
    border: 1px solid #ff2913;
    .mr(10);
  }
  .cl {
    .w(24);
    .h(24);
    .mr(13);
  }
  .mr(18);
  .ml(20);
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
footer{
  position: fixed;
  width: 100%;
  background: #fff;
  width: 100%;
  align-items: center;
  .h(93);
  bottom: 0;
  left: 0;
  .pl(30);
  .ggcheck{
    display: flex;
    align-items: center;
    .ggh,.gg{
      display: inline-flex;
      .mr(17);
      .w(38);
      .h(38);
      border: 1px solid #EAEAEA;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background: #FA3D29;
      color: #fff;
    }
    .ggh{
      background: #fff;
    }
  }
}
</style>
<style lang="css">
.itemlist .van-stepper--round .van-stepper__minus {
  color: #333;
  background: #F5F5F5;
  border: 0;
}
.itemlist .van-stepper--round .van-stepper__plus{
  color: #333;
  background: #F5F5F5;
  border: 0;
}
</style>