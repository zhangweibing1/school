<template>
  <div class="mysq">
    <van-nav-bar title="设置密保" left-text="返回" right-text=" "
    left-arrow fixed @click-left="onClickLeft" />
    <van-cell-group>
            <div :index="index" v-for="(value,index) in dataModel" :key="value.id"  class="q">
            <div class="top">
              <van-field
                clearable         
                v-model=dataModel[index].content
                icon="question"
                @click-icon="$toast('密保问题')"
              />
              <van-field v-model=dataModel[index].answer required placeholder="请输入答案" /> 
            </div>
      </div>
    </van-cell-group>
      <div class="btn-group">
            <van-button size="large" class="btn blue" @click="submitRequire()">提交</van-button>
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
  },
  mounted() {
    this.submitMsg.account = this.$route.params.account;
    this.query(this.submitMsg);
    const data = await queryMqByAccount(this.submitMsg);
    console.log(data);
  },
  async submit(msInfo) {
      const data = await submiqueryMqByAccounttMqData(msInfo);
      if (data.httpCode === '200' || 200) {
        this.$toast.success('提交成功');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败');
      }

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
