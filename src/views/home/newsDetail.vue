<template>
  <div class="newsDetail">
    <div v-if="navback">
      <back-button></back-button>
    </div>
    <van-nav-bar
      title="新闻详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="between">
        <div class="title">
          <h3>{{item.noticeTitle}}</h3>
          <div class="label">信息来源：{{item.infoSources}}&#12288;{{item.sendTime}}</div>
        </div>
        <div class="content">
          <p v-html="item.content">内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backButton from '@/components/backButton/backButton.vue';
import { newsDetail } from '@/services/home';

export default {
  name: 'newsDetail',
  data() {
    return {
      item: {},
      appJSObject: window.AppJSObject,
      navback: false,
    };
  },
  components: {
    'back-button': backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async newsDetail() {
      const { data } = await newsDetail({ id: this.appJSObject.getBeanId() });
      this.item = data;
    },
  },
  mounted() {
    if (!this.$route.params.item) {
      this.navback = true;
      this.newsDetail();
    } else {
      this.item = this.$route.params.item;
    }
  },
};
</script>

<style lang="scss" scoped>
  .newsDetail{
    padding-top:46px;
    .between{
      margin:0 12px;
    }
    .top{
      margin-top: 11px;
      background: #fff;
    }
    .title{
      padding: 20px 0;
      border-bottom: 1px solid #e7e7e7;
      h3{
        font-size: 16px;
        color:#333;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .label{
        font-size: 15px;
        color:#999;
        line-height: 26px;
        span{
          color:#666;
        }
      }
    }
    .content{
      padding: 20px 0;
      font-size: 15px;
      color:#666;
      line-height: 30px;
      p{
        text-indent: 2em;
      }
    }
  }
</style>
