<template>
  <!-- 商务合作 -->
  <div class="business">
    <div class="nav_bar flex">
      <van-icon name="arrow-left" />
      <span>确认支付</span>
    </div>
    <!--  -->
    <main>
      <article>
        <p><span>村野人家</span>专注别墅/自建房设计15年，集 合行业顶尖资源，依托互联网高效、快捷、 低成本的优势，服务全国34个省级行政区， 每年为全国10万余客户提供图纸及设计服务</p>
        <p>由于部分乡村小施工队缺乏建筑施工知 识，技术工艺落后，客户在后续施工过程中 总遇到种种问题，为了让自建房施工专业化、 规范化、标准化，打造设计/施工一站式服 务，让客户省心、放心、安心。我们诚邀全 国实力施工队合作，只要您专业、诚信，我 们会给您带来源源不断的客户</p>
        <p>我们是一个实干、有理想、开放合作的 团队，欢迎各界有识之士合作，打造一个自 建房图纸、设计、施工、装修、上下游建材 供应链的平台</p>
      </article>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/index.less";
@import "../styles/variable.less";
.business {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: scroll;
}
.nav_bar {
  background: @base-header-color;
  .lh(80);
  align-items: center;
  color: #1a1a1a;
  .fs(34);
  .pl(20);
  .mb(18);
  span {
    .ml(265);
  }
}
main{
  .margin(18,20);
  background: #fff;
  .padding(0,10);
  article{
    p{
      .fs(30);
      color: #232323;
      .lh(50);
      span{
        .fs(34);
      }
    }
  }
}
</style>