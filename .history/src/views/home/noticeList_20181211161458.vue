<template>
  <div class="noticeList">
    <van-nav-bar title="资讯" left-text="返回" right-text left-arrow fixed @click-left="onClickLeft"/>
    <van-tabs v-model="active">
      <van-tab title="通知公告">
        <div class="wrapper">
          <div class="one">
            <h4>
              欢迎使用青峰教务系统
              <span class="bd">未读</span>
            </h4>
            <p class="neirong">青峰教务系统是青峰软件有限公司专为小学、初中和高中研发的智能化校园教务办公系统，旨在解决学校教务办公、家长查询...</p>
            <div class="date">
              <p class="time">
                <img :src="require('@/assets/time.png')" alt> 5分钟前
              </p>
            </div>
          </div>
          <div class="one">
            <h4>
              公司纪律声明公司纪律声明公司纪律声明公司纪律声明公司纪律声明
              <span class="yd">已读</span>
            </h4>
            <div class="date">
              <p class="time">
                <img :src="require('@/assets/time.png')" alt> 5分钟前
              </p>
            </div>
          </div>
          <div class="one">
            <h4>
              公司纪律声明公司纪律声明公司纪律声明公司纪律声明公司纪律声明
              <span class="yd">已读</span>
            </h4>
            <div class="date">
              <p class="time">
                <img :src="require('@/assets/time.png')" alt> 5分钟前
              </p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="新闻资讯"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'details',
  data() {
    return {
      active:0,
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  mounted() {
    this.active = this.$route.params.type;
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
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
