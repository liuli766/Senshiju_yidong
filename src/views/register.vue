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
            v-model="code1"
            name="pattern"
            clearable
            placeholder="请输入验证码"
            :rules="[{ pattern: pattern1, message: '请输入正确内容' }]"
          />
          <span v-if="tmeValue == 60" @click="getauth">获取验证码</span>
          <span v-else>{{ tmeValue }} s 后获取</span>
        </div>

        <div>
          <van-button block class="button" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
      <p class="agreement text_cen">注册/登录即表示同意</p>
      <div class="text_cen">
        <van-icon name="cross" @click="closeGoLogin" />
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
      code1: "", //验证码
      pattern: /\d{11}/,
      pattern1: /\d{4}/,
      tmeValue: 60, //获取验证码时间
      flag: 0,
      code: "", //code码
    };
  },
  watch: {
    code1() {
      this.code1 = this.code1.trim().slice(0, 6);
    },
  },
  methods: {
    getauth() {
      let that = this;
      if (/^1[34578]\d{9}$/.test(that.tel)) {
        request
          .getCode({
            phone_num: that.tel,
          })
          .then((res) => {
            if (res.code == 0) {
              console.log(res, "短信");

              this.$toast("发送成功");
              that.time();
            } else {
              this.$toast("发送失败");
            }
          })
          .catch(() => {
            this.$toast("发送失败");
          })
          .finally(() => {});
      } else {
        this.$toast("手机号格式不正确");
      }
    },
    wxLogin(code) {
      request
        .getWXInfo({
          code: code,
        })
        .then((res) => {
          console.log(res, "微信信息");
          this.$toast("微信授权成功");
        })
        .catch(() => {})
        .finally(() => {});
    },
    getCode() {
      // 非静默授权，第一次有弹框
      const code = this.getUrlParam("code"); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      const local = window.location.href;
      console.log(code);

      if (code == null || code === "") {
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe960929de0880424&redirect_uri=" +
          encodeURIComponent(local) +
          "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
      } else {
        this.wxLogin(code); //把code传给后台获取用户信息
        this.code = code;
      }
    },
    getUrlParam: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
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
      let openid = localStorage.getItem("oppid");
      request
        .loginByMsg({
          phone_num: this.tel,
          msg_code: this.code1,
          openid: openid || "",
        })
        .then((res) => {
          console.log(res);
          if (res.code == 0) {
            this.$store.commit("settoken", res.data);
            localStorage.setItem("istoken", res.data.token);
            console.log(localStorage.getItem("istoken"));
            this.$toast("登录成功");
            var url = location.search; //获取url中"?"符后的字符串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
              var str = url.substr(1);
              var strs = str.split("&");
              for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
              }
            }

            this.wxLogin(theRequest);
            this.$router.push({
              path: "/",
            });
          } else {
            this.$toast("验证码错误");
          }
        })
        .catch(() => {
          this.$toast("登录失败");
        })
        .finally(() => {});
      console.log("submit", values);
    },
    closeGoLogin() {
      this.$router.push({
        path: "/login",
      });
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
      width: 38%;
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