<template>
  <div class="applyForSP">
    <van-nav-bar
      title="马小帅的会议室申请"
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
            <div class="name">马小帅的会议室申请</div>
            <div class="result warning">审批中</div>
          </div>
        </div>
      </div>
      <ul class="list">
        <li>
          <span class="title">开始时间</span>
          <span class="text">2018-08-25 11:00</span>
        </li>
        <li>
          <span class="title">结束时间</span>
          <span class="text">2018-08-25 12:00</span>
        </li>
        <li>
          <span class="title">人数</span>
          <span class="text">是</span>
        </li>
        <li>
          <span class="title">会议内容</span>
          <span class="text">关于迎新工作计划讨论</span>
        </li>
        <li>
          <span class="title">来院嘉宾</span>
          <span class="text">8人</span>
        </li>
        <li>
          <span class="title">出席院领导</span>
          <span class="text">马小帅、马小帅、马小帅</span>
        </li>
        <li>
          <span class="title">电子屏内容</span>
          <span class="text">关于迎新工作计划讨论</span>
        </li>
        <li>
          <span class="title">是否使用投影</span>
          <span class="text">是</span>
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
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="agree()">同意</van-button>
      <van-button size="large" class="btn" @click="disagree()">拒绝</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'applyForSP',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    agree() {
      this.$router.push('agree');
    },
    disagree() {
      this.$router.push('disagree');
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.applyForSP{
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
  }
  .list{
    padding: 12px;
    li{
      line-height: 30px;
      color:#333;
      .title{
        display: inline-block;
        width:104px;
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
  .btn-group{
    padding: 0 38px;
    margin: 20px 0;
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
