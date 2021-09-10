<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <homeswiper :banners="banners"></homeswiper>
    <!-- 推荐 -->
    <recommendview :recommends="recommends"></recommendview>
    <!-- feature -->
    <featureview></featureview>
  </div>
</template>

<script type="text/javascript">
//导入封装好的组件
import NavBar from "components/common/navbar/NavBar";
import homeswiper from"./childcomps/homeswiper"
import recommendview from "./childcomps/recommendview"
import featureview from "./childcomps/featureview"

import { getHomeMultiData } from "network/home";//获取axios请求某个url的数据
export default {
  name: "home",
  components: { NavBar,homeswiper,recommendview,featureview},
  data() {
    return {
      
      banners: [],
      recommends: [],
    };
  },
//生命周期函数，页面加载最后执行
  created() {
    getHomeMultiData().then((res) => {
      //打印请求数据
      console.log(res);
      //把请求的数据保存到data()中
      this.banners = res.data.banner.list;//轮播图(swiper)数据--
      this.recommends = res.data.recommend.list;//recommend(推荐)界面数据
    });
  },
};
</script>

<style scoped>
.home-nav {
  /* css定义变量 */
  background-color: var(--color-tint);
}
</style>
