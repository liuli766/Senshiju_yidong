<template>
  <!-- 物流信息 -->
  <div class="logisticsInfo">
    <div class="flex_col company">
      <!-- <span>承运公司： 申通快递</span> -->
      <div class="fuzhi">
        <span>订单编号： {{ this.$route.query.ordernum }}</span>
        <span class="copy" @click="copy($event,ordernum)">复制</span>
      </div>
      <div class="fuzhi" style="margin-top:0.46rem">
        <span>快递单号： {{ this.$route.query.kuaidi }}</span>
        <span class="copy" @click="copy($event,kuaidi)">复制</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import request from "@/request.js";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      orderlist: [],
      ordernum:'',
      kuaidi:''
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  created() {
    this.ordernum=this.$route.query.ordernum
    this.kuaidi =this.$route.query.kuaidi
  },
  methods: {
    copy(e, text) {
      var clipboard = new Clipboard(e.target, { text: () => text });
      clipboard.on("success", () => {
        this.$toast("复制成功");
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        this.$toast("复制失败");
        clipboard.destroy();
      });
    },
    onClickLeft() {
      this.$router.push({
        path: `drawingOrder?navactivechoseid=0`,
      });
      // this.$store.commit("gonav", 2);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.fuzhi {
  display: flex;
  align-items: center;
  margin-top: 1.35rem;
  justify-content: space-between;
}
.copy {
  font-size: 0.27rem;
  color: #1153a4;
  font-family: "Adobe Heiti Std";
  border: 1px solid #1153a4;
  display: inline-block;
  width: 0.72rem;
  height:0.36rem;
  text-align: center;
  line-height: 0.36rem;
  border-radius: 0.06rem;
}
.nav_bar {
  .van-icon {
    .fs(30);
  }
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  span {
    .ml(34);
  }
}
.company {
  .padding(0, 30);
  .pb(45);
  border-bottom: 0.08rem solid #f1f1f1;
}
main {
  .padding(39, 30);
  ul {
    li {
      i {
        .mr(18);
      }
      span {
        display: block;
        .fs(30);
        .lh(40);
      }
      span:nth-of-type(1) {
        .mb(29);
      }
    }
  }
}
</style>