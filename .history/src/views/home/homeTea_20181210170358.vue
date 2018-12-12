<template>
  <div class="homeTea">
    <div class="m-l">
      <div class="carousel">
        <van-swipe :autoplay="3000" :show-indicators="false">
          <van-swipe-item>
            <div class="motto">
              <img :src="require('@/assets/home/cz-title.png')" alt="字体" class="font float-left">
              <img :src="require('@/assets/home/cz-logo.png')" alt="塔" class="logo float-right">
              <!-- 交校 -->
              <!-- <p>修德 启智</p>
              <p class="p2">习艺 笃行</p> -->
              <!-- 财专 -->
              <p>至诚 至信</p>
              <p class="p2">至善 至美</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="weather">
              <img :src="require('@/assets/home/cz-title.png')" alt="字体" class="font float-left">
              <img :src="require('@/assets/home/cz-logo.png')" alt="塔" class="logo float-right">
              <!-- 百度天气 -->
              <!-- <p>
                  <span class="temp">{{weathersData.results[0].weather_data[0].temperature}}</span>
                  <ion-icon>
                    <img :src="weathersData.results[0].weather_data[0].dayPictureUrl" alt="" />
                  </ion-icon>
              </p>
              <p class="p2">
                {{weathersData.results[0].weather_data[0].date}}
              </p> -->
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="notice">
        <van-notice-bar
        :text="this.infoList.noticeTitle"
        :left-icon="require('@/assets/home/Group 1.png')" background="transparent" color="#597698"/>
        <router-link :to="{name: 'infoList'}">
          <span class="more">更多</span>
        </router-link>
      </div>
      <div class="apply">
        <van-row gutter="10">
          <van-col span="8">
            <router-link :to="{name: 'stuList'}">
              <span class="common">
                <img :src="require('@/assets/home/Group 2.png')" alt="">
                <b>咨询服务</b>
              </span>
            </router-link>
          </van-col>
          <van-col span="8">
            <router-link :to="{name: 'apartemntVisitor'}">
              <span class="common">
                <img :src="require('@/assets/home/Group 3.png')" alt="">
                <b>访客登记</b>
              </span>
            </router-link>
          </van-col>
          <van-col span="8">
            <router-link :to="{name: 'apartemntSafety'}">
              <span class="common">
                <img :src="require('@/assets/home/Group 4.png')" alt="">
                <b>安全检查登记</b>
              </span>
            </router-link>
          </van-col>
        </van-row>
      </div>
      <div class="backlog">
        <div class="title">
          <img :src="require('@/assets/home/Group 5.png')" alt="tlogo">
          <span class="name">待办</span>
        </div>
        <van-swipe :width="220" :show-indicators="false" :loop="false">
          <van-swipe-item v-for="(item, index) in todoList" :key="index">
            <router-link
            :to="{name: JSON.parse(item.appUrl).MOBILE,
              params: {id: item.detailId, item: item}}">
              <div class="box">
                <h4>{{item.noticeTitle}}</h4>
                <span class="etype">审批</span>
                <p>{{item.content}}</p>
              </div>
            </router-link>
          </van-swipe-item>
        </van-swipe>
        <div class="m">
          <no-data v-if="this.todoList.length == 0"></no-data>
        </div>
      </div>
      <div class="newsList">
        <div class="title">
          <img :src="require('@/assets/home/Group 6.png')" alt="tlogo">
          <span class="name">资讯</span>
          <router-link :to="{name: 'newsList'}">
            <span class="more">更多</span>
          </router-link>
        </div>
        <div class="newsItem" v-for="(item, index) in newsList" :key="index">
          <router-link :to="{name: 'newsDetail', params: {item: item}}">
            <div class="newsTitleP">
              <h3 text-wrap>{{item.noticeTitle}}</h3>
              <img :src="$store.state.system.sftpPath + item.thumbnails" alt="">
            </div>
            <div class="dowm">
              <span class="school-news module" v-if="item.otherType == '1-'">资讯</span>
              <span class="school-news module" v-if="item.otherType == '2-'">通知</span>
              <span class="school-news module" v-if="item.otherType == '3-'">公告</span>
              <span>{{item.infoSources}}</span>
              <span class="note-ios">发布 {{item.sendTime}}</span>
            </div>
          </router-link>
        </div>
        <div class="m">
          <no-data v-if="this.newsList.length == 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { news } from '@/services/home';
import noData from '@/components/noData/noData.vue';

export default {
  name: 'homeTea',
  data() {
    return {
      weathersData: {},
      listAll: [],
      infoData: [],
      todoData: [],
      newsData: [],
      infoList: [],
      todoList: [],
      newsList: [],
      todoUrl: [],
    };
  },
  components: {
    'no-data': noData,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    async getNews() {
      const { data } = await news({ userId: this.userInfo.id });
      this.listAll = data;
      for (let i = 0; i < this.listAll.length; i += 1) {
        const item = this.listAll[i];
        // 0为消息
        if (item.noticeType === '0') {
          this.infoData.push(item);
          for (let j = 0; j < this.infoData.length; j += 1) {
            [this.infoList] = this.infoData[j].baNoticeList;
          }
        }
        // 6为待办
        if (item.noticeType === '6') {
          this.todoData.push(item);
          for (let j = 0; j < this.todoData.length; j += 1) {
            this.todoList = this.todoData[j].baNoticeList;
          }
        }
        // 7为资讯
        if (item.noticeType === '7') {
          this.newsData.push(item);
          for (let j = 0; j < this.newsData.length; j += 1) {
            this.newsList = this.newsData[j].baNoticeList;
          }
        }
      }
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>

<style lang="scss" scoped>
$box-shadow: 2px 3px 22px 3px rgba(193, 207, 219, 0.51);
.homeTea {
  padding-bottom: 15px;
  margin-bottom: 50px;
  background: linear-gradient(#fff, rgba(128, 185, 251, 0.18));
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .m-l{
    margin-left: 18px;
  }
  .m{
    margin-left: -18px;
  }
  .title {
    font-size: 14px;
    padding-right: 18px;
    margin: 18px 0 10px;
    img {
      width: 16px;
      vertical-align: middle;
      margin-right: 5px;
    }
    .name {
      color: #597698;
      vertical-align: middle;
    }
    .more {
      float: right;
      vertical-align: middle;
    }
  }
  .carousel {
    padding-top: 16px;
    .motto,
    .weather {
      position: relative;
      p {
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        top: 35px;
      }
      .p2 {
        top: 75px;
      }
    }
    .weather {
      p {
        font-size: 15px;
        top: 25px;
      }
      .temp {
        font-size: 40px;
      }
      .p2 {
        top: 75px;
      }
    }
    .font {
      margin-top: 16px;
      width: 205px;
      height: 18px;
    }
    .logo {
      width: 100px;
    }
  }
  .notice {
    height: 40px;
    padding-right: 30px;
    position: relative;
    margin-top: 18px;
    .van-notice-bar{
      padding: 0 30px 0 0;
    }
    .more{
      font-size: 14px;
      color: #597698;
      line-height: 40px;
      position: absolute;
      right: 18px;
      top: 0;
    }
  }
  .apply {
    margin-top: 20px;
    padding-right: 18px;
    .common {
      display: block;
      padding: 12px 0;
      border-radius: 8px;
      box-shadow: $box-shadow;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #fff;
      img {
        display: block;
        width: 48px;
        height: 48px;
        margin: 0 auto;
      }
      b {
        display: inline-block;
        width: 100%;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
  .backlog {
    overflow: visible;
    .box {
      position: relative;
      color: #999;
      text-align: left;
      border-radius: 8px;
      margin-right: 9px;
      padding: 16px;
      background-color: #fff;
      h4 {
        color: #000;
        font-size: 17px;
        margin: 0;
        line-height: 24px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-right: 35px;
      }
      .etype {
        display: block;
        color: #0081ec;
        border: 1px solid #0081ec;
        border-radius: 1px;
        position: absolute;
        top: 20px;
        right: 22px;
        padding: 0 4px;
        font-size: 12px;
      }
      p {
        margin: 0;
        font-size: 14px;
        text-overflow: ellipsis;
        width: 180px;
        // white-space: nowrap;
        // overflow: hidden;
      }
    }
  }
  .newsList {
    span {
      font-size: 14px;
      color: #999;
      height: 20px;
      display: inline-block;
    }
    .more{
      color: #597698;
    }
    .newsItem {
      margin: 9px 18px 0 0;
      padding: 15px;
      border-radius: 8px;
      box-shadow: $box-shadow;
      background-color: #fff;
      .newsTitle {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        h3 {
          font-size: 17px;
          margin: 0;
          line-height: 24px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        img {
          width: 88px;
          height: 56px;
          margin-left: 10px;
        }
      }
      .newsTitleP {
        margin-bottom: 10px;
        h3 {
          font-size: 17px;
          margin: 0;
          line-height: 24px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          color: #999;
          font-size: 14px;
          line-height: 19px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .down{
        height:25px;
        overflow: hidden;
      }
      .module {
        display: inline-block;
        color: #0081ec;
        background-color: #c4e5fd;
        border-radius: 2px;
        margin-right: 8px;
        padding: 0px 4px;
        font-weight: 600;
      }
      .note-ios {
        color: #999999;
        font-size: 12px;
        float: right;
      }
    }
  }
}
</style>
