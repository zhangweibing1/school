<template>
  <div class="news-pane" @click="toDetail">
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
          v-for="(tag, idx) in tagList"
          plain
          :key="idx"
          :type="tagTypes[tag].key">
          {{tagTypes[tag].text}}
        </van-tag>
      </div>
      <div class="time-default">{{news.time}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Announcement',
  props: {
    news: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      tagTypes: {
        a: {
          key: 'danger',
          text: '重要',
        },
        b: {
          key: 'primary',
          text: '学生处',
        },
        c: {
          key: 'success',
          text: '附件',
        },
      },
    };
  },
  computed: {
    tagList() {
      return this.news.tags.split('|');
    },
  },
  methods: {
    toDetail() {
      this.$emit('read', this.index);
    },
  },
};
</script>
<style lang="scss">
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
