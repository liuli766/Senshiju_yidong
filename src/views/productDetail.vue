<template>
  <!-- 商品详情页 -->
  <div class="productdetail">
    <van-swipe @change="onChange">
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/1.png" alt />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator text_cen">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
    <!-- 价格 -->
    <div class="price">
      <span>¥599.00</span>
      <span></span>
    </div>
    <!-- 简介 -->
    <p class="title">B537二层四合院别墅设计图纸中式新农村自建房样图效果图全套</p>
    <!-- 发货 -->
    <div class="flex_be goods">
      <div>
        发货：
        <span>四川成都</span> | 快递：
        <span>免运费</span>
      </div>
      <div>月销：10</div>
    </div>
    <!-- 浏览量 -->
    <div class="views flex_be">
      <div>
        <img src="../assets/img/1.png" alt />
        <img src="../assets/img/1.png" alt />
      </div>
      <div>2778人在逛</div>
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
        <van-checkbox-group v-model="result" ref="checkboxGroup" @change="handchange">
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
      <div class="btn text_cen">完成</div>
    </van-popup>
    <!-- 宝贝评价 -->
    <div>
      <!-- <div class="rate flex_be">
        <span>宝贝评价</span>
        <div class="flex_cen">
          <span class="all">查看全部</span>
          <van-icon name="arrow" size="0.3rem" color="#F3AF1C" />
        </div>
      </div>-->
      <!--  -->
      <!-- <div class="cont">
        <div>
          <img src alt />
          fas
        </div>
        <p>是室内设计师时间内大厦是你的看是打开的难道是看打多久啊</p>
      </div>-->
    </div>
    <!-- 图纸介绍 -->
    <div class="introduce">
        <span>图纸介绍</span>
        <p>设计很好,设计很好设计号很好设计很好设计很好设计很好设计设计很好,设计很好设计号很好设计很好设计很好设计很好设计设计很好,设计很好设计号很好设计很好设计很好设计很好设计</p>
    </div>
    <!-- 商品详情底部 -->
    <div class="fixed">
      <van-goods-action>
        <van-goods-action-icon icon="shop" text="店铺" color="#676767" class="size" />
        <van-goods-action-icon icon="service" text="客服" color="#676767" class="size" />
        <van-goods-action-icon
          :icon="icon"
          :text="text"
          color="#676767"
          class="size"
          @click="onClickIcon"
        />
        <van-goods-action-button type="warning" text="加入购物车" class="size" />
        <van-goods-action-button text="直接购买" class="size danger" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      current: 0,
      show: false,
      result: ["a", "b", "c", "d"],
      text: "收藏",
      icon: "like-o"
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    showPopup() {
      this.show = true;
      console.log(this.result);
    },
    handchange(names) {
      console.log(names);
    },
    onClickIcon() {
      (this.text = "已收藏"), (this.icon = "like");
      Toast("点击图标");
    }
  }
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
  .fs(21);
}
.danger {
  background: #ef7a1c;
  color: #fff;
}
.cont {
  .padding(20, 20);
}
.fixed{
  position: fixed;
  bottom: 0;
}
.introduce{
  .padding(29,19,16,0);
  span{
    color: #707070;
    .fs(25);
  }
  p{
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
</style>