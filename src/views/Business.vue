<template>
  <!-- 商务合作 -->
  <div class="business">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go"/>
      <span>商务合作</span>
    </div>
    <!--  -->
    <main>
      <img class="swhz" src="../assets/img/swhz.png" alt />
      <div class="flex">
        <img class="b3" src="../assets/img/b3.png" alt />
        <img class="b2" src="../assets/img/b2.png" alt />
      </div>
      <p>
        <span>村墅人家</span>
        专注别墅/自建房设计15年，集 合行业顶尖资源，依托互联网高效、快捷、 低成本的优势，服务全国34个省级行政区， 每年为全国10万余客户提供图纸及设计服务。
      </p>
      <p
        class="wenzp2"
      >由于部分乡村小施工队缺乏建筑施工知 识，技术工艺落后，客户在后续施工过程中 总遇到种种问题，为了让自建房施工专业化、 规范化、标准化，打造设计/施工一站式服 务，让客户省心、放心、安心。我们诚邀全 国实力施工队合作，只要您专业、诚信，我 们会给您带来源源不断的客户</p>
      <p class="wenzp2">我们是一个实干、有理想、开放合作的 团队，欢迎各界有识之士合作，打造一个自 建房图纸、设计、施工、装修、上下游建材 供应链的平台。</p>
    </main>
    <!-- 请在下面填写信息 -->
    <div class="writeinfo">请在下面填写信息</div>
    <div class="hezuo flex">
      <span>合作</span>
      <div class="flex flex_col">
        <label>
          <input name="Fruit" type="radio" value checked class="input" />诚邀专业施工队合作
        </label>
        <label>
          <input name="Fruit" type="radio" value class="input1" />其他业务合作
        </label>
      </div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="姓名"
          label="姓名"
          placeholder="请填写姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="tel"
          name="手机"
          label="手机"
          placeholder="请填写手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <van-field
          v-model="area"
          name="地区"
          label="地区"
          placeholder="请填写所在地区"
          :rules="[{ required: true, message: '请填写所在地区' }]"
        />
        <van-field
          v-model="message"
          rows="3"
          autosize
          name="留言"
          label="留言"
          type="textarea"
          placeholder="非必填，可以填写您的介绍及施工的地区范围！"
          show-word-limit
        />
        <van-button round block class="btn" native-type="submit">立即提交申请</van-button>
      </van-form>
    </div>
    <div class="bot145"></div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import request from "@/request.js";
import $ from "jquery";
export default {
  data() {
    return {
      username: "",
      tel: "",
      area: "",
      message: "",
    };
  },
  created() {},
  methods: {
   
    onSubmit(values) {
      if ($(".input").is(":checked")) {
       console.log( $(".input").parent().text())
        request
          .getTeamwork({
            name: this.username,
            phone: this.tel,
            address: this.area,
            message: this.message,
          })
          .then((res) => {
            console.log(res, "合作请求");
            this.$toast("提交成功");
          })
          .catch(() => {
            this.$toast("提交失败");
          })
          .finally(() => {});
      }else{
         console.log( $(".input1").parent().text())
        request
          .getTeamwork({
            name: this.username,
            phone: this.tel,
            address: this.area,
            message: this.message,
          })
          .then((res) => {
            console.log(res, "合作请求");
            this.$toast("提交成功");
          })
          .catch(() => {
            this.$toast("提交失败");
          })
          .finally(() => {});
      }
      console.log("submit", values);
    },
    go(){
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.business {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: scroll;
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
    .ml(265);
  }
}
main {
  .margin(18,20);
  background: #fff;
  .padding(0,10);
  .pb(142);
  .mb(42);
  .swhz {
    .w(700);
    .h(403);
  }
  .b2,
  .b3 {
    .w(350);
    .h(254);
  }
  .wenzp2 {
    text-indent: 0.7rem;
  }
  .wenzp2,
  p {
    .fs(28);
    color: #333;
    line-height: 0.5rem;
    margin-bottom: 0.7rem;
    background: #fff;
    span {
      .fs(30);
      color: #fe9e15;
    }
  }
}
.writeinfo {
  .w(710);
  .h(89);
  background: #fe9e15;
  color: #fff;
  .fs(28);
  .lh(89);
  text-align: center;
  margin: auto;
}
.hezuo {
  border-radius: 0.1rem;
  background: #fff;
  .h(175);
  .w(710);
  margin: auto;
  .mt(25);
  .pt(40);
  box-sizing: border-box;
  .pl(90);
  .mb(19);
  span {
    .mr(34);
  }
  label {
    .mb(33);
    display: flex;
    input {
      .mr(15);
    }
  }
}
.form {
  position: relative;
  .w(710);
  background: #fff;
  .pt(33);
  .pb(33);
  .pl(90);
  box-sizing: border-box;
  margin: auto;
  border-radius: 0.1rem;
  .pr(25);
  .btn {
    .h(80);
    background: #f1321e;
    border-radius: 0.1rem;
    color: #fff;
    .lh(80);
    margin: auto;
    position: absolute;
    bottom: -46px;
    left: 0;
  }
}
.bot145 {
  height: 2.85rem;
}
</style>
<style>
.form .van-field__label {
  width: 0.98rem !important;
}
.form .van-field__control {
  height: 0.64rem;
  border-radius: 0.1rem;
  padding-left: 0.15rem;
  border: 1px solid #d2d2d2;
}
.form .van-cell::after {
  border-bottom: 1px solid #fff;
}
.form .van-cell {
  padding: 0.1rem;
}
</style>