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
        <input type="text" v-model="psdForm.phone" placeholder="请输入绑定的手机号"
         required />
        <div class="input-box">
          <input type="text" v-model="psdForm.safecode" name="phone"
           placeholder="请输入验证码" />
          <van-button class="hq" @click="getCode" :disabled="dis">获取验证码</van-button>
        </div>
      </div>
      <div class="form">
        <input type="password" @focus="diserror" v-model="psdForm.passWord"
         placeholder="请输入新密码" />
        <input type="password" @focus="diserror" v-model="psdAgain"
         placeholder="请再次输入新密码" />
        <p v-if="psdError">两次输入密码不一致，请重新输入！</p>
      </div>
    </div>
    <p>密码格式必须包含大小写字母及数字，并且不少于8位</p>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">完成</van-button>
    </div>
  </div>
</template>

<script>
import { getCode, setPsd } from '@/services/mine';

export default {
  name: 'forgot',
  data() {
    return {
      dis: false,
      psdError: false,
      psdAgain: '',
      codeForm: {
        typeText: '修改密码验证码',
        type: '3',
        phone: '',
      },
      psdForm: {
        userId: '',
        safecode: '',
        phone: '',
        passWord: '',
      },
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
  padding: 46px 0 40px;
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
    .input-box{
      position: relative;
      .hq{
        background: #1890ff;
        color: #fff;
        border-radius: 4px;
        position: absolute;
        right: 0px;
        top: 0;
      }
    }
  }
  p{
    color: #ff5757;
    font-size: 14px;
    margin: 10px;
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
