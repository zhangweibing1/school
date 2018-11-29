<template>
  <div class="aboutUs">
    <van-nav-bar
      title="关于我们"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="logo">
      <img :src="require('@/assets/qf-logo.png')" alt="">
    </div>
    <div class="top">
      <van-cell-group>
        <van-cell title="软件生产商" value="青峰软件股份有限公司"/>
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell-group>
        <van-cell title="电话" value="0351-7823251"/>
        <van-cell title="网址" value="www.cnqfsoft.cn"/>
        <van-cell title="微信公众号" value="qf-soft"/>
        <van-cell title="地址" value="山西省太原市高新技术开发区中心街190号时代自由广场8层"/>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'aboutUs',
  data() {
    return {
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
  .aboutUs{
    padding: 46px 0 60px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .logo{
    width:82px;
    margin: 40px auto;
  }
</style>

