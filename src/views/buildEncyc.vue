<template>
  <!-- 建房百科页-->
  <div class="buildnav">
    <nav class="flex_ar">
      <span
        v-for="(item,k) in buiilnavlist"
        :key="k"
        @click="chosenav(k)"
        :class="{bg_active:navid===k}"
      >{{item}}</span>
    </nav>
    <!--  -->
    <div>
      <div class="bscroll" ref="bscroll">
        <div class="bscroll-container">
          <img src="../assets/item.png" alt v-for="(item,k) in 6" :key="k" />
        </div>
      </div>
      <p>欧式别墅怎么设计好看，两层庭s欧式别墅怎么设计好看，两层庭院</p>
      <div class="flex_be eeebot">
        <span>3天前</span>
        <span class="flex_cen">
          <van-icon name="eye-o" />2778人已读
        </span>
      </div>
      <div class="videobox">
        <video src="../assets/xc.mp4" controls width="100%" height="100%" preload="none"></video>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      buiilnavlist: [
        "收藏",
        "推荐",
        "设计百科",
        "装修百科",
        "施工百科",
        "风水百科",
        "建房日志"
      ],
      navid: 0 //当前选中的导航值
    };
  },
  methods: {
    chosenav(k) {
      this.navid = k;
    }
  },
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll; //查找bscroll元素
      this.aBScroll = new BScroll(bscrollDom, {
        scrollX: true,
        eventPassthrough: "vertical"
      });
    });
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.buildnav {
  .padding(16, 22);
  nav {
    span {
      .h(26);
      .fs(18);
      color: #191919;
      .padding(3, 3);
      .lh(26);
    }
    .bg_active {
      background: #f2a930;
      .b-radius(10);
      color: #fff;
    }
  }
  .bscroll {
    width: 100%;
    .h(167);
    overflow: hidden;
    .mt(53);
    .mb(25);
    .bscroll-container {
      .w(1440);
    }
    img {
      .w(233);
      .h(167);
      .mr(4);
      .b-radius(10);
    }
  }
  p {
    color: #191919;
    font-family: SimSun;
    font-weight: bold;
    .fs(26);
    .lh(39);
    .mb(30);
  }
  .eeebot {
    .pb(19);
    .mb(17);
    border-bottom: 0.17rem solid #eee;
  }
  .videobox{
    .pt(24);
  }
}
</style>