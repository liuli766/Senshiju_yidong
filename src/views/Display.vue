<template>
  <!-- 建房百科专题页 -->
  <div>
    <img src="../assets/img/display.png" class="banner_img" alt="" />
    <div class="yellow_box">
      <div class="main comm_12">
        当前位置：<router-link to="/">主页</router-link>>专题
      </div>
    </div>
    <!--  -->
    <div class="display_two comm_12">
      <img src="../assets/img/display.png" alt="" />
      <div class="display_two_box">
        <h5>标题</h5>
        <p class="comm_one">
          10万以下两层自建房大全提供2018年新款农村两层自建房设计图
          造价10万元内，带外观效果图，含中式两层自建房图，欧式两层自建
        </p>
        <div class="display_up comm_one">
          <span class="upup">99748人点赞</span>
          <img src="../assets/img/up.png" alt="" />
        </div>
      </div>
    </div>
    <!--  -->
    <div>
      <div class="display_three">
        <div class="display_self_tit">一层10万自建房</div>
        <div class="display_self_yell">European recommen</div>
      </div>
      <div class="display_self_box">
        <div class="display_self_con" v-for="(item, v) in 5" :key="v">
          <img src="../assets/img/display.png" alt="" />
          <p>新农村自建二层楼房户型设计图 简单大气</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div style="margin: 0 0.5rem">
      <div class="display_list">
        <img src="../assets/img/11.png" alt="" />
        <div class="display_list_box">
          <h5>专业:专做别墅18年</h5>
          <p>
            我们是国内唯一专注自建房设计的公司，集合行业顶尖资源客户 满意率100%
          </p>
        </div>
      </div>
      <div class="display_list" style="background: #facd89">
        <img src="../assets/img/12.png" alt="" />
        <div class="display_list_box">
          <h5>专业:专做别墅18年</h5>
          <p>
            我们是国内唯一专注自建房设计的公司，集合行业顶尖资源客户 满意率100%
          </p>
        </div>
      </div>
      <div class="display_list" style="background: #f8b551">
        <img src="../assets/img/13.png" alt="" />
        <div class="display_list_box">
          <h5>专业:专做别墅18年</h5>
          <p>
            我们是国内唯一专注自建房设计的公司，集合行业顶尖资源客户 满意率100%
          </p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="as14">
      <img src="../assets/img/14.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner_img {
  width: 100%;
  height: 100%;
}
.yellow_box {
  height: 0.6rem;
  background: #fecb38;
  font-size: 0.2rem;
  line-height: 0.6rem;
  color: #343434;
  text-align: left;
  padding-left: 0.5rem;
}
.display_two {
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
}
.display_two > img {
  height: 1.56rem;
  width: 1.56rem;
  border-radius: 50%;
  margin-right: 0.18rem;
}
.display_two .display_two_box h5 {
  font-size: 0.36rem;
  line-height: 0.2rem;
  color: #242424;
  margin-bottom: 0.35rem;
}
.comm_one {
  font-size: 0.18rem;
  color: #242424;
  line-height: 0.3rem;
}
.display_two .display_two_box p {
  text-align: left;
}
.display_two .display_two_box .display_up {
  float: right;
  margin-top: 0.26rem;
}
.display_two .display_two_box .display_up img {
  width: 0.24rem;
  height: 0.24rem;
  margin-left: 0.06rem;
}
.display_three {
  width: 100%;
  height: 0.95rem;
  filter: drop-shadow(0px 8px 3.5px rgba(97, 97, 97, 0.29));
  background-color: #eeeeee;
  padding: 0.24rem 0 0.1rem 0;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 0.54rem;
}
.display_self_tit {
  font-size: 0.3rem;
  color: #202020;
  line-height: 1;
  margin-bottom: 0.09rem;
}
.display_self_yell {
  font-size: 0.25rem;
  color: #fecb38;
  line-height: 1;
}
.display_self_con {
  width: 3rem;
  height: 3.2rem;
}
.display_self_con:nth-last-of-type(2n) {
  margin-left: 0.5rem;
}
.display_self_con > img {
  width: 100%;
  height: 2.08rem;
  box-shadow: 0 4px 3px #dedddd;
}
.display_self_con > p {
  font-size: 0.22rem;
  line-height: 0.28rem;
  color: #343434;
  text-align: center;
  padding: 0.2rem 0 0.32rem 0;
}
.display_self_box {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.5rem;
  margin-bottom: 0.54rem;
}
.display_list {
  display: flex;
  background: #ffd759;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  padding: 0 0.2rem 0.16rem 0.18rem;
  align-items: center;
}
.display_list > img {
  width: 0.94rem;
  height: 0.94rem;
}
.display_list_box {
  margin-left: 0.2rem;
}
.display_list_box h5 {
  font-size: 0.29rem;
  color: #201f1f;
  margin-top: 0.15rem;
}
.display_list_box p {
  font-size: 0.18rem;
  color: #201f1f;
  line-height: 0.4rem;
  margin-top: 0.1rem;
}
.as14 {
  width: 5.1rem;
  height: 4rem;
  margin: 0.48rem auto;
}
.as14 > img {
  width: 100%;
  height: 100%;
}
</style>