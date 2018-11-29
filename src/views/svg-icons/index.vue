<template>
  <van-row>
    <van-col span="6" v-for="(svg, index) in iconMap" :key="index">
      <svg-icon :icon-class="svg"></svg-icon>
    </van-col>
  </van-row>
</template>
<script>

import iconsMeta from './icons-meta';

export default {
  name: 'icons',
  data() {
    return {
      iconMap: [],
    };
  },
  mounted() {
    const iconMap = iconsMeta.iconMap.map((svg) => {
      const result = svg.default.id.split('-')[1];
      return result;
    });
    this.iconMap = iconMap;
  },
};
</script>
