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
      <van-button size="large" class="btn blue" @click="next()">下一步</van-button>
    </div>
  </div>
</template>

<script>
import { queryMqByAccount } from '@/services/mine';

export default {
  name: 'forgot',
  data() {
    return {
      account:'',
      submitMsg:{
        account:''
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    diserror() {
      this.psdError = false;
    },

    async query(info){
      const data = await queryMqByAccount(info);
      if (data.httpCode === '200' || 200) {
        if(data.data.length == 0){
          this.$toast('当前用户未设置密保! 请联系管理员！！！');
          return;
        }else{
          this.$router.push("/forgotNew_mq/"+info.account); 
        }
      }
    },
    next() {
      if (this.account === '') {
        this.$toast('请填写用户名!');
        return;
      }
      this.submitMsg.account = this.account
      this.query(this.submitMsg);
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot {
  padding: 50% 0 40px;
  background-color: #fff;
  .wrap{
    padding: 23px 39px;
    margin-top: 29px;
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
    margin: 20px 0 0;
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
