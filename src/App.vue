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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
