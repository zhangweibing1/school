<template>
  <van-list>
    <div class="news-pane" v-for="(news, idx) in list" :key="idx"  @click="toDetail(idx, news.id)">
      <div class="title">
        <i class="news-unread" v-if="news.status === 'unread'"></i>
        <div class="title-default">
          {{news.title}}
        </div>
      </div>
      <div class="flexbox between">
        <div>
          <van-tag
            class="tag-item"
            v-for="(tag, idx) in news.tags.split('|')"
            plain
            :key="idx"
            :type="tagTypes[tag].key">
            {{tagTypes[tag].text}}
          </van-tag>
        </div>
        <div class="time-default">{{news.time}}</div>
      </div>
    </div>
  </van-list>
</template>
<script>

import { fetchMessage } from '@/services/api';
import { tagTypes } from '@/utils/constant';
import OverWatch from 'OWSDK';

export default {
  name: 'Message',
  data() {
    return {
      list: [],
      tagTypes,
    };
  },
  computed: {
  },
  methods: {
    toDetail(idx, id) {
      this.list[idx].status = 'read';
      OverWatch.openPage(`http://47.93.235.47:3001/#/article/${id}`);
      // this.$router.push(`/article/${id}`);
    },
    async getMessage() {
      const { data } = await fetchMessage();
      this.list = data.map((item, idx) => {
        if (idx) {
          item.status = 'unread';
        } else {
          item.status = 'read';
        }
        return item;
      });
    },
  },
  mounted() {
    this.getMessage();
  },
};
</script>
<style lang="scss" scoped>
  .title{
    position: relative;
  }
  .news-pane{
    background-color: #fff;
    padding: 2vw 5.33333vw 3.3333vw;
    border-bottom: 1px solid #eee;
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  .title-default{
    margin-bottom: 3.2vw;
    padding-left: 3vw;
  }
  .tag-item{
    margin-right: 3.2vw;
    &:last-child{
      margin-right: 0;
    }
  }
  .news-unread{
    position: absolute;
    left: -2vw;
    top: 1.6vw;
    display: block;
    width: 2.5vw;
    height: 2.5vw;
    background-color: #f00;
    border-radius: 50%;
  }
</style>
