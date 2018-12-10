<template>
  <div class="contactDetails">
    <van-nav-bar title="联系人详情" left-text="返回" right-text left-arrow fixed @click-left="onClickLeft"/>
    <div class="one">
      <div class="tx">
        <img :src="require('@/assets/xj.png')" alt>
      </div>
      <p>安然</p>
    </div>
    <div class="two">
      <ul>
        <li>
          <p class="name1">姓名</p>
          <p class="name2">安然</p>
        </li>
        <li>
          <p class="name1">电话</p>
          <p class="name2">+86-16620036633</p>
        </li>
        <li>
          <p class="name1">所带课程</p>
          <p class="name2">语文老师</p>
        </li>
      </ul>
    </div>
    <div class="three">
        <a href="">
          <van-icon name="phone" />
          <p>拨打电话</p>
        </a>
    </div>
  </div>
</template>

<script>
  export default {
name: "contactDetails",
  date() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goDetail() {
      this.$router.push("details");
    }
  }
  }
</script>

<style scoped>
.contactDetails {
  padding: 44px 12px 0;
  background: #fff;
}
.one {
  padding: 31px 0 20px 0;
  text-align: center;
}
.one p {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}
.tx {
  width:67px;
  height: 67px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
}
.tx img {
  width: 100%;
}
.name1 {
  font-size: 14px;
  color: #999;
  font-weight: 600;
}
.name2{
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0 20px;
  padding-bottom: 8px;
  border-bottom: solid 1px #e5e5e5;
}
.three{
  text-align: center;
  padding: 30px;
}
.three a{
  display: inline-block;
  width:78px;
  height: 78px;
  border-radius: 50%;
  background: #4085dd;
  border: solid 8px #a1c6fb;
  margin:30px auto;
}
.van-icon-phone{
  color: #fff;
  font-size: 30px;
  line-height: 64px;
}
.three p{
  font-size: 15px;
  color: #4085dd;
  margin-top: 12px;
  font-weight: 600;
}

</style>
