<template>
  <div class="mysq">
    <van-nav-bar title="设置密保" left-text="返回" right-text=" "
    left-arrow fixed @click-left="onClickLeft" />

    <van-cell-group>
            <div  :index="index" v-for="(n,index) in mysqList" 
          :key="n.sysSecurityquestion.id" :id="n.sysSecurityquestion.id" class="q">
            <div class="top">
              <input type="hidden" name=$index v-model=v.id />
              <van-field
                required
                clearable         
                v-model=v.sysSecurityquestion.content
                icon="question"
                @click-icon="$toast('密保问题')"
              />
              <van-field v-model=v.answer placeholder="请输入答案" /> 
            </div>
      </div>
    </van-cell-group>
      <div class="btn-group">
            <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { getMySQ } from '@/services/mine';
import { Field } from 'vant';

export default {
  name: 'mysq',
  data() {
    return {
      mysqList: [],
      appJSObject: window.AppJSObject,
      submitMsg:[],
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMySQ() {
      const data = await getMySQ({ loginId: this.$store.state.system.userInfo.loginId });
      this.mysqList = data.data;
      console.log(this.mysqList);
    },

    async submitMyMq() {
      const data = await submitMyMq();
      this.mysqList = data.data;
    },
  },
  mounted() {
    this.getMySQ();
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
