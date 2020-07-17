<template>
  <!-- 图纸订单 -->
  <div class="drawingorder">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>图纸订单</span>
    </div>
    <van-search v-model="seachdata" placeholder="请输入订单号或商品名称" />
    <nav>
        <span v-for="(item,k) in navlist" :key='k' @click="swichChose(k)" :class="{activ_chose:navid===k}">{{item}}</span>
    </nav>
    <orderlist />
  </div>
</template>

<script>
import orderlist from '@/components/orderlist.vue'
export default {
    components:{
        orderlist
    },
    data() {
        return {
            seachdata:'',
            navlist:['待付款','待发货','待收货'],
            navid:0,
            orderlist:[
                {
                    
                }
            ]
        }
    },
    methods: {
        swichChose(k){
            this.navid=k
        }
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
nav{
    background: @base-header-color;
    .padding(0,30);
    .lh(89);
    .mb(13);
    span{
        .mr(66);
    }
    .activ_chose{
        color: #F2A930;
        border-bottom: 1px solid #F2A930;
    }
}
</style>