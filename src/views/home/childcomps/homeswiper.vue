<template>
 <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
</template>

<script type="text/javascript">
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "homeswiper",
   components: {Swiper,SwiperItem
  },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data() {
    return {

    }
  },
 
}
</script>

<style>
</style>
