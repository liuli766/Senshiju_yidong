<template>
  <!-- 设计团队-->
  <div class="buildLibrary">
    <img src="../assets/img/sjtd.jpg" class="img" alt />
    <!-- 村墅人家设计团队村墅人家设计团队 -->
    <div class="text_cen designer">
      <h4>村墅人家设计团队</h4>
      <p>introduction of designer</p>
      <div class="line"></div>
      <p>更加专业·更加精细化·满足高品质设计需求</p>
    </div>
    <!-- 设计师介绍 -->
    <main>
      <div class="flex info" v-for="(item, k) in teamList" :key="k">
        <img :src="item.cover" alt />
        <div class="rbox flex flex_col flex_b">
          <div>
            <div class="top flex_be">
              <div class="rname flex">
                <span>{{ item.name }}</span>
                <span>{{ item.position }}</span>
              </div>
              <div class="ldetail flex" @click="handdetai(item.id)">
                <span>查看详情</span>
                <span class="span flex_cen">···</span>
              </div>
            </div>
            <p class="two-wrap">{{ item.intro }}</p>
          </div>
          <div>
            <span class="jx">作品精选</span>
            <div class="piclist flex_ar">
              <img
                :src="child"
                alt
                v-for="(child, idx) in item.works.slice(0,3)"
                :key="idx"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <scroll :onBottom="onBottom"></scroll>
  </div>
</template>

<script>
import request from "@/request.js";
import scroll from "@/components/onBottom.vue";
export default {
  name: "buildLibrary",
  components: {
    scroll,
  },
  data() {
    return {
      teamList: [],
      page:1
    };
  },
  created() {
   this.getdatd();
  },
  methods: {
    onBottom() {
      this.page++;
      this.getdata();
    },
    getdatd(){
       request
      .getTeam({
        page: this.page,
      })
      .then((res) => {
        console.log(res, "设计团队");
       
        if (this.page == 1) {
              this.teamList = res.data;
          }

          if (this.page > 1) {
            this.teamList = [...this.teamList, ...res.data];
          }

          if (res.data.length == 0) {
            this.$toast("没有更多数据了");
          }
      })
      .catch(() => {})
      .finally(() => {});
    },
    //设计师详情
    handdetai(num) {
      this.$router.push({
        path: "/desigerDetail",
        query: {
          id: num,
        },
      });
    },
  },
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
          text-align: center;
          line-height: 0.28rem;
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
