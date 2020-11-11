<template>
  <!-- 视屏详情页 -->
  <div class="videodetail">
    <div class="video_box">
      <video class="vedio" width="375" controls preload="none"
      :src="picDetail.video" :poster="picDetail.cover"></video>
    </div>
    <!-- 底部评论 -->
    <div class="video_bot">
      <div class="userinfo">
        <img :src="headimg" v-if="token" alt="" />
        <div class="userinfo_r">
          <span v-if="token">{{userInfor.nickname}}</span>
          <span>{{picDetail.view}}</span>
        </div>
      </div>
      <div class="video_title">
        {{picDetail.title}}
      </div>
    </div>

    <footer>
      <div class="flex_cen">
        <div class="writeraate" @click="showcontent">
          <van-icon name="edit" style="font-size: 0.38rem" /><span
            >写评论...</span
          >
        </div>
        <div class="flex_be footicon">
          <div style="margin-right: 0.45rem">
            <van-icon
              name="chat-o"
              :badge="allCommentList.length"
              color="#fff"
              style="margin-top: 0.25rem"
              @click="handbotPop"
            />
          </div>

          <img src="../assets/img/wjx.png" alt class="information"  @click="Collect(picDetail.id)"  v-if="picDetail.is_collect == false" />
          <img src="../assets/img/ysc.png" @click="qxcollect(picDetail.id)" v-if="picDetail.is_collect == true"
          />
        </div>
      </div>
    </footer>
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
      <div class="rate" v-for="(item, k) in allCommentList" :key="k">
        <div class="flex_be">
          <div class="userinfo flex_cen">
            <img :src="item.photo" alt />
            <span>{{ item.nickname }}</span>
          </div>
          <div>
            <span class="up" @click="handUp(item)">
              <img src="../assets/img/up.png" alt />
              {{ item.is_up }}
            </span>
            <span class="up" @click="handDown(item)">
              <img src="../assets/img/down.png" alt />
              {{ item.is_down }}
            </span>
          </div>
        </div>
        <div class="comment">
          <p>{{ item.comment }}</p>
          <div>
            <!-- <span>{{item.TimeY}}</span> -->
            <span>{{ item.comment_time }}</span>
            <div
              class="reply text_cen"
              @click="handreply(item.comment_id)"
              v-if="item.child.length !== 0"
            >
              {{ item.child.length }}回复
            </div>
            <div
              class="reply text_cen"
              @click="handreply(item.comment_id)"
              v-else
            >
              回复
            </div>
          </div>
          <div class="replybox" v-if="item.child.length">
            <div style="max-height: 0.7rem; overflow: hidden">
              <div
                v-for="(child, key) in item.child"
                :key="key"
                class="flex"
                style="margin-bottom: 0.15rem"
              >
                <span class="nicname">{{ child.nickname }}:</span>
                <div class="comm">{{ child.comment }}</div>
              </div>
            </div>

            <span
              class="allreply"
              @click="showPopup(item.comment_id)"
              @showpop="jh"
              style="display: flex; align-items: center"
            >
              全部{{ item.child.length }}条评论
              <van-icon name="arrow" />
            </span>
          </div>
          <div v-else></div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="show_comment" position="bottom" :style="{ height: '20%' }">
          <articontent  @submit="addmment" @canel="canelmmit" />
    </van-popup>
  </div>
</template>

<script>
import articontent from "@/components/articContent.vue";
import $ from "jquery";
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  components: {
    articontent,
  },
  data() {
    return {
      allCommentList: [], //展示所有评论数据
      show: false, //底部弹出层
      CommentDetail: [], //全部评论详情
      commentText: "", //评论内容
      picDetail:[],//视频文章内容
      type: 1,
      pulicid: "",
      show_comment:false
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      headimg: (state) => state.headimg,
    }),
  },
  created() {
    this.handdetail();
    this.commentList();
    console.log(this.userInfor)
  },
  methods: {

    showcontent() {
       if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      }
      //底部评论样式
      this.show_comment=true
      $(".silde").css({
        bottom: 0,
      });
      this.type = 1;
    },
     //监听到了取消评论
    canelmmit() {
      this.show_comment = false;
    },
    // 添加评论 评论内容
    addmment(data) {
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      }
      let aid = "";
      if (this.type == 1) {
        aid = this.$route.query.id;
      } else {
        aid = this.pulicid;
      }
      console.log(this.pulicid);
      request
        .getDoComment({
          uid: this.userInfor.member_id,
          aid,
          content: data,
          type: this.type,
        })
        .then((res) => {
          console.log(res, "评论内容", data);
          this.$toast("发表成功");
          if (this.type == 1) {
            this.commentList();
          } else if (this.type == 2) {
            this.getcommentcontent();
          }
        })
        .catch(() => {
          this.$toast("发表失败");
        })
        .finally(() => {});
        this.show_comment=false
    },
     // 评论列表
    commentList() {
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      } else {
        request
          .getComment({
            uid: this.userInfor.member_id,
            aid: this.$route.query.id,
            page: 1,
          })
          .then((res) => {
            console.log(res, "文章评论列表");
            this.allCommentList = res.data;
          })
          .catch(() => {})
          .finally(() => {});
      }
    },
     // 文章评论分页数据
    getcommentcontent() {
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      }
      request
        .getComment({
          uid: this.userInfor.member_id,
          aid: this.$route.query.id,
          page: 1,
        })
        .then((res) => {
          console.log(res, "评论分页数据");
          this.CommentContent = res.data;
        })
        .catch(() => {})
        .finally(() => {});
    },
      // 收藏
    Collect(num) {
      if (!this.token) {
        console.log(1);
        this.$router.push({
          path: "/login",
        });
        return false;
      } else {
        request
          .getCollect({
            uid: this.userInfor.member_id,
            type: 2,
            object: num,
          })
          .then((res) => {
            console.log(res);
            this.handdetail();
            this.$toast("收藏成功");
          })
          .catch((e) => {
            console.log(e);
            this.$toast("收藏失败");
          })
          .finally(() => {});
      }
    },
      //取消收藏
    qxcollect(idx) {
      request
        .getCancelcollect({
          uid: this.userInfor.member_id,
          c_id: idx,
          type: 2,
        })
        .then((res) => {
          this.handdetail();
          console.log(res, "取消收藏");
          this.$toast("取消成功");
        })
        .catch(() => {
          this.$toast("取消失败");
        })
        .finally(() => {});
    },
    // 评论踩
    handDown(item) {
      request
        .getupdown({
          type: 2,
          aid: item.comment_id,
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          if (res.code == 0) {
            item.is_down++;
            console.log(res, "点赞");
            // this.$toast("点赞成功");
          }
        })
        .catch(() => {
          // this.$toast("点赞失败");
        })
        .finally(() => {});
    },
    // 评论顶
    handUp(item) {
      request
        .getupdown({
          type: 1,
          aid: item.comment_id,
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          if (res.code == 0) {
            item.is_up++;
            console.log(res, "点赞");
            this.$toast("点赞成功");
          }
        })
        .catch(() => {
          // this.$toast("点赞失败");
        })
        .finally(() => {});
    },
     //评论详情页
    showPopup(id) {
      console.log(this.pulicid);
      this.$router.push({
        path: "/commentDetail",
        query: {
          aid: id,
        },
      });
    },
    handbotPop() {//全部评论弹出层
      this.show = true;
    },
    handdetail() { //视频详情
      if (!this.token) {
        request
          .getInfo({
            id: this.$route.query.id,
          })
          .then((res) => {
            console.log(res, "文章百科详情");
            this.picDetail = res.data.detail;
          })
          .catch(() => {})
          .finally(() => {});
      } else {
        request
          .getInfo({
            id: this.$route.query.id,
            uid: this.userInfor.member_id,
          })
          .then((res) => {
            console.log(res, "文章百科详情");
            this.picDetail = res.data.detail;
          })
          .catch(() => {})
          .finally(() => {});
      }
    },
  },
};
</script>

<style  lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.videodetail {
  background-color: #1f1f1f;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.silde {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: -999px;
  transition: all 0.3s;
  filter: gray;
}
.vedio {
  width: 100%;
  height: 100%;
  margin: 2.8rem 0 1.3rem 0;
  background: #000;
}
.userinfo {
  display: flex;
  color: #fff;
  margin-bottom: 0.12rem;
}
.userinfo img {
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.userinfo_r {
  display: flex;
  flex-direction: column;
}
.userinfo_r span:nth-of-type(1) {
  font-size: 0.26rem;
}
.userinfo_r span:nth-of-type(2) {
  color: #6f6f6f;
  margin-top: 0.08rem;
}
.video_title {
  color: #6f6f6f;
  font-size: 0.26rem;
  line-height: 0.38rem;
  margin-bottom: 1rem;
}
footer {
  color: #fff;
}
.video_bot {
  position: fixed;
  bottom: 0;
  left: 0.3rem;
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
  > div {
    .mr(48);
    .ml(35);
  }
  .writeraate {
    margin-left: 0.1rem;
    flex: 1;
    margin-right: 0.28rem;
    .h(59);
    background: #474747;
    color: #707070;
    .fs(27);
    .lh(59);
    .w(283);
    .b-radius(30);
    .pl(18);
    box-sizing: border-box;
    font-family: SimSun;
    display: flex;
    align-items: center;
  }
}
.information {
  width: 0.42rem;
  height: 0.42rem;
}
.commentBox {
  .van-cell {
    background: #eee;
    .w(676);
    .fs(28);
    color: #333;
    .b-radius(8);
    margin: 0.15rem;
  }
  button {
    background: #ff9936;
    color: #fff;
    outline: none;
    border: 0;
    .w(100);
    .lh(50);
    .b-radius(10);
    .mt(10);
  }
  button:nth-of-type(1) {
    .mr(30);
  }
  .btn {
    margin-right: 0.8rem;
    text-align: right;
  }
}
// 全部评论
.rate {
  .pt(10);
  .mb(20);
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
    .h(140);
    .w(620);
    .mt(25);
    .b-radius(10);
    .padding(12, 14);
    box-sizing: border-box;
    overflow: hidden;
    .nicname {
      font: 400 0.26rem/1 "";
      color: #4c78b3;
    }
    .comm {
      margin-left: 0;
    }
    .allreply {
      color: #4c78b3;
      .fs(28);
      .lh(47);
    }
  }
}
</style>
<style >
.van-icon-chat-o::before {
  font-size: 0.5rem;
}
</style>