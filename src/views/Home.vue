<template>
  <!-- 首页 -->
  <div class="home">
    <div id="nav" class="flex_ar">
      <router-link to="/product">
        <div>
          <img src="../assets/img/nav/jftk.png" alt />
          <span>建房图库</span>
        </div>
      </router-link>
      <router-link to="/buildLibrary">
        <div>
          <img src="../assets/img/nav/sjtd.png" alt />
          <span>设计团队</span>
        </div>
      </router-link>
      <router-link to="/PersonalTtailor">
        <div>
          <img src="../assets/img/nav/srdz.png" alt />
          <span>私人定制</span>
        </div>
      </router-link>
      <router-link to="/buildEncyc">
        <div>
          <img src="../assets/img/nav/jfbk.png" alt />
          <span>建房百科</span>
        </div>
      </router-link>
      <router-link to="/Business">
        <div>
          <img src="../assets/img/nav/swhz.png" alt />
          <span>商务合作</span>
        </div>
      </router-link>
      <router-link to="/person">
        <div>
          <img src="../assets/img/nav/grzx.png" alt />
          <span>个人中心</span>
        </div>
      </router-link>
    </div>
    <!-- banner -->
    <div class="logo text_cen">
      <img src="../assets/img/logo.png" alt />
      <h4>专注新农村自建房别墅设计</h4>
      <p>四川别墅之家建筑科技有限公司,专注于新农村自建房设计、乡村别墅设计、别墅室内装修设计、园林景观设计，以及施工和建材一站式服务，公司采取传统的公司经营和现代互联网相结合的方式，以创新的设计理念，服务于中国新农村和城镇建设。公司拥有专业的设计团队，结合客户的需求为出发点为您打造一个理想的家园</p>
    </div>
    <!--展示图片  -->
    <div class="flex showpic">
      <img src="../assets/img/b1.png" alt />
      <img src="../assets/img/b2.png" alt />
    </div>
    <!-- 服务电话 -->
    <div class="tel" @tap="handtel">
      24小时服务电话:
      <a :href="'tel:' + phone">{{phone}}</a>
    </div>
    <!-- 定制服务流程 -->
    <div class="process text_cen">
      <h3>定制设计服务流程</h3>
      <span>Custom service process</span>
      <div class="flex_be">
        <div class="bg_color flex_cen flex_col">
          <span>1</span>
          <span>设计前 沟通</span>
        </div>
        <div class="bg_color flex_cen flex_col">
          <span>2</span>
          <span>平面图 设计</span>
        </div>
        <div class="bg_color flex_cen flex_col">
          <span>3</span>
          <span>效果图 设计</span>
        </div>
        <div class="bg_color flex_cen flex_col">
          <span>4</span>
          <span>施工图 设计</span>
        </div>
        <div class="bg_color flex_cen flex_col">
          <span>5</span>
          <span>审单 发货</span>
        </div>
        <div class="bg_color flex_cen flex_col">
          <span>6</span>
          <span>施工 指导</span>
        </div>
      </div>
      <div class="sanjiao"></div>
    </div>
    <!-- 设计范围 -->
    <div class="design text_cen">
      <h3>设计范围</h3>
      <span>design range</span>
      <img src="../assets/img/1.png" alt />
      <div>
        <!-- <div class="range">
          <img src="../assets/logo.png" alt />
          <div class="block">
            <p>中式别墅</p>
            <span>CHINESE VILLA</span>
          </div>
        </div>-->
      </div>
    </div>
    <!-- 别墅类型 -->
    <div class="type_box">
      <div class="flex_be type">
        <img src="../assets/img/c1.png" alt />
        <div>
          <h6>中式别墅</h6>
          <p>CHINESE VILLA</p>
          <p>
            <span>中式大宅</span>，传世府邸，居高境界，源远流长
          </p>
        </div>
      </div>
      <img src="../assets/img/banner2.png" alt />
    </div>
    <div class="type_box">
      <div class="flex_be type">
        <div>
          <h6>四合院</h6>
          <p>QUADRANGLE</p>
          <p>
            <span>传统合院</span>，礼遇中式院落，历史悠久
          </p>
        </div>
        <img src="../assets/logo.png" alt />
      </div>
      <img src="../assets/img/banner2.png" alt />
    </div>
    <div class="type_box">
      <div class="flex_be type">
        <img src="../assets/logo.png" alt />
        <div>
          <h6>欧式别墅</h6>
          <p>EUROPEAN VILLAS</p>
          <p>
            <span>浪漫与典雅</span>，奢华与贵气同在
          </p>
        </div>
      </div>
      <img src="../assets/img/banner2.png" alt />
    </div>
    <div class="type_box">
      <div class="flex_be type">
        <div>
          <h6>现代别墅</h6>
          <p>MODERN VILLA</p>
          <p>
            <span>简而不凡</span>，时尚又大气，摩登新选择
          </p>
        </div>
        <img src="../assets/logo.png" alt />
      </div>
      <img src="../assets/img/banner2.png" alt />
    </div>
    <!-- 定制案列展示 -->
    <div class="show text_cen">
      <h3>定制案例展示</h3>
      <span>Custom-made case show</span>
      <div class="dpic flex_be">
        <img v-for="(item,index) in piclist" :key="index" alt :src="item" />
      </div>
      <div class="xpic flex_be">
        <img v-for="(item,index) in xpiclist" :key="index" alt :src="item" />
      </div>
    </div>
    <!-- footer -->
    <footer class="text_cen">
      <img src="../assets/img/logo.png" alt />
      <h4>匠心如一，百年坚守</h4>
      <p>Ingenuity as one, hundred years of perseverance</p>
    </footer>
    <tabbar :tabid="0" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import request from "@/request.js";
import tabbar from "@/components/tabBar.vue";
export default {
  name: "Home",
  data() {
    return {
      piclist: [
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
      ],
      xpiclist: [
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
        require("../assets/img/banner7.png"),
      ],
      phone: 17683242994,
    };
  },
  components: {
    tabbar,
  },
  created() {
    request
      .getHomeData()
      .then((res) => {
        console.log(res, "首页");
      })
      .catch(() => {})
      .finally(() => {});
  },
  methods: {
    handtel() {},
  },
};
</script>
<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
#nav {
  .mb(22);
  .mt(36);
  div {
    .fs(14);
    display: flex;
    flex-direction: column;
    img {
      .w(85);
      .h(85);
      .mb(4);
    }
  }
}
.logo {
  background: #121911;
  background: url("../assets/img/homebg.png");
  color: @base-header-color;
  .pb(40);
  img {
    .w(230);
    .h(70);
    .mt(45);
    .mb(40);
  }
  h4 {
    .fs(26);
    .mb(29);
  }
  p {
    .fs(14);
    .lh(28);
    .ml(46);
    .mr(47);
    text-align: justify;
    text-indent: 0.3rem;
    color: #e2e3e2;
    letter-spacing: 0.03rem;
  }
}
.showpic {
  img {
    .w(375);
    .h(250);
  }
}
.tel {
  color: #c2884a;
  .fs(35);
  .lh(47);
  .h(49);
  .pl(23);
  border: 2px solid #949494;
  letter-spacing: 0.05rem;
}
.process,
.design,
.show {
  .mr(80);
  .ml(80);
  h3 {
    text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.35);
    .fs(46);
    font-family: FZLTTHJW;
    .mt(45);
    .mb(16);
  }
  > span {
    text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.35);
  }
  .bg_color {
    color: @base-header-color;
    background: #c2884a;
    .mb(33);
    .w(150);
    .h(150);
    border-radius: 50%;
    span {
      font-family: FZCuHeiSongS-B-GB;
      .lh(33);
      .fs(30);
      .mr(32);
      .ml(32);
    }
  }
  .bg_color::after {
    content: "";
    border: 1px solid #c2884a;
    .w(164);
    .h(164);
    border-radius: 50%;
    position: absolute;
  }
  .flex_be {
    flex-wrap: wrap;
    .mt(24);
  }
  .sanjiao {
    .w(0);
    .h(0);
    border: 0.12rem solid transparent;
    border-top-color: #7d0022;
    margin: auto;
  }
}
.design {
  margin: 0;
  img {
    .w(750);
    .h(100%);
  }
}
.type_box {
  .type {
    position: relative;
    div {
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 105px;
    }
    .mt(23);
    img {
      .w(271);
      .h(237);
    }
    h6 {
      .fs(56);
      .lh(54);
      font-family: RS_CuBiao;
    }
    p:nth-of-type(1) {
      .fs(34);
      .lh(55);
      .mt(17);
      .mb(36);
    }
    p:nth-of-type(2) {
      .fs(22);
      span {
        .fs(29);
      }
      .pr(28);
      .pl(28);
      .lh(35);
    }
  }
  > img {
    .w(750);
    .h(452);
    .mt(56);
  }
}
.show {
  margin: 0;
  .dpic {
    img {
      .w(360.4);
      .h(250.7);
    }
  }
  .xpic {
    flex-wrap: wrap;
    img {
      .w(174.9);
      .h(122.1);
      .mt(19);
    }
  }
}
footer {
  .mb(108);
  background: #151d13;
  h4 {
    .fs(46);
    .mt(38);
    .mb(25);
    font-weight: 400;
  }
  p {
    .fs(24);
  }
  font-family: SimHei;

  color: @base-header-color;
  opacity: 0.63;
  .pt(26);
  .pb(60);
}
</style>