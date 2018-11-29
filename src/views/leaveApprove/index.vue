<template>
  <div class="view" v-if="leave">
    <van-panel>
      <div class="flexbox personal-info between" slot="header">
        <div class="flexbox center">
          <div class="avatar">
            <img :src="leave.avatar" />
          </div>
          <div>
            <div class="name">{{leave.name}}</div>
            <div class="major-class">{{leave.major}} {{leave.class}}</div>
          </div>
        </div>
        <div>
          <span class="time">{{leave.time}}</span>
        </div>
      </div>
    </van-panel>
    <van-panel>
      <div slot="header">
        <div class="leave-item flexbox between">
          <div class="label">请假类型</div>
          <div class="content">{{leave.type | leaveType}}</div>
        </div>
        <div class="leave-item flexbox between">
          <div class="label">开始时间</div>
          <div class="content">{{leave.start_time}}</div>
        </div>
        <div class="leave-item flexbox between">
          <div class="label">结束时间</div>
          <div class="content">{{leave.end_time}}</div>
        </div>
        <div class="leave-item flexbox between">
          <div class="label">请假事由</div>
          <div class="content">{{leave.reason}}</div>
        </div>
        <div class="pic-list flexbox wrap">
          <div class="item" v-for="(item, idx) in leave.pic_list" :key="idx">
            <img :src="item" />
          </div>
        </div>
      </div>
    </van-panel>
    <van-panel>
      <div slot="header">
        <div class="flexbox personal-info between" slot="header">
          <div class="flexbox center">
            <div class="thumnail">
              <img :src="leave.card.thumnail" />
            </div>
            <div>
              <div class="name">{{leave.card.name}}</div>
              <div class="major-class">文件大小 {{leave.card.size}}</div>
            </div>
          </div>
          <div>
            <span class="time">{{leave.time}}</span>
          </div>
        </div>
      </div>
    </van-panel>
    <div class="btn-group">
      <van-button class="btn large radius blue">批准</van-button>
      <van-button class="btn large radius">驳回</van-button>
    </div>
  </div>
</template>
<script>

import { fetchLeaveInfoById } from '@/services/api';

export default {
  data() {
    return {
      leave: null,
    };
  },
  filters: {
    leaveType(val) {
      const types = {
        1: '事假',
      };
      return types[val];
    },
  },
  methods: {
    async getInfo() {
      const { data } = await fetchLeaveInfoById({
        id: 1,
      });
      this.leave = data;
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>
<style lang="scss" scoped>
  .avatar{
    width: 13.3333vw;
    height: 13.3333vw;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 4.266vw;
  }
  .name{
    font-size: 4.5333vw;
    color: rgb(51, 51, 51);
    line-height: 6.4vw;
  }
  .major-class{
    font-size: 3.7333vw;
    color: rgb(153, 153, 153);
    line-height: 5.3333vw;
  }
  .time{
    font-size: 4.266vw;
    color: rgb(204, 204, 204);
  }
  .leave-item{
    margin-bottom: 3.7333vw;
    .label{
      flex:0 0 15vw;
      font-size: 3.7333vw;
      color: rgb(153, 153, 153);
      line-height: 5.3333vw;
      margin-right: 8.6666vw;
    }
    .content{
      font-size: 3.7333vw;
      color: rgb(51, 51, 51);
      line-height: 5.3333vw;
      text-align: right;
    }
  }
  .pic-list{
    padding-top: 3.3333vw;
    .item{
      width: 20vw;
      height: 20vw;
      margin-bottom: 3.3333vw;
      border: solid 1px #ccc;
      border-radius: 2.13333vw;
      overflow: hidden;
      margin-right: 3.3333vw;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
  }
  .thumnail{
    border-radius: 1.0666vw;
    width: 13.3333vw;
    height: 13.3333vw;
    overflow: hidden;
    margin-right: 4.266vw;
  }
  .btn-group{
    padding: 0 3.333333vw;
    margin: 7.46666vw 0;
  }
  .btn{
    margin-bottom: 4vw;
    &:last-child{
      margin-bottom: 0;
    }
  }
</style>
