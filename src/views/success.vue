<template>
  <div class="success">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>支付成功</span>
    </div>
    <img src="../assets/img/suc.png" alt class="success_img"/>
    <div class="price">￥{{ this.$route.query.price }}</div>
    <div class="suc">支付成功</div>
    <div>
      <span class="goon" @click="goon">继续购物</span>
      <span class="order" @click="order">查看订单</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    },
    goon() {
      //继续购物
      this.$router.push({
        path: "/",
      });
    },
    order() {
      this.$router.push({
        path: `drawingOrder?navactivechoseid=1`,
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
  span {
    .ml(249);
  }
}
.success {
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
.goon,
.order {
  width: 3.38rem;
  height: 0.69rem;
  border: 3px solid #fd3723;
  border-radius: 0.35rem;
  display: inline-block;
  line-height: 0.69rem;
}
.order {
  border-color: #aaaaaa;
  margin-left: 0.16rem;
}
.suc {
  font: 400 0.26rem/1 "";
  color: #a3a2a2;
  margin-bottom: 0.48rem;
}
.price {
  font: 400 0.5rem/1 "";
  color: #fd3723;
  margin-bottom: 0.34rem;
  margin-top: 0.64rem;
}
.success_img{
  width: 100%;
  height: 100%;
}
</style>