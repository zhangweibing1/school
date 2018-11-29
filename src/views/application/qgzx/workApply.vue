<template>
  <div class="workApply">
    <van-nav-bar title="岗位申请" left-text="返回" right-text="申请历史" left-arrow @click-left="onClickLeft"
    @click-right="onClickRight"/>
  </div>
</template>

<script>
export default {
  name: 'workApply',
  data() {
    return {

    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push('workHistory');
    },
  },
};
</script>

<style scoped>

</style>
