<template>
  <!-- 注册页面 -->
  <div class="register">
    <h6>绑定手机号</h6>
    <p>未注册过的手机号码将自动注册为村墅人家用户</p>
    <van-form @submit="onSubmit">
      <van-field
        v-model="tel"
        name="pattern"
        placeholder="用户名"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="tel"
        name="pattern"
        placeholder="用户名"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      pattern: /\d{6}/
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.register {
  h6 {
    color: #202020;
    text-align: center;
    .fs(32);
    font-weight: bold;
    .lh(77);
  }
  p{
      color: #424242;
      .fs(24);
      .lh(58);
      .ml(44);
  }
}
</style>