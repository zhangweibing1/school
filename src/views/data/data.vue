<template>
  <div class="data">
    <van-nav-bar
    title="数据"
    fixed
    @click-left="onClickLeft"/>
      <ul class="menut">
        <li v-for="item in menuTitle" :key="item.id">
          <a :class="{active: isActive === item.id}" @click="setActive(item.id)">
            {{item.name}}</a>
        </li>
      </ul>
      <ul class="menup">
        <li class="top module" v-for="i in menus" :key="i.id" :id="i.id">
          <div class="moduleName" id="item.id">{{i.codeText}}</div>
          <ul class="menuc">
            <li v-for="j in i.sysMenuList" :key="j.id">
              <router-link :to="j.request">
                <img :src="$store.state.system.sftpPath + j.frontIconcls"
        :onerror="defaultImg" alt="">
                <p>{{j.menuName}}</p>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>
<script>
import { getDataMenus } from '@/services/api';

export default {
  name: 'data',
  data() {
    return {
      menus: [],
      menuTitle: [],
      isActive: '',
      defaultImg: `this.src="${require('@/assets/tx@2x.png')}"`,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMenus() {
      const { data } = await getDataMenus();
      if (data) {
        data.forEach((element) => {
          this.menuTitle.push({ name: element.codeText, id: element.id });
        });
        this.menus = data;
      }
    },
    setActive(id) {
      console.log(id);
      this.isActive = id;
      const anchor = document.getElementById(id);
      // chrome
      document.body.scrollTop = anchor.offsetTop;
      // firefox
      document.documentElement.scrollTop = anchor.offsetTop;
    },
  },
  mounted() {
    this.getMenus();
  },
};
</script>

<style lang="scss" scoped>
.data{
  padding: 46px 0 60px;
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .module{
    padding:20px 10px 10px 20px;
  }
  .moduleName {
    padding-left: 8px;
    border-left:3px solid #1890ff;
    border-radius: 1px;
    font-size: 15px;
    color:#333333;
    height: 14px;
    line-height: 16px;
    font-weight: 600;
  }
  ul.menuc{
    overflow: hidden;
    text-align: center;
    li{
      float: left;
      width:25%;
      margin: 15px 0 0;
      font-size: 13px;
      a{
        color:#333;
      }
      img{
        width: 52px;
      }
      p{
        margin: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .menup {
    margin-top: 50px;
  }
  .menut {
    overflow: scroll;
    background-color: #fff;
    font-size: 15px;
    width: 100%;
    height: 41px;
    position: fixed;
    li {
      width: 25%;
      text-align: center;
      vertical-align: middle;
      display: inline-block;
      line-height: 40px;
    }
    a.active {
      color: #1890ff;
      display: inline-block;
      border-bottom: 1px solid #1890ff;
    }
  }
}
</style>

