<template>
  <div class="notice">
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
      <van-tab title="新闻资讯">
        <div class="wrapper">
          <ul class="information">
            <li class="list">
              <div class="list_left">
                <p>我校2018年暑期“三下乡”社会实践活动启动</p>
                <div class="date">
                  <p class="time">
                    <img :src="require('@/assets/time.png')" alt>
                    7月23日&nbsp;13:24
                  </p>
                </div>
              </div>
              <div class="list_right">
                <img :src="require('@/assets/picture.png')" alt>
              </div>
            </li>
            <li class="list">
              <div class="list_left">
                <p>我校2018年暑期“三下乡”社会实践活动启动我校2018年暑期“三下乡”社会实践活动启动</p>
                <div class="date">
                  <p class="time">
                    <img :src="require('@/assets/time.png')" alt>
                    7月23日&nbsp;13:24
                  </p>
                </div>
              </div>
              <div class="list_right">
                <img :src="require('@/assets/picture.png')" alt>
              </div>
            </li>
            <li class="list">
              <div class="list_left2">
                <p>我校2018年暑期“三下乡”社会实践活动启动我校2018年暑期“三下乡”社会实践活动启动</p>
                <div class="date">
                  <p class="time">
                    <img :src="require('@/assets/time.png')" alt>
                    7月23日&nbsp;13:24
                  </p>
                </div>
              </div>
            </li>
            <li class="list">
              <div class="list_left">
                <p>我校2018年暑期“三下乡”社会实践活动启动我校2018年暑期“三下乡”社会实践活动启动</p>
                <div class="date">
                  <p class="time">
                    <img :src="require('@/assets/time.png')" alt>
                    7月23日&nbsp;13:24
                  </p>
                </div>
              </div>
              <div class="list_right">
                <img :src="require('@/assets/picture.png')" alt>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'notice',
  date() {
    return {
      active: 2,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goDetail() {
      this.$router.push('details');
    },
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  mounted() {
    console.log(this.$route.params.type);
  },
};
</script>

<style scoped>
.notice {
  padding: 44px 0 46px;
}
.wrapper {
  width: 100%;
  padding: 0px 12px;
  background: #fff;
}
.one {
  padding: 19px 0;
  border-bottom: solid #e7e7e7 1px;
}
.one h4 {
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 600;
}
.content-block {
  margin: 0 !important;
  padding: 0 !important;
}
.bd {
  width: 38px;
  height: 18px;
  font-weight: 600;
  color: #ff1717;
  font-size: 13px;
  background: #ffeeee;
  display: inline-block;
  text-align: center;
  line-height: 18px;
  margin-left: 8px;
}
.neirong {
  font-size: 16px;
  color: #666666;
  margin: 12px 0 !important;
}
.date img {
  width: 13.5px;
  height: 13.5px;
  display: inline-block;
}
.ly {
  height: 32px;
  display: flex;
  line-height: 30px;
}
.ly span {
  font-size: 15px;
  color: #666666;
}
.date p {
  margin: 0;
  color: #999999;
  font-size: 14px;
}
.yd {
  width: 38px;
  height: 18px;
  font-weight: 600;
  color: #c1c1c1;
  font-size: 13px;
  background: #f6f6f6;
  display: inline-block;
  text-align: center;
  line-height: 18px;
  margin-left: 8px;
}
.wrapper .one:last-child {
  border: 0;
}
/* 通知结束 */
/* 资讯开始 */
.list {
  padding: 20px 0;
  border-bottom: solid 1px #e5e5e5;
  display: flex;
  justify-content: space-between;
}
.information .list:last-child {
  border: 0;
}
.list_left {
  width: 200px;
}
.list_left p {
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 50px;
  overflow: hidden;
}
.list_right {
  width: 113px;
  height: 80px;
  overflow: hidden;
}
.list_right img {
  width: 100%;
}
.list_left2 {
  width: 100%;
}
.list_left2 p {
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 50px;
  overflow: hidden;
}
.time {
  font-size: 14px;
  color: #999999 !important;
  font-weight: 500 !important;
  margin-top: 12px !important;
}
</style>
