<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "NavBar",
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.navbar {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left,.right {
  width: 60px;
}
.center {
  flex: 1;
  color:white;
}
</style>
