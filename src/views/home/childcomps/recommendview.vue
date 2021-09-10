<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "recommendview",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.recommends {
  display: flex;
  padding: 10px 0px 15px;
  border-bottom: 4px solid #eee;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
