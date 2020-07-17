<template>
  <!-- 登录页面 -->
  <div class="login">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>绑定手机号</span>
    </div>
    <!-- 手机号注册/登录 -->
    <div class="login_reg flex_cen" @click="goRegister">手机号注册/登录</div>
    <!--  -->
    <p class="text_cen">注册/登录即表示同意<span>《用户协议》</span></p>
    <div class="ohter text_cen">其他登录方式</div>
    <div class="flex_cen login_type">
      <div class="weixin"></div>
      <div class="qq"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goRegister(){
      this.$router.push({
        path:'/register'
      })
    }
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.nav_bar{
  background:#FE9E15;
  .lh(80);
  align-items: center;
  color: @base-header-color;
  .fs(34);
  .pl(20);
  span{
    .ml(245);   
  }
}
.login_reg{
  .h(88);
  .w(671);
  color: #1F1F1F;
  .fs(36);
  border: 1px solid #080102;
  margin: 0 auto;
  .b-radius(10);
}
p{
  .mt(58);
  .mb(467);
  color: #646464;
  .fs(24);
  span{
    color: #0180F7;
  }
}
.ohter{
  color: #BEBEBE;
  .fs(24);
  .mb(59);
}
.login_type{
  div{
    .w(83);
    .h(83);
    border-radius: 50%;
    border: 1px solid #BFBFBF;
  }
  .weixin{
    .mr(85);
  }
}
</style>