<template>
  <div class="applyForDetail">
    <van-nav-bar
      title="申请详情"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="flexbox personal-info between" slot="header">
        <div class="flexbox center">
          <div class="avatar">
            <img src="../../../assets/tx@2x.png" alt="">
          </div>
          <div>
            <div class="name">{{item.name}}</div>
            <div class="result warning">{{item.orderType}}</div>
          </div>
        </div>
      </div>
      <ul class="list">
        <li>
          <span class="title">开始时间</span>
          <span class="text">{{item.startTime}}</span>
        </li>
        <li>
          <span class="title">结束时间</span>
          <span class="text">{{item.endTime}}</span>
        </li>
        <li>
          <span class="title">人数</span>
          <span class="text">{{item.userNum}}人</span>
        </li>
        <li>
          <span class="title">会议内容</span>
          <span class="text">{{item.content}}</span>
        </li>
        <li>
          <span class="title">来院嘉宾</span>
          <span class="text">{{item.guest}}</span>
        </li>
        <li>
          <span class="title">出席院领导</span>
          <span class="text">{{item.leaderNames}}</span>
        </li>
        <li>
          <span class="title">电子屏内容</span>
          <span class="text">{{item.txt}}</span>
        </li>
        <li>
          <span class="title">是否使用投影</span>
          <span class="text">{{item.isUseProjector}}</span>
        </li>
        <li>
          <span class="title">是否使用电子屏</span>
          <span class="text">{{item.isUseScreen}}</span>
        </li>
        <li>
          <span class="title">是否使用一体机</span>
          <span class="text">{{item.isUseAllToOne}}</span>
        </li>
        <li>
          <span class="title">是否使用音响</span>
          <span class="text">{{item.isUseStereo}}</span>
        </li>
        <li>
          <span class="title">提交时间</span>
          <span class="text">{{item.createTime}}</span>
        </li>
      </ul>
    </div>
    <div class="top">
      <div class="between">
        <ul class="state">
          <li>
            <img src="../../../assets/tx@2x.png">
            <span></span>
            <span class="gray">马小帅</span>
            <span class="gray">发起申请</span>
            <span>08-25 10:00</span>
          </li>
          <li>
            <img src="../../../assets/tx@2x.png">
            <span></span>
            <span class="gray">段玲雪</span>
            <span class="success">已同意</span>
            <span>08-25 10:00</span>
            <br>
            <p class="describe">注意安全</p>
          </li>
          <li>
            <img src="../../../assets/tx@2x.png">
            <span></span>
            <span class="gray">赵佳</span>
            <span class="success">已同意</span>
            <span>08-25 10:00</span>
          </li>
          <li>
            <img src="../../../assets/tx@2x.png">
            <span></span>
            <span class="gray">曹静</span>
            <span class="warning">审批中</span>
            <span>08-25 10:00</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="top">
      <div >
        <div class="between detail">为您安排的会议室详情</div>
        <ul class="list">
          <li><span class="title">会议室地点</span>{{item.roomName ? item.roomName : '暂未安排'}}</li>
          <li v-if="item.roomName != ''"><span class="title">开始时间</span>{{item.startTime}}</li>
          <li v-if="item.roomName != ''"><span class="title">结束时间</span>{{item.endTime}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { applyForSP } from '@/services/meeting';

export default {
  name: 'applyForDetail',
  data() {
    return {
      applyForID: {
        id: this.id,
      },
      item: {
        name: '',
        orderType: '',
        startTime: '',
        endTime: '',
        userNum: '',
        content: '',
        roomId: '',
        roomName: '',
        orderId: '',
        guest: '',
        leaderNames: '',
        txt: '',
        createTime: '',
        isUseProjector: '',
        isUseAllToOne: '',
        isUseStereo: '',
        isUseScreen: '',
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMessage(id) {
      await applyForSP(id);
    },
  },
  mounted() {
    this.item = {
      name: this.$route.params.item.name,
      orderType: this.$route.params.item.orderType,
      startTime: this.$route.params.item.startTime,
      endTime: this.$route.params.item.endTime,
      userNum: this.$route.params.item.userNum,
      content: this.$route.params.item.content,
      roomId: this.$route.params.item.roomId,
      roomName: this.$route.params.item.roomName,
      orderId: this.$route.params.item.orderId,
      guest: this.$route.params.item.guest,
      leaderNames: this.$route.params.item.leaderNames,
      txt: this.$route.params.item.txt,
      createTime: this.$route.params.item.createTime,
      isUseProjector: this.$route.params.item.isUseProjector,
      isUseAllToOne: this.$route.params.item.isUseAllToOne,
      isUseStereo: this.$route.params.item.isUseStereo,
      isUseScreen: this.$route.params.item.isUseScreen,
    };
    this.applyForID = {
      id: this.$route.params.id,
    };
    this.getMessage(this.applyForID);
  },
};
</script>

<style lang="scss" scoped>
.applyForDetail{
  padding-bottom: 60px;
  .success {
    color: #51bf61 !important;
  }
  .warning{
    color: #ea9542 !important;
  }
  .danger{
    color: #ff5757 !important;
  }
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .personal-info{
    padding:15px 0px;
    border-bottom:1px solid #e7e7e7;
  }
  .avatar{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 4.266vw;
  }
  .name{
    font-size: 16px;
    color: rgb(51, 51, 51);
    line-height: 6.4vw;
  }
  .result{
    font-size: 14px;
    line-height: 5.3333vw;
  }
  .list{
    padding: 12px;
    li{
      line-height: 30px;
      color:#333;
      .title{
        display: inline-block;
        width:114px;
        color:#999;
        margin-right: 14px;
      }
    }
  }
  .state {
    padding-top: 15px;
    li {
      line-height: 48px;
      font-size: 15px;
      height: 76px;
      overflow: hidden;
      position: relative;
      img {
        width:48px;
        height: 48px;
        border-radius: 50%;
        margin: 0 15px 0 4px;
        float: left;
        position: relative;
        z-index: 999999;
      }
      span {
        display: inline-block;
        float: left;
      }
      .gray{
        color:#666;
      }
      .describe {
        font-size: 15px;
        line-height: 20px;
        margin-left: 67px;
        color:#333;
      }
    }
    li span:nth-child(2) {
      width: 2px;
      height: 100%;
      border-left: 1px dashed #c3c3c3;
      position: absolute;
      left: 26px;
      top: 2px;
    }
    li span:nth-child(3) {
      width: 50px;
    }
    li span:nth-child(4) {
      margin: 0 0 0 3.74vw;
    }
    li span:nth-child(5) {
      margin: 0 3.74vw 0 0;
      float: right;
      color: #999999;
      font-size: 1.95vh;
    }
  }
  li:last-child span:nth-child(2) {
    border: none;
  }
  .detail{
    padding: 15px 0;
    border-bottom:1px solid #e7e7e7;
  }
}
</style>
