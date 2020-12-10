<template>
  <!-- 图纸订单 -->
  <div class="drawingorder">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>图纸订单</span>
    </div>
    <van-search v-model="seachdata" placeholder="请输入订单号或商品名称" @change="handserch" />
    <nav>
      <span
        v-for="(item,k) in navlist"
        :key="k"
        @click="swichChose(k)"
        :class="{activ_chose:navactivechoseid==k}"
      >{{item}}</span>
    </nav>
    <orderlist :orderli="orderlist" v-if="navactivechoseid==0||navid==0" :navid="0" />
    <orderlist :orderli="orderlist1" v-if="navactivechoseid==1|| navid==1" :navid="1" />
    <orderlist :orderli="orderlist2" v-if="navactivechoseid==2 ||navid==2" :navid="2" />
    <scroll :onBottom="onBottom"></scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import orderlist from "@/components/orderlist.vue";
import scroll from "@/components/onBottom.vue";
import request from "@/request.js";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  components: {
    orderlist,
    scroll,
  },
  data() {
    return {
      seachdata: "",
      navlist: ["待付款", "待发货", "待收货"],
      navid: 0,
      navactivechoseid: 0,
      orderlist: [],
      orderlist1: [],
      orderlist2: [],
      page:1
    };
  },
  watch: {
    orderlist2() {
      this.swichChose(this.navactivechoseid);
    },
    seachdata() {
      this.handserch();
    },
    
  },
  created() {
    this.navactivechoseid = this.$route.query.navactivechoseid;
  },
  mounted() {
    this.page=1
    this.orderlist=[]
    this.orderlist1=[]
    this.orderlist2=[]
    this.myorder()
  },
  methods: {
    onBottom() {
      this.page++;
      this.myorder()
    },
    handserch() {
      request.getOrderList({
        uid: this.userInfor.member_id,
        search: this.seachdata,
      }).then(res=>{
        console.log(res,'搜索订单')
        this.myorder(1)
      }).catch(() => {
          this.vertical = false;
        })
        .finally(() => {
          this.vertical = false;
        });
    },
    // 我的订单
    myorder() {
      request
        .getOrderList({
          uid: this.userInfor.member_id,
          status:this.navid+1,
          page: this.page,
        })
        .then((res) => {
          this.vertical = true;
          
          
          if (this.page == 1) {
            this.orderlist = res.data;
            this.orderlist1 = res.data;
            this.orderlist2 = res.data;
          }

          if (this.page > 1) {
            this.orderlist = [...this.orderlist, ...res.data];
            this.orderlist1 = [...this.orderlist, ...res.data];
            this.orderlist2 = [...this.orderlist, ...res.data];
          }
          this.orderlist = this.orderlist.filter((item) => item.status == 1); //待付款
          this.orderlist1 = this.orderlist1.filter((item) => item.status == 2); //待发货
          console.log(this.orderlist1, "我的订单");
          this.orderlist2 = this.orderlist2.filter((item) => item.status == 3); //待付款
          if (res.data.length == 0) {
            this.$toast("没有更多数据了");
          }

        })
        .catch(() => {
          this.vertical = false;
        })
        .finally(() => {
          this.vertical = false;
        });
    },
    swichChose(k) {
      this.navid = k;
      this.navactivechoseid = k;
      this.$store.commit("gonav", this.navactivechoseid);
      this.page=1;
      this.orderlist=[]
      this.orderlist1=[]
      this.orderlist2=[]
      this.myorder()
    },

    go() {
      this.$router.push({
        path: "/mine",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.drawingorder {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  .mb(100);
  overflow: scroll;
  overflow-x: hidden;
}

.nav_bar {
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  span {
    .ml(249);
  }
}
nav {
  background: @base-header-color;
  .padding(0, 30);
  .lh(89);
  .mb(13);
  span {
    .mr(66);
  }
  .activ_chose {
    color: #f2a930;
    border-bottom: 1px solid #f2a930;
  }
}
</style>