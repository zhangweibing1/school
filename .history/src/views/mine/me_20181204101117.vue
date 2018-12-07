<template>
    <div class="me">
        <div class="top">
            <div class="touxiang">
                <img src="../../assets/myedu/touxiang.png" alt="">
            </div>
            <p class="name">马小帅</p>
            <p class="class">图形图像制作1301班</p>
        </div>
        <div class="picture">
            <img src="../../assets/myedu/one.png" alt="">
        </div>
        <div class="wrapper">
            <ul>
                <li v-if="$store.state.system.userInfo.userType"class="list" @click="jump('feedback')">
                    <img class="icon" src="../../assets/myedu/icon_2.png" alt="">
                    <span>用户反馈</span>
                    <img class="right" src="../../assets/myedu/right.png" alt="">
                </li>
                <li class="list" @click="jump('accountSafe')">
                    <img class="icon" src="../../assets/myedu/icon_2.png" alt="">
                    <span>修改密码</span>
                    <img class="right" src="../../assets/myedu/right.png" alt="">
                </li>
                <li class="list" @click="jump('mysq')">
                    <img class="icon" src="../../assets/myedu/icon_2.png" alt="">
                    <span>设置密保</span>
                    <img class="right" src="../../assets/myedu/right.png" alt="">
                </li>
                <li class="list" @click="jump('aboutUs')">
                    <img class="icon" src="../../assets/myedu/icon_2.png" alt="">
                    <span>关于我们</span>
                    <img class="right" src="../../assets/myedu/right.png" alt="">
                </li>
            </ul>
        </div>
        <button @click="logout()">退出登录</button>
    </div>
</template>

<script>

export default {
  name: 'me',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
    };
  },
  methods: {
    jump(item) {
      this.$router.push(item);
    },
    logout() {
      localStorage.clear();
      this.$store.dispatch('system/setUserInfo', null);
      this.$store.dispatch('system/setMenu', null);
      this.$store.dispatch('system/setToken', null);
      this.$router.push('/');
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.top{
    text-align: center;
    width: 100%;
    height: 206px;
    background: #4085dd;
}
.touxiang{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* background: red; */
    border: solid 4px #fff;
    box-shadow: 0 0 15px #0056c1;
    overflow:hidden;
    display: inline-block;
    margin-top:37px;
}
.touxiang img{
    width: 100%;
}
.name{
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    margin-top:10px;
}
.class{
    font-size: 15px;
    color: #fff;
    margin-top:4px;
}
.picture{
    width: 100%;
    background: #4085dd;
    height: 50px;
}
.picture img{
    width: 100%;
}
.wrapper{
    background: #fff;
}
.list{
    padding-left: 20px;
    padding-right: 20px;
    line-height: 55px;
    border-bottom: solid 1px #e5e5e5;
}
.icon{
    /* line-height: 1.1rem; */
    margin-top: 17px;
    width:16px;
    float: left;
    margin-right: 14px;
}
.list span{
    color: #333;
    font-size: 16px;
}
.right{
    width: 7px;
    height: 12px;
    float: right;
    margin-top: 20px;
}
.wrapper .list:last-child{
    border:0;
}
button{
    background: #fff;
    font-size: 16px;
    color: #1890ff;
    text-align: center;
    vertical-align: middle;
    width: 100%;
    height:45px;
    margin-top:20px;
    border:0;
}
</style>

