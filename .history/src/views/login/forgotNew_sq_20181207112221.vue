<template>
  <div class="mysq">
    <van-nav-bar title="密保找回" left-text="返回" right-text=" "
    left-arrow fixed @click-left="onClickLeft" />
    <van-cell-group>
            <div :index="index" v-for="(value,index) in dataModel" :key="value.id"  class="q">
            <div class="top">
              <van-field
                clearable disabled      
                v-model=dataModel[index].content
                icon="question"
                @click-icon="$toast('密保问题')"
              />
              <van-field v-model=dataModel[index].nanswer required placeholder="请输入答案" /> 
            </div>
      </div>
    </van-cell-group>
      <div class="btn-group">
            <van-button size="large" class="btn blue" @click="submitRequire()">验证</van-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { getMySQ,submitMqData,queryMqByAccount} from '@/services/mine';
import { Field } from 'vant';

export default {
  name: 'mysq',
  data() {
    return {
      submitMsg:{
        account:''
      },
      dataModel:[],
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
    
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async query() {
      this.submitMsg.account = this.$route.params.account;
      const data = await queryMqByAccount(this.submitMsg);
      let list = data.data
    for(let i in list){
        let obj = new Object();
        obj["id"] = list[i]["id"];
        obj["content"] = list[i]["sysSecurityquestion"]["content"];
        obj["answer"] = list[i]["answer"];
        obj["nanswer"] = '';
        obj["sqId"] = list[i]["sqId"];
        obj["loginId"] = list[i]["loginId"];
        this.dataModel.push(obj);
      }
    },
    submitRequire(){
      let model = this.dataModel;
      for(let i in model){
        if(model[i]['answer'] != model[i]['nanswer']){
          this.$toast('密保不正确，请重新验证');
          return;
        }
      }
      //密保验证通过  跳转至 修改密码界面
      this.$router.push("/forgotNew_upwd/"+model[0]["loginId"]+"/"+this.$route.params.account);  
    }
  },
  mounted() {
    this.query();
  },
};
</script>
<style lang="scss" scoped>
  .mysq {
    padding: 60px 18px;
  }
  .q {
    margin-bottom: 15px;
  }
  .top{
    margin-top: 11px;
    background: #fafaff;
  }
  input {
    outline-offset: 0;
    width: 100%;
    height: 50px;
    border: 0;
    outline: solid 1px #e7e7e7;
    padding: 0 14px;
    margin-top: 10px;
  }
  button {
    border: 0;
    width: 100%;
    height: 48px;
    background: #4085dd;
    text-align: center;
    line-height: 48px;
    color: #fff;
    font-size: 17px;
    border-radius: 6px;
    margin-top: 50px;
  }
  button:focus {
    outline: none;
  }
</style>
