<template>
  <div class="view">
    <van-tabs v-model="active" swipeable :line-width="30">
      <van-tab v-for="(item, index) in tabs" :key="index">
        <div slot="title" class="tabtitle">
          <div class="inner">
            {{item.name}}
            <span class="badge">8</span>
          </div>
        </div>
        <message-list v-if="active === 0"></message-list>
        <message-list v-else-if="active === 1"></message-list>
        <information-list v-else-if="active === 2"></information-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>

import MessageList from './MessageList.vue';
// import AnnouncementList from './news/AnnouncementList.vue'
import InformationList from './InformationList.vue';

export default {
  components: {
    MessageList,
    InformationList,
  },
  data() {
    return {
      active: 0,
      tabs: [{
        name: '通知',
        key: '1',
      }, {
        name: '公告',
        key: '2',
      }, {
        name: '资讯',
        key: '3',
      }],
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.tabtitle{
  .inner{
    position: relative;
    display: inline-block;
  }
}
.badge{
  position: absolute;
  top: 1vw;
  right: -4vw;
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f00;
  color: #fff;
  border-radius: 50%;
}
</style>
