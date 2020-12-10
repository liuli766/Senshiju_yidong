<template>
  <!-- 商品详情页 -->
  <div class="productdetail">
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item, k) in ProDetail.photos" :key="k">
        <img :src="item" alt />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator text_cen">{{ current + 1 }}/{{ len }}</div>
      </template>
    </van-swipe>
    <!-- 价格 -->
    <div class="price flex_be">
      <div>
        <span style="font-size: 0.28rem; letter-spacing: 3px; color: #707070"
          >{{ProDetail.status==1?'':'全款预售'}}
        </span>
        <span style="font-size: 0.48rem; letter-spacing: 2px; color: #fe5303"
          >¥{{ ProDetail.price }}</span
        >
        <div
          style="
            font-size: 0.28rem;
            letter-spacing: 1px;
            color: #fe5303;
            line-height: 0;
          "
        >
         {{ProDetail.status==1?'':`付款后${ProDetail.deliver}天发货`}}
        </div>
      </div>
      <span
        class="flex_cen flex_col"
        v-if="ProDetail.is_collect == false"
        @click="onClickIcon(ProDetail.id)"
      >
        <img
          src="../assets/img/wjx.png"
          alt=""
          style="width: 0.45rem; height: 0.45rem"
        />
        <span
          style="
            font-size: 0.19rem;
            color: #4f4f4f;
            line-height: 1;
            margin-top: 0.1rem;
          "
          >收藏</span
        >
      </span>
      <span
        class="flex_cen flex_col"
        v-if="ProDetail.is_collect == true"
        @click="qxcollect(ProDetail.id)"
      >
        <img
          src="../assets/img/ysc.png"
          alt=""
          style="width: 0.45rem; height: 0.45rem"
        />
        <span style="font-size: 0.19rem; color: #4f4f4f; line-height: 1"
          >已收藏</span
        >
      </span>
    </div>
    <!-- 简介 -->
    <div class="sharebox">
      <p class="title">{{ ProDetail.title }}</p>
      <!-- <div class="share flex_cen">
        <img src="../assets/img/share.png" alt />
        <span @click="getDK">分享</span>
      </div> -->
    </div>

    <!-- 发货 -->
    <div class="flex_be goods">
      <div>
        发货：
        <span>四川成都</span> | 快递：
        <span>免运费</span>
      </div>
      <div>
        月销：<span style="color: #1d1d1d">{{ ProDetail.month_sale }}</span>
      </div>
    </div>
    <!-- 浏览量 -->
    <div class="views flex_be">
      <div>
        <img :src="c" alt v-for="(c, v) in ProDetail.user_imgs" :key="v" />
      </div>
      <div style="color: #707070; display: flex; align-items: center">
        <van-icon
          name="eye-o"
          style="font-size: 0.3rem; margin-right: 0.1rem"
        /><span>{{ ProDetail.moods }}人在逛</span>
      </div>
    </div>
    <!-- 服务 -->
    <div class="serves flex_be" @click="showPopup">
      <div>
        <span>服务</span>
        <span>付款后48小时内发货</span>
      </div>
      <van-icon name="arrow" style="font-size: 0.36rem" />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '68%' }">
      <div class="pop">
        <div class="basics text_cen">基础服务</div>
        <van-checkbox-group
          v-model="result"
          ref="checkboxGroup"
          @change="handchange"
          disabled
        >
          <van-checkbox
            name="a"
            icon-size="0.3rem"
            checked-color="#000"
            class="span1"
          >
            <span>付款后48小时内发货</span>
          </van-checkbox>
          <van-checkbox
            name="b"
            icon-size="0.3rem"
            checked-color="#000"
            class="span2"
          >
            <span>不支持7天无理由</span>
          </van-checkbox>
          <div class="yell">此商品为定制，不支持7天无理由退货</div>
          <div class="other text_cen">其他</div>
          <van-checkbox
            name="c"
            icon-size="0.3rem"
            checked-color="#000"
            class="span3"
          >
            <span>信用卡支付</span>
          </van-checkbox>
          <van-checkbox
            name="d"
            icon-size="0.3rem"
            checked-color="#000"
            class="span4"
          >
            <span>支付宝支付</span>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="btn text_cen" @click="closepanl">完成</div>
    </van-popup>
    <!-- 图纸介绍 -->
    <div class="introduce">
      <span>图纸介绍</span>
      <p>{{ ProDetail.intro }}</p>
    </div>
    <div v-html="ProDetail.imgs" class="prolist"></div>
    <!-- 商品详情底部 -->
    <div class="fixed">
      <van-goods-action>
        <van-goods-action-icon
          icon="shop"
          text="店铺"
          color="#676767"
          class="size"
          @click="goIndex"
        />
        <van-goods-action-icon
          icon="service"
          text="客服"
          color="#676767"
          class="size"
          @click="KeFu"
        />
        <van-goods-action-icon
          v-if="ProDetail.is_collect == true"
          icon="like"
          :text="text"
          color="#676767"
          class="size"
          @click="qxcollect(ProDetail.id)"
        />
        <van-goods-action-icon
          v-if="ProDetail.is_collect == false"
          icon="like-o"
          :text="text"
          color="#676767"
          class="size"
          @click="onClickIcon(ProDetail.id)"
        />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          class="size"
          @click="gocard"
        />
        <van-goods-action-button
          text="立即购买"
          class="size danger"
          @click="gosurepay(ProDetail.id)"
        />
      </van-goods-action>
    </div>
    <div>
      <van-popup
        v-model="showpop"
        position="bottom"
        :style="{ height: '60%' }"
        style="border-radius: 0.3rem 0.3rem 0px 0px"
      >
        <img
          src="../assets/img/close.png"
          alt=""
          style="position: absolute; top: 0.22rem; right: 0.23rem"
          @click="Close"
        />
        <div class="cartfff">
          <div class="cartbox">
            <div class="cartlist flex">
              <img :src="ProDetail.cover" alt />
              <div class="red">￥{{PriceNum}}</div>
            </div>
            <div class="flex_be stepper">
              <span class="num">数量</span>
              <div class="flex">
                <span
                  :class="[cunt == 1 ? 'disabled' : 'squer']"
                  @click="reducecart(ProDetail)"
                  >-</span
                >
                <span class="squer squer1" style="font-size: 0.2rem">{{
                  cunt
                }}</span>
                <span class="squer" @click="addcart(ProDetail)">+</span>
              </div>
            </div>
          </div>
          <button @click="goJoinCart(ProDetail.id)">加入购物车</button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
import { mapState } from "vuex";
import request from "@/request.js";
import { Toast } from "vant";
import wx from "weixin-jsapi";
import Clipboard from "clipboard";
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
      len: "",
      showShare: false,
      copylink: "",
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
    PriceNum(){
        let PriceNum=0
        if(this.cunt==1){
          PriceNum=this.ProDetail.price
        }
        if(this.cunt==2){
          PriceNum=this.ProDetail.two_price
        }
        if(this.cunt==3){
          PriceNum=this.ProDetail.three_price

        }
         return PriceNum
    }
  },
  created() {
    this.handdetail();
    this.copylink =
      "http://villa.jisapp.cn/shenshiju/#/" + this.$route.fullPath;
    console.log(this.$route.fullPath);
    // this.getDK();
  },
  methods: {
    getDK() {
      // this.$toast("请点击“...”分享");
      request
        .getShare({
          url: this.$route.fullPath,
        })
        .then((res) => {
          console.log(res, "分享");
          if (res.code == 0) {
            let appId = res.data.appId;
            let nonceStr = res.data.nonceStr;
            let signature = res.data.signature;
            let timestamp = res.data.timestamp;
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: appId, // 必填，公众号的唯一标识
              timestamp: timestamp, // 必填，生成签名的时间戳
              nonceStr: nonceStr, // 必填，生成签名的随机串
              signature: signature, // 必填，签名，见附录1
              jsApiList: [
                "updateAppMessageShareData",
                "updateTimelineShareData",
              ],
            });
            wx.ready(() => {
              let that = this;
              let shareData = {
                title: that.ProDetail.title,
                desc: that.ProDetail.title,
                link: location.href, //必须是js安全域名下的地址(分享出去的没有图片显示请检查这里的link参数)
                imgUrl: that.ProDetail.cover, //随意地址的图片都行，最好是jpg的，经测试无图片大小约束
                success: function () {
                  console.log(1);
                },
                cancel: function () {
                  console.log(2);
                },
              };
              console.log(window.wechatImg);
              wx.updateTimelineShareData(shareData); //分享到QQ空间
              wx.updateAppMessageShareData(shareData); //分享给手机QQ
            });
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
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
    share() {
      this.showShare = true;
      // this.getJSSDK();
    },
    goIndex() {
      this.$router.push({
        path: "/",
      });
    },
    gosurepay(id) {
      if (!this.token) {
        this.$router.push({
          path: "/login",
        });
        return false;
      } else {
        this.$router.push({
          path: "/surepayblue",
          query: {
            bid: id,
          },
        });
      }
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
    Close() {
      this.showpop = false;
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
      if (!this.token) {
        request
          .getProDetail({
            id: this.$route.query.id,
          })
          .then((res) => {
            console.log(res, "图纸详情");
            this.ProDetail = res.data;
            this.len = res.data.photos.length;
            console.log(this.len);
          })
          .catch(() => {
            // this.$toast("添加失败");
          })
          .finally(() => {});
      } else {
        request
          .getProDetail({
            uid: this.userInfor.member_id,
            id: this.$route.query.id,
          })
          .then((res) => {
            console.log(res, "图纸详情");
            this.ProDetail = res.data;
            this.len = res.data.photos.length;
            console.log(this.len);
          })
          .catch(() => {
            // this.$toast("添加失败");
          })
          .finally(() => {});
      }
    },
    onClickIcon(num) {
      if (!this.token) {
        this.$router.push({
          path: "/register",
        });
        return false;
      } else {
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
      }
    },
    //取消收藏
    qxcollect(idx) {
      request
        .getCancelcollect({
          uid: this.userInfor.member_id,
          c_id: idx,
          type: 1,
        })
        .then((res) => {
          this.handdetail();
          (this.text = "收藏"), (this.icon = "like-o");
          console.log(res, "取消收藏");
          this.$toast("取消成功");
        })
        .catch(() => {
          this.$toast("取消失败");
        })
        .finally(() => {});
    },
    // 立即购买
    goJoinCart(id) {
      //加入购物车
      if (!this.token) {
        this.$router.push({
          path: "/register",
        });
        return false;
      } else {
        request
          .getJoinCart({
            uid: this.userInfor.member_id,
            b_id: id,
            num: this.cunt,
          })
          .then((res) => {
            console.log(res, "加入购物车");
            Toast.success("添加成功");
          })
          .catch(() => {
            Toast.fail("添加失败");
          })
          .finally(() => {});
      }
    },
    reducecart(item) {
      console.log(item);
      if (this.cunt == 1) {
        return false;
      }
      this.cunt--;
      request
        .getEditCart({
          id: item.id,
          num: this.cunt,
        })
        .then((res) => {
          console.log(res, "购物车数量加");
        })
        .catch(() => {
          Toast.fail("添加失败");
        })
        .finally(() => {});
    },
    addcart(item) {
      console.log(item);
      if (this.cunt < 3) {
        this.cunt++;
        request
          .getEditCart({
            id: item.id,
            num: this.cunt,
          })
          .then((res) => {
            console.log(res, "购物车数量减");
          })
          .catch(() => {
            Toast.fail("添加失败");
          })
          .finally(() => {});
          
      }else{
           this.$toast("不可以加了噢");
      }
      
    },
    KeFu() {
      this.$toast("暂未开通");
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
  // height:100%;
  height: 5.24rem;
}
.price {
  // background: #ededed;
  .h(95);
  .fs(47);
  .lh(95);
  font-family: Adobe Heiti Std;
  color: #d21010;
  margin: 0.3rem 0.3rem 0.2rem 0.24rem;
}
.title {
  .fs(32);
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #131313;
  .ml(22);
  .lh(52);
  padding-right: 1.35rem;
  height: 1rem;
  margin-bottom: 0.32rem;
  margin-top: 0.5rem;
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
  color: #fff;
  background-image: linear-gradient(
    2deg,
    #b525ff 0%,
    #a61dff 48%,
    #9515fe 100%
  );
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
    .fs(26);
    .lh(40);
    .mt(29);
    letter-spacing: 2px;
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
    .ml(-14);
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
.share1,
.sharebox1 {
  border-radius: 0.3rem 0.3rem 0px 0px;
  width: 100%;
  height: 2.28rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #232323;
  font-size: 0.2rem;
  font-weight: 400;
  font-family: SimHei;
  box-shadow: 2px 2px 2px 2px #eee;
  img {
    width: 0.48rem;
    height: 0.48rem;
    margin-bottom: 0.25rem;
  }
  h6 {
    font-size: 0.26rem;
    font-family: SimHei;
    font-weight: 400;
    color: #878787;
    line-height: 0.26rem;
    text-align: center;
    margin: 0.34rem 0 0.4rem 0;
  }
}
/deep/ .prolist img {
  width: 100%;
  height: 100%;
}
</style>
<style >
.van-icon-shop::before {
  font-size: 0.4rem;
  color: #000;
}
.van-icon-service::before {
  font-size: 0.4rem;
  color: #000;
}
.van-icon-like-o::before {
  font-size: 0.4rem;
  color: #000;
}
.van-icon-like::before {
  font-size: 0.4rem;
  color: #000;
}
</style>