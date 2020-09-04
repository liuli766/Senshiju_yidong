<template>
  <!-- 底部菜单栏-->
  <div class="tabbar">
    <nav class="flex_ar">
      <div
        v-for="(item,index) in tabbar"
        :key="index"
        class="flex_col flex_ar"
        :class="{tab_active:tabid===index}"
      >
        <span class="iconfont ico" :class="item.icon"></span>
        <span @click="tabChoes(index,item)" :class="{tab_active:tabid===index}">{{item.tabname}}</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    tabid: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      tabbar: [
        { icon: "icon-shouye", tabname: "首页", url: "/" },
        {
          tabname: "成品",
          url: "/product",
          icon: "icon-chengpin",
        },
        {
          tabname: "定制",
          url: "/PersonalTtailor",
          icon: "icon-dingzhi",
        },
        {
          tabname: "我的",
          url: "/mine",
          icon: "icon-dibudaohanglan-",
        },
      ],
      // tabid:0
    };
  },
  methods: {
    tabChoes(i, item) {
      // this.tabid=i
      this.$router.push({ path: item.url });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
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
.iconfont {
  margin-bottom: 0.1rem;
  font-weight: bold;
}
span.ico:nth-of-type(2),
span.ico:nth-of-type(3) {
  font-weight: 400;
}
</style>