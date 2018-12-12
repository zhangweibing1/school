<template>
  <div class="details">
    <van-nav-bar title="资讯详情" left-text="返回" right-text left-arrow fixed @click-left="onClickLeft"/>
    <div class="wrapper">
      <p class="title">{{msgObject.noticeTitle}}</p>
      <p class="date">消息来源：{{msgObject.infoSources}}&nbsp;&nbsp;&nbsp;14:00</p>
      <p class="content" v-html="msgObject.content"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {loadBaNoticeAndNewDetail} from '@/services/home';
export default {
  name: "details",
  data() {
    return {
      msgObject:{},
      params:{
        id:"",
      }
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  mounted() {
        this.loadMsgDetail();
  },
  methods: {
    async loadMsgDetail(){
      this.params.id = this.$route.params.id;
      const data = await loadBaNoticeAndNewDetail(this.params);
      this.msgObject = data.data;
      data.data.sendTime.substring(0,10);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
.details {
  padding: 44px 0 46px;
  background: #fff;
}
.wrapper {
  padding: 22px 12px;
}
.title {
  color: #333;
  font-size: 17px;
  font-weight: 600;
}
.date {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
}
.content {
  color: #666;
  font-size: 15px;
  text-indent: 2em;
  margin-top: 20px;
}
.wrapper img {
  width: 100%;
  margin-top: 20px;
}
</style>
