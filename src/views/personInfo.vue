<template>
  <!-- 个人信息页 -->
  <div class="personinfo">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>个人信息</span>
    </div>
    <!--  -->
    <div class="detail_info">
      <div class="flex_be head">
        <span>头像</span>
        <div><van-icon name="arrow" /></div>
      </div>
      <div class="flex_be nikename">
        <span>昵称</span>
        <div><span>某某某</span><van-icon name="arrow" /></div>
      </div>
      <div class="flex_be modify">
        <span>修改手机号</span>
        <div><span>已绑定：151****7474</span><van-icon name="arrow" /></div>
      </div>
    </div>
    <button>退出登录</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.personinfo {
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
    .ml(264);
  }
}
.detail_info{
    .pr(25);
    .pl(25);
    .fs(30);
    color: #1A1A1A;
    background: @base-header-color;
    .head{
        .h(151);
        border-bottom: 1px solid #BFBFBF;
    }
    .nikename{
        .h(98);
        border-bottom: 1px solid #BFBFBF;
    }
    .modify{
        .h(98);
    }
}
button{
    .w(667);
    .h(85);
    display: block;
    background: #fff;
    margin: 0 auto;
    .mt(39);
    border: 2px solid #B7BEB6;
    color: #1A1A1A;
    .fs(30);
    .b-radius(10);
}
</style>