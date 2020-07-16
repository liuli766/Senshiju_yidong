<template>
  <!-- 我的 -->
  <div class="mine">
    <div class="bg_header">
      <img src="../assets/img/1.png" alt />
      <div class="modalbox">
        <div class="flex">
          <div class="img flex_cen">
            <img src="../assets/logo.png" alt />
          </div>
          <div class="info flex flex_col">
            <span>陈某某</span>
            <span>普通用户</span>
          </div>
        </div>
        <div class="toperfect">去完善</div>
      </div>
    </div>
    <!-- main -->
    <main>
      <!-- 我的订单 -->
      <div class="mineorder">
        <h6>我的订单</h6>
      </div>
      <div class="girdbox flex_be">
        <div class="gird flex_col flex_cen" v-for="(gird,k) in gridList" :key="k">
          <img :src="gird.img" alt />
          <span>{{gird.name}}</span>
        </div>
      </div>
      <div class="mineorder">
        <h6>我的工具</h6>
      </div>
      <div class="girdbox flex">
        <div class="gird flex_col flex_cen" v-for="(gird,k) in toolList" :key="k">
          <img :src="gird.img" alt />
          <span>{{gird.name}}</span>
        </div>
      </div>
    </main>
    <tabbar :tabid="3" />
  </div>
</template>

<script>
import tabbar from "@/components/tabBar.vue";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      gridList: [
        {
          img: require("../assets/logo.png"),
          name: "待付款"
        },
        {
          img: require("../assets/logo.png"),
          name: "待发货"
        },
        {
          img: require("../assets/logo.png"),
          name: "待收货"
        },
        {
          img: require("../assets/logo.png"),
          name: "待评价"
        },
        {
          img: require("../assets/logo.png"),
          name: "售后"
        }
      ],
      toolList: [
        {
          img: require("../assets/logo.png"),
          name: "收货地址"
        },
        {
          img: require("../assets/logo.png"),
          name: "收藏"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.mine {
  .bg_header {
    .w(620);
    .h(266);
    .mt(57);
    .mr(65);
    .ml(65);
    .mb(27);
    position: relative;
    img {
      .w(620);
      .h(266);
      .b-radius(10);
    }
    .modalbox {
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      top: 0;
      left: 0;
      width: 100%;
      color: #fff;
      height: 100%;
      .padding(15, 19);
      box-sizing: border-box;
      .img {
        .w(90);
        .h(90);
        .mr(19);
        border: 2px solid #fff;
        border-radius: 50%;
        img {
          .w(79);
          .h(79);
          border-radius: 50%;
          background: #fff;
        }
      }
      .info {
        justify-content: center;
        .fs(28);
        span:nth-of-type(2) {
          .fs(22);
          .mt(13);
        }
      }
      .toperfect {
        .w(126);
        .h(49);
        .b-radius(25);
        .padding(13, 24);
        background: #343434;
        box-sizing: border-box;
        position: absolute;
        right: 0.24rem;
        bottom: 0.24rem;
      }
    }
  }
  main {
    background: #ededed;
    .pt(46);
    .pr(21);
    .pl(21);
    .pb(90);
    .mb(90);
    .mineorder {
      .b-radius(10);
      border: 1px solid #fff2e5;
      h6 {
        .h(83);
        .lh(83);
        background: #fff;
        .pl(38);
      }
    }
    .girdbox {
      .padding(42, 51, 51, 64);
      background: #fff;
      flex-wrap: wrap;
      .mb(16);
      .gird {
        width: 25%;
        .mb(77);
        img {
          .w(45);
          .h(45);
          .mb(16);
        }
      }
    }
  }
}
</style>