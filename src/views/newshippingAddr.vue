<template>
  <!-- 新建收获地址 -->
  <div class="newshippingAddr">
    <div class="flex navigation">
      <van-icon name="cross" @click="go" />
      <span>新建收货地址</span>
    </div>
    <!--  -->
    <div style="background:#fff">
      <div class="nav_bar flex">
        <van-icon name="arrow-left" @click="go" />
        <span>新建收货地址</span>
      </div>
    </div>

    <!--  -->
    <div class="p">
      <textarea placeholder="请输入或粘贴地址文本，自动识别姓名 电话和地址，如： 张三，18112345678，浙江省杭州市余杭区五常街道乐佳 国际3号" v-model="content"></textarea>
    </div>
    <!--  -->
    <div style="background:#fff">
      <div class="cotbtn flex">
        <span @click="empty">清空内容</span>
        <span @click="intelligence">智能识别</span>
      </div>
    </div>

    <!--  -->
    <div class="cotaddr">
      <van-field v-model="name" label="收货人" clearable placeholder="请输入收货人姓名" />
      <div class="mainland">
        <span>+86</span>
        <span>中国大陆</span>
      </div>
      <van-field v-model="tel" type="tel" label="手机号码" clearable placeholder="请输入收货人手机号码" />
      <div class="choseaddr">
        <van-field
          readonly
          clickable
          name="area"
          :value="value"
          label="所在地区"
          placeholder="--请选择--"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
        </van-popup>
      </div>
      <van-divider :style="{ color: '#1989fa', borderColor: '#eee', padding: '0' }"></van-divider>
      <van-field v-model="addr" type="tel" label="详细地址" clearable placeholder="请输入街道地址" />
      <div class="flex_be swich">
        <span>设为默认地址</span>
        <van-switch v-model="checked" active-color="#07c160" inactive-color="#EEEEEE" />
      </div>
    </div>
    <div class="eee" ref="eee">
      <button v-if="delbtn" @click="removeAddr">删除</button>
      <button @click="onSave">保存并使用</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import request from "@/request.js";
import areaList from "../assets/city";
export default {
  data() {
    return {
      name: "",
      tel: "",
      addr: "",
      checked: false,
      value: "",
      showArea: false,
      areaList: areaList, // 数据格式见 Area 组件文档
      delbtn: false, //删除按钮是否显示
      content:'' //复制的地址文本
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      headimg: (state) => state.headimg,
    }),
  },
  created() {
    if (this.$route.query.item !== undefined) {
      let item = this.$route.query.item;
      this.name = item.name;
      this.tel = item.tel;
      this.value = `${item.province} / ${item.city} / ${item.district}`;
      this.addr = item.address;
      this.checked = item.is_default;
      this.delbtn = true;
    }
  },
  methods: {
    // 保存地址
    onSave() {
      let add = this.value.split("/");
      console.log(add);
      if (this.name == "") {
        this.$toast("用户名不能为空");
        return false;
      }
      if (this.tel == "") {
        this.$toast("电话号码不能为空");
        return false;
      }
      if (this.value == "") {
        this.$toast("所在地区不能为空");
        return false;
      }
      if (this.addr == "") {
        this.$toast("详细地址不能为空");
        return false;
      }
      request
        .getAddr({
          uid: this.userInfor.member_id,
          address: this.addr,
          name: this.name,
          phone: this.tel,
          province: add[0],
          city: add[1],
          district: add[2],
          is_default: this.checked,
        })
        .then((res) => {
          console.log(res, "添加收货地址");
          this.$toast("保存成功");
        })
        .catch(() => {
          this.$toast("保存失败");
        })
        .finally(() => {});
    },
    removeAddr() {
      request
        .getRemoveAddr({
          id: this.$route.query.item.id,
        })
        .then((res) => {
          console.log(res, "删除收货地址");
          this.$toast("删除成功");
          this.name = "";
          this.tel = "";
          this.value = "";
          this.addr = "";
          this.checked = false;
          this.delbtn = false;
        })
        .catch(() => {
          this.$toast("删除失败");
        })
        .finally(() => {});
    },
    empty(){
        this.content=''
    },
    intelligence(){
      console.log(this.smartParse(this.content));
      let smartParse=this.smartParse(this.content)
      this.name=smartParse.name
      this.tel=smartParse.phone
      this.value=`${smartParse.province}/${smartParse.city}/${smartParse.county}`
      if(smartParse.street==undefined){
        smartParse.street=''
      }
      if(smartParse.streetCode==undefined){
        smartParse.streetCode=''
      }
      this.addr=`${smartParse.street}${smartParse.streetCode}${smartParse.address}${smartParse.zipCode}`
    },
    // 选择地区
    onConfirm(values) {
      this.value = values.map((item) => item.name).join("/");
      this.showArea = false;
    },
    go() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.newshippingAddr {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
}
.navigation {
  background: #ededed;
  .h(88);
  .fs(31);
  align-items: center;
  .pl(24);
  font-family: SimHei;
  font-weight: bold;
  .lh(34);
  span {
    .ml(25);
    font-family: SimHei;
  }
  .van-icon {
    .fs(27);
  }
}
.nav_bar {
  background: #fff;
  border-bottom: 1px solid #d6d6d6;
  .h(79);
  align-items: center;
  .mr(21);
  .ml(21);
  span {
    color: #070707;
    .fs(30);
    font-weight: bold;
    .lh(34);
    .ml(235);
    font-family: SimHei;
  }
  .van-icon {
    .fs(29);
  }
}
.p {
  background: #fff;
  .pl(21);
  .pr(21);
  textarea {
    width: 100%;
    border: 0;
    .padding(35, 19);
    border-bottom: 1px solid #d6d6d6;
    text-align: justify;
    color: #c7c7c7;
    .lh(38);
  }
}
.cotbtn {
  background: #fff;
  border-bottom: 0.19rem solid #eeeeee;
  .pb(22);
  .mr(21);
  .ml(21);
  .pt(22);
  align-items: center;
  justify-content: flex-end;
  span {
    display: block;
  }
  span:nth-of-type(2) {
    .w(152);
    .h(56);
    .b-radius(10);
    border: 1px solid #ff0000;
    color: #ff0000;
    .fs(30);
    text-align: center;
    box-sizing: border-box;
    .lh(56);
    .ml(46);
  }
}
.cotaddr {
  background: #fff;
  .pr(21);

  .mainland {
    .h(98);
    .lh(98);
    .ml(21);
    border-bottom: 1px solid #eee;
    .pl(26);
    span:nth-of-type(1) {
      .pr(88);
    }
    span:nth-of-type(2) {
      display: inline-block;
      border-left: 1px solid #eee;
      .pl(37);
    }
  }
  .swich {
    .h(98);
    .lh(98);
    .margin(0, 29);
  }
}
.eee {
  .pt(35);
  background: #ededed;
  button {
    .w(709);
    text-align: center;
    background: #f1321e;
    color: #fff;
    .fs(34);
    outline: none;
    border: 0;
    .h(83);
    .mt(35);
    .b-radius(5);
    display: block;
    margin: auto;
    margin-bottom: 0.15rem;
  }
}
.van-divider {
  margin: 0;
  .ml(21);
}
</style>