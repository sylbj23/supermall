<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
//import img from"../../assets/img"
export default {
  name: "tabbar",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>

