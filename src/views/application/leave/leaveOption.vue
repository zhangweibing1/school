<template>
  <div class="leaveOption">
      <back-button></back-button>
    <van-nav-bar
      title="审批意见"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="top">
        <textarea name="reason" resize v-model="reason" :placeholder="leaveTip"></textarea>
      </div>
      <div class="btn-group">
        <van-button class="btn blue" round size="large" @click="affirm">{{leaveBtn}}</van-button>
      </div>
  </div>
</template>

<script>
import { getLeave, changeTodo } from '@/services/leave';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'leaveOption',
  data() {
    return {
      reason: '',
      leaveTip: '',
      leaveBtn: '',
      leaveData: [],
      approval: '',
      leaveFlow: [],
      appJSObject: window.AppJSObject,
    };
  },
  components: {
    'back-button': backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-2);
    },
    async getLeave() {
      this.leaveData = this.$route.params.leaveData;
      if (this.approval === 'agree' || this.approval === 'disagree') {
        this.leaveFlow = this.$route.params.leaveFlow;
        this.leaveFlow[this.leaveFlow.length - 1].option = this.reason;
        this.leaveData.applyOption = JSON.stringify(this.leaveFlow);
      } else if (this.approval === 'cancel') {
        this.leaveData.remark = this.reason;
      }
      const data = await getLeave(this.leaveData);
      if (this.approval === 'agree' || 'disagree') {
        if (data.httpCode === 200 || '200') {
          await changeTodo({ baId: this.$route.params.itemId });
          this.$toast('审批成功!');
          setTimeout(() => {
            this.$router.go(-2);
            // this.appJSObject.go_app('back');
          }, 1000);
        } else {
          this.$toast('网络错误，请重试!');
        }
      } else if (this.approval === 'cancel') {
        if (data.httpCode === 200 || '200') {
          this.$toast('销假成功!');
          setTimeout(() => {
            this.$router.go(-2);
            // this.appJSObject.go_app('back');
          }, 1000);
        } else {
          this.$toast('网络错误，请重试!');
        }
      }
    },
    affirm() {
      this.getLeave();
    },
  },
  mounted() {
    this.approval = this.$route.params.approval;
    if (this.approval === 'agree') {
      this.leaveTip = '请输入同意理由';
      this.leaveBtn = '确认同意';
    } else if (this.approval === 'disagree') {
      this.leaveTip = '请输入拒绝理由';
      this.leaveBtn = '确认拒绝';
    } else if (this.approval === 'cancel') {
      this.leaveTip = '请输入备注信息';
      this.leaveBtn = '销假';
    }
  },
};
</script>

<style lang="scss" scoped>
.leaveOption {
  padding-top: 46px;
  padding-bottom: 50px;
  .top{
    margin-top: 11px;
    background: #fff;
  }
  textarea {
    min-height: 151px;
    border: 0;
    width: 100%;
    padding: 15px 12px;
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
