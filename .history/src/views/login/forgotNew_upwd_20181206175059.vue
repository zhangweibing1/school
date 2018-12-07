<template>
  <div class="accountSafe">
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="wrap">
      <p>你的登陆账号是：{{$store.state.system.userInfo.account}}</p>
      <div class="form">
        <input type="text" v-model="psdForm.oldPassword"
         placeholder="请输入旧密码" required />
        <input type="text" v-model="psdForm.password" @focus="diserror"
         name="phone" placeholder="请输入新密码（6-16个字符或数字）" required />
        <input type="text" v-model="newPassword" placeholder="请再次输入新密码"
         @focus="diserror" required />
        <p class="error" v-if="psdError">两次输入密码不一致，请重新输入！</p>
      </div>
    </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">完成</van-button>
    </div>
  </div>
</template>

<script>
import { setNewPsd } from '@/services/mine';
import { mapGetters } from 'vuex';

export default {
  name: 'accountSafe',
  data() {
    return {
      psdError: false,
      newPassword: '',
      psdForm: {
        id: '',
        loginId: '',
        oldPassword: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters('system' , ['userInfo']),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    diserror() {
      this.psdError = false;
    },
    async setNewPsd() {
      this.psdForm.loginId = this.userInfo.sysLogin.id;
      this.psdForm.id = this.userInfo.id;
      const data = await setNewPsd(this.psdForm);
      if (data.httpCode === '200') {
        this.$toast('修改成功！');
        this.logout();
      } else if(data.httpCode === '403'){
        this.$toast(data.msg);
      }else{
        this.$toast(data.msg);
      }
    },
    logout() {
      localStorage.clear();
      this.$store.dispatch('system/setUserInfo', null);
      this.$store.dispatch('system/setMenu', null);
      this.$store.dispatch('system/setToken', null);
      this.$router.push('/');
    },
    submit() {
      if (this.psdForm.oldPassword === '') {
        this.$toast('请填写旧密码！');
        return;
      }
      if (this.psdForm.password === '') {
        this.$toast('请填写新密码！');
        return;
      }
      if (this.psdForm.password !== this.newPassword) {
        this.psdError = true;
        return;
      }
      this.setNewPsd();
    },
  },
};
</script>

<style lang="scss" scoped>
.accountSafe {
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
    color: #666;
    font-size: 15px;
    margin: 34px 0px 20px;
  }
  .error{
    color: #ff5757;
    font-size: 14px;
    margin: 10px 0px 40px 26px;
  }
  .btn-group{
    padding: 0 38px;
    margin: 40px 0 0;
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
