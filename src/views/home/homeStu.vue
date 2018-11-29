<template>
  <div class="homeStu">
    <div class="card">
        <div class="up">
            <div>
                <div class="photo">
                    <img :src="$store.state.system.sftpPath + $store.state.system.userInfo.zP"
          :onerror="defaultImg" alt="">
                </div>
                <div class="info">
                    <div class="name">{{$store.state.system.userInfo.userName}}</div>
                    <div class="class">{{$store.state.system.userInfo.className}}</div>
                </div>
            </div>
            <!-- <div class="ewm">
                <img class="ma" src="../../assets/home/icon-ewm.png" alt="">
                <img class="tri" src="../../assets/home/Chevron.png" alt="">
            </div> -->
        </div>
        <div class="down">
            <div class="item">
                <span>{{$store.state.system.userInfo.deptName}}</span>
                <div>所在系别</div>
            </div>
            <div class="item">
                <span>45人</span>
                <div>同班同学</div>
            </div>
            <div class="item">
                <span>白羊座</span>
                <div>星座</div>
            </div>
        </div>
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
        <van-col span="6">
          <router-link :to="{name: 'leave'}">
            <span class="common">
              <img src="../../assets/home/KB.png" alt="">
              <b>请假申请</b>
            </span>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{name: 'replace'}">
            <span class="common">
              <img src="../../assets/home/XQ.png" alt="">
              <b>证件补办</b>
            </span>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{name: 'onlineBooking'}">
            <span class="common">
              <img src="../../assets/home/JY.png" alt="">
              <b>在线预约</b>
            </span>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{name: 'workPlace'}">
            <span class="common">
              <img src="../../assets/home/ZY.png" alt="">
              <b>生源地上报</b>
            </span>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <!-- <div class="backlog">
      <div class="iconImg">
        <img src="../../assets/home/TZ.png" alt="">
      </div>
      <div class="info">
        <div class="title">6月31日请假单以批准</div>
        <div class="con">高老师：好好休息</div>
      </div>
      <div class="badge">
        <span class="num">3</span>
        <van-icon name="arrow" />
      </div>
    </div> -->
    <div class="newsList">
      <div class="title">
        <img src="../../assets/home/Group 6.png" alt="tlogo">
        <span class="name">资讯</span>
        <router-link :to="{name: 'newsList'}">
          <span class="more">更多</span>
        </router-link>
      </div>
      <div class="newsItem" v-for="(item, index) in newsList" :key="index">
        <router-link :to="{name: 'newsDetail', params: {item: item}}">
          <div class="newsTitle">
            <h3 text-wrap>{{item.noticeTitle}}</h3>
            <img :src="$store.state.system.sftpPath + item.thumbnails" alt="">
          </div>
          <div>
            <span class="school-news module" v-if="item.otherType == '1-'">资讯</span>
            <span class="school-news module" v-if="item.otherType == '2-'">通知</span>
            <span class="school-news module" v-if="item.otherType == '3-'">公告</span>
            <span>{{item.infoSources}}</span>
            <span class="note-ios">发布 {{item.sendTime}}</span>
          </div>
        </router-link>
      </div>
      <div v-if="this.newsList.length == 0">
        <no-data></no-data>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { news } from '@/services/home';
import noData from '@/components/noData/noData.vue';

export default {
  name: 'homeStu',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      listAll: [],
      infoData: [],
      todoData: [],
      newsData: [],
      infoList: [],
      todoList: [],
      newsList: [],
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
.homeStu {
  padding-bottom: 15px;
  margin-bottom: 50px;
  background: url("../../assets/home/bg.png") no-repeat;
  background-size: 100%;
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .title {
    font-size: 14px;
    padding-right: 18px;
    margin: 10px 0;
    margin-left: 18px;
    img {
      width: 16px;
      vertical-align: middle;
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
  .card{
    margin: 8px;
    margin-top: 0;
    padding: 18px 18px 10px;
    background: url('../../assets/home/Bitmap1.png') 0 12px no-repeat;
    background-size: 100%;
    box-shadow: 0 0 0 rgba(110, 127, 149, 0.13);
    .up{
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 10px;
      .photo{
        width: 70px;
        height: 70px;
        float:left;
        background: url('../../assets/home/TX.png') no-repeat top;
        background-size: 100%;
        img{
          padding: 10px;
          margin-top: 3.5px;
        }
      }
      .info{
        margin: 20px 0 0;
        float:left;
        .name{
          font-size: 18px;
          color:#ffffff;
        }
        .class{
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
        }
      }
      .ewm{
        float: right;
        margin-top: 33px;
        .ma{
          width: 19px;
        }
        .tri{
          width: 8px;
          margin-left: 15px;
          padding-bottom: 3px;
        }
      }
    }
    .down{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      .item{
        text-align: center;
        margin: 10px 15px;
        span{
          font-size: 18px;
          color:#ffffff;
          height: 25px;
          display: block;
        }
        div{
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
        }
      }
    }
  }
  .notice {
    height: 40px;
    padding-right: 30px;
    position: relative;
    margin: 18px 8px 0;
    background: rgba(38,114,255,0.1);
    border-radius: 21px;
    padding-left: 8px;
    .van-notice-bar{
      padding: 0 30px 0 0;
    }
    .more{
      font-size: 14px;
      color: #597698;
      line-height: 40px;
      position: absolute;
      right: 10px;
      top: 0;
    }
  }
  .apply {
    margin-top: 20px;
    padding:0 9px;
    background-color: #fff;
    .common {
      display: block;
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
      }
      b {
        display: inline-block;
        width: 100%;
        text-align: center;
        margin-top: 10px;
        font-size: 13px;
      }
    }
  }
  .backlog {
    margin-top: 8px;
    overflow: hidden;
    background: #fff;
    padding: 8px 20px 2px;
    .iconImg{
      float: left;
      width: 68px;
    }
    .info{
      float: left;
      margin: 10px 0 10px 11px;
      .title{
        font-size: 18px;
        color:#333;
        margin: 0;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .con{
        color:#ccc;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 15px;
        margin-top: 4px;
      }
    }
    .badge{
      float: right;
      margin: 24px 0 0px;
      .num{
        display: inline-block;
        background: #ff3b30;
        color:#fff;
        border-radius: 50%;
        padding: 1px 5px;
        font-size: 10px;
        transform: translateY(-3px);
      }
      .van-icon{
        color:#ccc;
        font-size: 15px;
      }
    }
  }
  .newsList {
    margin-top: 8px;
    background-color: #fff;
    span {
      font-size: 14px;
      color: #597698;
      height: 20px;
      display: inline-block;
    }
    .title {
      padding-top: 8px;
    }
    .newsItem {
      margin: 15px;
      margin-bottom: 0;
      padding-bottom: 18px;
      border-bottom: 1px solid #ededed;
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
      span {
        font-size: 12px;
        color: #999999;
      }
      .module {
        display: inline-block;
        color: #0081ec;
        background-color: #c4e5fd;
        border-radius: 1px;
        margin-right: 8px;
        padding: 2px;
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
