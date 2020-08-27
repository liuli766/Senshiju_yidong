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
    <div v-show="navid==1">
      <div v-for="(item,k) in articleList" :key="k+0">
        <div class="bscroll" ref="bscrollapper">
          <div class="bscroll-container">
            <img :src="item.cover" alt @click="gobuildencycDetail(item.id)" />
          </div>
        </div>
        <p>{{item.content}}</p>
      </div>

      <div class="flex_be eeebot">
        <span>3天前</span>
        <span class="flex_cen">
          <van-icon name="eye-o" />2778人已读
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import BScroll from "better-scroll";
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
        "收藏",
        "推荐",
        "设计百科",
        "装修百科",
        "施工百科",
        "风水百科",
        "建房日志",
      ],
      aBScroll: "",
      navid: 1, //当前选中的导航值
      classid: "推荐",
      articleList: [], //百科内容
    };
  },
  created() {
    this.getdata(this.classid);
  },
  methods: {
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
      }
    },
    gobuildencycDetail(id) {
      this.$router.push({
        path: "/buildencycDetail",
        query: {
          id,
        },
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscrollapper; //查找bscroll元素
      this.aBScroll = new BScroll(bscrollDom, {
        scrollX: true,
        eventPassthrough: "vertical",
      });
    });
  },
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
    font-weight: 400;
    .fs(26);
    .lh(39);
    .mb(30);
  }
  .vp {
    .mt(24);
  }
  .eeebot {
    .pb(19);
    .mb(17);
    border-bottom: 0.17rem solid #eee;
  }
  .videobox {
    .pt(24);
  }
}
</style>