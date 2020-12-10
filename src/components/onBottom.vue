<template>
  <div class="scroll"></div>
</template>
 
<script>
export default {
  name: "Scroll",
   props: {
    onBottom: Function,
  },
  methods: {
    scrollEvent() {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
        document.body.scrollHeight
      ) {
        this.onBottom();
      }
    },
  },
 
  mounted() {
    window.addEventListener("scroll", this.scrollEvent, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEvent, false);
  },
};
</script>