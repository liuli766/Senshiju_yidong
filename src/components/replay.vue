<template>
  <!-- 回复组件 -->
  <div class="box">
      <div class="replydetail">
        <van-icon name="cross" />
        <span>回复详情</span>
      </div>
      <div class="rate">
        <div class="flex_be">
          <div class="userinfo flex_cen">
            <img src="../assets/item.png" alt />
            <span>陈某某</span>
          </div>
          <div>
            <span>
              <van-icon name="good-job-o" />0
            </span>
            <span>
              <van-icon name="good-job-o" />0
            </span>
          </div>
        </div>
        <div class="comment">
          <p>试乘试驾城南旧事多吃点</p>
          <div>
            <span>树木丛生看吗</span>
            <span>是你吃烧烤</span>
            <div class="reply text_cen">回复</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.box{
    .padding(27,32,100,40);
}
.replydetail {
  .fs(28);
  .lh(26);
  > span {
    .ml(260);
  }
}
.rate {
  .pt(10);
  .mb(1rem);
  .userinfo {
    img {
      .w(62);
      .h(62);
      border-radius: 50%;
      .mr(18);
    }
  }
  .comment {
    .ml(80);
    font-family: Adobe Heiti Std;
    font-weight: normal;
    p {
      .mt(13);
      color: #2f2f2f;
      .fs(28);
      .lh(47);
      .mb(30);
    }
    div {
      span {
        color: #898989;
        .fs(22);
        .lh(25);
      }
      span:nth-of-type(1) {
        .mr(20);
      }
    }
    .reply {
      display: inline-block;
      .w(100);
      .h(35);
      .b-radius(15);
      background: #e5e5e5;
      .fs(22);
      .lh(35);
      color: #2f2f2f;
    }
  }
  .replybox {
    background: #eeeeee;
    .h(197);
    .w(620);
    .mt(25);
    .b-radius(10);
    .padding(12, 14);
    box-sizing: border-box;
    .allreply {
      color: #4c78b3;
      .fs(28);
      .lh(47);
    }
  }
}
</style>