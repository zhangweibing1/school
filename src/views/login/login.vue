<template>
  <div class="login">
    <div class="logo" style="text-align:center;">
      <!-- <img src="../../assets/login/logo@2x.png" alt="logo"> -->
      <img src="../../assets/login/logo2.png" style="width:76px;height:60px" alt="cz-logo">
      <p style="font-size:20px;color:#fff;font-family:微软雅黑">青峰教务平台</p>
    </div>
      <div class="form">
        <input type="text" @focus="diserror" v-model="info.account" class="username"
         required placeholder="请输入您的账号">
        <input type="password" @focus="diserror" v-model="info.password" class="pwd"
         required placeholder="请输入您的密码">
        <p v-if="error">账号或密码错误！</p>
        <router-link :to="{ name: 'forgotNew'}">
          <p class="forget">忘记密码？</p>
        </router-link>
        <div class="btn-group">
          <van-button size="large" class="btn blue" @click="submit()">登录</van-button>
        </div>
      </div>
    <div class="foot">青峰软件股份有限公司提供技术支持</div>
  </div>
</template>

<script>
import { login, getUserInfo } from '@/services/api';

export default {
  name: 'login',
  data() {
    return {
      error: false,
      info: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    diserror() {
      this.psdError = false;
    },
    async login() {
      const data = await login(this.info);
      if (data && (data.httpCode === 200 || data.httpCode === '200')) {
        this.$toast('登录成功！');
        // 交校
        this.$store.dispatch('system/setToken', data.__vt_param__);
        window.localStorage.setItem('token', data.__vt_param__);
        this.getUserInfo();
        // 财专v1
        // this.$store.dispatch('system/setToken', data.data.accessToken);
        // this.$store.dispatch('system/setUserInfo', data.data.user);
        // this.$store.dispatch('system/setMenu', data.data.menus);
        // window.localStorage.setItem('accessToken', data.data.accessToken);
        // window.localStorage.setItem('userType', data.data.userType);
        // if (data.data.userType === '1' || data.data. === '6') {
        //   this.$router.push('homeStu');
        // } else if (data.data.userType === '2' || data.data.userType === '3'
        //  || data.data.userType === '4' || data.data.userType === '5') {
        //   this.$router.push('homeTea');
        // }
        // 财专v2
      } else if (!data) {
        this.$toast('请求错误，请重新登录！');
      } else if (data && (data.httpCode === 303 || data.httpCode === '303')) {
        this.error = true;
      }
    },
    async getUserInfo() {
      const data = await getUserInfo();
      if (data && (data.httpCode === 200 || data.httpCode === '200')) {
        this.$store.dispatch('system/setUserInfo', data.data);
        this.$store.dispatch('system/setMenu', data.data.menus);
        window.localStorage.setItem('userType', data.data.userType);
        this.$router.push('home');
      } else {
        this.$toast('服务器错误，请重新登录！');
      }
    },
    submit() {
      if (this.info.account === '') {
        this.$toast('请输入您的账号！');
        return;
      } else if (this.info.password === '') {
        this.$toast('请输入您的密码！');
        return;
      }
      this.login();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    width: 100%;
    background:url('../../assets/login/bj@2x.png') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.8;
    background-color: rgba(27,24,26,0.8);
    padding: 106px 10px 30px;
    .logo{
      padding: 0 30px 55px;
    }
    p{
      color: #ff5757;
      font-size: 14px;
      margin: 10px;
    }
    .form {
      width: 85%;
      margin: 0 auto;
      .primary{
        color: #abaeb4;
      }
      .username{
        margin-bottom: 18px;
      }
      input {
        border: 0;
        width: 70%;
        outline: 0;
        font-size: 16px;
        width: 100%;
        padding: 19px 16px;
        caret-color:#1890ff;
      }
      .forget{
        color: #fefefe;
        font-size: 14px;
        padding: 16px 0;
        text-align: right;
      }
      .btn-group{
        margin: 10px 0;
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
    .foot{
      margin-top: 130px;
      text-align: center;
      font-size: 11px;
      color:rgba(203, 203, 203, 0.2);
    }
}
</style>
