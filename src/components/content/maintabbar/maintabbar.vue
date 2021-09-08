<template>
  <div id="maintabbar">
    <tabbar>
      <tabbaritem path="/home" activecolor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script type="text/javascript">
import tabbar from "components/common/tabbar/Tabbar";
import tabbaritem from "components/common/tabbar/Tabbaritem";
export default {
  name: "maintabbar",
  data() {
    return {};
  },
  components: { tabbar, tabbaritem },
};
</script>

<style></style>
