<template>
  <!-- 产品列表 -->
  <div class="productitem flex flex_b">
    <div
      v-for="(item,k) in productitem"
      :key="k"
      class="productitemlist"
      @click.prevent="goprodutDetail(item.id)"
    >
      <img :src="item.cover" alt />
      <div class="padd">
        <p>{{item.title}}</p>
        <span class="baoyou">包邮</span>
        <div class="price">{{item.price}}</div>
        <div class="flex_be people">
          <span>{{item.moods}}人付款</span>
          <div class="flex_cen" @click.stop="JoinCart(item)">
            <van-icon name="shopping-cart-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import { Toast } from "vant";
export default {
  props: {
    productitem: {
      type: Array,
      default: () => [], // es6的箭头函数
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  data() {
    return {
      showpop: false,
      cartnum: 1,
    };
  },
  methods: {
    JoinCart(item) {
      if (!this.token) {
        this.$router.push({
          path: "/register",
        });
        return false;
      } else {
        this.showpop = true;
        request
          .getJoinCart({
            uid: this.userInfor.member_id,
            b_id: item.id,
            num:this.cartnum,
          })
          .then((res) => {
            console.log(res, "加入购物车");
            if (res.code == 2) {
              this.$router.push({
                path: "/register",
              });
              return false;
            } else {
              // Toast.success("添加成功");
              Toast({
                message: "添加成功",
                icon: "success",
              });
            }
          })
          .catch(() => {
            Toast({
              message: "添加成功",
              icon: "fail",
            });
          })
          .finally(() => {});
      }
    },
    goprodutDetail(id) {
      this.$router.push({
        path: "/productDetail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.productitem {
  flex-wrap: wrap;
  .padd {
    .pr(14);
    .pl(14);
    .pb(18);
    margin-top: 0.15rem;
  }
  .productitemlist {
    // box-shadow: 2px 2px 2px #eee;
    // border-radius: 6px;
    overflow: hidden;
    background: #fff;
    .w(347);
    .mt(14);
  }
  img {
    .w(346);
    .h(242);
  }
  p {
    color: #161616;
    .fs(28);
    .lh(37);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .baoyou {
    display: block;
    .w(80);
    .h(26);
    background: #fed8d6;
    .b-radius(13);
    color: #f8311c;
    .fs(20);
    .mt(14);
    .mb(16);
    .lh(30);
    text-align: center;
    .padding(3, 8, 3, 8);
  }
  .price {
    color: #f8311c;
    .fs(30);
    font-family: SimSun;
    font-weight: bold;
    .lh(40);
  }
  .people {
    span {
      color: #979797;
      .fs(24);
      .lh(40);
      font-family: SimSun;
      font-weight: bold;
    }
    div {
      border: 2px solid #ea2d19;
      border-radius: 50%;
      .w(42);
      .h(42);
    }
    .van-icon {
      color: #ea2d19;
      font-size: 0.3rem;
    }
  }
}
</style>        