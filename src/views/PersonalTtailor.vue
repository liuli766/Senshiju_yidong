<template>
  <!-- 私人定制 -->
  <div class="personalttailor">
    <img src="../assets/img/srdz.png" class="img" alt />
    <!-- 设计团队支持 -->
    <img
      src="../assets/img/personbanner.jpg"
      alt=""
      style="width: 100%; height: 100%"
    />
    <div class="support text_cen">
      <h5>设计团队支持</h5>
      <p>更加专业，更加精细化，满足高品质的设计需求</p>
      <div class="flex">
        <div
          class="item"
          v-for="(item, index) in teamList"
          :key="index"
          @click="handdtail(item.id)"
        >
          <img :src="item.cover" alt />
          <div class="block">
            <span>{{ item.name }}</span>
            <span>{{ item.position }}</span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="black text_cen">
        <img src="../assets/img/sh2.jpg" alt />
      </div>
    </div>
    <!-- 营业执照 -->

    <img
      src="../assets/img/yingyzz.png"
      alt=""
      style="width: 100%; height: 100%"
    />
    <!-- 定图展示 -->
    <div class="show text_cen">
      <h5>定制图纸展示</h5>
      <p>私人定制能带来更贴心的享受</p>
      <div>
        <div class="xpic flex_be">
          <img :src="item.cover" alt v-for="(item, k) in moreList" :key="k" />
        </div>
      </div>

      <div v-if="picList.length <= moreList.length">没有更多了</div>
      <div class="more" @click="more" v-else>查看更多</div>
    </div>
    <!-- 口碑您来决定 -->
    <div class="mouth text_cen">
      <h5>我们的口碑您来决定</h5>
      <p>为您与客户真实的聊天记录</p>
      <div class="koubei" style="flex-wrap: wrap">
        <img :src="item.cover" alt v-for="(item, k) in dzlist" :key="k" />
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
import request from "@/request.js";
export default {
  components: {
    tabbar,
  },
  data() {
    return {
      phone: 18883614674,
      teamList: [], //设计团队
      licenselist: [],
      dzlist: [],
      picList: [],
      moreList: [],
      idx: 3,
    };
  },
  created() {
    request
      .getTeam({
        page: 1,
      })
      .then((res) => {
        console.log(res, "设计团队");
        this.teamList = res.data;
      })
      .catch(() => {})
      .finally(() => {});
    this.getdata();
    // this.getTail();
  },
  methods: {
    more() {
      this.idx++;
      let list = [...this.moreList];
      this.moreList = [
        ...list,
        ...this.picList.slice(this.idx++, this.idx + 1),
      ];
    },
    getTail() {
      // 定制图纸
      request
        .teamDrawings({
          page: 1,
        })
        .then((res) => {
          console.log(res, "定制图纸");
          this.picList = res.data;
          if (this.picList < 4) {
            this.moreList = this.picList;
          } else {
            this.moreList = this.picList.slice(0, 4);
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    getdata() {
      this.flag = true;
      request
        .getHomeData()
        .then((res) => {
          console.log(res, "首页");
        })
        .catch(() => {})
        .finally(() => {});
      request
        .getDrawings({})
        .then((res) => {
          console.log(res, "营业执照");
          this.licenselist = res.data.license;
          this.dzlist = res.data.praise.slice(0.6).reverse();
          this.picList = res.data.case;
          if (this.picList < 4) {
            this.moreList = this.picList;
          } else {
            this.moreList = this.picList.slice(0, 4);
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    handdtail(num) {
      this.$router.push({
        path: "/desigerDetail",
        query: {
          id: num,
        },
      });
    },
  },
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
  img {
    width: 60%;
    .h(416);
    .mr(26);
  }
  > div {
    .mt(20);
  }
  .line {
    .w(60);
    height: 1px;
    background: #000;
    .margin(9,0);
  }
  p {
    .fs(24);
    color: #4b4b4b;
    // .w(600);
    .lh(36);
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
      .h(250);
    }
  }
  .item + .item {
    margin-left: 0.1rem;
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
      // transform: scale(0.7);
      display: block;
      line-height: 1;
    }
    span:nth-of-type(2) {
      .fs(10);
      // transform: scale(0.7);
      display: block;
      line-height: 1;
      margin-top: 0.1rem;
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
    margin-bottom: 0.3rem;
  }
  .dpic1 {
    flex-wrap: wrap;
  }
  .xpic {
    justify-content: flex-start;
    flex-wrap: wrap;
    img {
      .w(174);
      .h(122);
      .mt(20);
      .mb(20);
      .mr(18);
    }
    img:nth-of-type(4n) {
      margin-right: 0;
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
  .pb(230);
  img {
    .w(226);
    .h(468);
  }
  .more {
    .w(390);
    .h(40);
    border: 1px solid rgba(0, 0, 0, 1);
    margin: auto;
    .mt(30);
    .lh(40);
  }
}
.dpic {
  flex-wrap: wrap;
}
.dpic img {
  width: 100%;
  height: 100%;
}
// .dpic img:nth-of-type(3) {
//   .w(730);
// }
// .dpic img:nth-of-type(1) {
//   .ml(50);
// }
// .dpic img:nth-of-type(2) {
//   .mr(50);
// }
.koubei {
  display: flex;
  > img {
    width: 32%;
    margin-right: 0.15rem;
    margin-bottom: 0.15rem;
  }
  img:nth-of-type(3n) {
    margin-right: 0;
  }
}
</style>