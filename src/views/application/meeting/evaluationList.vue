<template>
  <div class="evaluationList">
    <van-nav-bar
      title="会议室评价"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="personal-info between" slot="header">
        <div class="avatar">
          <img src="../../../assets/tx@2x.png" alt="">
        </div>
        <div class="info">
          <div class="con">
            <div class="name">马小帅的会议室申请</div>
            <div class="result">地点：小会议室</div>
            <div class="result">开始时间：2018-8-18</div>
            <div class="result">结束时间：2018-8-18</div>
            <div class="result">人数：8人</div>
            <div class="result warning">未评价</div>
          </div>
          <div class="date">
            <span>7月16日 18:00</span>
          </div>
          <div class="btn-group">
            <van-button size="small" class="btn" @click="goEvaluate()">去评价</van-button>
          </div>
        </div>
      </div>
      <div class="personal-info between" slot="header">
        <div class="avatar">
          <img src="../../../assets/tx@2x.png" alt="">
        </div>
        <div class="info">
          <div class="con">
            <div class="name">马小帅的会议室申请</div>
            <div class="result">地点：小会议室</div>
            <div class="result">开始时间：2018-8-18</div>
            <div class="result">结束时间：2018-8-18</div>
            <div class="result">人数：8人</div>
            <div class="result success">已评价</div>
          </div>
          <div class="date">
            <span>7月16日 18:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'evaluationList',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goEvaluate() {
      this.$router.push('evaluationDetail');
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
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
    padding:20px 0px 0px;
    overflow: hidden;
    position: relative;
    &:last-child{
      .info{
        border: 0;
      }
    }
    .avatar{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 14px;
      float: left;
    }
    .info{
      width:calc(100% - 62px);
      float: left;
      border-bottom:1px solid #e7e7e7;
      .name{
        font-size: 16px;
        color: #333;
        margin-bottom: 6px;
      }
      .result{
        font-size: 15px;
        color:#999;
        line-height: 25px;
      }
    }
    .con{
      float: left;
      padding-bottom: 20px;
    }
    .date{
      font-size: 14px;
      color:#999;
      float: right;
    }
    .btn-group{
        position: absolute;
        bottom: 15px;
        right: 0;
        .btn{
            font-size: 16px;
            border-radius: 2px;
            background-color: #1890ff;
            color: #FFFFFF;
            padding: 0px 12px;
        }
    }
  }
</style>
