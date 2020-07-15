<template>
  <!-- 产品列表 -->
  <div class="productitem flex flex_b">
    <div v-for="(item,k) in productitem" :key="k" class="productitemlist">
      <img :src="item.img" alt />
      <div class="padd">
        <p>{{item.p}}</p>
        <span class="baoyou">{{item.baoyou}}</span>
        <div class="price">{{item.price}}</div>
        <div class="flex_be people">
          <span>{{item.people}}人付款</span>
          <div class="flex_cen">
            <van-icon name="shopping-cart-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productitem: {
      type: Array,
      default: () => [] // es6的箭头函数
    }
  },
  data() {
    return {
      //   itemlist: this.productItemList
    };
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.productitem {
  flex-wrap: wrap;
  .padd{
      .pr(14);
      .pl(14);
      .pb(18);
  }
  .productitemlist {
    background: #fff;
    .w(347);
    .mt(14);
  }
  img {
    .w(347);
    .h(359);
  }
  p {
    color: #161616;
    .fs(28);
    .lh(37);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .baoyou {
    display: block;
    .w(57);
    .h(26);
    background: #fed8d6;
    .b-radius(13);
    color: #f8311c;
    .fs(20);
    .mt(14);
    .mb(16);
    .lh(30);
    text-align: center;
    .padding(3, 8, 3, 8);
  }
  .price {
    color: #f8311c;
    .fs(30);
    font-family: SimSun;
    font-weight: bold;
    .lh(40);
  }
  .people {
    span {
      color: #979797;
      .fs(24);
      .lh(40);
      font-family: SimSun;
      font-weight: bold;
    }
    div {
      border: 2px solid #ea2d19;
      border-radius: 50%;
      .w(42);
      .h(42);
    }
    .van-icon {
      color: #ea2d19;
      font-size: 0.3rem;
    }
  }
}
</style>        