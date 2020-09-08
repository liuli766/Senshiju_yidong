<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  created() {
    // this.getCode();
    console.log(this.token)
    console.log(this.userInfor)
  },
  methods: {
    wxLogin(code) {
      request
        .getWXInfo({
          code: code,
        })
        .then((res) => {
          console.log(res, "微信信息");
          if (res.code == 0) {
            this.$router.push({
              path: "/",
            });
          } else {
            this.$toast("授权失败");
          }
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
  },
};
</script>
<style>
.van-toast__icon {
    font-size: 0.8rem !important;
}
</style>