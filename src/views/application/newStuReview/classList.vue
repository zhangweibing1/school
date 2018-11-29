<template>
  <div class="classList">
    <back-button></back-button>
    <van-nav-bar
      title="我的班级"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="top" v-for="(item, index) in list" :key="index">
        <router-link :to="{name: 'studentList', query: {id: item.id, item: item}}">
          <div class="className">{{item.bJMC}}</div>
        </router-link>
      </div>
      <div v-if="this.list.length == 0">
        <no-data></no-data>
      </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import { classList } from '@/services/newStuReview';
import backButton from '@/components/backButton/backButton.vue';
import noData from '@/components/noData/noData.vue';

export default {
  name: 'classList',
  data() {
    return {
      list: [],
      userId: {
        BZRGH: '',
      },
    };
  },
  computed: {
    // ...mapGetters('system', ['userInfo']),
    // userId() {
    //   return {
    //     BZRGH: this.userInfo.id,
    //   };
    // },
  },
  components: {
    'back-button': backButton,
    'no-data': noData,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // async classList(BZRGH) {
    //   const { data } = await classList(BZRGH);
    //   this.list = data;
    // },
    async classList() {
      const appJSObject = window.AppJSObject;
      this.userId.BZRGH = appJSObject.getUserId();
      const { data } = await classList(this.userId);
      this.list = data;
    },
  },
  mounted() {
    // this.classList(this.userId);
    this.classList();
  },
};
</script>

<style lang="scss" scoped>
  .classList{
    padding-top: 46px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    padding-left:11px;
  }
  .className{
    line-height: 44px;
    border-bottom: 1px solid #e7e7e7;
    &:last-child{
      border-bottom: 0;
    }
  }
</style>

