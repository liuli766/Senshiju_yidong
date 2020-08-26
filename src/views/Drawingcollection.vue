<template>
  <!-- 图纸收藏列表 -->
  <div class="collectionList">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>图纸的收藏</span>
    </div>
    <!--  -->
    <div  class="list flex"  v-if="articleList.length==0">没有收藏的图纸</div>
    <div class="list flex" v-for="(item,k) in articleList" :key="k" @click="goartic(item)" v-else>
      <img :src="item.cover" alt />
      <div>
        <p>{{item.title}}</p>
        <div class="flex_be colltbtn">
          <span>￥{{item.price}}</span>
          <span class="text_cen"  @click.stop="qxcollect(item.collect_id)">已收藏</span>
        </div>
      </div>
    </div>
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
      headimg: (state) => state.headimg,
    }),
  },
data() {
  return {
    articleList:[]
  }
},
created() {
  this.collect(1)
},
  methods: {
    go() {
      this.$router.go(-1);
    },
    // 文章收藏
    collect(num) {
      request
        .fachcollect({
          uid: this.userInfor.member_id,
          type: num,
        })
        .then((res) => {
            this.articleList = res.data;        
        })
        .catch(() => {})
        .finally(() => {});
    },
     goartic(item) {
      //跳转文章详情
      this.$router.push({
        path: '/buildencycDetail',
        query: item,
      })
    },
     //取消收藏
    qxcollect(idx) {
      request
        .getCancelcollect({
          uid: this.userInfor.member_id,
          c_id: idx,
        })
        .then((res) => {
          this.collect(1)
          console.log(res,'取消收藏')
          this.$toast("取消成功");
        })
        .catch(() => {
          this.$toast("取消失败");
        })
        .finally(() => {})
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.collectionList {
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
  .mb(36);
  span {
    .ml(249);
  }
}
.list {
  background: @base-header-color;
  .margin(0, 20);
  .padding(28, 36, 30, 30);
  .b-radius(10);
  align-items: center;
  img {
    .w(162);
    .h(156);
    .b-radius(10);
    .mr(31);
  }
  p {
    width: 4.5rem;
    .fs(24);
    .lh(36);
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  .colltbtn {
    .mt(26);
    span:nth-of-type(1) {
      color: #f93822;
      .fs(26);
    }
    span:nth-of-type(2) {
      color: #fff;
      .fs(22);
      display: inline-block;
      .w(118);
      .lh(34);
      background: #ffc92f;
      .b-radius(17);
    }
  }
}
</style>