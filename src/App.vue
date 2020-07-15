<template>
  <div id="app">
    <router-view />
    <!-- <div class="tabbar">
      <nav class="flex_ar">
        <span
          v-for="(item,index) in tabbar"
          :key="index"
          @click="tabChoes(index,item)"
          :class="{tab_active:tabid===index}"
        >{{item.tabname}}</span>
      </nav>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabbar: [
        {
          tabname: "首页",
          url: "/"
        },
        {
          tabname: "成品",
          url: "/product"
        },
        {
          tabname: "定制",
          url: "/PersonalTtailor"
        },
        {
          tabname: "我的",
          url: "/mine"
        }
      ],
      tabid: 0
    };
  },
  methods: {
    tabChoes(i, item) {
      this.tabid = i;
      this.$router.push({ path: item.url });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./styles/index.less";
@import "./styles/variable.less";
nav {
  position: fixed;
  width: 100%;
  background: #fff;
  color: #333;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  .h(108);
  border-top: 1px solid #cacaca;
}
.tab_active {
  color: @base-color;
}
</style>