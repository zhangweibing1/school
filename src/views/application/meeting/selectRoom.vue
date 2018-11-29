<template>
  <div class="selectRoom">
    <van-nav-bar
      title="选择会议室"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
    <div class="top">
        <div class="personal-info between" slot="header">
            <div class="info">
                <div class="con">
                    <div class="name">小会议室</div>
                    <div class="result">地点：综合楼</div>
                    <div class="result">容纳人数：8人</div>
                </div>
                <div class="btn-group">
                    <van-button size="small" class="btn">确认</van-button>
                </div>
            </div>
            <div class="detail" @click="lookDetail()">
                <div class="title">查看它的使用情况</div>
                <van-icon class="arrow" name="arrow" size="12px" color="#c7c7cb"/>
            </div>
        </div>
        <div class="personal-info between" slot="header">
            <div class="info">
                <div class="con">
                    <div class="name">小会议室</div>
                    <div class="result">地点：综合楼</div>
                    <div class="result">容纳人数：8人</div>
                </div>
                <div class="btn-group">
                    <van-button size="small" class="btn">确认</van-button>
                </div>
            </div>
            <div class="detail" @click="lookDetail()">
                <div class="title">查看它的使用情况</div>
                <van-icon class="arrow" name="arrow" size="12px" color="#c7c7cb"/>
            </div>
        </div>
        <div class="personal-info between" slot="header">
            <div class="info">
                <div class="con">
                    <div class="name">小会议室</div>
                    <div class="result">地点：综合楼</div>
                    <div class="result">容纳人数：8人</div>
                </div>
                <div class="btn-group">
                    <van-button size="small" class="btn">确认</van-button>
                </div>
            </div>
            <div class="detail" @click="lookDetail()">
                <div class="title">查看它的使用情况</div>
                <van-icon class="arrow" name="arrow" size="12px" color="#c7c7cb"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectRoom',
  data() {
    return {
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    lookDetail() {
      this.$router.push('roomDetail');
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
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
    border-bottom:1px solid #e7e7e7;
    &:last-child{
        border: 0;
    }
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .personal-info{
    padding:20px 0px 0px;
    position: relative;
    .info{
      width:100%;
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
    .btn-group{
        position: absolute;
        top: 20px;
        right: 0;
        .btn{
            font-size: 16px;
            border-radius: 2px;
            background-color: #1890ff;
            color: #FFFFFF;
            padding: 0px 12px;
        }
    }
  }
  .detail{
      overflow: hidden;
      padding: 12px 0;
      .title{
          font-size: 15px;
          color:#333;
          float: left;
      }
      .arrow{
          text-align: right;
          float: right;
          margin-top: 3px;
      }
  }
</style>
