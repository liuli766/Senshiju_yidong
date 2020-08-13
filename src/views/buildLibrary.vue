<template>
<!-- 设计团队-->
  <div class="buildLibrary">
    <img src="../assets/img/sjtd.png" class="img" alt />
    <!-- 村墅人家设计团队村墅人家设计团队 -->
    <div class="text_cen designer">
      <h4>村墅人家设计团队</h4>
      <p>introduction of designer</p>
      <div class="line"></div>
      <p>更加专业·更加精细化·满足高品质设计需求</p>
    </div>
    <!-- 设计师介绍 -->
    <main>
      <div class="flex info" v-for="(item,k) in teamList" :key="k">
        <img :src="item.cover" alt />
        <div class="rbox flex flex_col flex_b">
          <div>
            <div class="top flex_be">
              <div class="rname flex">
                <span>{{item.name}}</span>
                <span>{{item.position}}</span>
              </div>
              <div class="ldetail flex" @click="handdetai(item.id)">
                <span>查看详情</span>
                <span class="span flex_cen">···</span>
              </div>
            </div>
            <p class="two-wrap">{{item.intro}}</p>
          </div>
          <div>
            <span class="jx">作品精选</span>
            <div class="piclist flex_ar">
              <img :src="child" alt v-for="(child,idx) in item.works" :key="idx" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import request from "@/request.js";
export default {
  name: "buildLibrary",
  data() {
    return {
      teamList:[]
    }
  },
  created() {
    request
      .getTeam({
        page:1
      })
      .then((res) => {
        console.log(res, "设计团队");
        this.teamList=res.data
      })
      .catch(() => {})
      .finally(() => {});
  },
  methods: {
    //设计师详情
    handdetai(num) {
      console.log(num)
      this.$router.push({
        path: "/desigerDetail",
        query:{
          id:num
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.img {
  width: 100%;
  .h(282.3);
}
.designer {
  h4 {
    .font(bold, 36, "Microsoft YaHei");
    .mt(109);
  }
  p:nth-of-type(1) {
    .fs(17);
    color: rgba(48, 48, 48, 1);
    .mt(11);
  }
  .line {
    .w(359);
    height: 1px;
    background: rgba(0, 0, 0, 1);
    margin: 0 auto;
    .mt(6);
    .mb(16);
  }
  p:nth-of-type(2) {
    .mb(43);
    .fs(17);
    color: #000;
  }
}
main {
  background: @body-bg-color;
  .pr(23);
  .pl(23);
  .pt(40);
  .info {
    .b-radius(10);
    .padding(30, 16, 57, 17);
    box-shadow: 0 8px 5px #eee;
    background: #fff;
    .mb(48);
    .jx {
      .mb(19);
    }
    > img {
      .w(190);
      .h(285);
    }
    .rbox {
      .w(460);
      .ml(37);
      span {
        .fs(17);
        color: #000;
        display: block;
      }
      .rname {
        span:nth-of-type(1) {
          .fs(24);
          .mr(24);
        }
        span:nth-of-type(2) {
          color: #6e6e6e;
          .fs(17);
        }
      }
      .ldetail {
        .fs(14);
        color: #6e6e6e;
        .span {
          .w(28);
          .h(28);
          .ml(11);
          box-sizing: border-box;
          border-radius: 50%;
          border: 1px solid #75716e;
        }
      }
      p {
        .mt(14);
        .fs(17);
        color: #6e6e6e;
        .lh(28);
      }

      .piclist {
        img {
          .w(139);
          .h(132);
        }
      }
    }
  }
}
</style>
