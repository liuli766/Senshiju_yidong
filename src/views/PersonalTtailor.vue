<template>
  <!-- 私人定制 -->
  <div class="personalttailor">
    <img src="../assets/img/srdz.png" class="img" alt />
    <!-- 简介 -->
    <div class="intro flex">
      <img src="../assets/img/sh1.png" alt />
      <div >
        <p>更懂您的别墅生活</p>
        <p>村墅人家</p>
        <p>让您体验“真正的别墅生活”</p>
        <p>更贴心的服务</p>
        <div class="line"></div>
        <p>Better understand your villa life</p>
        <p>Villagers</p>
        <p>Let you experience "real villa life"</p>
        <p>More intimate service</p>
      </div>
    </div>
    <p class="text">
      <span>野村人家</span>是四川别墅之家建筑科技有限公司旗下品牌，创建于2015年08月。专注于新农村自建房设计、别墅设计和别墅室内装修设计、园林景观设计及施工一站式服务，集合行业顶尖设计资源致力于打造全国优秀别墅设计公司和私宅设计，服务于中国新农村的建设和城镇化的进程。
    </p>
    <!-- 设计团队支持 -->
    <div class="support text_cen">
      <h5>设计团队支持</h5>
      <p>更加专业，更加精细化，满足高品质的设计需求</p>
      <div class="flex_be">
        <div class="item" v-for="(item,index) in 4" :key="index" @click="handdtail">
          <img src="../assets/img/sh2.png" alt />
          <div class="block">
            <span>蔡壮保</span>
            <span>设计总监</span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="black text_cen">
        <img src="../assets/img/sh2.png" alt />
        <div class="block">
          <p>来自湖南设计院团队，中国十大建院之一</p>
          <p>10年以上设计的经验，已累计为20000+个家庭建筑家居</p>
        </div>
      </div>
    </div>
    <!-- 营业执照 -->
    <div class="business text_cen">
      <h5>营业执照</h5>
      <p>您的安心，我们的放心</p>
    </div>
    <!-- 定图展示 -->
    <div class="show text_cen">
      <h5>定制图纸展示</h5>
      <p>私人定制能带来更贴心的享受</p>
      <div>
        <div class="dpic flex_be">
          <img src="../assets/img/1.png" alt />
          <img src="../assets/img/1.png" alt />
        </div>
        <div class="xpic flex_be">
          <img src="../assets/img/1.png" alt />
          <img src="../assets/img/1.png" alt />
          <img src="../assets/img/1.png" alt />
          <img src="../assets/img/1.png" alt />
        </div>
      </div>
      <div class="more">查看更多</div>
    </div>
    <!-- 口碑您来决定 -->
    <div class="mouth text_cen">
      <h5>我们的口碑您来决定</h5>
      <p>为您与客户真实的聊天记录</p>
      <div class="flex_be">
        <img src="../assets/img/1.png" alt />
        <img src="../assets/img/1.png" alt />
        <img src="../assets/img/1.png" alt />
      </div>
      <div class="more">
        <a :href="'tel:' + phone">查看更多客户反馈请咨询客服</a>
      </div>
    </div>
    <tabbar :tabid="2" />
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
      phone: 18883614674
    };
  },
  methods: {
    handdtail() {
      this.$router.push({
        path: "/desigerDetail"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.personalttailor {
  background: #fafafa;
  overflow: hidden;
}
.img {
  width: 100%;
  .h(380);
}
.intro {
  background: #fff;
  .mt(40);
  > img {
    .w(475);
    .h(216);
    .mr(26);
  }
  >div{
    .mt(20);
  }
  .line {
    .w(60);
    height: 1px;
    background: #000;
    .margin(9,0);
    // .ml(100);
  }
  p {
    .fs(12);
    color: #4b4b4b;
    // transform: scale(0.7);
    .w(600);
  }
}
.text {
  .pt(29);
  .pb(30);
  .pl(25);
  .pr(32);
  font-family: Microsoft YaHei;
  background: #fff;
  font-weight: 400;
  .fs(22);
  .lh(36);
  box-sizing: border-box;
  width: 100%;
  text-align: justify;
  span {
    color: #e13535;
  }
}
.support,
.business,
.show,
.mouth {
  .mt(61);
  background: #fff;
  .pt(31);
  h5 {
    .fs(28);
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  p {
    .fs(16);
    .mt(14);
    .mb(24);
  }
  .item {
    position: relative;
    img {
      .w(178);
      .h(228.8);
    }
  }
  .block {
    .w(178);
    .h(44);
    .lh(44);
    .pt(7);
    .pb(5);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    span:nth-of-type(1) {
      .fs(16);
      transform: scale(0.7);
      display: block;
      line-height: 1;
    }
    span:nth-of-type(2) {
      .fs(10);
      transform: scale(0.7);
      display: block;
      line-height: 1;
    }
  }
  .black {
    .mt(30);
    position: relative;
    img {
      .w(750);
      .h(118);
    }
    .block {
      position: absolute;
      left: 0;
      top: 0;
      // background: rgba(0, 0, 0, 0.3);
      .w(750);
      .h(100);
    }
    p {
      margin: 0;
      line-height: 1;
    }
    p:nth-of-type(1) {
      .mt(31);
      .mb(15);
    }
  }
}
.show {
  .pb(30);
  img {
    .w(360);
    .h(250);
  }
  .xpic {
    img {
      .w(174);
      .h(122);
      .mt(20);
    }
  }
  .more {
    .w(122);
    .h(40);
    border: 1px solid rgba(0, 0, 0, 1);
    margin: auto;
    .mt(30);
    .lh(40);
  }
}
.mouth {
  .pb(30);
  img {
    .w(226);
    .h(468);
  }
  .more {
    .w(340);
    .h(40);
    border: 1px solid rgba(0, 0, 0, 1);
    margin: auto;
    .mt(30);
    .lh(40);
  }
}
</style>