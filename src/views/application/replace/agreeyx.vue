<template>
  <div class="agree">
    <van-nav-bar
      title="审批意见"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
      <div class="top">
        <textarea v-model="cause" placeholder="请输入同意理由"></textarea>
      </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">确认同意</van-button>
    </div>
  </div>
</template>

<script>
import { replaceSP, changeTodo } from '@/services/replace';

export default {
  name: 'agreeyx',
  data() {
    return {
      cause: '',
      submitMsg: {
        replaceId: this.$route.params.id,
        step: 'ysj',
        option: '',
        applyStateone: '1',
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-2);
    },
    async submitSP(msg) {
      const data = await replaceSP(msg);
      if (data.httpCode === '200' || 200) {
        await changeTodo({ baId: this.$route.params.itemId });
        this.$toast.success('提交成功');
        setTimeout(() => {
          this.$router.go(-2);
          // this.appJSObject.go_app('back');
        }, 1000);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    submit() {
      this.submitMsg.option = this.cause;
      this.submitSP(this.submitMsg);
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  textarea{
    border:0;
    width:100%;
    height:150px;
    padding:15px 12px;
    resize: none;
    font-size: 16px;
  }
  .btn-group{
    padding: 0 38px;
    margin: 40px 0;
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
