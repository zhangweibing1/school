<template>
  <div class="task">
    <van-nav-bar
      title="待办"
      fixed/>
    <van-tabs @click="goItem">
        <van-tab v-for="index in menuList" :title="index.title" :key="index.id">
          <!-- <div class="search">
            <div class="span16">
              <van-icon name="search" size="15px"/>
              <input type="text" name="searce" id="search"
              v-model="search" @focus="searchBtn = true;"
               @blur="searchBtn = false;" placeholder="搜索">
              <button @click="search()" v-if="searchBtn">搜索</button>
            </div>
            <div class="span8" v-if="!searchBtn">
              <button @click="show = true">筛选</button>
            </div>
          </div>
          <div class="filtrate">
            <van-popup v-model="show" position="right" :overlay="true">
              内容
            </van-popup>
          </div> -->
          <div class="top">
            <div class="personal-info between"
            v-for="(item, index) in list" :key="index">
              <router-link
              :to="{
                name: JSON.parse(item.appUrl).MOBILE,
                params: {id: item.detailId, item: item}
                }">
                <div class="avatar">
                  <img :src="$store.state.system.sftpPath + item.thumbnails"
                  :onerror="defaultImg" alt="">
                </div>
                <div class="info">
                  <div class="con">
                    <div class="name">{{item.noticeTitle}}</div>
                    <div class="result">{{item.content}}</div>
                    <div class="result">{{item.createTime}}</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </van-tab>
    </van-tabs>
    <div v-if="this.list.length === 0">
      <no-data ></no-data>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { List } from '@/services/home';
import noData from '@/components/noData/noData.vue';


export default {
  name: 'task',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      show: false,
      list: [],
      menuList: [
        {
          id: 'todo',
          title: '待办理',
        },
        {
          id: 'haveDone',
          title: '已办理',
        },
        {
          id: 'myPublish',
          title: '我的发起',
        },
      ],
      type: '',
      search: '',
      searchBtn: false,
      appJSObject: window.AppJSObject,
    };
  },
  components: {
    'no-data': noData,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getInfo() {
      const { data } = await List({
        userId: this.userInfo.id,
        // userId: this.appJSObject.getUserId(),
        noticeType: '6',
        otherType: '1',
      });
      this.list = data;
    },
    async goItem(index, title) {
      if (index === 0) {
        this.type = '1';
      }
      if (index === 1) {
        this.type = '2';
      }
      if (index === 2) {
        this.type = '3';
      }
      const { data } = await List({
        userId: this.userInfo.id,
        // userId: this.appJSObject.getUserId(),
        noticeType: '6',
        otherType: this.type,
      });
      this.list = data;
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
  .task{
    padding: 46px 0 60px;
  }
  .van-modal{
    width:100%;
    height:100%;
    top:21%;
  }
  .van-popup--right{
    top:61%;
    width:70%;
    height:79%;
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
  .search {
    background-color: #fff;
    color: #999;
    text-align: center;
    padding: 15px;
    font-size: 15px;
    button {
      border: 0;
      background-color: #fff;
    }
    .span16 {
      display: inline-block;
      i {
        display: inline-block;
        margin-right: 6px;
        vertical-align: middle;
      }
      input {
        border: 0;
      }
    }
    .span8 {
      display: inline-block;
    }
  }
  .top{
    background: #fff;
  }
  .personal-info{
    padding:20px 0px 0px;
    overflow: hidden;
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
