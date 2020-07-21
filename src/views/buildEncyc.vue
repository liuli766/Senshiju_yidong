<template>
  <!-- 建房百科页-->
  <div class="buildnav">
    <nav class="flex_ar">
      <span v-for="(item,k) in buiilnavlist" :key="k" @click="chosenav(k)" :class="{bg_active:navid===k}">{{item}}</span>
    </nav>
    <!--  -->
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buiilnavlist: ['收藏','推荐',"设计百科", "装修百科", "施工百科", "风水百科", "建房日志"],
      navid:0
    };
  },
  methods: {
    chosenav(k){
      this.navid=k
    }
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.buildnav {
  .padding(16,22);
  nav{
    span{
      .h(26);
      .fs(18);
      color: #191919;
      .padding(3,3);
      .lh(26);
    }
    .bg_active{
      background: #F2A930;
      .b-radius(10);
      color: #fff;
    }
  }
}
</style>