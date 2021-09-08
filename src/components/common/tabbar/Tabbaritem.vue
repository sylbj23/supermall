<template>
  <div class="tabbar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isactiveStyle">
      <slot name="text"></slot>

    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Tabbaritem",
  props: { path: String, activeStyle: { type: String, default: "coral" } },
  data() {
    return {};
  },
  components: {},
  computed: {
    //indexOf()--判断前面是否包含后面，包含不返回-1，不包含返回-1
    //active的界面(this.$route)中有当前path，则this.$route.path.indexOf(this.path)不等于-1，
    //那么表达式this.$route.path.indexOf(this.path) !== -1的返回值为true
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isactiveStyle() {
      //三目表达式
      return this.isActive ? { color: this.activeStyle } : {};
    },
  },
  methods: {
    //this.$router表示路由器路径
    //this.path，replace(替换)this.$router
    itemclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tabbar-item {
   flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
}
.tabbar-item img{
 width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
}
 .actived {
    color:coral;
    font-weight: bolder;
  }
</style>
