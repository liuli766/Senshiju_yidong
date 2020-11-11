<template>
  <div>
    <article v-html="content"></article>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  data() {
    return {
      content: "", //协议内容
    };
  },
  created() {
    request
      .getProtocol({
        type: "agreement",
      })
      .then((res) => {
        console.log(res, "用户协议");
        this.content = res.data.content;
      })
      .catch(() => {})
      .finally(() => {});
  },
};
</script>

<style scoped lang="less">
article {
  padding: 0.38rem 0.7rem 0.7rem 0.7rem;
  color: #323232;
  font: 300 0.24rem/0.33rem "";
}
</style>