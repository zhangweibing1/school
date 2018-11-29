<template>
  <van-list>
    <div v-for="(info, index) in list" :key="index" class="news-pane">
      <pane-1 v-if="info.type === '1'" :info="info"></pane-1>
      <pane-2 v-if="info.type === '2'" :info="info"></pane-2>
      <pane-3 v-if="info.type === '3'" :info="info"></pane-3>
      <pane-4 v-if="info.type === '4'" :info="info"></pane-4>
    </div>
  </van-list>
</template>
<script>

import { fetchInformation } from '@/services/api';
import Pane1 from './information/pane1.vue';
import Pane2 from './information/pane2.vue';
import Pane3 from './information/pane3.vue';
import Pane4 from './information/pane4.vue';

export default {
  name: 'Information',
  components: {
    Pane1,
    Pane2,
    Pane3,
    Pane4,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getInformation() {
      const { data } = await fetchInformation();
      this.list = data;
    },
  },
  mounted() {
    this.getInformation();
  },
};
</script>
<style lang="scss">
.news-pane{
  background-color: #fff;
  padding: 2vw 5.33333vw 3.3333vw;
  border-bottom: 1px solid #eee;
  &:first-child{
    border-top: 1px solid #eee;
  }
}
</style>
