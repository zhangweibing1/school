<template>
  <div class="roomDetail">
    <van-nav-bar
      title="会议室使用情况"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
    <div class="top">
        <h3>小会议室</h3>
        <div class="timeline">
            <div class="situation">
                <div class="datatime">
                    <div  class="year">2018年08月10日</div>
                </div>
                <img src="../../../assets/yd@2x.png" />
                <div class="box">
                    <div class="time">
                        <div class="name">马小帅</div>
                        <div class="newdata">
                            <p>开始时间：
                                <span>09:00</span>
                            </p>
                            <p>结束时间：
                                <span>11:00</span>
                            </p>
                        </div>
                    </div>
                    <div class="time">
                        <div class="name">马小帅</div>
                        <div class="newdata">
                            <p>开始时间：
                                <span>09:00</span>
                            </p>
                            <p>结束时间：
                                <span>11:00</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="situation">
                <div class="datatime">
                    <div  class="year">2018年8月1日</div>
                </div>
                <img src="../../../assets/yd@2x.png" />
                <div class="box">
                    <div class="time">
                        <div class="name">马小帅</div>
                        <div class="newdata">
                            <p>开始时间：
                                <span>09:00</span>
                            </p>
                            <p>结束时间：
                                <span>11:00</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roomDetail',
  data() {
    return {
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goEvaluate() {
      this.$router.push('evaluationDetail');
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  h3{
    font-size: 16;
    color: #333333;
    text-align: center;
    padding: 20px 0;
  }
  .timeline{
      padding: 10px 0 40px;
    .situation{
        position: relative;
        margin-left: 130px;
        border-left: 1px solid #e7e7e7;
        .datatime{
            width:128px;
            position: absolute;
            text-align: right;
            left:-144px;
            top:0px;
            .year{
                color: #1890ff;
                font-size: 15px;
            }
        }
        img{
            position: absolute;
            left: -11px;
            top: 0px;
            width:20px;
            height:20px;
        }
        .time{
            position: relative;
            padding: 10px 20px;
            .name{
                position: absolute;
                top:20px;
                left:-60px;
                color: #666666;
                font-size: 14px;
                line-height:30px;
            }
            .newdata{
                font-size: 14px;
                color:#999;
                box-shadow:2px 2px 1px 1px rgba(201, 219, 255, 0.75);
                border:1px solid #fff;
                border-radius: 4px;
                padding: 15px;
                line-height: 30px;
            }
        }
    }
  }
</style>
