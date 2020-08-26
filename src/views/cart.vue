<template>
  <!-- 购物车 -->
  <div class="cart">
    <!-- 购物车 -->
    <div class="business">
      <div class="nav_bar flex">
        <van-icon name="arrow-left" @click="go" />
        <span>购物车</span>
      </div>
    </div>
    <!-- 管理 -->
    <div class="admin flex_be">
      <div class="adminl">
        <span class="xyq"></span>
        <span>图纸</span>
      </div>
      <div>
        <img class="cl" src="../assets/img/qq.png" alt />
        <span>管理</span>
      </div>
    </div>
    <!-- 购物车条数 -->
    <div v-if="cartData.length==0" style="padding-left:0.3rem">购物车空空如也</div>
    <div class="itemlist flex" v-for="(item,k) in cartData" :key="k" v-else>
      <span @click="cartCheck(item,k)"  :class="[item.cheakG==true?'gg':'ggh']"><!-- :class="{gg:item.cheakG=='true'}"-->
        <van-icon name="success" />
      </span>
      <img :src="item.cover" alt />
      <div>
        <p>{{item.title}}</p>
        <div class="price flex_be">
          <span>￥{{item.price}}</span>
          <div class="nun flex_ar">
            <span>-</span>
            <span>{{item.num}}</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="flex flex_be">
      <div class="ggcheck">
        <span class="gg" v-if="allChecked" @click="handleChecked">
          <van-icon name="success" />
        </span>
        <span class="ggh" v-else @click="handleChecked"></span>
        <span>全选</span>
      </div>
      <div class="flex flex_col price">
        <!-- <span>¥{{totalPrice}}</span> -->
        <span>含运费</span>
      </div>
      <!-- <div class="jiesuan" @click="goOrderpay">结算（{{totalNum}}）</div> -->
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import request from "@/request.js";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
    ...mapGetters({
      // cartData: "addShopList",
      // totalNum: "totalNum",
      // totalPrice: "totalPrice",
    }),
  },
  watch: {},
  data() {
    return {
      allChecked: false, //是否全选
      allSelectedGoods: [], //存放被选择的数据
      cartlist: [],
      cartData: [], //购物车信息
      num: 0,
    };
  },
  created() {
    this.cartlist = this.$store.getters.addShopList;
    console.log(this.$store.state.cartList);
    request
      .getCarts({
        uid: this.userInfor.member_id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {})
      .finally(() => {});
    this.CartInfo();
  },
  methods: {
    // 购物车信息
    CartInfo() {
      request
        .getCarts({
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          console.log(res, "购物车信息");
          
          for (let i = 0; i < res.data.length; i++) {
            let item = res.data[i];
            item.cheakG = false
          }
          console.log(res);
          this.cartData = res.data;
          console.log(this.cartData);
        })
        .catch(() => {
          // this.$toast("添加失败");
        })
        .finally(() => {});
    },
    goBuy() {
      this.$router.push({
        path: "/orderpay",
      });
    },
    // 单选
    cartCheck(item,k) {
      console.log(k);
      this.cartData[k].cheakG=!this.cartData[k].cheakG
      // item.cheakG = !item.cheakG;
      console.log(this.cartData[k].cheakG);
      if (item.cheakG) {
        this.allSelectedGoods.push(item.id);

        [...this.allSelectedGoods] = new Set(this.allSelectedGoods); //去重
        for (let i = 0; i < this.allSelectedGoods.length; i++) {
          if (this.cartData.length === this.allSelectedGoods.length) {
            this.allChecked = true;
            break;
          }
        }
      } else {
        this.allSelectedGoods.pop(item.id);
        this.allChecked = false;
      }
      console.log(this.allSelectedGoods);
    },

    // 全选
    handleChecked() {
      //全选
      if (this.allChecked == false) {
        for (let i = 0; i < this.cartData.length; i++) {
          let item = this.cartData[i];
          item.cheakG = true;
        }
      } else {
        //取消全选
        for (let i = 0; i < this.cartData.length; i++) {
          let item = this.cartData[i];
          item.cheakG = false;
        }
      }
      this.allChecked = !this.allChecked;
    },
    goOrderpay() {
      this.$router.push({
        path: "/orderpay",
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
.cart {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: scroll;
}
.cart {
  // background: #aeaeae;
  .w(750);
  // .pt(34);
  .cartfff {
    background: #fff;
    border-radius: 0.3rem 0.3rem 0 0;
    .pl(29);
    .pr(29);
    button {
      .w(691);
      .h(87);
      .b-radius(44);
      border: 0;
      outline: none;
      background: #ff2913;
      color: #fff;
      .fs(30);
      font-family: SimHei;
      font-weight: bold;
    }
  }

  .cartbox {
    .num {
      color: #aeaeae;
      .fs(30);
    }
    .stepper {
      .mt(28);
      .mb(32);
    }
  }
  .cartlist {
    .pt(34);
    .pb(14);
    border-bottom: 1px solid #f1f1f1;
    img {
      .w(148);
      .h(148);
      .mr(33);
    }
    .red {
      .fs(40);
      font-weight: bold;
      font-weight: bold;
      color: #fd3723;
      .lh(44);
      .mt(16);
    }
  }
}
.admin {
  box-sizing: border-box;
  .mb(19);
  .w(710);
  .h(108);
  .padding(0,30);
  border-radius: 0.1rem;
  background: #fff;
  .xyq {
    display: inline-block;
    .w(20);
    .h(20);
    border-radius: 50%;
    border: 1px solid #ff2913;
    .mr(10);
  }
  .cl {
    .w(24);
    .h(24);
    .mr(13);
  }
  .mr(18);
  .ml(20);
}
.itemlist {
  background: @base-header-color;
  .padding(30, 42, 30, 30);
  .margin(0, 20);
  align-items: center;
  .b-radius(10);
  .fs(28);
  .mb(18);
  img {
    .w(158);
    .h(157);
    .mr(19);
  }
  p {
    .mb(61);
  }
  .price {
    span {
      color: #fd3723;
    }
    .van-stepper {
      .padding(6,8);
      border: 1px solid #dcdcdc;
      .b-radius(29);
    }
  }
}
footer {
  border-top: 1px solid #b7beb6;
  position: fixed;
  width: 100%;
  background: #fff;
  width: 100%;
  align-items: center;
  .h(93);
  bottom: 0;
  left: 0;
  .pl(30);
  .ggcheck {
    span:nth-of-type(2) {
      color: #777777;
      .fs(30);
    }
    display: flex;
    align-items: center;
  }
  .jiesuan {
    .w(200);
    height: 100%;
    background: #fa3d29;
    color: #fff;
    .fs(28);
    text-align: center;
    .lh(93);
  }
  .price {
    .ml(272);
    .mr(32);
    span:nth-of-type(1) {
      color: #f93420;
      .fs(32);
    }
    span:nth-of-type(2) {
      color: #989898;
      .fs(24);
      .mt(11);
    }
  }
}
.itemlist .price .nun {
  .w(166);
  .h(58);
  border-radius: 0.29rem;
  border: 1px solid #eee;
  span {
    .w(46);
    .h(46);
    background: #f5f5f5;
    color: #333;
    .fs(20);
    display: inline-block;
    .lh(46);
    text-align: center;
    border-radius: 50%;
  }
  span:nth-of-type(2) {
    background: #fff;
  }
}
.gg {
  display: inline-flex;
  .mr(17);
  .w(43);
  .h(43);
  border: 1px solid #eaeaea;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: #fa3d29 !important;
  color: #fff;
}
.ggh {
  background: #fff;
  display: inline-flex;
  .mr(17);
  .w(43);
  .h(43);
  border: 1px solid #eaeaea;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
<style lang="css">
.itemlist .van-stepper--round .van-stepper__minus {
  color: #333;
  background: #f5f5f5;
  border: 0;
}
.itemlist .van-stepper--round .van-stepper__plus {
  color: #333;
  background: #f5f5f5;
  border: 0;
}
</style>