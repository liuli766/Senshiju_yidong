<template>
  <!-- 建房百科专题页 -->
  <div>
    <img src="../assets/img/display.png" class="banner_img" alt="" />
    <div class="yellow_box">
      <div class="main comm_12">
        当前位置：<router-link to="/">主页</router-link>>专题
      </div>
    </div>
    <!--  -->
    <div class="display_two comm_12">
      <img :src="SpecialInfoList.cover" alt="" />
      <div class="display_two_box">
        <h5>{{ SpecialInfoList.title }}</h5>
        <p class="comm_one" v-html="SpecialInfoList.intro"></p>
        <div class="display_up comm_one" @click="Dianz(SpecialInfoList)">
          <span class="upup">{{ SpecialInfoList.like_num }}人点赞</span>
          <img src="../assets/img/up.png" alt="" />
        </div>
      </div>
    </div>
    <!--  -->
    <div v-for="(item, k) in infolist" :key="k">
      <div class="display_three">
        <div class="display_self_tit">{{ item.title }}</div>
        <div class="display_self_yell">European recommen</div>
      </div>
      <div class="display_self_box">
        <div class="display_self_con" v-for="(c, v) in item.child" :key="v">
          <img :src="c.cover" alt="" />
          <p>{{ c.title }}</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div style="margin: 0 0.5rem">
      <div class="display_list">
        <img src="../assets/img/11.png" alt="" />
        <div class="display_list_box">
          <h5>专业:专做别墅18年</h5>
          <p>
            我们是国内唯一专注自建房设计的公司，集合行业顶尖资源客户满意率100%
          </p>
          <p>我们坚信只有只有专注才能做的最好</p>
        </div>
      </div>
      <div class="display_list" style="background: #facd89">
        <img src="../assets/img/12.png" alt="" />
        <div class="display_list_box">
          <h5>放心：品牌运作 服务更好</h5>
          <p>打造别墅设计第一品牌，服务全国34省级行政区，重视口碑和客户体验</p>
          <p>售后一流，让自建房更简单</p>
        </div>
      </div>
      <div class="display_list" style="background: #f8b551">
        <img src="../assets/img/13.png" alt="" />
        <div class="display_list_box">
          <h5>省钱：模式创新，价格更亲民</h5>
          <p>依托互联网高效、快捷、低成本的优势，颠覆传统设计公司一年不开张</p>
          <p>开张吃半年模式，拒绝暴利，让老百姓设计的起</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="as14">
      <img src="../assets/img/14.png" alt="" />
    </div>
    <div style="display: flex; justify-content: center">
      <img :src="qrcode" alt="" class="serves_img" />
    </div>
    <!--  -->
    <div>
      <div class="display_three">
        <div class="display_self_tit">热门爆款商品</div>
        <div class="display_self_yell">European recommen</div>
      </div>
      <div class="display_self_box">
        <div class="display_self_con" v-for="(item, v) in hot_list" :key="v">
          <img :src="item.cover" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/request.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      SpecialInfoList: [], //专题信息
      qrcode: "",
      hot_list: [], //爆款
      infolist:[]
    };
  },
    computed: {
    ...mapState({
      userInfor: (state) => state.userInfor,
      token: (state) => state.token,
    }),
  },
  created() {
    this.SpecialInfo()
    request.getHomeData().then((res) => {
      console.log(res, "手机首页");
      this.qrcode = res.data.set.qr_code;
    });
    request.getBao().then((res) => {
      console.log(res, "爆款");
      this.hot_list = res.data;
    });
  },
    methods: {
    SpecialInfo() {
      request
        .getSpecialInfo({
          id: this.$route.query.id,
        })
        .then((res) => {
          console.log(res, '专题信息')
          this.SpecialInfoList = res.data.info
          this.infolist = res.data.list
        })
    },
    Dianz(item) {
      console.log(1)
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false
      }
      request
        .getToLike({
          uid: this.userInfor.member_id,
          id: item.id,
        })
        .then((res) => {
          this.$toast(res.message);
          this.SpecialInfo()
        })
    },
  },
};
</script>

<style scoped>
.banner_img {
  width: 100%;
  height: 100%;
}
.yellow_box {
  height: 0.6rem;
  background: #fecb38;
  font-size: 0.2rem;
  line-height: 0.6rem;
  color: #343434;
  text-align: left;
  padding-left: 0.5rem;
}
.display_two {
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.display_two > img {
  height: 1.56rem;
  width: 1.56rem;
  border-radius: 50%;
  margin-right: 0.18rem;
}
.display_two .display_two_box h5 {
  font-size: 0.36rem;
  line-height: 0.2rem;
  color: #242424;
  margin-bottom: 0.35rem;
}
.comm_one {
  font-size: 0.18rem;
  color: #242424;
  line-height: 0.3rem;
}
.display_two .display_two_box p {
  text-align: left;
}
.display_two .display_two_box .display_up {
  float: right;
  margin-top: 0.26rem;
}
.display_two .display_two_box .display_up img {
  width: 0.24rem;
  height: 0.24rem;
  margin-left: 0.06rem;
}
.display_three {
  width: 100%;
  height: 0.95rem;
  filter: drop-shadow(0px 8px 3.5px rgba(97, 97, 97, 0.29));
  background-color: #eeeeee;
  padding: 0.24rem 0 0.1rem 0;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 0.54rem;
}
.display_self_tit {
  font-size: 0.3rem;
  color: #202020;
  line-height: 1;
  margin-bottom: 0.09rem;
}
.display_self_yell {
  font-size: 0.25rem;
  color: #fecb38;
  line-height: 1;
}
.display_self_con {
  width: 3rem;
  height: 3.2rem;
}
.display_self_con > img {
  width: 100%;
  height: 2.08rem;
  box-shadow: 0 4px 3px #dedddd;
}
.display_self_con > p {
  font-size: 0.22rem;
  line-height: 0.28rem;
  color: #343434;
  text-align: center;
  padding: 0.2rem 0 0.32rem 0;
}
.display_self_box {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.5rem;
  margin-bottom: 0.54rem;
  justify-content: space-between;
}
.display_list {
  display: flex;
  background: #ffd759;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  padding: 0 0.2rem 0.16rem 0.18rem;
  align-items: center;
}
.display_list > img {
  width: 0.94rem;
  height: 0.94rem;
}
.display_list_box {
  margin-left: 0.2rem;
}
.display_list_box h5 {
  font-size: 0.29rem;
  color: #201f1f;
  margin-top: 0.15rem;
}
.display_list_box p {
  font-size: 0.18rem;
  color: #201f1f;
  line-height: 0.4rem;
  margin-top: 0.1rem;
}
.as14 {
  width: 5.1rem;
  height: 4rem;
  margin: 0.48rem auto;
}
.as14 > img {
  width: 100%;
  height: 100%;
}
.serves_img {
  width: 3.64rem;
  height: 3.64rem;
  margin-bottom: 0.36rem;
}
</style>