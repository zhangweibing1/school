<template>
  <div>
    <div class="noData">
      <img :src="require('@/assets/wsj@2x.png')" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'noData',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
  .noData{
    width: 100%;
    text-align: center;
    padding: 40px 0 40px;
    img{
      width: 30%;
    }
  }
</style>
