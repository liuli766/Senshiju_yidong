<template>
  <!-- 地址列表 -->
  <div class="AddressList">
    <van-address-list
      v-model="chosenAddressId"
      :list="AddressList"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    ></van-address-list>
  </div>
</template>

<script>
// import { Toast } from "vant";
import { mapState } from "vuex";
import request from "@/request.js";
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      headimg: (state) => state.headimg,
    }),
  },
  data() {
    return {
      chosenAddressId: "1", //当前选中的地址id
      AddressList: [], //地址列表
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      request
        .getAddress({
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          res.data.map((item) => {
            this.vertical = true;
            item.tel = item.phone;
            this.chosenAddressId = item.id;
            if (item.is_default == 0) {
              item.is_default = false;
            } else {
              item.is_default = true;
            }
            item.isDefault = item.is_default;
          });
          this.AddressList = res.data.reverse();
          console.log(this.AddressList, "地址展示");
        })
        .catch(() => {})
        .finally(() => {});
    },
    onAdd() {
      this.$router.push({
        path: "/newshippingAddr",
      });
    },
    onEdit(item, index) {
      console.log(item);
      this.$router.push({
        path: "/newshippingAddr",
        query: {
          item,
          id: index,
        },
      });
    },
  },
};
</script>

<style>
</style>