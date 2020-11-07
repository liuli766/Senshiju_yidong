<template>
  <!-- 建房百科页-->
  <div class="buildnav">
    <div class="flex_cen">
      <h6 class="titleh6">建房百科</h6>
      <span class="sjx"></span>
    </div>
    <div class="vanup">
      <div v-for="(item, k) in buiilnavlist" :key="k" @click="chosenav(k)">
        <img :src="item.img" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <!-- <nav class="flex_ar">
      <div
        class="span"
        v-for="(item, k) in buiilnavlist"
        :key="k"
        @click="chosenav(k)"
      >
        <span :class="{ bg_active: navid === k }">{{ item }}</span>
      </div>
    </nav> -->
    <!--  -->
    <div
      v-show="
        navid == 1 ||
        navid == 2 ||
        navid == 3 ||
        navid == 4 ||
        navid == 5 ||
        navid == 6 ||
        navid == 7
      "
    >
      <div
        v-for="(item, k) in articleList"
        :key="k + 0"
        @click="gobuildencycDetail(item.id)"
      >
        <div style="display: flex" v-if="item.type == 1">
          <img
            v-for="(img, v) in item.cover"
            :key="v"
            :src="img"
            alt
            class="buidimg"
          />
        </div>
        <video
          v-if="item.video && item.type == 2"
          class="vedio"
          :src="item.video"
          controls
          width="375"
          height="300"
          preload="none"
          :poster="item.cover[0]"
        ></video>
        <p>{{ item.title }}</p>
        <div class="flex_be eeebot">
          <span>{{ item.add_time.slice(0, 11) }}</span>
          <span class="flex_cen">
            <van-icon name="eye-o" style="margin-right:0.1rem" />
            {{ item.view }}人已读
          </span>
        </div>
      </div>
    </div>
    <div v-show="navid == 0">
      <div v-for="(item, k) in collectlist" :key="k + 0">
        <img
          :src="item.cover"
          alt
          @click="gobuildencycDetail(item.object_id)"
          class="buidimg"
        />
        <p>{{ item.title }}</p>
        <div class="flex_be eeebot">
          <span>{{ item.add_time.slice(0, 11) }}</span>
          <span class="flex_cen">
            <van-icon name="eye-o" />
            {{ item.view }}人已读
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="collectlist.length == 0"
      v-show="flag"
      style="text-align: center; margin-top: 0.3rem"
    >
      暂无内容收藏
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
// import BScroll from "better-scroll";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  data() {
    return {
      buiilnavlist: [
        {
          name: "文章收藏",
          img: require("../assets/img/jfbaike/收藏.png"),
        },
        {
          name: "文章推荐",
          img: require("../assets/img/jfbaike/推荐.png"),
        },
        {
          name: "设计百科",
          img: require("../assets/img/jfbaike/百科.png"),
        },
        {
          name: "装修百科",
          img: require("../assets/img/jfbaike/装修.png"),
        },
        {
          name: "施工百科",
          img: require("../assets/img/jfbaike/施工.png"),
        },
        {
          name: "风水百科",
          img: require("../assets/img/jfbaike/fs.png"),
        },
        {
          name: "建房日志",
          img: require("../assets/img/jfbaike/rz.png"),
        },
        {
          name: "景观园林",
          img: require("../assets/img/jfbaike/y.png"),
        },
      ],
      // aBScroll: "",
      navid: 1, //当前选中的导航值
      classid: "推荐",
      articleList: [], //百科内容
      now: new Date(), //当前时间
      collectlist: [],
      flag: false,
    };
  },
  created() {
    this.getdata(this.classid);
  },
  methods: {
    // 文章收藏
    collect() {
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      }
      request
        .fachcollect({
          uid: this.userInfor.member_id,
          type: 2,
        })
        .then((res) => {
          console.log(res, "收藏");
          this.collectlist = res.data;
        })
        .catch(() => {})
        .finally(() => {});
    },
    getdata(str) {
      //获取百科文章
      request
        .getArticle({
          class: str,
          page: 1,
        })
        .then((res) => {
          console.log(res, "百科文章");
          this.articleList = res.data;
        })
        .catch(() => {})
        .finally(() => {});
    },
    chosenav(k) {
      this.navid = k;
      if (k == 1) {
        this.classid = "推荐";
        this.getdata(this.classid);
      } else if (k == 2) {
        this.classid = "设计百科";
        this.getdata(this.classid);
      } else if (k == 3) {
        this.classid = "装修百科";
        this.getdata(this.classid);
      } else if (k == 4) {
        this.classid = "施工百科";
        this.getdata(this.classid);
      } else if (k == 5) {
        this.classid = "风水百科";
        this.getdata(this.classid);
      } else if (k == 6) {
        this.classid = "建房日志";
        this.getdata(this.classid);
      } else if (k == 7) {
        this.classid = "建房百科";
        this.getdata(this.classid);
      }
      if (k == 0) {
        this.collect();
        if (this.collectlist.length == 0) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      }
    },
    gobuildencycDetail(id) {
      //跳转建房百科详情
      this.$router.push({
        path: "/buildencycDetail",
        query: {
          id,
        },
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.buildnav {
  padding: 0.16rem 0.24rem;
  box-sizing: border-box;
  nav {
    flex-wrap: wrap;
    .span {
      .h(26);
      .fs(32);
      color: #191919;
      transform: scale(0.8);
      .lh(26);
      width: 25%;
      box-sizing: border-box;
      margin-bottom: 0.15rem;
      span {
        padding: 0.04rem 0.1rem;
      }
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
    font-weight: 400;
    font-size: 0.26rem;
    line-height: 0.39rem;
    margin:0.16rem 0 0.2rem 0;
  }
  .vp {
    .mt(24);
  }
  .eeebot {
    .pb(19);
    .mb(39);
    border-bottom: 1px solid #eee;
    color: #707070;
  }
  .videobox {
    .pt(24);
  }
}
.buidimg {
  width: 2.3rem;
  height: 1.75rem;
  border-radius: 0.08rem;
}
.buidimg+.buidimg{
  margin-left: 0.04rem;
}
.vedio {
  width: 100%;
  height: 100%;
}
.titleh6 {
  margin: 0.46rem 0;
  font-size: 0.3rem;
  letter-spacing: 1px;
  line-height: 0.33px;
  color: #1d1d1d;
  font-family: "Sim Hei";
  text-align: center;
}
.sjx {
  display: inline-block;
  width: 0;
  height: 0;
  border: 0.13rem solid transparent;
  border-bottom-color: #191919;
  margin-bottom: 0.1rem;
  margin-left: 0.14rem;
}
.vanup {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.36rem 0;
  border-radius: 0.08rem;
  box-shadow: 1px 0 3px #f1f1f1,0 2px 3px #f1f1f1,-2px 0 3px #f1f1f1,0 6px 3px #f1f1f1;
  margin-bottom: 0.38rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin-bottom: 0.58rem;
    span {
      margin-top: 0.14rem;
    }
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
}
</style>