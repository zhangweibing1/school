<template>
  <div class="replaceSP">
    <div v-if="navback">
      <back-button></back-button>
    </div>
    <van-nav-bar
      :title="item.userName+'的'+item.idTypeName+'补办'"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
       <div class="top">
      <div class="flexbox personal-info between" slot="header">
        <div class="flexbox center">
          <div class="avatar">
            <img :src="$store.state.system.sftpPath + item.temp1"
            :onerror="defaultImg" alt="">
          </div>
          <div>
            <div class="name">{{item.userName}}</div>
            <div class="result warning">审批中</div>
          </div>
        </div>
      </div>
      <ul class="list">
        <li>
          <span class="title">性别</span>
          <span class="text">
            {{$store.state.system.userInfo.xBM == '1' ? '男'
            : $store.state.system.userInfo.xBM == '2' ? '女' : '未知'}}
          </span>
        </li>
        <li>
          <span class="title">出生日期</span>
          <span class="text">
            {{$store.state.system.userInfo.cSRQ
            ? $store.state.system.userInfo.cSRQ
            : '暂无'}}
          </span>
        </li>
        <li>
          <span class="title">民族</span>
          <span class="text">
            {{$store.state.system.userInfo.mZMTEXT
            ? $store.state.system.userInfo.mZMTEXT
            : '暂无'}}
          </span>
        </li>
        <li>
          <span class="title">学号</span>
          <span class="text">
            {{$store.state.system.userInfo.rYH
            ? $store.state.system.userInfo.rYH
            : '暂无'}}
          </span>
        </li>
        <li>
          <span class="title">身份证号</span>
          <span class="text">
            {{$store.state.system.userInfo.sFZJH
            ? $store.state.system.userInfo.sFZJH
            : '暂无'}}
          </span>
        </li>
        <li>
          <span class="title">联系电话</span>
          <span class="text">
            {{$store.state.system.userInfo.phone
            ? $store.state.system.userInfo.phone
            : '暂无'}}
          </span>
        </li>
        <li>
          <span class="title">家庭住址</span>
          <span class="text">
            {{$store.state.system.userInfo.address
            ? $store.state.system.userInfo.address
            : '暂无'}}
          </span>
        </li>
        <li>
          <span class="title">学院</span>
          <span class="text">{{item.deptName}}</span>
        </li>
        <li>
          <span class="title">专业</span>
          <span class="text">{{item.professionName}}</span>
        </li>
        <li>
          <span class="title">班级</span>
          <span class="text">{{item.className}}</span>
        </li>
        <li>
          <span class="title">补办理由</span>
          <span class="text">{{item.cause}}</span>
        </li>
      </ul>
    </div>
    <div class="top">
      <div class="between">
        <ul class="state">
          <li>
            <img :src="$store.state.system.sftpPath + item.temp1"
            :onerror="defaultImg" alt="">
            <span></span>
            <span class="gray">{{item.userName}}</span>
            <span class="gray">发起申请</span>
            <span>{{item.createTime}}</span>
          </li>
          <li v-for="(o,index) in applyOption" :key="index">
            <img :src="$store.state.system.sftpPath + o.zp"
            :onerror="defaultImg" alt="">
            <span></span>
            <span class="gray">{{o.username}}</span>
            <span class="success" v-if="o.state == '1'">已同意</span>
            <span class="danger" v-if="o.state == '2'">已拒绝</span>
            <span>{{o.operatorTime}}</span>
            <br>
            <p class="describe">{{o.option}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="jump('agreeyx')">同意</van-button>
      <van-button size="large" class="btn" @click="jump('disagreeyx')">拒绝</van-button>
    </div>
  </div>
</template>

<script>
import { replaceDetail } from '@/services/replace';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'replaceSPyx',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
      item: {},
      applyOption: [],
      myId: {
        id: '',
      },
      navback: false,
    };
  },
  components: {
    'back-button': backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    jump(i) {
      if (!this.$route.params.item) {
        this.$router.push({
          name: i,
          params: {
            itemId: this.appJSObject.getBeanId(),
            id: this.appJSObject.getDetailId(),
          },
        });
      } else {
        this.$router.push({
          name: i,
          params: {
            itemId: this.$route.params.item.id,
            id: this.$route.params.id,
          },
        });
      }
    },
    async getDetail(msg) {
      const { data } = await replaceDetail(msg);
      this.item = data;
      if (this.item.applyOption) {
        this.applyOption = JSON.parse(this.item.applyOption);
      }
    },
  },
  mounted() {
    if (!this.$route.params.item) {
      this.navback = true;
      this.myId.id = this.appJSObject.getBeanId();
    } else {
      this.myId.id = this.$route.params.id;
    }
    this.getDetail(this.myId);
  },
};
</script>

<style lang="scss" scoped>
.replaceSP{
  padding:46px 0 60px;
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
    padding:15px 0px;
    border-bottom:1px solid #e7e7e7;
  }
  .avatar{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 4.266vw;
  }
  .name{
    font-size: 16px;
    color: rgb(51, 51, 51);
    line-height: 6.4vw;
  }
  .result{
    font-size: 14px;
    line-height: 5.3333vw;
  }
  .list{
    padding: 12px;
    li{
      line-height: 30px;
      color:#333;
      overflow: hidden;
      .title{
        display: block;
        float: left;
        width:65px;
        text-align: right;
        color:#999;
        margin-right: 14px;
      }
      .text{
        display: block;
        float: left;
      }
    }
  }
  .state {
    padding: 15px 0;
    li {
      line-height: 48px;
      font-size: 15px;
      height: 76px;
      overflow: hidden;
      position: relative;
      img {
        width:48px;
        height: 48px;
        border-radius: 50%;
        margin: 0 15px 0 4px;
        float: left;
        position: relative;
        z-index: 999999;
      }
      span {
        display: block;
        float: left;
      }
      .gray{
        color:#666;
      }
      .describe {
        font-size: 15px;
        line-height: 20px;
        margin-left: 67px;
        color:#333;
      }
    }
    li span:nth-child(2) {
      width: 2px;
      height: 100%;
      border-left: 1px dashed #c3c3c3;
      position: absolute;
      left: 26px;
      top: 2px;
    }
    li span:nth-child(3) {
      width: 60px;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    li span:nth-child(4) {
      margin: 0 0 0 3.74vw;
    }
    li span:nth-child(5) {
      margin: 0 3.74vw 0 0;
      float: right;
      color: #999999;
      font-size: 1.95vh;
    }
  }
  li:last-child span:nth-child(2) {
    border: none;
  }
  .btn-group{
    padding: 0 38px;
    margin: 20px 0;
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
}
</style>
