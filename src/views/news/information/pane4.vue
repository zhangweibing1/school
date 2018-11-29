<template>
  <div @click="toDetail(info.id)">
    <div class="title title-default">{{info.title}}</div>
    <div class="picture">
      <img :src="info.pictures[0]"/>
    </div>
    <div class="other-info flexbox center">
      <van-tag
        class="tag-item"
        plain
        :type="tagTypes[info.tags].key">
        {{tagTypes[info.tags].text}}
      </van-tag>
      <a class="time-default resource" :href="info.resource">文章来源</a>
      <span class="time-default reading">{{info.reading_quantity}}阅读</span>
    </div>
  </div>
</template>
<script>

import { tagTypes } from '@/utils/constant';
import mixin from './mixin/';

export default {
  name: 'info-pane-4',
  mixins: [mixin],
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tagTypes,
    };
  },
};
</script>
<style lang="scss" scoped>
.text-block{
  width: 58.8vw;
}
.picture{
  width: 100%;
  height: 48vw;
  overflow: hidden;
  border-radius: 2.2vw;
  margin-bottom: 3.2vw;
}
.title{
  margin-bottom: 3.2vw;
}
.tag-item{
  margin-right: 2.2vw;
}
.resource{
  margin-right: 2.2vw;
}
.reading{
  margin-right: 2.2vw;
}
</style>
