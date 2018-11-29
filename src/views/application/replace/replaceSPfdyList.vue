<template>
  <div class="replaceSPList">
    <van-nav-bar
      title="待审批列表"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-list
        v-model="loading"
        :finished="finished"
        :offset= "10"
        @load="onLoad"
      >
      <div class="personal-info between"
        v-for="(item, index) in list" :key="index">
        <router-link :to="{name: 'replaceSP', params: {id: item.id, item: item}}">
          <div class="avatar">
            <img :src="$store.state.system.sftpPath + item.temp1"
            :onerror="defaultImg" alt="">
          </div>
          <div class="info">
            <div class="con">
              <div class="name">{{item.userName}}的{{item.idTypeName}}补办</div>
              <div class="result warning" v-if="item.applyState == 0">等待辅导员审批</div>
              <div class="result warning" v-if="item.applyState == 1">等待院书记审批</div>
              <div class="result warning" v-if="item.applyState == 2">等待学生处审批</div>
              <div class="result success" v-if="item.applyState == 3">审批通过</div>
              <div class="result danger" v-if="item.applyState == 8">审批拒绝</div>
            </div>
            <div class="date">
              <span>{{item.createTime}}</span>
            </div>
          </div>
        </router-link>
      </div>
      </van-list>
    </div>
    <div v-if="this.list.length == 0">
      <no-data></no-data>
    </div>
  </div>
</template>

<script>
import { replaceList } from '@/services/replace';
import noData from '@/components/noData/noData.vue';


export default {
  name: 'replaceSPfdyList',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      loading: false,
      finished: false,
      pageNum: 0,
      list: [],
    };
  },
  components: {
    'no-data': noData,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async onLoad() {
      const data = await replaceList({
        applyStateone: '0',
        pageNum: this.pageNum += 1,
      });
      this.list = this.list.concat(data.data);
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.list.length >= data.total) {
        this.finished = true;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
  .replaceSPList{
    padding: 46px 0 60px;
  }
  .success {
    color: #51bf61 !important;
  }
  .warning{
    color: #ea9542 !important;
  }
  .danger{
    color: #ff5757 !important;
  }
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .personal-info{
    padding:20px 0px 0px;
    overflow: hidden;
    position: relative;
    &:last-child{
      .info{
        border: 0;
      }
    }
    .avatar{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 14px;
      float: left;
    }
    .info{
      width:calc(100% - 62px);
      float: left;
      border-bottom:1px solid #e7e7e7;
      .name{
        font-size: 16px;
        color: #333;
        margin-bottom: 6px;
      }
      .result{
        font-size: 15px;
        color:#999;
        line-height: 25px;
      }
    }
    .con{
      float: left;
      padding-bottom: 20px;
    }
    .date{
      font-size: 14px;
      color:#999;
      float: right;
    }
  }
</style>
