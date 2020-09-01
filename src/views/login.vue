<template>
  <!-- 登录页面 -->
  <div class="login">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>绑定手机号</span>
    </div>
    <img src="../assets/img/login1.png" alt class="login1" />
    <!-- 手机号注册/登录 -->
    <div class="login_reg flex_cen" @click="goRegister">
      <img src="../assets/img/sj.png" class="sj" />手机号注册/登录
    </div>
    <!--  -->
    <p class="text_cen">
      注册/登录即表示同意
      <span>《用户协议》</span>
    </p>
    <div class="ohter text_cen">其他登录方式</div>
    <div class="flex_cen login_type">
      <div class="weixin flex_cen" @click="getCode">
        <img src="../assets/img/wx.png" alt />
      </div>
      <!-- <div class="qq flex_cen">
        <img src="../assets/img/qq.png" alt />
      </div>-->
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import request from "@/request.js";
export default {
  data() {
    return {
      code: "",
    };
  },
  created() {
    request
      .getWXInfo({})
      .then((res) => {
        console.log(res, "微信信息");
      })
      .catch(() => {})
      .finally(() => {});
  },
  methods: {
    wxLogin(code) {
      request
        .getWXInfo({
          code: code,
        })
        .then((res) => {
          console.log(res, "微信信息");
          res=localStorage.setItem('wxdata',JSON.stringify(res.data))
          if (res.code == 0) {
            this.$router.push({
              path: "/",
            });
          }else{
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
      // let str = window.location.href.split('code=')[1] //在地址栏去获取截取
      // if (str) {
      // 	this.code =str.split('&')[0];
      // }
    },
    goRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.nav_bar {
  background: #fe9e15;
  .lh(80);
  align-items: center;
  color: @base-header-color;
  .fs(34);
  .pl(20);
  span {
    .ml(245);
  }
}
.login_reg {
  .h(88);
  .w(671);
  color: #1f1f1f;
  .fs(36);
  border: 1px solid #080102;
  margin: 0 auto;
  .b-radius(10);
  .sj {
    .w(22);
    .h(35);
    .mr(22);
  }
}
p {
  .mt(58);
  .mb(40);
  color: #646464;
  .fs(24);
  span {
    color: #0180f7;
  }
}
.ohter {
  color: #bebebe;
  .fs(24);
  .mb(59);
}
.login_type {
  div {
    .w(83);
    .h(83);
    border-radius: 50%;
    border: 1px solid #bfbfbf;
  }
  .weixin {
    img {
      .w(56);
      .h(47);
    }
  }
  .qq {
    img {
      .w(44);
      .h(52);
    }
  }
}
.login1 {
  .w(209);
  .w(256);
  display: block;
  margin: auto;
  .mt(239);
  .mb(70);
}
</style>