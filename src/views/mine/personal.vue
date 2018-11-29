<template>
  <div class="personal">
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <div class="className flexbox between">
        <div class="label">姓名</div>
        <div class="content">
          {{$store.state.system.userInfo.userName}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">性别</div>
        <div class="content">
          {{$store.state.system.userInfo.xBM == '1' ? '男'
            : $store.state.system.userInfo.xBM == '2' ? '女' : '未知'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">出生日期</div>
        <div class="content">
          {{$store.state.system.userInfo.cSRQ
          ? $store.state.system.userInfo.cSRQ
          : '暂无'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">民族</div>
        <div class="content">
          {{$store.state.system.userInfo.mZMTEXT
          ? $store.state.system.userInfo.mZMTEXT
          : '暂无'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">身份证号</div>
        <div class="content">
          {{$store.state.system.userInfo.sFZJH
          ? $store.state.system.userInfo.sFZJH
          : '暂无'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">学号</div>
        <div class="content">
          {{$store.state.system.userInfo.rYH
          ? $store.state.system.userInfo.rYH
          : '暂无'}}
        </div>
      </div>
    </div>
    <div class="top">
      <div class="className flexbox between">
        <div class="label">院系</div>
        <div class="content">
          {{$store.state.system.userInfo.deptName
          ? $store.state.system.userInfo.deptName
          : '暂无'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">专业</div>
        <div class="content">
          {{$store.state.system.userInfo.proName
          ? $store.state.system.userInfo.proName
          : '暂无'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">班级</div>
        <div class="content">
          {{$store.state.system.userInfo.className
          ? $store.state.system.userInfo.className
          : '暂无'}}
        </div>
      </div>
      <div class="className flexbox between">
        <div class="label">联系电话</div>
        <div class="content">
          {{$store.state.system.userInfo.phone
          ? $store.state.system.userInfo.phone
          : '暂无'}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personal',
  data() {
    return {
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .personal{
    padding: 46px 0 60px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .className{
    line-height: 44px;
    border-bottom: 1px solid #e7e7e7;
    margin-left: 12px;
    &:last-child{
      border-bottom: 0;
    }
    .lable{
      font-size: 17px;
      color:#323232;
    }
    .content{
      text-align: right;
      margin-right: 11px;
      color:#808080;
      font-size: 15px;
    }
  }
</style>

