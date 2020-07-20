<template>
  <!-- 文本框 -->
  <div>
    <div class="commentBox">
      <van-field
        v-model="commentText"
        rows="2"
        autosize
        type="textarea"
        placeholder="请输入评论"
        show-word-limit
      />
      <div class="btn">
        <button @click="addComment">发表</button>
        <button @click="canelCommit">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { commentText: "" };
  },
  methods: {
    addComment() {
      if (this.commentText !== "") {
        this.$emit("submit", this.commentText);
        this.commentText = "";
      }
    },
    canelCommit() {
      this.$emit("canel");
      this.commentText = "";
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.commentBox {
  .van-cell {
    background: #eee;
    .w(676);
    .fs(28);
    color: #333;
    .b-radius(15);
  }
  button {
    background: #ff9936;
    color: #fff;
    outline: none;
    border: 0;
    .w(100);
    .lh(50);
    .b-radius(15);
    .mt(10);
  }
  button:nth-of-type(1) {
    .mr(30);
  }
  .btn{
      margin-right:0.8rem;
      text-align: right;
  }
}
</style>