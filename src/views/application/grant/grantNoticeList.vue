<template>
  <div class="grantNotice">
    <back-button></back-button>
    <van-nav-bar
      title="奖助公示列表"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="{name: 'grantNoticeDetail', params: {id: item.id, item: item}}">
          <h4>{{item.name}}</h4>
          <p>发布人：{{item.sysUser.userName}}</p>
          <p>发布天数：{{item.day}}</p>
          <p>发布时间：{{item.publicityTime}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNoticeList } from '@/services/grant';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'grantNoticeList',
  data() {
    return {
      list: [],
      ls: '',
    };
  },
  components: {
    'back-button': backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMessage() {
      const { data } = await fetchNoticeList();
      this.list = data;
    },
  },
  mounted() {
    this.getMessage();
  },
};
</script>

<style lang="scss" scoped>
.grantNotice {
  position: relative;
  padding-top: 46px;
  ul {
      background: #fff;
    li {
      margin: 0 12px;
      padding: 12px 0;
      border-bottom: 1px solid #e7e7e7;
      a {
        h4 {
          font-size: 16px;
          color: #333;
        }
        p {
          font-size: 15px;
          color: #999;
        }
      }
    }
  }
}
</style>
