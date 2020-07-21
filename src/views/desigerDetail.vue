<template>
<!-- 设计详情 -->
  <div class="desigerDetail">
    <!-- 头部 -->
    <div class="headimg flex">
      <img src="../assets/img/1.png" alt />
      <div class="headr flex_col">
        <div class="flex">
          <div class="flex_cen">
            <div class="name">汤丞昱</div>
            <div class="small_font">设计总监</div>
          </div>
          <div class="flex_cen small_font">
            <van-icon name="star-o" size="0.2rem" style="margin-right:0.05rem" /><span>评价星级:</span>
            <van-rate v-model="value" size="0.2rem" />
          </div>
          <div class="small_font flex_cen">从业年限：10年以上</div>
        </div>
        <div class="shool">毕业院校：武汉理工大学</div>
      </div>
    </div>
    <!--  -->
    <p
      class="text"
    >湖南中烟I业公司技术中心施工总承包;湖南省委党校湖南行政学院第二教学楼施I项目;湖南省委大院四办公楼施I项目;长沙奥克斯广场审计;湖南大德地产全过程成本控制:恒大地产浏阳恒大全过程审计:长沙玫瑰园审计:长沙金鼎宜居花园全过程成本控制长沙橘子洲景区财政评审审计;国家超级计算长沙中心财政评审审计等。 武汉理工大学本科毕业，拥有8年的丰富从业经验，国家注册建造师，造价工程师。心以诚信 行以致远。</p>
    <!-- 代表作品 -->
    <div class="works text_cen">
      <h6>代表作品</h6>
      <div class="border">
        <img src="../assets/img/1.png" alt />
        <img src="../assets/img/1.png" alt />
      </div>
      <div class="btn">立即预约</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 5
    };
  },
  created() {
    console.log(this.$route.query);
  }
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
  .fs(8);
  //   transform: scale(0.7);
  .ml(9);
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
    .mt(33);
  }
  img {
    .w(116);
    .h(116);
    border-radius: 50%;
  }
  .name {
    .fs(28);
    color: #323232;
  }
}
.text {
  background: #fafafa;
  .pt(43);
  .pb(43);
  .pr(7);
  .pl(17);
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
  }
  img + img {
    .ml(28);
  }
  .border {
    border-top: 1px solid #fafafa;
    .pt(40);
    .mb(40);
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