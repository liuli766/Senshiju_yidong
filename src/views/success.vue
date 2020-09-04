<template>
  <div>
      <div class="nav_bar flex">
      <van-icon name="arrow-left" @click="go" />
      <span>支付成功</span>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        go() {
      this.$router.go(-1);
    },
    },
}
</script>

<style>

</style>