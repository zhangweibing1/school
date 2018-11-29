<template>
  <div class="back" @click="goBack()" v-if="back">
    <van-icon name="arrow-left" />
    <span>返回</span>
  </div>
</template>
<script>
export default {
  name: 'back-button',
  data() {
    return {
      back: false,
      appJSObject: window.AppJSObject,
    };
  },
  methods: {
    goBack() {
      this.appJSObject.go_app('back');
    },
  },
  mounted() {
    this.$emit('isAPP', this.back);
  },
};
</script>
<style lang="scss" scoped>
  .back {
    height: 46px;
    position: fixed;
    font-size: 14px;
    z-index: 9;
    top: 0;
    text-align: center;
    line-height: 46px;
    color: #38f;
    background: #fff;
    padding: 0 10px;
    span {
      padding: 0 3px;
    }
  }
</style>
