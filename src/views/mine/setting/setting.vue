<template>
  <div class="setting">
    <van-nav-bar
      title="设置"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-cell-group>
        <van-cell title="帐号与安全" is-link @click="jump('accountSafe')"/>
      </van-cell-group>
    </div>
    <!-- <div class="top">
      <van-cell-group>
        <van-cell title="新消息通知" is-link />
      </van-cell-group>
    </div> -->
    <div class="top">
      <van-cell-group>
        <!-- <van-cell title="版本" is-link value="5.36"/> -->
        <!-- <van-cell title="版本日期" is-link value="2018/10/30"/> -->
        <!-- <van-cell title="新功能介绍" is-link /> -->
        <!-- <van-cell title="版本检查" is-link /> -->
        <van-cell title="关于我们" is-link @click="jump('aboutUs')"/>
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell-group>
        <van-cell title="清除缓存" @click="clear()" is-link />
      </van-cell-group>
    </div>
    <div class="btn-group">
      <van-button size="large" class="btn" @click="logout">退出登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'setting',
  data() {
    return {
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    jump(item) {
      this.$router.push(item);
    },
    clear() {
      localStorage.clear();
      this.$toast.success('清除成功');
      this.$router.push('/');
    },
    logout() {
      localStorage.clear();
      this.$store.dispatch('system/setUserInfo', null);
      this.$store.dispatch('system/setMenu', null);
      this.$store.dispatch('system/setToken', null);
      this.$router.push('/');
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .setting{
    padding: 46px 0 60px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .btn-group{
    // padding: 0 38px;
    margin: 20px 0;
    .btn{
        font-size: 17px;
        margin: 0 auto 15px;
        height: 6.8vh;
        line-height: 6.8vh;
        background-color: #FFFFFF;
        color: #ff5757;
    }
  }
</style>

