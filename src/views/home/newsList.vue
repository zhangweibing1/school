<template>
  <div class="newsList">
    <back-button></back-button>
    <van-nav-bar
      title="资讯"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <van-tabs @click="goItem">
      <van-tab v-for="index in menuList" :title="index.title" :key="index.id">
        <div class="info"  v-for="(item, idx) in list" :key="idx">
          <router-link :to="{ name: 'newsDetail',params: {item: item}}">
          <div class="send-right">
            <h2>{{item.noticeTitle}}
                <span class="read" v-if="item.isRed === '1'">必读</span>
            </h2>
            <div class="label-notice">
                <span class="source">来源：{{item.infoSources}}</span>
                <span class="file" v-if="item.filePaht != '' || null">
                    <img :src="require('@/assets/news/fj@2x.png')" />
                </span>
            </div>
            <div class="label-read">
              <span class="no-read" v-if="item.isRead === '0'">未读</span>
              <span class="yes-read" v-if="item.isRead === '1'">已读</span>
              <span class="time">{{item.sendTime}}</span>
            </div>
          </div>
          </router-link>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { List } from '@/services/home';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'newsList',
  data() {
    return {
      list: [],
      menuList: [
        {
          id: 'notice',
          title: '通知',
        },
        {
          id: 'announcement',
          title: '公告',
        },
        {
          id: 'news',
          title: '资讯',
        },
      ],
      type: '',
      appJSObject: window.AppJSObject,
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  components: {
    'back-button': backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getInfo() {
      const { data } = await List({
        userId: this.appJSObject.getUserId(),
        // userId: this.userInfo.id,
        noticeType: '7',
        otherType: '1',
      });
      this.list = data;
    },
    async goItem(index, title) {
      if (index === 0) {
        this.type = '1';
      }
      if (index === 1) {
        this.type = '2';
      }
      if (index === 2) {
        this.type = '3';
      }
      const { data } = await List({
        // userId: this.userInfo.id,
        userId: this.appJSObject.getUserId(),
        noticeType: '7',
        otherType: this.type,
      });
      this.list = data;
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
  .newsList{
    padding: 46px 12px 0 12px;
    background: #fff;
  }
  .info{
    overflow: hidden;
    padding: 20px 0px;
    border-bottom: 1px solid #e7e7e7;
    &:last-child{
      border: 0;
    }
    img.send{
      width:24px;
      height: 24px;
      float: left;
      margin-top: 5px;
    }
    h2{
      width:99%;
      font-size: 16px;
      color:#333;
      word-wrap: break-word;
      word-break:break-all;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      line-height: 24px;
      .read{
        background-color: #ff5757;
        font-size: 12px;
        color:#fff;
        border-radius: 2px;
        position: relative;
        left: 2%;
        bottom: 1px;
        padding: 2px 3px;
      }
    }
    .send-right{
      width: 96%;
      float: left;
      margin-left: 10px;
        .label-notice{
          line-height: 30px;
          .source{
              color: #666;
              font-size: 15px;
          }
          .file{
              width: 14px;
              height: 14px;
              margin-top: 2px;
              float: right;
              >img{
                  width:100%;
              }
          }
      }
    .label-read{
      line-height: 20px;
      .no-read{
        color: #ff5757;
        font-size: 12px;
        padding: 0px 2px;
        border: 1px solid #ff5757;
        margin-right: 10px;
        border-radius: 2px;
      }
      .yes-read{
        color: #999999;
        font-size: 12px;
        padding: 0px 2px;
        border: 1px solid #999999;
        margin-right: 10px;
        border-radius: 2px;
      }
      .time{
        color:#999;
        font-size: 14px;
      }
    }
  }
  .text-icon{
    width: 24px;
    height: 24px;
    float: left;
    background-color: #1890ff;
    border-radius: 50%;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 24px;
    margin-top: 5px;
    }
  }
</style>
