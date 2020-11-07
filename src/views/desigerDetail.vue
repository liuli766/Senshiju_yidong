<template>
  <!-- 设计详情 -->
  <div class="desigerDetail">
    <!-- 头部 -->
    <div class="headimg flex">
      <img :src="detailList.cover" alt />
      <div class="headr flex_col">
        <div class="flex" style="flex-wrap: wrap;">
          <div class="flex_cen">
            <div class="name">{{detailList.name}}</div>
            <div class="small_font">{{detailList.position}}</div>
          </div>
          <div class="flex_cen small_font">
            <!-- <van-icon name="star-o" size="0.2rem" style="margin-right:0.05rem" /> -->
            <span>评价星级:</span>
            <van-rate v-model="detailList.star_level" size="0.2rem" />
          </div>
          <div class="small_font flex_cen">从业年限：{{detailList.job_year}}</div>
        </div>
        <div class="shool">毕业院校：{{detailList.school}}</div>
      </div>
    </div>
    <!--  -->
    <p class="text">{{detailList.intro}}</p>
    <!-- 代表作品 -->
    <div class="works text_cen">
      <h6>代表作品</h6>
      <div class="border">
        <img v-for="(item,k) in detailList.works" :key="k" :src="item" alt />
      </div>
      <!-- <div class="btn">立即预约</div> -->
    </div>
  </div>
</template>

<script>
import request from "@/request.js";
export default {
  data() {
    return {
      value: 5,
      detailList: [],
    };
  },
  created() {
    request
      .getTeamDetail({
        id: this.$route.query.id,
      })
      .then((res) => {
        console.log(res, "设计师详情");
        this.detailList = res.data;
      })
      .catch(() => {})
      .finally(() => {});
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.desigerDetail {
  .pt(37);
  .pb(47);
}
.small_font {
  .fs(24);
  .mr(30);
  margin-bottom: 0.15rem;
}
.headimg {
  .ml(27);
  .headr {
    .ml(18);
  }
  div {
    color: #989898;
  }
  .shool {
    .fs(22);
    .lh(25);
    .mt(10);
  }
  img {
    .w(116);
    .h(116);
    border-radius: 50%;
  }
  .name {
    .fs(28);
    color: #323232;
    margin-bottom: 0.15rem;
    margin-right: 0.3rem;
  }
}
.text {
  background: #fafafa;
  .pt(43);
  .pb(43);
  .pr(27);
  .pl(27);
  .fs(22);
  .lh(40);
  color: #595858;
  text-align: justify;
}
.works {
  .mt(40);
  .mb(47);
  h6 {
    .fs(30);
    font-weight: 400;
    .lh(48);
    color: #222222;
    border-bottom: 0.02rem solid #febf15;
    .w(201);
    margin: auto;
    .pb(20);
  }
  img {
    .w(334);
    .h(260);
    .ml(28);
    margin-bottom: 0.28rem;
    border-radius: 0.1rem;
  }
  .border {
    border-top: 1px solid #fafafa;
    .pt(40);
    .mb(40);
    display: flex;
    flex-wrap: wrap;
  }
  .btn {
    .w(200);
    .h(52);
    .lh(52);
    background: #f1ba26;
    color: #fff;
    font-family: Microsoft YaHei;
    font-weight: bold;
    .fs(30);
    .b-radius(10);
    margin: auto;
  }
}
</style>