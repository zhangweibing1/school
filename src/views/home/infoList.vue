<template>
  <div class="infoList">
      <back-button></back-button>
    <van-nav-bar
      title="消息"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="between">
      <div class="info" v-for="(item, idx) in infoList" :key="idx" @click="goDetail(item)">
          <span class="text-icon" v-if="item.isRed == ''">{{item.sourceName}}</span>
          <img :src="require('@/assets/news/gj@2x.png')" v-if="item.isRed === '1'" class="send"/>
          <div class="send-right">
            <h2>{{item.noticeTitle}}
                <span class="read" v-if="item.isRed != ''">必读</span>
            </h2>
            <div class="label-notice">
                <span class="source">来源：[{{item.sourceName}}]</span>
                <span class="file" v-if="item.filePaht != '' || null">
                    <img :src="require('@/assets/news/fj@2x.png')" />
                </span>
            </div>
            <div class="label-read">
                <span class="no-read" v-if="item.baRemind.isRead === '0'">未读</span>
                <span class="yes-read" v-if="item.baRemind.isRead === '1'">已读</span>
                <span class="time">{{item.sendTime}}</span>
            </div>
          </div>
      </div>
    </div>
    <div v-if="this.infoList.length == 0">
      <no-data></no-data>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { List, Read } from '@/services/home';
import noData from '@/components/noData/noData.vue';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'infoList',
  data() {
    return {
      infoList: [],
      appJSObject: window.AppJSObject,
    };
  },
  components: {
    'no-data': noData,
    'back-button': backButton,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getInfo() {
      // userId: this.userInfo.id,
      const { data } = await List({ userId: this.appJSObject.getUserId(), noticeType: '0' });
      this.infoList = data;
    },
    async goDetail(item) {
      if (item.baRemind.isRead === '0') {
        await Read({ id: item.baRemind.id });
      }
      this.$router.push({
        name: 'infoDetail',
        params: {
          items: item,
        },
      });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
  .infoList{
    padding-top: 46px;
    background: #fff;
  }
  .between{
    margin: 0px 12px;
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
      width: 88%;
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
