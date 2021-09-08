<template>
  <div id="home">
      首页
      <!-- <button @click="$store.state.count++">+</button>
      <button @click="add(666)">+++</button>
      <p>{{$store.getters.powercounter}}</p>
      <p @click="update()">2s后{{$store.state.name}}</p>


      
    {{$store.state.count}} -->
      <button>-</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "home",
  data() {
    return {

    }
  },
  computed: {
  },
  methods:{
    add(a){
      this.$store.commit('increment',a)
      // this.$store.commit({type:'increment', a}) 这种提交风格适合多个参数，a为对象类型，所有mutations中的参数也是对象类型
    },
    update(){
      this.$store.dispatch('aupdate')
    }

  },
  components: {
  }
}
</script>

<style>
</style>
