<template>
  <div class="onlineBooking">
    <back-button></back-button>
    <van-nav-bar
      title="在线预约"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top address">
      <div v-if="this.time != ''">咨询地点：<span>{{this.time.codeText}}</span></div>
      <div v-if="this.address != ''">咨询时间：<span>{{this.address.codeText}}</span></div>
    </div>
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
          <img :src="$store.state.system.sftpPath + item.zp"
          :onerror="defaultImg" alt="">
        </div>
        <div class="info">
          <div class="con">
            <div class="name">姓名：{{item.userName}}</div>
            <div class="result">值班日期：{{item.dutyDate}}</div>
            <div class="result">时间段：{{item.codeText}}</div>
            <div class="result">
              预约状态：{{item.isAppointment === '预约' ? '' : item.isAppointment === '取消预约' ? '预约' : ''}}
            </div>
          </div>
          <div class="btn-group" v-if="item.isAppointment != '' && item.isAppointment != null">
            <van-button size="small" class="btn"
            @click="addOnline(item)">
              {{item.isAppointment}}
            </van-button>
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
import { mapGetters } from 'vuex';
import { getStuOnLine, addRecord, stuInfo, dutyTime, jPush } from '@/services/health';
import noData from '@/components/noData/noData.vue';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'onlineBooking',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      loading: false,
      finished: false,
      pageNum: 0,
      list: [],
      stu: {},
      state: '',
      duty: {
        type: 'dutyTime',
      },
      time: {},
      address: {},
      add: {
        planId: '', // 选择的对象的id
        schoolId: '', // 校区标识
        deptId: '', // 院系标识
        deptName: '', // 院系名称
        professionId: '', // 专业标识
        professionName: '', // 专业名称
        classId: '', // 班级标识
        className: '', // 班级名称
        gradeId: '', // 年级标识
        gradeName: '', // 年级名称
        stuId: '', // 学生标识
        stuName: '', // 学生名称
        stuSexCode: '', // 性别code（1男2女）
        stuSexText: '', // 性别Text
        appointDurationCode: '', // 预约时间段
        appointDurationText: '', // 预约时段值
        isAppoint: '', // 预约状态(0未约1已约2预约取消)
      },
      jPushData: {
        userId: '',
        mk: 'xljk',
        message: '',
      },
    };
  },
  components: {
    'no-data': noData,
    backButton,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
    // param() {
    //   return {
    //     stuId: this.userInfo.id,
    //   };
    // },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getDutyTime() {
      const { data } = await dutyTime(this.duty);
      [this.time] = data.dutyArea;
      [this.address] = data.dutyDate;
    },
    // async getOnLine(msg) {
    //   const data = await getStuOnLine(msg);
    //   this.list = data.data;
    // },
    async onLoad() {
      const data = await getStuOnLine({
        stuId: this.userInfo.id,
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
    async getStuInfo() {
      const { data } = await stuInfo({ stuId: this.userInfo.id });
      [this.stu] = data;
    },
    async onLine(item, msg) {
      const data = await addRecord(msg);
      if (data.htppCode === '200' || 200) {
        this.$toast.success('预约成功');
      } else {
        this.$toast(data.msg);
      }
      this.jPushData.userId = item.userId;
      await jPush(this.jPushData);
      this.$router.go(-1);
    },
    addOnline(item) {
      if (item.isAppointment === '预约') {
        this.state = '1';
        this.jPushData.message = `${this.stu.userName}预约了${this.$moment(item.dutyDate).format('YYYY年MM月DD日')}的心理咨询。`;
      } else if (item.isAppointment === '取消预约') {
        this.state = '2';
        this.jPushData.message = `${this.stu.userName}取消了${this.$moment(item.dutyDate).format('YYYY年MM月DD日')}的心理咨询。`;
      }
      this.add = {
        planId: item.id, // 选择的对象的id
        schoolId: this.stu.schoolId, // 校区标识
        deptId: this.stu.orgId, // 院系标识
        deptName: this.stu.DWMC, // 院系名称
        professionId: this.stu.proId, // 专业标识
        professionName: this.stu.ZYMC, // 专业名称
        classId: this.stu.classId, // 班级标识
        className: this.stu.BJMC, // 班级名称
        gradeId: this.stu.gradeId, // 年级标识
        gradeName: this.stu.gradeName, // 年级名称
        stuId: this.stu.id, // 学生标识
        stuName: this.stu.userName, // 学生名称
        stuSexCode: this.stu.XBM, // 性别code（1男2女）
        stuSexText: this.stu.XBMTEXT, // 性别Text
        appointDurationCode: item.code, // 预约时间段
        appointDurationText: item.codeText, // 预约时段值
        isAppoint: this.state, // 预约状态(0未约1已约2预约取消)
      };
      this.onLine(item, this.add);
    },
  },
  mounted() {
    // this.getOnLine(this.param);
    this.getStuInfo();
    this.getDutyTime();
  },
};
</script>

<style lang="scss" scoped>
  .onlineBooking{
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
  .address{
    padding:10px 12px;
    >div{
      line-height: 30px;
      color:#333;
      font-size: 14px;
      >span{
        color:#777;
      }
    }
  }
  .personal-info{
    padding:20px 0px 0px;
    overflow: hidden;
    position: relative;
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
    &:last-child{
      .info{
        border: 0;
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
        }
    }
  }
</style>
