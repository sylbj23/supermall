<template>
  <div id="app">
    <router-view></router-view>
   <maintabbar/>
  </div>
</template>

<script>
import maintabbar from "components/content/maintabbar/maintabbar"
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
@import'assets/css/base.css';
@import'assets/css/normalize.css';


</style>
