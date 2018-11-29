<template>
  <div class="evaluationDetail">
    <van-nav-bar
      title="会议室评价"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
      <div class="top">
        <div class="item flexbox between">
          <div class="label">会议室名称</div>
          <div class="content">小会议室</div>
        </div>
        <div class="evaluate">
            <div class="title">评价</div>
            <div class="item between">
                <div class="label">环境卫生</div>
                <div class="content">
                    <van-rate v-model="value1" color="#fdc76a" void-color="#e1e1e1"/>
                </div>
            </div>
            <div class="item between">
                <div class="label">服务态度</div>
                <div class="content">
                    <van-rate v-model="value2" color="#fdc76a" void-color="#e1e1e1"/>
                </div>
            </div>
            <div class="item between">
                <div class="label">会议设备</div>
                <div class="content">
                    <van-rate v-model="value3" color="#fdc76a" void-color="#e1e1e1"/>
                </div>
            </div>
        </div>
      </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue">提交</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'evaluationDetail',
  data() {
    return {
      value1: 3,
      value2: 4,
      value3: 2,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
  .evaluationDetail{
    .between{
        margin:0 12px;
    }
    .top{
        margin-top: 11px;
        background: #fff;
    }
    .item{
        padding: 15px 0;
        border-bottom: 1px solid #e7e7e7;
        .label{
            font-size: 16px;
            color: #333;
        }
        .content{
            font-size: 14px;
            color: #666;
            text-align: right;
        }
    }
    .evaluate{
        padding: 15px 0;
        .title{
            font-size: 16px;
            color:#999;
            margin: 5px 12px 8px 12px;
        }
        .item{
            border:0;
            padding: 8px 0;
            overflow: hidden;
            .label{
                font-size: 16px;
                color: #333;
                float: left;
                margin-right: 38px;
            }
            .content{
                font-size: 14px;
                color: #666;
                float: left;
            }
        }
    }
    .btn-group{
      padding: 0 38px;
      margin: 40px 0;
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
