<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tabs v-model="active">
        <van-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </van-tab>
      </van-tabs>
</demo-block>  
    
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '横向滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled'
    }
  },
  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4]
    };
  },
  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },
    onClick(index, title) {
      this.$toast(title);
    },
    onScroll(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
.demo-tab {
  margin-bottom: 300px;
  .van-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }
  .van-tab__pane {
    background-color: @white;
    padding: 20px;
  }
  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }
  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .van-doc-demo-block:last-child {
    .van-tab__pane {
      padding: 50px 20px;
    }
  }
}
</style>