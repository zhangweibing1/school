<template>
    <div class="disagree">
        <van-nav-bar
        title="审批意见"
        left-text="返回"
        right-text=" "
        left-arrow
        @click-left="onClickLeft"/>
        <div class="top">
            <textarea name="" id="" placeholder="请输入拒绝理由"></textarea>
        </div>
        <div class="btn-group">
            <van-button size="large" class="btn blue">确认拒绝</van-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'disagree',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  textarea{
    border:0;
    width:100%;
    height:150px;
    padding:15px 12px;
    resize: none;
    font-size: 16px;
  }
  .btn-group{
    padding: 0 38px;
    margin: 40px 0;
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
</style>
