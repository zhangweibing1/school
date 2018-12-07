<template>
  <div class="mine">
    <van-nav-bar
      title="我的"
      fixed/>
    <div class="flexbox personal-info" slot="header">
      <div class="flexbox center" @click="jump('personal')">
        <div class="avatar">
          <img :src="$store.state.system.sftpPath + $store.state.system.userInfo.zP"
          :onerror="defaultImg" alt="">
        </div>
        <div>
          <div class="name">{{$store.state.system.userInfo.userName}}</div>
          <div class="result">工号：{{$store.state.system.userInfo.rYH}}</div>
        </div>
        <div class="arrow">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="job">
      <ul >
        <li>一卡通余额<span>暂无</span></li>
        <li>|</li>
        <li>教师职称<span>教授</span></li>
        <!-- <li>所在系别<span>机械工程系系</span></li> -->
      </ul>
    </div>
    <!-- <div class="top">
      <van-cell-group>
        <van-cell title="轨迹" is-link value="更新时间05/16" />
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell-group>
        <van-cell title="生活" is-link />
        <van-cell title="教学" is-link />
        <van-cell title="办公" is-link />
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell-group>
        <van-cell title="科研项目" is-link value="科研经费剩余7999元"/>
        <van-cell title="图书" is-link value="近期有一本书待还"/>
        <van-cell title="工资" is-link />
        <van-cell title="个人资产" is-link />
      </van-cell-group>
    </div> -->
    <div class="top">
      <van-cell-group>
        <van-cell title="设置" is-link @click="jump('setting')"/>
      </van-cell-group>
    </div>
  </div>
</template>
<script>

export default {
  name: 'mine',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    jump(item) {
      this.$router.push(item);
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .mine{
    padding: 46px 0 60px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .personal-info{
    padding:15px;
    background: #fff;
    position: relative;
    .avatar{
      width: 58px;
      height: 58px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 4.266vw;
    }
    .name{
      font-size: 15px;
      color: #333;
      line-height: 25px;
    }
    .result{
      font-size: 13px;
      color: #333;
    }
    .arrow{
      position: absolute;
      right: 15px;
      font-size: 13px;
      color:#c7c7cc;
    }
  }
  .job{
    background: #fff;
    padding: 0  0 15px 30px;
    overflow: hidden;
    li{
      float: left;
      color:#666;
      font-size: 13px;
      &:nth-child(1){
        margin: 0 22px;
      }
      &:nth-child(2){
        margin-right:22px;
        margin-top: 3px;
      }
      span{
        color:#333;
        font-size: 16px;
        display: inline-block;
        margin: 0 6px;
      }
    }
  }
</style>

