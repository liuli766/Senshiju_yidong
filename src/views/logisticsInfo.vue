<template>
  <!-- 物流信息 -->
  <div class="logisticsInfo">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="onClickLeft" />
      <span>物流信息</span>
    </div>
    <!--  -->
    <div class="flex_col company">
      <span>承运公司： 申通快递</span>
      <span>运单编号： 773046510909594</span>
    </div>
    <!-- 物流记录-->
    <main>
      <ul>
        <li class="flex">
          <i class="node_icon">....</i>
          <div>
            <span class="txt">[湖南蓝山县公司]已签收，签收人是【通村寸入库代签次日到】</span>
            <span class="time">2020-07-15 16:31:10</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            history.go(-1);
            this.$store.commit('gonav',2)
        }
    },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
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
  span:nth-of-type(1) {
    .mt(77);
    .mb(20);
  }
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