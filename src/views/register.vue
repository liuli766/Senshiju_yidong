<template>
  <!-- 注册页面 -->
  <div class="register">
    <div class="main">
      <h6>绑定手机号</h6>
      <p>未注册过的手机号码将自动注册为村墅人家用户</p>
      <van-form @submit="onSubmit">
        <div class="tel">
          <van-field
            v-model="tel"
            name="pattern"
            clearable
            placeholder="请输入手机号"
            :rules="[{ pattern, message: '请输入正确内容' }]"
          />
        </div>

        <div class="code flex_be">
          <van-field
            v-model="code"
            name="pattern"
            clearable
            placeholder="请输入验证码"
            :rules="[{ pattern:pattern1, message: '请输入正确内容' }]"
          />
          <span v-if="tmeValue==60" @click="time">获取验证码</span>
          <span v-else>{{ tmeValue }} s 后获取</span>
        </div>

        <div>
          <van-button block class="button" native-type="submit">登录</van-button>
        </div>
      </van-form>
      <p class="agreement text_cen">注册/登录即表示同意</p>
      <div class="text_cen">
        <van-icon name="cross" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import request from "@/request.js";
export default {
  data() {
    return {
      tel: "",
      code: "",
      pattern: /\d{11}/,
      pattern1: /\d{4}/,
      tmeValue: 60, //获取验证码时间
      flag: 0,
    };
  },
  methods: {
    time() {
      //倒计时
      this.tmeValue = this.tmeValue - 1;
      this.flag = 1;
      if (this.tmeValue <= 0) {
        this.tmeValue = 60;
        this.flag = 0;
        return "";
      } else {
        setTimeout(() => {
          this.time();
        }, 1000);
      }
    },
    onSubmit(values) {
      request
        .loginByMsg({
          phone_num: this.tel,
          msg_code: this.code,
        })
        .then((res) => {
          if (res.data.code == 0) {
            console.log(res, "登录");
            this.$toast("登录成功");
            this.$router.push({
              path: "/",
            });
          }else{
            this.$toast("验证码错误");
          }
        })
        .catch(() => {
          this.$toast("登录失败");
        })
        .finally(() => {});
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.register {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  font-family: SimHei;
  .main {
    background: #fff;
    .margin(217,20,0,20);
  }
  h6 {
    color: #202020;
    text-align: center;
    .fs(32);
    font-weight: bold;
    .lh(77);
  }
  p {
    color: #424242;
    font-family: SimHei;
    .fs(24);
    .lh(58);
    .ml(44);
  }
  .code {
    border-bottom: 1px solid #eee;
    .margin(0, 18);
    span {
      display: flex;
      width: 35%;
      color: #979797;
      .fs(32);
    }
  }
  .van-cell::after {
    border-bottom: 0;
  }
  .van-icon {
    .mb(30);
  }
  .tel {
    .margin(0, 18);
    border-bottom: 1px solid #eee;
  }
  .button {
    background: #fe9e15;
    color: #fff;
    .fs(36);
    .b-radius(10);
    margin: auto;
    .mt(60);
    .w(699);
  }
  .agreement {
    line-height: 1;
    .mt(47);
    .mb(82);
  }
}
</style>