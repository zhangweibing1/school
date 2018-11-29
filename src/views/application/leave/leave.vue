<template>
  <div class="leave">
    <back-button></back-button>
    <van-nav-bar
      title="请假"
      left-text="返回"
      right-text="查看记录"
      left-arrow
      fixed
      @click-right="onClickRight"
      @click-left="onClickLeft"/>
      <div class="top">
        <van-cell title="请假人" border required v-model="person"/>
        <van-cell title="班级" border required v-model="gradeClass"/>
        <van-cell title="请假类型" @click="leaveType = true;" is-link border required
          v-model="sleaveType" />
        <van-popup v-model="leaveType" position="bottom">
          <van-picker show-toolbar title="请假类型" :columns="leaveTypeList"
            @confirm="selectLeaveType" @cancel="leaveType = false;"/>
        </van-popup>
      </div>
      <div class="top">
        <van-cell title="开始时间" @click="startTime = true;" is-link border required
          v-model="sStartTime" />
        <van-popup v-model="startTime" position="bottom">
          <van-datetime-picker
            show-toolbar
            @confirm="confirmStart"
            @cancel="startTime = false"
            type="datetime"
            :min-date="minStartDate"/>
        </van-popup>
        <van-cell title="结束时间" @click="endTime = true;" is-link border required
          v-model="sEndTime" />
        <van-popup v-model="endTime" position="bottom">
          <van-datetime-picker
            show-toolbar
            @confirm="confirmEnd"
            @cancel="endTime = false"
            type="datetime"
            :min-date="minEndDate"/>
        </van-popup>
        <van-field label="请假天数" input-align="right" border required
          placeholder="请输入请假天数" v-model="leaveDay" />
      </div>
      <div class="top">
        <div class="title">请假理由</div>
        <textarea name="reason" resize v-model="reason" placeholder="请输入请假理由"></textarea>
      </div>
      <div class="top">
        <van-cell value="添加图片" />
        <upload-img v-on:imgData="imgData"></upload-img>
      </div>
      <div class="btn-group">
        <van-button class="btn blue" round size="large" @click="submit">提交</van-button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getLeave, getUser, getLeaveType } from '@/services/leave';
import uploadImg from '@/components/upload/uploadImg.vue';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'leave',
  data() {
    return {
      leaveType: false, // popup显隐变量
      startTime: false,
      endTime: false,
      sleaveType: '请选择', // popup选择变量
      sStartTime: '请选择',
      sEndTime: '请选择',
      minStartDate: new Date(),
      minEndDate: new Date(),
      leaveDay: '',
      reason: '',
      leaveTypeData: [], // 接口返回请假类型
      leaveTypeList: [], // 页面绑定请假类型数据
      photoList: [], // 图片路径数组
      person: '',
      gradeClass: '',
      leaveForm: { // 提交参数
        schoolId: '',
        schoolName: '',
        deptId: '',
        deptName: '',
        professionId: '',
        professionName: '',
        classId: '',
        className: '',
        userName: '',
        userId: '',
        startTime: '',
        endTime: '',
        leaveDay: '',
        leaveReason: '',
        leaveTypeCode: '',
        leaveTypeText: '',
        photo: '',
        isAdditional: '',
        applyOption: [{
          userName: '',
          operator: '提交请假',
          operatorTime: '',
        }],
      },
    };
  },
  components: {
    uploadImg,
    backButton,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push('leaveHistory');
    },
    imgData(data) {
      data.filePrikeys.forEach((element) => {
        this.photoList.push(element.filePath);
      });
    },
    selectLeaveType(value) {
      this.leaveType = false;
      this.sleaveType = value;
      this.leaveTypeData.forEach((element) => {
        if (value === element.codeText) {
          this.leaveForm.leaveTypeCode = element.code;
          this.leaveForm.leaveTypeText = element.codeText;
        }
      });
    },
    confirmStart(value) {
      this.startTime = false;
      this.minEndDate = value;
      this.sStartTime = this.$moment(value).format('YYYY-MM-DD HH:mm:ss');
      this.leaveForm.startTime = this.sStartTime;
      if (this.sEndTime !== '请选择') {
        if (this.$moment(this.sStartTime).isBefore(this.sEndTime)) {
          this.leaveForm.startTime = this.sStartTime;
        } else {
          this.sStartTime = '请选择';
          this.$toast('开始时间需小于结束时间！');
        }
      }
    },
    confirmEnd(value) {
      this.endTime = false;
      this.sEndTime = this.$moment(value).format('YYYY-MM-DD HH:mm:ss');
      this.leaveForm.endTime = this.sEndTime;
      if (this.sStartTime !== '请选择') {
        if (this.$moment(this.sStartTime).isBefore(this.sEndTime)) {
          this.leaveForm.endTime = this.sEndTime;
        } else {
          this.sEndTime = '请选择';
          this.$toast('开始时间需小于结束时间！');
        }
      }
    },
    async getUser() {
      const { data } = await getUser({ userId: this.userInfo.id });
      this.person = this.userInfo.userName;
      this.leaveForm.applyOption[0].userName = this.userInfo.userName;
      this.gradeClass = data[0].schoolClassInfo.bJMC;
      this.leaveForm.schoolId = this.userInfo.schoolId;
      this.leaveForm.schoolName = data[0].schoolInfo.xXMC;
      this.leaveForm.deptId = data[0].sysOrganization.id;
      this.leaveForm.deptName = data[0].sysOrganization.dWMC;
      this.leaveForm.professionId = data[0].schoolProfessional.id;
      this.leaveForm.professionName = data[0].schoolProfessional.zYMC;
      this.leaveForm.classId = data[0].schoolClassInfo.id;
      this.leaveForm.className = data[0].schoolClassInfo.bJMC;
      this.leaveForm.userId = this.userInfo.id;
      this.leaveForm.userName = this.userInfo.userName;
    },
    async getLeaveType() {
      const { data } = await getLeaveType();
      this.leaveTypeData = data;
      this.leaveTypeData.forEach((element) => {
        this.leaveTypeList.push(element.codeText);
      });
      this.sleaveType = this.leaveTypeData[0].codeText;
      this.leaveForm.leaveTypeCode = this.leaveTypeData[0].code;
      this.leaveForm.leaveTypeText = this.leaveTypeData[0].codeText;
    },
    async getLeave() {
      const data = await getLeave(this.leaveForm);
      if (data.httpCode === 200 || '200') {
        this.$toast.success('提交成功！');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败！');
      }
    },
    submit() {
      this.leaveForm.leaveDay = this.leaveDay;
      this.leaveForm.leaveReason = this.reason;
      this.leaveForm.photo = this.photoList.join(',');
      let now = new Date();
      now = this.$moment(now).format('YYYY-MM-DD HH:mm:ss');
      this.leaveForm.applyOption[0].operatorTime = now;
      if (this.$moment(now).isBefore(this.sStartTime)) {
        this.leaveForm.isAdditional = 1;
      } else {
        this.leaveForm.isAdditional = 0;
      }
      if (this.leaveForm.startTime === '') {
        this.$toast('请选择开始时间!');
        return;
      }
      if (this.leaveForm.endTime === '') {
        this.$toast('请选择结束时间!');
        return;
      }
      if (this.leaveForm.leaveDay === '') {
        this.$toast('请填写请假时长!');
        return;
      }
      if (this.leaveForm.leaveReason === '') {
        this.$toast('请填写请假原因!');
        return;
      }
      this.getLeave();
    },
  },
  mounted() {
    this.getUser();
    this.getLeaveType();
  },
};
</script>

<style lang="scss" scoped>
.leave {
  padding-top: 46px;
  padding-bottom: 50px;
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
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .title{
     color: #333;
     font-size: 16px;
     padding: 15px 15px 0 15px;
     position: relative;
     &::before{
      content: '*';
      position: absolute;
      left: 7px;
      top: 20px;
      font-size: 14px;
      color: #f44;
     }
  }
  textarea{
    border:0;
    width:100%;
    height:80px;
    padding:12px 15px;
    resize: none;
    font-size: 14px;
    color:#999;
  }
}
</style>
