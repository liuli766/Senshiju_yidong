<template>
  <div>
    <div class="business">
      <div class="nav_bar flex">
        <van-icon name="cross" @click="go" />
        <span>回复详情</span>
      </div>
    </div>

    <!-- 主用户 -->
    <div class="mainuser">
      <div class="flex_be">
        <div class="userinfo flex_cen">
          <img :src="CommentDetail.photo" alt />
          <span>{{ CommentDetail.nickname }}</span>
        </div>
        <div>
          <span class="up">
            <img src="../assets/img/up.png" @click="handUp" alt />
            {{ CommentDetail.is_up }}
          </span>
          <span class="up">
            <img src="../assets/img/down.png" @click="handDown" alt />
            {{ CommentDetail.is_down }}
          </span>
        </div>
      </div>
      <p>{{ CommentDetail.comment }}</p>
      <div class="time"></div>
    </div>

    <!-- 他人回复 -->
    <div class="otheruser">
      <p class="allreply">全部回复 &nbsp; &nbsp; {{ CommentDetail.num }}</p>
      <div class="mainuser" v-for="(item, k) in CommentDetail.child" :key="k">
        <div class="flex_be">
          <div class="userinfo flex_cen">
            <img :src="item.photo" alt />
            <span>{{ item.nickname }}</span>
          </div>
          <div>
            <span class="up">
              <img src="../assets/img/up.png" alt @click="handUp(item)" />
              {{ item.is_up }}
            </span>
            <span class="up">
              <img src="../assets/img/down.png" alt @click="handDown(item)" />
              {{ item.is_down }}
            </span>
          </div>
        </div>
        <p>{{ item.comment }}</p>
        <div class="time">
          <span>{{ item.comment_time }}</span
          >&nbsp; &nbsp; &nbsp;
          <span @click="handreplay">回复</span>
        </div>
      </div>
    </div>
    <!-- 回复组件 -->
    <van-popup v-model="show_comment" position="bottom" :style="{ height: '20%' }">
          <articontent  @submit="addmment" @canel="canelmmit" />
    </van-popup>
    <!-- 底部评论框 -->
    <footer  @click="showcontent">
      <van-icon name="edit" class="edit" />
      <input type="text" placeholder="留下一条你的热评" disabled />
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import $ from "jquery";
import articontent from "@/components/articContent.vue";
export default {
  components: {
    articontent,
  },
  data() {
    return {
      downNum: 0,
      upNum: 0,
      allCommentList: [], //评论列表
      CommentDetail: [], //评论详情
      show_comment:false,
      showcComent:true
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  created() {
    console.log(this.$route.query);
    this.commentList();
    this.getPageComment();
  },
  methods: {
    // 评论列表
    commentList() {
      request
        .getComment({
          uid: this.userInfor.member_id,
          aid: this.$route.query.aid,
          page: 1,
        })
        .then((res) => {
          console.log(res, "文章评论列表");
          this.allCommentList = res.data;
        })
        .catch(() => {})
        .finally(() => {});
    },
    //   评论详情
    getPageComment() {
      request
        .getCommentDetail({
          aid: this.$route.query.aid,
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          console.log(res, "文章评论详情");
          this.CommentDetail = res.data;
        })
        .catch(() => {})
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
          }
        });
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
        });
    },

    //   监听到了添加评论
    addmment(data) {
      console.log(data);
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      }
      request
        .getDoComment({
          uid: this.userInfor.member_id,
          aid: this.$route.query.aid,
          content: data,
          type: 2,
        })
        .then((res) => {
          console.log(res, "评论内容", data);
          this.$toast("发表成功");
          this.getPageComment();
        })
        .catch(() => {
          this.$toast("发表失败");
        })
        .finally(() => {});
      this.show_comment = false;
    },

    //监听到了取消评论
    canelmmit() {
     this.show_comment = false;
    },
    //   回复
    showcontent() {
      this.show_comment=true
      console.log(this.show_comment)
      $(".silde").css({
        bottom: 0,
      });
    },
    handreplay() {
      this.$router.push({
        path: "/commentDetail",
        query: {
          aid: 2,
        },
      });
    },
    go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.nav_bar {
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  .mb(18);
  span {
    .ml(265);
  }
}
.mainuser {
  margin: 0 0.32rem 0.22rem 0.32rem;
  padding-bottom: 0.22rem;
  border-bottom: 1px dashed #929292;
  .userinfo {
    img {
      .w(62);
      .h(62);
      border-radius: 50%;
      .mr(18);
    }
  }
  .up {
    margin-left: 0.28rem;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    img {
      .w(31);
      .h(31);
      .mr(8);
    }
  }
  p {
    margin: 0.36rem 0;
    font: 400 0.28rem/0.48rem "";
    color: #2f2f2f;
  }
  .time {
    color: #898989;
    font: 400 0.22rem/1 "";
  }
}
.otheruser {
  padding: 0.25rem;
  .allreply {
    .mb(34);
  }
  .mainuser {
    border-bottom: 0;
  }
}
footer {
  width: 100%;
  height: 0.95rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #7d7d7d;
  padding: 0.18rem 0.32rem;
  box-sizing: border-box;
  input {
    .w(600);
    .h(60);
    border-radius: 0.3rem;
    background: #dcdcdc;
    padding-left: 0.84rem;
  }
}
.silde {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: -999px;
  transition: all 0.3s;
  margin-left: 0.4rem;
}
</style>
<style lang="css">
footer .edit {
  position: absolute;
  left: 0.56rem;
  top: 0.3rem;
  font-size: 0.3rem;
}
</style>