<template>
  <div class="stuList">
    <back-button></back-button>
    <van-nav-bar
      title="预约学生"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset= "10"
        @load="onLoad"
      >
      <div class="personal-info between"
       v-for="(item, index) in list" :key="index">
        <div class="avatar">
          <img :src="$store.state.system.sftpPath + item.stuZp"
          :onerror="defaultImg" alt="">
        </div>
        <div class="info">
          <div class="con">
            <div class="name">姓名：{{item.stuName}}</div>
            <div class="result">预约咨询日期：{{item.appointmentDate}}</div>
            <div class="result">时间段：{{item.appointDurationText}}</div>
            <div class="result">性别：{{item.stuSexText}}</div>
            <div class="result">院系：{{item.deptName}}</div>
            <div class="result">专业：{{item.professionName}}</div>
            <div class="result">班级：{{item.className}}</div>
            <div class="result" v-if="item.isAppoint == '1'">预约状态：预约</div>
            <div class="result" v-if="item.isAppoint == '2'">预约状态：取消预约</div>
            <div class="result success" v-if="item.isComing == '1'">已咨询</div>
            <div class="result danger" v-if="item.isComing == '0'">未咨询</div>
          </div>
          <div class="btn-group" v-if="item.isComing == '0' && item.isAppoint == '1'">
            <van-button size="small" class="btn" @click="confirmCome(item)">确认咨询</van-button>
            <van-button size="small" class="btn red" @click="cancelAppoint(item)">取消预约</van-button>
          </div>
          <div class="btn-group" v-if="item.isComing == '1' && item.isAppoint == '1'">
            <van-button size="small" class="btn" @click="goRecord(item)">记录</van-button>
          </div>
        </div>
      </div>
      </van-list>
    </div>
    <div v-if="this.list.length == 0">
      <no-data></no-data>
    </div>
  </div>
</template>

<script>
import { appointStu, confirmAndCancel, jPush } from '@/services/health';
import noData from '@/components/noData/noData.vue';
import { mapGetters } from 'vuex';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'stuList',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      loading: false,
      finished: false,
      pageNum: 0,
      list: [],
      confirm: {
        id: '',
        isComing: '1',
      },
      cancel: {
        id: '',
        isAppoint: '2',
      },
      jPushData: {
        userId: '',
        mk: 'xljk',
        message: '',
      },
      datetime: '',
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
    async onLoad() {
      const data = await appointStu({
        userId: this.userInfo.id,
        pageNum: this.pageNum += 1,
      });
      this.list = this.list.concat(data.data);
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.list.length >= data.total) {
        this.finished = true;
      }
    },
    async Confirm(msg) {
      await confirmAndCancel(msg);
      this.$router.go(-1);
    },
    async Cancel(msg) {
      await confirmAndCancel(msg);
      await jPush(this.jPushData);
      this.$router.go(-1);
    },
    confirmCome(item) {
      this.confirm.id = item.id;
      this.Confirm(this.confirm);
    },
    cancelAppoint(item) {
      this.cancel.id = item.id;
      this.Cancel(this.cancel);
      this.jPushData.userId = item.id;
      this.jPushData.message = `你的${this.$moment(item.appointmentDate).format('YYYY年MM月DD日')}的心理咨询预约已取消，请知晓。`;
    },
    goRecord(item) {
      this.$router.push({
        name: 'record',
        params: {
          id: item.id,
        },
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
  .stuList{
    padding:46px 0 60px;
  }
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
        bottom: 20px;
        right: 0;
        .btn{
            font-size: 16px;
            border-radius: 2px;
            background-color: #1890ff;
            color: #FFFFFF;
            padding: 0px 12px;
            display: block;
            margin-top: 10px;
        }
        .red{
            background-color: #ff5757;
        }
    }
  }
</style>
