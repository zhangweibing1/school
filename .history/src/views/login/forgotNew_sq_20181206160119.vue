<template>
  
</template>
<script>
import { mapGetters } from 'vuex';
import { getMySQ,submitMqData} from '@/services/mine';
import { Field } from 'vant';

export default {
  name: 'mysq',
  data() {
    return {
     account:this.$route.params.account,
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
    console.log(this.$route.params.account)
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
