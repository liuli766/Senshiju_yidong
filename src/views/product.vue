<template>
  <!-- 成品 -->
  <div class="product">
    <div class="serchbox">
      <van-search
        v-model="searchContent"
        shape="round"
        background="#fff"
        placeholder="请输入搜索内容"
        @change="handserch"
        style="overflow-x: hidden"
      />
    </div>
    <!--  -->
    <div class="dropdown flex_be">
      <div class="all">全部</div>
      <div class="dropdownbox">
        <van-dropdown-menu active-color="#FE9E15">
          <van-dropdown-item
            v-model="value1"
            :options="cate1"
            title="风格"
            @change="handchange1(value1)"
          />
          <van-dropdown-item
            v-model="value2"
            :options="cate2"
            title="面宽"
            @change="handchange2(value2)"
          />
          <van-dropdown-item
            v-model="value3"
            :options="cate3"
            title="进深"
            @change="handchange3(value3)"
          />
          <van-dropdown-item
            v-model="value4"
            :options="cate4"
            title="占地"
            @change="handchange4(value4)"
          />
        </van-dropdown-menu>
        <van-dropdown-menu active-color="#FE9E15">
          <van-dropdown-item
            v-model="value5"
            :options="cate5"
            title="层数"
            @change="handchange5(value5)"
          />
          <van-dropdown-item
            v-model="value6"
            :options="cate6"
            title="功能"
            @change="handchange6(value6)"
          />
          <van-dropdown-item
            v-model="value7"
            :options="cate7"
            title="造价"
            @change="handchange7(value7)"
          />
          <van-dropdown-item
            v-model="value8"
            :options="cate8"
            title="结构"
            @change="handchange8(value8)"
          />
        </van-dropdown-menu>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="list" v-if="productItemList.length !== 0">
      <productitem :productitem="productItemList" />
    </div>
    <div class="list" v-else>
      <p style="text-align: center; padding-top: 0.3rem">无相关产品</p>
    </div>
    <!--  -->
    <tabbar :tabid="1" />
    <div class="wrap">
      <scroll :onBottom="onBottom"></scroll>
    </div>
  </div>
</template>

<script>
import productitem from "@/components/productItem.vue";
import scroll from "@/components/onBottom.vue";
import tabbar from "@/components/tabBar.vue";
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  components: {
    productitem,
    tabbar,
    scroll,
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
    }),
  },
  watch: {
    searchContent() {
      this.handserch();
    },
  },
  data() {
    return {
      searchContent: "", //搜索内容值
      value1: 0, //当前选中项对应的 value
      value2: 0, //当前选中项对应的 value
      value3: 0, //当前选中项对应的 value
      value4: 0, //当前选中项对应的 value
      value5: 0, //当前选中项对应的 value
      value6: 0, //当前选中项对应的 value
      value7: 0, //当前选中项对应的 value
      value8: 0, //当前选中项对应的 value
      productItemList: [],
      cate1: [],
      cate2: [],
      cate3: [],
      cate4: [],
      cate5: [],
      cate6: [],
      cate7: [],
      cate8: [],
      filterSelData1: "全部", //选中的数据
      filterSelData2: "全部", //选中的数据
      filterSelData3: "全部", //选中的数据
      filterSelData4: "全部", //选中的数据
      filterSelData5: "全部", //选中的数据
      filterSelData6: "全部", //选中的数据
      filterSelData7: "全部", //选中的数据
      filterSelData8: "全部", //选中的数据
      filterlist: "全部",
      newtouter: [],
      page: 1,
    };
  },
  created() {
    request
      .getCate({
        cate_id: "",
      })
      .then((res) => {
        console.log(res, "分类");
        this.filterlist = res.data.list;
        this.cate1 = res.data.list[0].child;
        this.cate2 = res.data.list[1].child;
        this.cate3 = res.data.list[2].child;
        this.cate4 = res.data.list[3].child;
        this.cate5 = res.data.list[4].child;
        this.cate6 = res.data.list[5].child;
        this.cate7 = res.data.list[6].child;
        this.cate8 = res.data.list[7].child;
        this.cate1.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate2.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate3.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate4.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate5.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate6.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate7.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
        this.cate8.map((item, k) => {
          item.text = item.cate_name;
          item.value = k;
        });
      })
      .catch(() => {})
      .finally(() => {});
    console.log(this.$route.query);
    this.filterSelData1 = this.$route.query.style;
    this.filterSelData2 = this.$route.query.area;
    this.filterSelData3 = this.$route.query.face_width;
    this.filterSelData4 = this.$route.query.depth;
    this.filterSelData5 = this.$route.query.plies;
    this.filterSelData6 = this.$route.query.function;
    this.filterSelData7 = this.$route.query.structure;
    this.filterSelData8 = this.$route.query.cost;
    this.page = 1;
    this.productItemList = [];
    this.getdata();
  },
  methods: {
    onBottom() {
      console.log("bottom");
      this.page++;
      this.getdata();
    },
    // 搜索
    handserch() {
      request
        .getHots({
          page: this.page,
          search: this.searchContent,
        })
        .then((res) => {
          console.log(res);
          this.productItemList = [];
          this.getdata();
        })
        .catch(() => {})
        .finally(() => {});
    },
    getdata() {
      request
        .getHots({
          page: this.page,
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
          search: this.searchContent,
        })
        .then((res) => {
          console.log(res, "图纸展示");
          if (this.page == 1) {
            this.productItemList = res.data;
          }

          if (this.page > 1) {
            this.productItemList = [...this.productItemList, ...res.data];
          }

          if (res.data.length == 0) {
            this.$toast("没有更多数据了");
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    handchange1(value) {
      console.log(value);
      let newArray = [];
      this.cate1.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData1 = newArray[0];
      console.log(this.filterSelData1);
      this.getdata(this.filterSelData1);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.style);
    },
    handchange2(value) {
      console.log(value);
      let newArray = [];
      this.cate2.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData2 = newArray[0];
      this.getdata(this.filterSelData2);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.area);
    },
    handchange3(value) {
      console.log(value);
      let newArray = [];
      this.cate3.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData3 = newArray[0];
      this.getdata(this.filterSelData3);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.face_width);
    },
    handchange4(value) {
      console.log(value);
      let newArray = [];
      this.cate4.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData4 = newArray[0];
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.depth);
    },
    handchange5(value) {
      console.log(value);
      let newArray = [];
      this.cate5.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData5 = newArray[0];
      this.getdata(this.filterSelData5);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.plies);
    },
    handchange6(value) {
      console.log(value);
      let newArray = [];
      this.cate6.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData6 = newArray[0];
      this.getdata(this.filterSelData6);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.function);
    },
    handchange7(value) {
      console.log(value);
      let newArray = [];
      this.cate7.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData7 = newArray[0];
      this.getdata(this.filterSelData7);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.structure);
    },
    handchange8(value) {
      console.log(value);
      let newArray = [];
      this.cate8.map((item) => {
        if (item.value == value) {
          newArray.push(item.cate_name);
        }
      });
      this.filterSelData8 = newArray[0];
      this.getdata(this.filterSelData8);
      this.$router.push({
        path: "/product",
        query: {
          style: this.filterSelData1,
          area: this.filterSelData2,
          face_width: this.filterSelData3,
          depth: this.filterSelData4,
          plies: this.filterSelData5,
          function: this.filterSelData6,
          structure: this.filterSelData7,
          cost: this.filterSelData8,
        },
      });
      this.page = 1;
      this.productItemList = [];
      this.getdata(this.$route.query.cost);
    },
  },
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
.list {
  background: #f0f0f0;
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
.van-cell.van-cell--borderless.van-field {
  position: relative !important;
  left: 50% !important;
  margin-left: -1.25rem !important;
}
</style>