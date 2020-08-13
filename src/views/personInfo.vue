<template>
  <!-- 个人信息页 -->
  <div class="personinfo">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>个人信息</span>
    </div>
    <!--  -->
    <div class="detail_info">
      <div class="flex_be head">
        <span>头像</span>
        <div class="flex_cen">
          <div class="fl_center adatar">
            <img :src="adatar?adatar:headerimg" alt class="photo" />
            <input
              type="file"
              name
              accept="image/gif, image/jpeg, image/jpg, image/png"
              @change="fileChange"
            />
          </div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="flex_be nikename">
        <span>昵称</span>
        <div>
          <span style="margin-right:0.15rem"><input type="text" name="" id="" value="某某某"></span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="flex_be modify">
        <span>修改手机号</span>
        <div>
          <span style="margin-right:0.15rem;">已绑定：<input type="text" name="" id="" value="151212154568"></span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <button>退出登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adatar: "", //头像
      headerimg: require("../assets/img/mine/headerimg.png"),
    };
  },
  methods: {
    //头像选择
    fileChange(e) {
      var that = this;
      var file = e.target.files[0];
      this.adatar = e.target.files[0];

      var reader = new FileReader();
      reader.onload = function (e) {
        that.adatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    go() {
      this.$router.go(-1);
    },
  },
};
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
.detail_info {
  .pr(25);
  .pl(25);
  .fs(30);
  color: #1a1a1a;
  background: @base-header-color;
  .head {
    .h(151);
    border-bottom: 1px solid #bfbfbf;
  }
  .nikename {
    .h(98);
    border-bottom: 1px solid #bfbfbf;
  }
  .modify {
    .h(98);
  }
}
button {
  .w(667);
  .h(85);
  display: block;
  background: #fff;
  margin: 0 auto;
  .mt(39);
  border: 2px solid #b7beb6;
  color: #1a1a1a;
  .fs(30);
  .b-radius(10);
}
.adatar {
  position: relative;
  width: 0.95rem;
  height: 0.95rem;
  .mr(15);
}
.adatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.adatar input {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}
input{
  text-align: right;
  width: 2rem;
}
</style>