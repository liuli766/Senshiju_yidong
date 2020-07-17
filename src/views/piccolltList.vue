<template>
  <!-- 图纸收藏列表 -->
  <div class="collectionList">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>收藏的图纸</span>
    </div>
    <!--  -->
    <div class="list flex">
      <img src="../assets/logo.png" alt />
      <div>
        <p>农村小庭院怎么设计好看，两层庭院好看只要40万</p>
        <div class="flex_be colltbtn">
          <span>2020-05-26</span>
          <span class="text_cen">已收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.collectionList {
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
  .mb(36);
  span {
    .ml(249);
  }
}
.list {
  background: @base-header-color;
  .margin(0, 20);
  .padding(28, 36, 30, 30);
  .b-radius(10);
  align-items: center;
  img {
    .w(162);
    .h(156);
    .b-radius(10);
    .mr(31);
  }
  p {
    .fs(24);
    .lh(36);
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  .colltbtn{
    .mt(26);
    span:nth-of-type(1){
      color: #5E5E5E;
      .fs(26);
    }
    span:nth-of-type(2){
      color: #fff;
      .fs(22);
      display: inline-block;
      .w(118);
      .lh(34);
      background: #FFC92F;
      .b-radius(17);
    }
  }
}
</style>