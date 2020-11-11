<template>
  <!-- 首页 -->
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.pic_path" style="width: 100%" />
      </van-swipe-item>
    </van-swipe>
    <div id="nav" style="margin-bottom: 0.3rem">
      <van-swipe
        :loop="false"
        :width="93.5"
        :show-indicators="false"
        :touchable="true"
        style="width: 375px"
      >
        <van-swipe-item>
          <router-link to="/product">
            <div class="flex_cen">
              <img src="../assets/img/nav/jftk.jpg" alt />
              <span class="font16">建房图库</span>
            </div>
          </router-link>
        </van-swipe-item>
        <van-swipe-item>
          <router-link to="/buildLibrary">
            <div class="flex_cen">
              <img src="../assets/img/nav/sjtd.jpg" alt />
              <span class="font16">设计团队</span>
            </div>
          </router-link>
        </van-swipe-item>
        <van-swipe-item>
          <router-link to="/PersonalTtailor">
            <div class="flex_cen">
              <img src="../assets/img/nav/srdz.jpg" alt />
              <span class="font16">私人定制</span>
            </div>
          </router-link>
        </van-swipe-item>
        <van-swipe-item>
          <router-link to="/buildEncyc">
            <div class="flex_cen">
              <img src="../assets/img/nav/jfbk.png" alt />
              <span class="font16">建房百科</span>
            </div>
          </router-link>
        </van-swipe-item>
        <van-swipe-item>
          <router-link to="/Business">
            <div class="flex_cen">
              <img src="../assets/img/nav/swhz.png" alt />
              <span class="font16">商务合作</span>
            </div>
          </router-link>
        </van-swipe-item>
        <van-swipe-item>
          <router-link to="/person">
            <div class="flex_cen">
              <img src="../assets/img/nav/grzx.png" alt />
              <span class="font16">个人中心</span>
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
      <div
        style="
          margin-top: 0.82rem;
          font-size: 0.3rem;
          line-height: 0.2rem;
          color: #313131;
          width: auto;
          text-align: left;
        "
      >
        专题推荐
      </div>
    </div>
    <div class="flex special_box">
      <div
        v-for="(item, v) in specialsList"
        v-show="v < num"
        :key="v"
        class="special"
        @click="GoDisplay(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="flex flex_col flex_cen">
      <img src="../assets/img/more.png" alt="" class="more_img" />
      <span
        style="
          font-size: 0.2rem;
          line-height: 0.2rem;
          color: #363636;
          margin-bottom: 0.32rem;
        "
        @click="showMore"
        >{{txt}}</span
      >
    </div>
    <!-- banner -->
    <img src="../assets/img/gai1.png" alt="" style="width: 100%" />
    <!--展示图片  -->
    <!-- 服务电话 -->
    <div class="tel">
      24小时服务电话:
      <a :href="'tel:' + phone">{{ phone }}</a>
    </div>
    <div class="video">
      <video
        class="vedio"
        :src="video.home_video"
        controls
        width="375"
        height="300"
        preload="none"
        poster="../assets/img/vdeo.png"
      ></video>
    </div>
    <!-- 定制服务流程 -->
    <img src="../assets/img/hh1.jpg" alt="" style="width: 100%" />
    <!-- 设计范围 -->
    <div class="design text_cen">
      <h3>设计范围</h3>
      <span>design range</span>
      <div style="position: relative">
        <img src="../assets/img/1.png" alt />
        <div class="quk" v-if="Hotspot[0]">
          <div><a :href="Hotspot[0].url"></a></div>
          <div style="position: absolute; right: 0; top: 0">
            <a :href="Hotspot[1].url"></a>
          </div>
          <div style="position: absolute; right: 0; top: 1.3rem">
            <a :href="Hotspot[2].url"></a>
          </div>
          <div style="position: absolute; left: 0; top: 1.3rem">
            <a :href="Hotspot[3].url"></a>
          </div>
          <div style="position: absolute; left: 0; top: 2.5rem">
            <a :href="Hotspot[4].url"></a>
          </div>
          <div style="position: absolute; right: 0; top: 2.5rem">
            <a :href="Hotspot[5].url"></a>
          </div>
          <div
            style="
              position: absolute;
              left: 2.5rem;
              width: 2.5rem;
              height: 2.5rem;
              top: 0.5rem;
            "
          >
            <a :href="Hotspot[6].url"></a>
          </div>
        </div>
      </div>
    </div>

    <img src="../assets/img/bigbanner.jpg" alt="" style="width: 100%" />
    <!-- 定制案列展示 -->
    <div class="show text_cen">
      <h3>定制案例展示</h3>
      <span>Custom-made case show</span>
      <div class="dpic flex_be">
        <img
          v-for="(item, index) in dzlist.slice(0, 2)"
          :key="index"
          alt
          :src="item.cover"
        />
      </div>
      <div class="xpic">
        <img
          v-for="(item, index) in dzlist"
          :key="index"
          alt
          :src="item.cover"
        />
      </div>
    </div>
    <img src="../assets/img/sjtd.jpg" class="img" alt style="width: 100%" />

    <!-- footer -->
    <footer class="text_cen">
      <img src="../assets/img/jx.png" alt style="width: 100%" />
    </footer>
    <div style="padding: 0 0.2rem; margin-bottom: 2rem">
      <div style="text-align: center; margin-bottom: 0.3rem" class="flex_cen">
        <img
          src="../assets/img/baokuan.png"
          alt=""
          style="margin-right: 0.1rem; width: 0.5rem"
        />
        <span style="font-size: 0.36rem; font-weight: bold">热门爆款商品</span>
      </div>
      <productitem :productitem="Blist" />
    </div>
    <tabbar :tabid="0" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import tabbar from "@/components/tabBar.vue";
import productitem from "@/components/productItem.vue";
export default {
  name: "Home",
  data() {
    return {
      phone: 17683242994,
      dzlist: [],
      link: "http://villa.jisapp.cn",
      flag: false,
      vdeoimg: true,
      video: [],
      Hotspot: [],
      images: [],
      Blist: [],
      specialsList: [], //建房专题
      num: 6,
      isShow: true,
       txt: '查看更多',
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  components: {
    tabbar,
    productitem,
  },
  created() {
    this.getdata();
    request
      .getHotspot()
      .then((res) => {
        console.log(res, "热区链接");
        this.Hotspot = res.data;
      })
      .catch(() => {})
      .finally(() => {});
    request
      .getselectLunbo({
        type: 3,
      })
      .then((res) => {
        console.log(res, "轮播");
        this.images = res.data.list;
      })
      .catch(() => {})
      .finally(() => {});

    request
      .getBao({
        page: 1,
      })
      .then((res) => {
        console.log(res, "爆款");
        this.Blist = res.data;
      });
    // 首页建房专题
    request.getSpecials().then((res) => {
      console.log(res, "首页建房专题");
      this.specialsList = res.data;
    });
  },
  methods: {
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
          console.log(res, "定制图纸");
          this.dzlist = res.data.case;
        })
        .catch(() => {})
        .finally(() => {});

      // 视频数据
      request
        .getHomeindex()
        .then((res) => {
          this.video = res.data;
        })
        .catch(() => {})
        .finally(() => {});
    },
    handplay() {
      //单击播放暂停按钮控制视频的播放和暂停
      // let vdeoimg = document.querySelector('.vedoimg>img')
      let video = document.querySelector("video");
      if (video.paused) {
        video.play();
        this.vdeoimg = false;
      } else {
        video.pause();
        this.vdeoimg = true;
      }
    },
    GoDisplay() {
      this.$router.push({
        path: "/Display",
      });
    },
    showMore() {
      this.isShow = !this.isShow;
      this.num = this.isShow ? 6 : this.specialsList.length;
      this.txt = this.isShow ? "查看更多" : "收起";
    },
  },
};
</script>
<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.home {
  background-color: #fff;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: auto;
}
#nav {
  background: #fff;
  padding: 0.9rem 0 0.25rem 0.54rem;
  box-shadow: 0 3px 3px #e7e7e7;
  overflow: hidden;
  span {
    margin-top: 0.15rem;
  }
  div {
    .fs(14);
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 1rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 0.1rem;
    }
  }
}
.logo {
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
    .w(160);
    .h(160);
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
    .w(180);
    .h(180);
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
      .w(258);
      .h(238);
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
    width: 100%;
    height: 100%;
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
    display: flex;
    img {
      width: 1.76rem;
      .h(122.1);
      .mt(19);
      margin-right: 0.15rem;
    }
    img:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}
footer {
  // .mb(108);
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
  .pt(26);
  .pb(50);
}
.quk {
  width: 100%;
  height: 3.5rem;
  // border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
}
.quk div {
  width: 2rem;
  height: 1rem;
  // border: 1px solid yellow;
}
.quk div a {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.video {
  position: relative;
}
.video .vedoimg {
  height: 6rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 7.5rem;
}
.video .vedoimg img {
  width: 92px;
  height: 92px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -46px;
  margin-left: -46px;
}
.vedio {
  width: 100%;
  height: 100%;
}
.font16 {
  font-size: 0.2rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
}
.img {
  margin: 0.22rem 0;
}
.special_box {
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 0.25rem;
}
.special {
  font-size: 0.22rem;
  color: #2a7dbe;
  border-bottom: 1px solid #2a7dbe;
  width: 40%;
  padding-bottom: 0.06rem;
  height: 0.7rem;
  display: flex;
  align-items: flex-end;
}
.more_img {
  width: 0.26rem;
  height: 0.26rem;
  margin-bottom: 0.3rem;
  animation: move 0.8s infinite alternate;
}
@keyframes move {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>