<template>
  <div class="myApplyFor">
    <van-nav-bar
      title="我的申请"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="personal-info between" v-for="(item, index) in list" :key="index" slot="header">
        <router-link :to="{name: 'applyForDetail', params: {id: item.id, item: item}}">
          <div class="avatar">
            <img src="../../../assets/tx@2x.png" alt="">
          </div>
          <div class="info">
            <div class="con">
              <div class="name">{{item.name}}</div>
              <div class="result">开始时间：{{item.startTime}}</div>
              <div class="result">结束时间：{{item.endTime}}</div>
              <div class="result">人数：{{item.userNum}}人</div>
              <div class="result warning">{{item.orderType}}</div>
              <!-- <div class="result danger">{{item.orderType}}</div>
              <div class="result success">{{item.orderType}}</div> -->
            </div>
            <div class="date">
              <!-- <span>{{item.createTime}}</span> -->
              <span>{{item.createUserName}}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { myApplyFor } from '@/services/meeting';

export default {
  name: 'myApplyFor',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMessage() {
      const { data } = await myApplyFor();
      this.list = data;
    },
  },
  mounted() {
    this.getMessage();
  },
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
  }
</style>
