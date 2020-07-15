<template>
  <!-- 成品 -->
  <div class="product">
    <div class="serchbox">
      <van-search v-model="searchContent" shape="round" background="#fff" placeholder="请输入搜索内容" />
    </div>
    <!--  -->
    <div class="dropdown flex_be">
      <div class="all">全部</div>
      <div class="dropdownbox">
        <van-dropdown-menu active-color="#FE9E15">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <van-dropdown-menu active-color="#FE9E15">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="list">
        <productitem :productitem='productItemList'/>
    </div>
    <!--  -->
    <tabbar :tabid='1'/>
  </div>
</template>

<script>
import productitem from '@/components/productItem.vue'
import tabbar from '@/components/tabBar.vue'
export default {
    components:{
        productitem,
        tabbar
    },
  data() {
    return {
      searchContent: "", //搜索内容值
      value1: 0, //当前选中项对应的 value
      value2: "a", //当前选中项对应的 value
      productItemList: [
        {
          img: require("../assets/item.png"),
          p: "A116新农村一层四合院A116新农村一层四合院",
          baoyou: "包邮",
          price: "¥598.00",
          people: 1
        },
        {
          img: require("../assets/item.png"),
          p: "A116新农村一层四合院A116新农村一层四合院",
          baoyou: "包邮",
          price: "¥598.00",
          people: 1
        },
        {
          img: require("../assets/item.png"),
          p: "A116新农村一层四合院A116新农村一层四合院",
          baoyou: "包邮",
          price: "¥598.00",
          people: 1
        }
      ],
      option1: [
        { text: "全部", value: 0 },
        { text: "一层别墅", value: 1 },
        { text: "二层别墅", value: 2 }
      ],
      option2: [
        { text: "进深", value: "a" },
        { text: "占地", value: "b" },
        { text: "结构", value: "c" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.dropdown {
  .mr(37);
  .ml(37);
  .all {
    .w(70);
    .h(41);
    color: #33acf0;
    .fs(28);
    .lh(41);
    background: #f3f3f3;
    .b-radius(18);
    text-align: center;
    box-sizing: border-box;
    .mr(52);
  }
  .dropdownbox {
    width: 80%;
  }
}
.list{
    background: #F0F0F0;
    .pr(21);
    .pl(21);
    .mt(48);
    .pb(197);
}
</style>
<style>
.dropdown .van-dropdown-menu {
}
.dropdown .van-dropdown-menu__bar {
  box-shadow: none;
  border-bottom: 1px dashed #aaaaaa;
}
</style>