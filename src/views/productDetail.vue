<template>
  <!-- 商品详情页 -->
  <div class="productdetail">
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,k) in ProDetail.imgs" :key="k">
        <img :src="item" alt />
      </van-swipe-item>
      <template #indicator>
        <!-- <div class="custom-indicator text_cen">{{ current + 1 }}/{{ProDetail.imgs.length}}</div> -->
      </template>
    </van-swipe>
    <!-- 价格 -->
    <div class="price">
      <span>¥{{ProDetail.price}}</span>
      <span></span>
    </div>
    <!-- 简介 -->
    <div class="sharebox">
      <p class="title">{{ProDetail.title}}</p>
      <!-- <div class="share flex_cen">
        <img src="../assets/img/share.png" alt />
        <span>分享</span>
      </div> -->
    </div>

    <!-- 发货 -->
    <div class="flex_be goods">
      <div>
        发货：
        <span>四川成都</span> | 快递：
        <span>免运费</span>
      </div>
      <div>月销：{{ProDetail.month_sale}}</div>
    </div>
    <!-- 浏览量 -->
    <div class="views flex_be">
      <div>
        <img src="../assets/img/1.png" alt />
        <img src="../assets/img/1.png" alt />
      </div>
      <div>{{ProDetail.moods}}人在逛</div>
    </div>
    <!-- 服务 -->
    <div class="serves flex_be" @click="showPopup">
      <div>
        <span>服务</span>
        <span>付款后48小时内发货</span>
      </div>
      <van-icon name="arrow" />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '68%' }">
      <div class="pop">
        <div class="basics text_cen">基础服务</div>
        <van-checkbox-group v-model="result" ref="checkboxGroup" @change="handchange" disabled>
          <van-checkbox name="a" icon-size="0.3rem" checked-color="#000" class="span1">
            <span>付款后48小时内发货</span>
          </van-checkbox>
          <van-checkbox name="b" icon-size="0.3rem" checked-color="#000" class="span2">
            <span>不支持7天无理由</span>
          </van-checkbox>
          <div class="yell">此商品为定制，不支持7天无理由退货</div>
          <div class="other text_cen">其他</div>
          <van-checkbox name="c" icon-size="0.3rem" checked-color="#000" class="span3">
            <span>信用卡支付</span>
          </van-checkbox>
          <van-checkbox name="d" icon-size="0.3rem" checked-color="#000" class="span4">
            <span>支付宝支付</span>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="btn text_cen" @click="closepanl">完成</div>
    </van-popup>
    <!-- 图纸介绍 -->
    <div class="introduce">
      <span>图纸介绍</span>
      <p>{{ProDetail.intro}}</p>
    </div>
    <!-- 商品详情底部 -->
    <div class="fixed">
      <van-goods-action>
        <!-- <van-goods-action-icon icon="shop" text="店铺" color="#676767" class="size" />
        <van-goods-action-icon icon="service" text="客服" color="#676767" class="size" /> -->
        <van-goods-action-icon
          :icon="icon"
          :text="text"
          color="#676767"
          class="size"
          @click="onClickIcon(ProDetail.id)"
        />
        <van-goods-action-button type="warning" text="加入购物车" class="size" @click="gocard" />
        <van-goods-action-button text="直接购买" class="size danger" @click="gosurepay(ProDetail.id)" />
      </van-goods-action>
    </div>
    <div>
      <van-popup
        v-model="showpop"
        position="bottom"
        :style="{ height: '60%' }"
        style="border-radius:0.3rem 0.3rem 0px 0px;"
      >
        <div class="cartfff">
          <div class="cartbox">
            <div class="cartlist flex">
              <img :src="ProDetail.cover" alt />
              <div class="red">￥{{ProDetail.price}}</div>
            </div>
            <div class="flex_be stepper">
              <span class="num">数量</span>
              <div>
                <span :class="[cunt==1?'disabled':'squer']" @click="reducecart(ProDetail)">-</span>
                <span class="squer squer1">{{cunt}}</span>
                <span class="squer" @click="addcart(ProDetail)">+</span>
              </div>
            </div>
          </div>
          <button @click="goJoinCart">加入购物车</button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
import { mapState } from "vuex";
import request from "@/request.js";
import { Toast } from 'vant';
export default {
  data() {
    return {
      current: 0,
      show: false,
      result: ["a", "b", "c", "d"],
      text: "收藏",
      icon: "like-o",
      showpop: false,
      ProDetail: [],
      cunt: 1, //购物车数量
      cartinfoList: [], //购物车数量
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  created() {

    this.handdetail();
  },
  methods: {
    gosurepay(id) {
      this.$router.push({
        path: "/surepayblue",
        // path: "/orderpay",
        query: {
            bid:id
          },
      });
    },
    onChange(index) {
      //轮播
      this.current = index;
    },
    showPopup() {
      //展示服务组件
      this.show = true;
      console.log(this.result);
    },
    closepanl() {
      //关闭服务组件
      this.show = false;
    },
    handchange(names) {
      //选中选框
      console.log(names);
    },
    gocard() {
      // 显示购物车组件
      this.showpop = true;
    },
    handdetail() {
      request
        .getProDetail({
          uid: this.userInfor.member_id,
          id: this.$route.query.id,
        })
        .then((res) => {
          console.log(res, "图纸详情");
          this.ProDetail = res.data;
        })
        .catch(() => {
          // this.$toast("添加失败");
        })
        .finally(() => {});
    },
    onClickIcon(num) {
      request
        .getCollect({
          uid: this.userInfor.member_id,
          type: 1,
          object: num,
        })
        .then((res) => {
          console.log(res);
          this.handdetail();
          this.$toast("收藏成功");
          (this.text = "已收藏"), (this.icon = "like");
        })
        .catch((e) => {
          console.log(e);
          this.$toast("收藏失败");
        })
        .finally(() => {});
    },
    // 立即购买
    goJoinCart() {
      //加入购物车
      request
        .getJoinCart({
          uid: this.userInfor.member_id,
          b_id: 2,
          num: this.cunt,
        })
        .then((res) => {
          console.log(res, "加入购物车");
           Toast.success('添加成功')
        })
        .catch(() => {
          Toast.fail('添加失败')
        })
        .finally(() => {});
    },
    reducecart(item) {
      console.log(item);
      if (this.cunt == 1) {
        return false;
      }
      this.cunt--;
    },
    addcart(item) {
      console.log(item);
      this.cunt++;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
.productdetail {
  overflow: scroll;
  .mb(100);
}
.custom-indicator {
  background: rgba(0, 0, 0, 0.5);
  .b-radius(17);
  .w(82);
  .h(35);
  .lh(35);
  position: absolute;
  right: 0.08rem;
  bottom: 0.15rem;
  color: #fff;
  .fs(25);
}
.van-swipe-item img {
  width: 100%;
}
.price {
  background: #ededed;
  .h(95);
  .fs(47);
  .lh(95);
  font-family: Adobe Heiti Std;
  color: #d21010;
  .pl(16);
}
.title {
  .fs(27);
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #131313;
  .ml(22);
  .mt(41);
  .lh(40);
  padding-right: 1.35rem;
  height: 1rem;
}
.goods,
.serves {
  .fs(27);
  background: #ededed;
  .pl(19);
  .pr(32);
  .h(95);
  .lh(95);
  color: #707070;
  span {
    color: #1d1d1d;
  }
}
.serves {
  .mt(9);
  span {
    color: #707070;
    .fs(27);
  }
  span:nth-of-type(2) {
    color: #1d1d1d;
    .ml(20);
  }
}
.basics {
  .fs(29);
  color: #1d1d1d;
  .mt(41);
  .mb(77);
}
.pop {
  .ml(38);
  span {
    .fs(27);
    font-family: Microsoft YaHei;
    color: #656565;
    .ml(37);
  }
  .span2 {
    .mt(81);
    .mb(13);
  }
  .yell {
    color: #fe9e15;
    .fs(23);
    .ml(85);
  }
  .other {
    .mt(73);
    .mb(77);
    .fs(29);
  }
  .span4 {
    .mt(46);
    .mb(253);
  }
}
.btn {
  .h(85);
  .lh(85);
  background: #fe9e15;
  color: #fff;
  .fs(25);
  position: fixed;
  .w(750);
  bottom: 0;
}
.rate {
  .padding(26, 20);
  span {
    .fs(25);
  }
  .all {
    color: #f3af1c;
    .fs(20);
    .mr(21);
  }
}
.size {
  .fs(30);
}
.danger {
  background: #ef7a1c;
  color: #fff;
}
.cont {
  .padding(20, 20);
}
.fixed {
  position: fixed;
  bottom: 0;
}
.introduce {
  .padding(29, 19, 16, 0);
  span {
    color: #707070;
    .fs(25);
  }
  p {
    color: #101010;
    .fs(24);
    .lh(37);
    .mt(29);
  }
}
.views {
  .padding(11, 32, 11, 16);
  img {
    .w(43);
    .h(43);
    border-radius: 50%;
  }
  img + img {
    .ml(-26);
  }
}
.sharebox {
  position: relative;
}
.share {
  .w(108);
  .h(58);
  border-radius: 0.3rem 0 0 0.3rem;
  background: #eeeeee;
  position: absolute;
  top: 0;
  right: 0;
  img {
    .w(24);
    .h(24);
  }
}

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
.squer,
.disabled {
  .w(62);
  .h(58);
  background: rgba(241, 241, 241, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .mr(3);
  .fs(63);
  color: #878787;
}
.disabled {
  color: #ddd;
}
</style>