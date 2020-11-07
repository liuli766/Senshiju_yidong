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
            <!-- <form action method="POST" enctype="multipart/form-data" id="form1"> -->
            <img :src="headimg?headimg:userInfor.photo" alt class="photo" />
            <input
              type="file"
              id="file"
              name
              accept="image/gif, image/jpeg, image/jpg, image/png"
              @change="fileChange"
            />
            <!-- </form> -->
          </div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="flex_be nikename">
        <span>昵称</span>
        <div>
          <span style="margin-right:0.15rem">
            <input type="text" name id :value="userInfor.nickname" />
          </span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="flex_be modify">
        <span>修改手机号</span>
        <div>
          <span style="margin-right:0.15rem;">
            已绑定：
            <input type="text" name id :value="userInfor.phone_num" />
          </span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <button @click="baocun">保存</button>
    <button @click="outlogin">退出登录</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
// import axios from "axios";
import $ from "jquery";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      headimg: (state) => state.headimg,
    }),
  },
  data() {
    return {
      adatar: "", //头像
      headerimg: require("../assets/img/mine/headerimg.png"),
    };
  },
  created() {
    console.log(this.userInfor);
    if(!this.token){
      this.$router.push({
        path: "/login",
      });
    }
  },
  methods: {
    //头像选择
    fileChange(e) {
      let file = e.target.files[0];
      let param = new FormData(); //创建form对象
      param.append("file", file); //通过append向form对象添加数据
      param.append("uid", this.userInfor.member_id); //通过append向form对象添加数据
      console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      console.log(param.get("uid"));
      // let config = {
      //   headers: { "Content-Type": "multipart/form-data" }, //这里是重点，需要和后台沟通好请求头，Content-Type不一定是这个值
      // }; //添加请求头
      $.ajax({
        type: "post",
        url: "http://villa.jisapp.cn/index/User/up_image",
        data: param,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
      }).then((res) => {
        console.log(res);
        if(res.code==0){
          this.adatar=res.data
        this.$toast("上传成功");
        localStorage.setItem('headImg', res.data)
         let img = localStorage.getItem('headImg')
         this.$store.commit('uploadimg', img)
        }else{
          this.$toast("上传失败");
        }
        
      });
    },
    // 修改个人资料
    baocun() {
      request
        .getupInfo({
          member_id: this.userInfor.member_id,
          phone_num: this.userInfor.phone_num,
          nickname: this.userInfor.nickname,
          password: "",
        })
        .then((res) => {
          console.log(res, "修改个人资料");
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 退出登录
    outlogin() {
      const local = window.location.origin;
      this.$store.commit("cleartoken");
      this.$toast("退出成功");
      window.location.href = local+"/shenshiju/#/mine"

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
input {
  text-align: right;
  width: 2rem;
}
</style>