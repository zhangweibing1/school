<template>
  <div class="article-view">
    <div class="title">{{title}}</div>
    <div class="desc-info">
      <span class="desc-default author">{{author}}</span>
      <span class="desc-default date">{{date}}</span>
    </div>
    <div v-html="body"></div>
    <div class="quote">
      本内容由“第一财经”授权，如果有任何疑问请与“第一财经”联系。
    </div>
    <div>
      <van-tag v-for="(item, index) in tags" :key="index">
        {{item}}
      </van-tag>
    </div>
  </div>
</template>
<script>

import { fetchArticleById } from '@/services/api';

export default {
  data() {
    return {
      title: '',
      author: '',
      date: '',
      body: '',
      tags: [],
    };
  },
  methods: {
    async getArticle() {
      const { data } = await fetchArticleById({ id: this.$route.params.id });
      this.title = data.title;
      this.author = data.author;
      this.date = data.date;
      this.body = data.body;
      this.tags = data.tags;
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
<style lang="scss">
.title{
  margin-bottom: 3.3333vw;
}
.author{
  color: #333;
  margin-right: 3.2vw;
}
.date{
  color: #999;
}
.desc-info{
  margin-bottom: 3.3333vw;
}
.quote{
  font-size: 4.5333vw;
  line-height: 6.4vw;
  color: #999;
  padding-left: 3.3333vw;
  border-left: 1vw solid #ddd;
  margin-bottom: 3.3333vw;
}
</style>
