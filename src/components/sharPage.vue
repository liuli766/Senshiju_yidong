<template>
  <div class="share">
    <h6>分享到</h6>
    <div class="flex_ar">
      <div class="flex_cen flex_col">
        <img src="../assets/img/pyq.png" alt />
        <span>朋友圈</span>
      </div>
      <div class="flex_cen flex_col">
        <img src="../assets/img/wxhy.png" alt />
        <span>微信好友</span>
      </div>
      <div class="flex_cen flex_col">
        <img src="../assets/img/qqhy.png" alt />
        <span>QQ好友</span>
      </div>
      <div class="flex_cen flex_col">
        <img src="../assets/img/qqkj.png" alt />
        <span>QQ空间</span>
      </div>
      <div class="flex_cen flex_col">
        <img src="../assets/img/fzlj.png" alt />
        <span>复制链接</span>
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
.share {
border-radius: 0.30rem 0.30rem 0px 0px;
  width: 100%;
  height: 2.28rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #232323;
  font-size: 0.2rem;
  font-weight: 400;
  font-family: SimHei;
  box-shadow: 2px 2px 2px 2px #eee;
  img {
    width: 0.48rem;
    height: 0.48rem;
    margin-bottom: 0.25rem;
  }
  h6 {
    font-size: 0.26rem;
    font-family: SimHei;
    font-weight: 400;
    color: #878787;
    line-height: 0.26rem;
    text-align: center;
    margin: 0.34rem 0 0.4rem 0;
  }
}
</style>