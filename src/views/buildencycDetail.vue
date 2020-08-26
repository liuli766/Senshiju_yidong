<template>
  <!-- 建房百科 详情页-->
  <div class="buildencyc">
    <h6>{{picDetail.title}}</h6>
    <img :src="picDetail.cover" class="img1" alt />
    <p class="p1" v-html="picDetail.content"
    ></p>
    <div class="rate" v-for="(item,k) in comment" :key="k">
      <div class="flex_be">
        <div class="userinfo flex_cen">
          <img src="../assets/item.png" alt />
          <span>{{item.name}}</span>
        </div>
        <div>
          <span class="up" @click="handUp(item)">
            <img src="../assets/img/up.png" alt />0
          </span>
          <span class="up" @click="handDown(item)">
            <img src="../assets/img/down.png" alt />0
          </span>
        </div>
      </div>
      <div class="comment">
        <p>{{item.content}}</p>
        <div>
          <span>{{item.TimeY}}</span>
          <span>{{item.TimeH}}</span>
          <div class="reply text_cen" @click="handreply">10回复</div>
        </div>
        <div class="replybox">
          <span class="allreply" @click="showPopup(item)" @showpop="jh">
            全部10条评论
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
    </div>

    <footer v-if="falsepanl">
      <div class="flex_cen">
        <div class="writeraate" @click="showcontent">写评论...</div>
        <div class="flex_be footicon">
          <div class="xx">
            <img src="../assets/img/xx.png" alt />
            <div>1</div>
          </div>
          <img src="../assets/img/wjx.png" alt @click="Collect(picDetail.id)"  v-if="picDetail.is_collect==true"/>
          <img src="../assets/img/ysc.png" alt @click="Collect(picDetail.id)" style="width: 0.6rem;height: 0.6rem;" v-if="picDetail.is_collect==false"/>
          <img src="../assets/img/fx.png" alt />
        </div>
      </div>
    </footer>
    <div class="silde">
      <articontent v-show="showpanl" @submit="addmment" @canel="canelmmit" />
    </div>
  </div>
</template>

<script>
import articontent from "@/components/articContent.vue";
// import replay from "@/components/replay.vue";
import $ from "jquery";
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  components: {
    articontent,
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  data() {
    return {
      showpanl: false, //评论版
      falsepanl: true,
      comment: [], //评论内容
      show: false,
      picDetail:[],//图纸详情内容
    };
  },
  created() {
      this.handdetail()
  },
  methods: {
    handdetail(){
      request.getInfo({
        id: this.$route.query.id,
          uid: this.userInfor.member_id,
      }).then(res=>{
        console.log(res,'文章百科详情')
        this.picDetail=res.data.detail
      }).catch(() => {})
        .finally(() => {});
    },
    // 收藏
    Collect(num) {
      request
        .getCollect({
          uid: this.userInfor.member_id,
          type: 2,
          object: num,
        })
        .then((res) => {
          console.log(res)
          this.handdetail()
          this.$toast("收藏成功");
        })
        .catch((e) => {
          console.log(e)
          this.$toast("收藏失败");
        })
        .finally(() => {})
    },
    showcontent() {
      this.falsepanl = false;
      this.showpanl = true;
      $(".silde").css({
        bottom: 0,
      });
    },
    // 文章评论分页数据
    getcommentcontent() {
      request
        .getComment({
           uid: this.userInfor.member_id,
           aid: this.$route.query.id,
           page:1
        })
        .then((res) => {
          console.log(res, "评论分页数据");
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 添加评论 评论内容
    addmment(data) {
      request
        .getDoComment({
          uid: this.userInfor.member_id,
          aid: this.$route.query.id,
          content: data,
          type: 1,
        })
        .then((res) => {
          console.log(res, "评论内容", data);
          this.$toast("发表成功");
        })
        .catch(() => {
          this.$toast("发表失败");
        })
        .finally(() => {});
      // let time = new Date();
      // let tY = time.getFullYear();
      // let tM =
      //   time.getMonth() + 1 < 10
      //     ? "0" + (time.getMonth() + 1)
      //     : time.getMonth() + 1;
      // let tD = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      // let th = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
      // let tm =
      //   time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
      // let ts =
      //   time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
      // console.log(tY, tM, tD, th, tm, ts);
      // this.comment.push({
      //   content: data,
      //   name: "陈某某",
      //   TimeY: `${tY}-${tM}-${tD}`,
      //   TimeH: `${th}:${tm}:${ts}`,
      // });
      this.showpanl = false;
      this.falsepanl = true;
    },
    // 评论踩
    handDown(item) {
      console.log(item);
      request.getupdown({
          type:1,
          aid:1,
          uid: this.userInfor.member_id
      }).then(res=>{
          console.log(res,'点赞')
      }).catch(() => {
          this.$toast("点赞失败");
        })
        .finally(() => {});
    },
    // 评论顶
    handUp(item) {
      console.log(item);
      request.getupdown({
          type:2,
          aid:1,
          uid: this.userInfor.member_id
      }).then(res=>{
          console.log(res,'点赞')
      }).catch(() => {
          this.$toast("点赞失败");
        })
        .finally(() => {});
    },
    //监听到了取消评论
    canelmmit() {
      this.showpanl = false;
      this.falsepanl = true;
    },
    handreply() {},
    //评论详情页
    showPopup() {
      this.$router.push({
        path: "/commentDetail",
        query: {
          aid: 1,
        },
      });
    },
    jh() {},
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.buildencyc {
  color: #191919;
  .padding(35, 23, 0, 23);
  font-family: SimSun;
  font-weight: bold;
  .pb(100);
  .mb(182);
  .xx {
    position: relative;
    img {
      vertical-align: middle;
    }
    div {
      background: url("../assets/img/xhd.png") no-repeat;
      background-size: 100% 100%;
      .w(30);
      .h(30);
      color: #fff;
      position: absolute;
      top: 0.05rem;
      .lh(30);
      text-align: center;
      left: 0.3rem;
    }
  }
  .up {
    justify-content: center;
    align-items: center;
    display: inline-flex;
    img {
      .w(31);
      .h(31);
      .mr(8);
    }
  }
  .footicon {
    .w(250);
    img {
      .w(42);
      .h(42);
    }
  }
  h6 {
    .fs(35);

    .lh(52);
  }
  .img1 {
    width: 100%;
    .h(682);
  }
  .p1 {
    .fs(24);
    .lh(41);
    text-indent: 0.4rem;
    .mb(50);
    text-align: justify;
  }
  .p2 {
    .fs(26);
    .lh(41);
    text-align: justify;
  }
  .rate {
    .pt(10);
    .mb(100);
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
}
.silde {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: -999px;
  transition: all 0.3s;
}
footer {
  .h(95);
  .lh(95);
  border-top: 1px solid #7d7d7d;
  border-bottom: 1px solid #7d7d7d;
  position: fixed;
  bottom: 0;
  left: 0;
  .w(750);
  background: #fff;
  > div {
    .mr(48);
    .ml(35);
  }
  .writeraate {
    .h(59);
    background: #dcdcdc;
    color: #707070;
    .fs(27);
    .lh(59);
    .w(283);
    .b-radius(30);
    .mr(140);
    .pl(18);
    box-sizing: border-box;
    font-family: SimSun;
  }
}
</style>