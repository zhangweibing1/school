<template>
  <div class="infoDetail">
    <div v-if="navback">
      <back-button></back-button>
    </div>
    <van-nav-bar
      title="消息详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="between">
        <div class="title">
          <h3>{{item.noticeTitle}}</h3>
          <div class="label">发起部门&#12288;<span>{{item.infoSources}}</span></div>
          <div class="label">发起给&#12288;<span>全体师生</span></div>
          <div class="label">{{item.sendTime}}</div>
        </div>
        <div class="content">
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="file" v-if="item.filePaht != '' || null">
        <div class="fj">附件</div>
        <div class="item">
          <img :src="require('@/assets/word.png')" alt="">
          <div class="fileName">国家助学金申请表.doc</div>
          <div class="download">下载</div>
        </div>
      </div>
    </div>
    <!-- <div class="read">
      读取完毕后请点击“已阅”按钮哦~<span class="isRead">已阅</span>
    </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue">入口</van-button>
    </div> -->
  </div>
</template>

<script>
import backButton from '@/components/backButton/backButton.vue';
import { newsDetail } from '@/services/home';

export default {
  name: 'infoDetail',
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
    if (!this.$route.params.items) {
      this.navback = true;
      this.newsDetail();
    } else {
      this.item = this.$route.params.items;
    }
  },
};
</script>

<style lang="scss" scoped>
  .infoDetail{
    padding-top:46px;
    .between{
      margin:0 12px;
    }
    .top{
      margin-top: 11px;
      background: #fff;
    }
    .title{
      border-bottom:1px solid #e7e7e7;
      padding: 20px 0;
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
    .file{
      padding: 20px 12px;
      .fj{
        font-size: 16px;
        color:#333;
      }
      .item{
        margin-top: 16px;
        font-size: 14px;
        overflow: hidden;
        img{
          width: 40px;
          height: 40px;
          float: left;
        }
        .fileName{
          color:#666;
          float: left;
          margin-left: 15px;
          line-height: 40px;
        }
        .download{
          padding:3px 17px 3px 16px;
          border: 1px solid #0093ff;
          color:#0093ff;
          float: right;
          border-radius: 2px;
          margin-top: 6px;
        }
      }
    }
    .read{
      color:#ff5757;
      margin: 20px 12px;
      .isRead{
        color: #999999;
        font-size: 12px;
        padding: 3px 9px;
        border: 1px solid #999999;
        border-radius: 2px;
        float: right;
      }
    }
    .btn-group{
      padding: 0 38px;
      margin: 40px 0;
      .btn{
          font-size: 17px;
          margin: 0 auto 15px;
          border-radius: 30px;
          height: 6.8vh;
          line-height: 6.8vh;
          background-color: #FFFFFF;
          color: #1890ff;
          border: 1px solid #1890FF;
      }
      .blue{
          background-color: #1890ff;
          color: #FFFFFF;
      }
    }
  }
</style>
