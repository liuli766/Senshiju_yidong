<template>
  <!-- <div class="bscroll" ref="bscrollapper">
          <div class="bscroll-container">
           
          </div>
  </div>-->
  <!-- 建房百科页-->
  <div class="buildnav">
    <nav class="flex_ar">
      <div class="span" v-for="(item,k) in buiilnavlist" :key="k" @click="chosenav(k)">
        <span :class="{bg_active:navid===k}">{{item}}</span>
      </div>
    </nav>
    <!--  -->
    <div v-show="navid==1 || navid==2 || navid==3 || navid==4 || navid==5 || navid==6 || navid==7">
      <div v-for="(item,k) in articleList" :key="k+0">
        <img :src="item.cover" alt @click="gobuildencycDetail(item.id)" class="buidimg" />
        <p>{{item.title}}</p>
        <div class="flex_be eeebot">
          <span>{{item.add_time.slice(0,11)}}</span>
          <span class="flex_cen">
            <van-icon name="eye-o" />
            {{item.view}}人已读
          </span>
        </div>
      </div>
    </div>
    <div v-show="navid==0">
      <div v-for="(item,k) in collectlist" :key="k+0">
        <img :src="item.cover" alt @click="gobuildencycDetail(item.object_id)" class="buidimg" />
        <p>{{item.title}}</p>
        <div class="flex_be eeebot">
          <span>{{item.add_time.slice(0,11)}}</span>
          <span class="flex_cen">
            <van-icon name="eye-o" />
            {{item.view}}人已读
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="collectlist.length==0"
      v-show="flag"
      style="text-align: center;
    margin-top: 0.3rem;"
    >暂无内容收藏</div>
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
        "收藏",
        "推荐",
        "设计百科",
        "装修百科",
        "施工百科",
        "风水百科",
        "建房日志",
        "建房百科",
      ],
      // aBScroll: "",
      navid: 1, //当前选中的导航值
      classid: "推荐",
      articleList: [], //百科内容
      now: new Date(), //当前时间
      collectlist: [],
      flag:false
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
        if(this.collectlist.length==0){
          this.flag=false
        }else{
          this.flag=true
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
  .padding(16, 22);
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
.buidimg {
  width: 100%;
  height: 100%;
}
</style>