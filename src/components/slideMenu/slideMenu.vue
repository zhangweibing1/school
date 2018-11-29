<template>
  <div class="sildeMenu"></div>
</template>
<script>
export default {
  name: 'slideMenu',
  data() {
    return {
      back: false,
    };
  },
  props: [
    // menu, selectOption,
  ],
  methods: {
    goBack() {
      const appJSObject = window.AppJSObject;
      appJSObject.go_app('back');
    },
  },
  mounted() {
    const navurl = window.localStorage.getItem('appType');
    if (navurl) {
      this.back = true;
    } else {
      this.back = false;
    }
  },
};
</script>
<style lang="scss" scoped>
  .back {
    height: 46px;
    position: absolute;
    font-size: 14px;
    z-index: 9;
    text-align: center;
    line-height: 46px;
    color: #38f;
    background: #fff;
    padding: 0 20px;
    span {
      padding: 0 20px;
    }
  }
</style>
