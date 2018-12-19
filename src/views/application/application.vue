
<template>
    <div class="apply">
      <van-nav-bar
      title="应用"
      fixed
      @click-left="onClickLeft"/>
        <ul class="menup">
          <li class="top module" v-for="menu in menuList" :key="menu.id">
            <div class="moduleName" id="item.id">{{menu.name}}</div>
            <ul class="menuc">
              <li v-for="j in menu.list" :key="j.id">
                <router-link :to="j.url">
                  <img :src="j.imgUrl"
                    :onerror="defaultImg" alt="">
                  <p>{{j.name}}</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
    </div>
</template>

<script>
import { getApplyMenus } from '@/services/api';

export default {
  name: 'application',
  data() {
    return {
      defaultImg: `this.src="${require('@/assets/word.png')}"`,
      menuList: [
        {
          id: 'health',
          name: '心理健康',
          list: [
            {
              id: 'onlineBooking',
              name: '在线预约',
              url: 'onlineBooking',
              imgUrl: '',
            },
            {
              id: 'stuList',
              name: '学生列表',
              url: 'stuList',
              imgUrl: '',
            },
          ],
        },
        {
          id: 'qgzx',
          name: '勤工助学',
          url: 'qgzx',
          list: [
            {
              id: 'workApply',
              name: '岗位申请',
              url: 'workApply',
              imgUrl: '',
            },
            {
              id: 'workInfo',
              name: '岗位详情',
              url: 'workInfo',
              imgUrl: '',
            },
            {
              id: 'workProposer',
              name: '申请人信息',
              url: 'workProposer',
              imgUrl: '',
            },
            {
              id: 'workHistory',
              name: '岗位申请历史',
              url: 'workHistory',
              imgUrl: '',
            },
            {
              id: 'myWork',
              name: '我的岗位',
              url: 'workInfo',
              imgUrl: '',
            },
          ],
        },
        {
          id: 'metting',
          name: '会议室管理',
          url: 'metting',
          list: [
            {
              id: 'applyFor',
              name: '会议室申请',
              url: 'applyFor',
              imgUrl: '',
            },
            {
              id: 'myApplyFor',
              name: '我的申请',
              url: 'myApplyFor',
              imgUrl: '',
            },
            {
              id: 'applyForSP',
              name: '会议室申请审批',
              url: 'applyForSP',
              imgUrl: '',
            },
            {
              id: 'evaluationList',
              name: '会议室评价',
              url: 'evaluationList',
              imgUrl: '',
            },
          ],
        },
        {
          id: 'apartment',
          name: '公寓管理',
          url: 'apartment',
          list: [
            {
              id: 'apartemntSafety',
              name: '安全检查管理',
              url: 'apartemntSafety',
              imgUrl: '',
            },
            {
              id: 'apartemntVisitor',
              name: '访客登记',
              url: 'apartemntVisitor',
              imgUrl: '',
            },
          ],
        },
        {
          id: 'newStuReview',
          name: '新生复查',
          list: [
            {
              id: 'classList',
              name: '新生复查',
              url: 'classList',
              imgUrl: '',
            },
            {
              id: 'completeInfo',
              name: '完善信息',
              url: 'completeInfo',
              imgUrl: '',
            },
          ],
        },
        {
          id: 'leave',
          name: '请假',
          list: [
            {
              id: 'leave',
              name: '请假',
              url: 'leave',
              imgUrl: '',
            },
            {
              id: 'leaveHistory',
              name: '请假历史',
              url: 'leaveHistory',
              imgUrl: '',
            },
            {
              id: 'leaveCancel',
              name: '销假',
              url: 'leaveCancel',
              imgUrl: '',
            },
            {
              id: 'leaveBacklog',
              name: '请假待办',
              url: 'leaveBacklog',
              imgUrl: '',
            },
            {
              id: 'leaveCancelList',
              name: '销假列表',
              url: 'leaveCancelList',
              imgUrl: '',
            },
          ],
        },
      ],
      menus: [],
      menuTitle: [],
      isActive: '',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMenus() {
      const { data } = await getApplyMenus();
      data.forEach((element) => {
        this.menuTitle.push({ name: element.codeText, id: element.id });
      });
      this.menus = data;
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

  },
};
</script>

<style lang="scss" scoped>
.apply{
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
        width: 45px;
      }
      p{
        margin: 10px 0;
        height: 30px;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        // overflow: hidden;
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
