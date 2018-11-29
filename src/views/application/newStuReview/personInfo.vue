<template>
  <div class="personInfo">
    <van-nav-bar
      title="学生资料"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="between flexbox">
        <div class="photo" v-if="item.sysUser">
          <img :src="$store.state.system.sftpPath + (item.sysUser.zP)"
          :onerror="defaultImg" alt="">
        </div>
      </div>
      <div class="top">
        <div class="className flexbox between">
          <div class="label">姓名</div>
          <div class="content" v-if="item.sysUser">
            {{item.sysUser.userName ? item.sysUser.userName : '暂无'}}
          </div>
        </div>
        <div class="className flexbox between">
          <div class="label">性别</div>
          <div class="content" v-if="item.sysUser">
            {{item.sysUser.xBM == '1' ? '男' : item.sysUser.xBM == '2' ? '女' : '未知'}}
          </div>
        </div>
        <div class="className flexbox between">
          <div class="label">身份证号</div>
          <div class="content" v-if="item.sysUser">
            {{item.sysUser.sFZJH ? item.sysUser.sFZJH : '暂无'}}
          </div>
        </div>
      </div>
      <div class="file">
        <van-cell-group>
          <van-cell title="状态" required
           v-model="state" @click="showState = true;"
           is-link value="请选择"/>
          <van-popup v-model="showState" position="bottom">
            <van-picker show-toolbar
            :columns="stateList"
            @cancel="showState = false"
            @confirm="onState" />
          </van-popup>
          <upload-file @fileData="fileData"></upload-file>
        </van-cell-group>
      </div>
      <div class="btn-group">
        <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
      </div>
  </div>
</template>

<script>
import { studentList, submitStu } from '@/services/newStuReview';
import uploadFile from '@/components/upload/uploadFile.vue';

export default {
  name: 'personInfo',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      showState: false,
      stateList: ['未报到', '参军', '信息有异议', '休学', '退学', '复查通过'],
      state: '',
      stateNum: '',
      userID: {
        userId: this.$route.params.id,
      },
      item: {
        sysUser: '',
        sysOrganization: '',
        schoolProfessional: '',
        schoolClassInfo: '',
      },
      myFile: {},
      submitMsg: {
        schoolId: '',
        stuId: '',
        id: '',
        checkStatus: '',
        checkStatusText: '',
        status: '',
        statusText: '',
        param: '',
      },
    };
  },
  components: {
    uploadFile,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onState(value) {
      this.showState = false;
      this.state = value;
    },
    async getMessage(userId) {
      const { data } = await studentList(userId);
      [this.item] = data;
    },
    async submitStu(msg) {
      const data = await submitStu(msg);
      if (data.httpCode === '200' || 200) {
        this.$toast.success('提交成功');
        this.$router.push('classList');
      } else {
        this.$toast.fail('提交失败');
      }
    },
    submit() {
      if (this.state === '') {
        this.$toast('请选择状态');
        return;
      }
      if (this.state === '未报到') {
        this.stateNum = '1';
      }
      if (this.state === '参军') {
        this.stateNum = '2';
      }
      if (this.state === '信息有异议') {
        this.stateNum = '3';
      }
      if (this.state === '休学') {
        this.stateNum = '4';
      }
      if (this.state === '退学') {
        this.stateNum = '5';
      }
      if (this.state === '复查通过') {
        this.stateNum = '6';
      }
      this.submitMsg = {
        schoolId: this.$route.params.item.schoolId,
        stuId: this.$route.params.id,
        id: '',
        checkStatus: this.stateNum,
        remark: this.myFile,
      };
      this.submitStu(this.submitMsg);
    },
    fileData(data) {
      this.myFile = data;
    },
  },
  mounted() {
    this.getMessage(this.userID);
  },
};
</script>

<style lang="scss" scoped>
  .personInfo{
    padding-top: 46px;
  }
  .personInfo{
    padding-bottom: 60px;
  }
  .file{
    margin-top: 11px;
    background: #fff;
    border-top: 1px solid #eee;
  }
  .top{
    margin-top: 11px;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding-left:11px;
  }
  .className{
    line-height: 44px;
    border-bottom: 1px solid #e7e7e7;
    &:last-child{
      border-bottom: 0;
    }
    .lable{
      font-size: 17px;
      color:#323232;
    }
    .content{
      text-align: right;
      margin-right: 11px;
      color:#808080;
      font-size: 15px;
    }
  }
  .photo{
    margin: 10px auto 0;
  }
  .title{
    line-height: 84px;
  }
  .look{
    padding: 10px 15px;
    overflow: hidden;
  }
  .icon{
    width:60px;
    float: left;
    padding:10px;
    border:1px solid #eee;
    img{
      width:34px;
    }
  }
  .con{
    line-height: 60px;
    float: left;
    margin-left: 15px;
  }
  .add{
    padding: 0px 15px 10px;
    .pos{
      width: 50px;
      text-align: center;
      span{
        background: #e7e7ea;
        color:#fff;
        padding: 0 12px;
        font-size: 40px;
      }
    }
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
</style>

