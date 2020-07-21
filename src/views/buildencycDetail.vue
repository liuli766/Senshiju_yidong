<template>
  <!-- 建房百科 详情页-->
  <div class="buildencyc">
    <h6>欧式别墅怎么设计好看，两层庭s欧式别墅怎么设计好看，两层庭院</h6>
    <img src="../assets/item.png" class="img1" alt />
    <p
      class="p1"
    >有时就想人这一生挺无聊的，无非是为了车子，房子， 票子，女子和孩子，其中房子是中国人的头等大事，有钱了 要么在城市买房，要么在农村建房，如果你在农村也有宅基 地，一定要回家建房， 一家人住一个大院子。农村小庭院 怎么设计好看?</p>
    <p class="p2">下面为大家分享40万两层简欧景观庭院简单实用，如 果你也喜欢，可以咨询客服定制设计哦。</p>
    <div class="rate" v-for="(item,k) in comment" :key="k">
      <div class="flex_be">
        <div class="userinfo flex_cen">
          <img src="../assets/item.png" alt />
          <span>{{item.name}}</span>
        </div>
        <div>
          <span>
            <van-icon name="good-job-o" />0
          </span>
          <span>
            <van-icon name="good-job-o" />0
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
          <span class="allreply" @click="showPopup" @showpop='jh'>
            全部10条评论
            <van-icon name="arrow" />
          </span>
        </div>
        
      </div>
    </div>

    <footer v-if="falsepanl">
      <div class="flex_be">
        <div class="writeraate" @click="showcontent">写评论...</div>
        <div>
          <van-icon name="star-o" />
          <van-icon name="star-o" />
          <van-icon name="star-o" />
        </div>
      </div>
    </footer>
    <div class="silde">
      <articontent v-show="showpanl" @submit="addmment" @canel="canelmmit" />
    </div>
     <van-popup v-model="show" position="bottom" :style="{ height: '60%' }"><replay /></van-popup>
  </div>
</template>

<script>
import articontent from "@/components/articContent.vue";
import replay from "@/components/replay.vue";
import $ from "jquery";
export default {
  components: {
    articontent,
    replay
  },
  data() {
    return {
      showpanl: false, //评论版
      falsepanl: true,
      comment: [], //评论内容
      show: false
    };
  },
  methods: {
    showcontent() {
      this.falsepanl = false;
      this.showpanl = true;
      $(".silde").css({
        bottom: 0
      });
    },
    // 添加评论
    addmment(data) {
      let time = new Date();
      let tY = time.getFullYear();
      let tM =
        time.getMonth() + 1 < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1;
      let tD = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      let th = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
      let tm =
        time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
      let ts =
        time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
      console.log(tY, tM, tD, th, tm, ts);
      this.comment.push({
        content: data,
        name: "陈某某",
        TimeY: `${tY}-${tM}-${tD}`,
        TimeH: `${th}:${tm}:${ts}`
      });
      this.showpanl = false;
      this.falsepanl = true;
    },
    //监听到了取消评论
    canelmmit() {
      // this.type = 0;
    },
    handreply() {},
    showPopup() {
      //评论详情页
      console.log(1);
      
      this.show = true;
    },
    jh(){

    }
  }
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
    .mb(1rem);
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
  transition: all 0.8s;
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
    .mr(16);
    .pl(18);
    box-sizing: border-box;
    font-family: SimSun;
  }
}
</style>