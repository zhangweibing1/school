<template>
  <div class="leaveHistory">
    <back-button></back-button>
    <van-nav-bar
      title="请假历史"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="personal-info between" slot="header"
       v-for="(item, index) in leaveData" :key="index">
       <router-link :to="{name: 'leaveDetail', params: {id: item.id, item: item}}">
        <div class="avatar">
          <img src="../../../assets/tx@2x.png" alt="">
        </div>
        <div class="info">
          <div class="con">
            <div class="name">
              {{item.userName + '的请假'}}
              <div class="date">
                <span>{{item.createTime}}</span>
              </div>
            </div>
            <div class="result">类型：{{item.leaveTypeText}}</div>
            <div class="result">开始时间：{{item.startTime}}</div>
            <div class="result">结束时间：{{item.endTime}}</div>
            <div class="result warning" v-if="item.offState === 0">待审核</div>
            <div class="result success" v-else-if="item.offState === 1">已通过</div>
            <div class="result danger" v-else>未通过</div>
            <div class="cancel">
              <span :class="[btn, item.delLeave ? success : danger]"
              @click="goEvaluate()">
                {{item.delLeave ? '已销假' : '未销假'}}</span>
            </div>
          </div>
        </div>
        </router-link>
      </div>
      <div v-if="leaveData.length === 0">
        <no-data></no-data>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import backButton from '@/components/backButton/backButton.vue';
import noData from '@/components/noData/noData.vue';
import { getLeaveList } from '@/services/leave';

export default {
  name: 'leaveHistory',
  components: {
    backButton,
    noData,
  },
  data() {
    return {
      leaveData: [],
      btn: 'btn',
      success: 'success',
      danger: 'danger',
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getLeaveList() {
      const { data } = await getLeaveList({ userId: this.userInfo.id });
      this.leaveData = data;
    },
  },
  mounted() {
    this.getLeaveList();
  },
};
</script>

<style lang="scss" scoped>
.leaveHistory {
  padding-top: 46px;
  padding-bottom: 50px;
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
      padding-bottom: 20px;
    }
    .date{
      font-size: 14px;
      color:#999;
      float: right;
      line-height: 24px;
    }
    .cancel {
      position: absolute;
      right: 0;
      bottom: 24px;
      font-size: 15px;
    }
  }
}
</style>
