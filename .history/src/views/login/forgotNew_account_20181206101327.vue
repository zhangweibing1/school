<template>
  <div class="forgot">
    <van-nav-bar
      title="忘记密码"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="wrap">
      <div class="form">
        <input type="text" v-model="account" placeholder="请输入用户名"
         required />
      </div>
    </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">下一步</van-button>
    </div>
  </div>
</template>

<script>
import { getCode, setPsd } from '@/services/mine';

export default {
  name: 'forgot',
  data() {
    return {
      account:'',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    diserror() {
      this.psdError = false;
    },
    async getCode() {
      if (this.psdForm.phone === '') {
        this.$toast('请填写手机号！');
        return;
      }
      this.codeForm.phone = this.psdForm.phone;
      const data = await getCode(this.codeForm);
      if (data.httpCode === 200 || '200') {
        if (data.data.msg) {
          this.dis = true;
          this.$toast(`${data.data.msg}!`);
        } else {
          this.psdForm.userId = data.data.userId;
        }
      }
    },
    async setPsd() {
      const data = await setPsd(this.psdForm);
      if (data.data) {
        this.$router.go(-1);
      }
    },
    submit() {
      if (this.psdForm.phone === '') {
        this.$toast('请填写手机号!');
        return;
      }
      if (this.psdForm.safecode === '') {
        this.$toast('请填写验证码!');
        return;
      }
      if (this.psdForm.passWord === '') {
        this.$toast('请填写新密码!');
        return;
      }
      if (this.psdForm.passWord !== this.psdAgain) {
        this.psdError = true;
        return;
      }
      this.setPsd();
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot {
  padding: 100px 0 40px;
  background-color: #fff;
  .wrap{
    padding: 0px 26px;
    margin-top: 11px;
  }
  .form{
    input{
      border:0;
      border-bottom:1px solid #e1e1e1;
      width:100%;
      padding: 15px 0;
      font-size: 13px;
    }
  }
  .btn-group{
    padding: 0 38px;
    margin: 10px 0 0;
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
