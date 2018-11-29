<template>
  <div class="home">
    <van-collapse v-model="activeNames">
      <van-collapse-item class="nav-item" title="界面" name="1">
        <van-cell-group>
          <!-- <van-cell value="设置导航条" /> -->
          <van-cell value="打开新页面" @click="$overWatch.openPage()" />
          <!-- <van-cell value="关闭当前页面" /> -->
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item class="nav-item" title="媒体" name="2">
        <van-cell-group>
          <!-- <van-cell value="选择照片或拍照" /> -->
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item class="nav-item" title="位置" name="3">
        <van-cell-group>
          <van-cell value="获取位置" @click="$overWatch.getLocation()" />
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item class="nav-item" title="设备" name="4">
        <van-cell-group>
          <!-- <van-cell value="扫码" /> -->
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item class="nav-item" title="开放接口" name="5">
        <van-cell-group>
          <van-cell value="获取用户信息" @click="$overWatch.getUserInfo()" />
          <van-cell value="分享" @click="$overWatch.onMenuShare()" />
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
    <!-- <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      class="view-has-bar"
    >
      <van-row v-for="(item, index) in list" :key="index" class="pane" type="flex">
        <van-col span="12" class="flexbox vertical center ellipsis-fa">
          <span class="title">{{item.title}}</span>
          <span class="desc ellipsis">{{item.desc}}</span>
        </van-col>
        <van-col span="12" class="thumnail">
          <img :src="item.image" />
        </van-col>
      </van-row>
    </van-list> -->
  </div>
</template>

<script>

import { getFakeList } from '@/services/api';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      activeNames: [],
    };
  },
  methods: {
    onLoad() {
      getFakeList()
        .then(({ data }) => {
          this.list = this.list.concat(data);
          this.loading = false;
          if (this.list.length >= 50) {
            this.finished = true;
          }
        });
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
  @import '@/styles/function.scss';
  .view-has-bar{
    padding-bottom: 50px;
    .pane{
      padding: 3vw;
      border-bottom: 1px solid #eee;
    }
    .title{
      color: #333;
      padding-right: 3vw;
    }
    .desc{
      color: #aaa;
      font-size: 1vw;
      margin-top: 3.3vw;
    }
    .thumnail{
      font-size: 0px;
    }
  }
  .home{
    min-height: 100vh;
    background-color: #fafafa;
    padding: 60px 15px 60px;
  }
  .home /deep/  .van-collapse-item__title{
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }
  .home /deep/  .van-collapse-item__title::after{
    left: 0px;
    border-color: transparent;
  }
  .home /deep/ .van-collapse-item{
    margin-bottom: 20px;
  }
  .home /deep/ .van-hairline--top-bottom::after{
    border-color: transparent;
  }
  .home /deep/ .van-cell:first-child::after{
    border-top-width: 1px;
  };
  .home /deep/ .van-cell::after{
    border-bottom-width: 1px;
    left: 15px;
  }
  .home /deep/ .van-hairline--top::after{
    border: 0;
  }
</style>
