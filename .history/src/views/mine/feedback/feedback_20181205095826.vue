<template>
    <div class="feedback">
       <van-nav-bar
      title="意见反馈"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="wrapper">
        <textarea name="fk" id="" cols="" rows="" placeholder="请输入您宝贵的意见或建议..."></textarea>

        <input type="text" placeholder="请输入您的联系方式">

        <van-rate v-model="score" />

        <van-cell-group>
            <van-switch-cell v-model="isAnonymose" title="标题" />
        </van-cell-group>

        <div class="btn-group">
            <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
        </div>
      </div>
    </div>
</template>
<script>

import backButton from '@/components/backButton/backButton.vue';
import { Rate,SwitchCell } from 'vant';

export default {
  name: 'feedback',
  data() {
    return {
        userName: '',
        content: '',
        isAnonymose: 'false',
        schoolId : '',
        score : '',
        submitMsg:{
            userName: '',
            content: '',
            isAnonymose: '',
            schoolId : ''
        }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.feedback{
    padding: 45px 18px;
}
.wrapper{
    margin-top:5%
}
textarea{
    border:0;
    width: 100%;
    height: 161px;
    border-left: solid 5px #4085dd;
    outline: solid 1px #e7e7e7;
    padding: 0.28rem;
    outline-offset: 0;
}
input::placeholder,textarea::placeholder{
    font-size: 15px;
    color: #bfbfbf;
}
textarea:focus{
    box-shadow: 0 0 10px #d6f2ff;
}
input{
    outline-offset: 0;
    width: 100%;
    height: 50px;
    border:0;
    border-left: solid 5px #4085dd;
    outline: solid 1px #e7e7e7;
    padding: 0 14px;
    margin-top: 10px;
}
button{
    border:0;
    width: 100%;
    height: 48px;
    background: #4085dd;
    text-align: center;
    line-height: 48px;
    color: #fff;
    font-size: 0.34rem;
    border-radius: 6px;
    margin-top: 50px;
}
button:focus{
    outline: none;
}
</style>
