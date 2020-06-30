<template>
  <!-- 商品详情页 -->
  <div>
    <van-swipe @change="onChange">
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator text_cen">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
    <!-- 价格 -->
    <div class="price">¥599.00</div>
    <!-- 简介 -->
    <p class="title">B537二层四合院别墅设计图纸中式新农村自建房样图效果图全套</p>
    <!-- 发货 -->
    <div class="flex_be goods">
      <div>发货：<span>四川成都</span> | 快递：<span>免运费</span></div>
      <div>月销：10</div>
    </div>
    <!-- 服务 -->
    <div class="serves" @click="handServe">
      服务<span>付款后48小时内发货</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {

    onChange(index) {
      this.current = index;
    },
    handServe(){//跳到服务页
      
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";

.custom-indicator {
  background: rgba(0, 0, 0, 0.5);
  .b-radius(17);
  .w(82);
  .h(35);
  .lh(35);
  position: absolute;
  right: 0.08rem;
  bottom: 0.15rem;
  color: #fff;
}
.price {
  background: #ededed;
  .h(95);
  .fs(47);
  .lh(95);
  font-family: Adobe Heiti Std;
  color: #d21010;
  .pl(16);
}
.title {
  .fs(27);
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #131313;
  .ml(22);
  .mt(41);
  .lh(40);
}
.goods,.serves{
  background: #EDEDED;
  .pl(19);
  .pr(32);
  .h(95);
  .lh(95);
  color: #707070;
  span{
    color: #1D1D1D;
  }
}
.serves{
  .mt(9);
  span{
    .ml(20);
  }
}
</style>