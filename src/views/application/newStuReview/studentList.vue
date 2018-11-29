<template>
  <div class="classList">
    <van-nav-bar
      title="学生列表"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div @click="showState = true" class="chooseState">
        {{this.state.name ? this.state.name : '待复查'}}
        <van-icon name="arrow" class="arrow"/>
      </div>
      <van-actionsheet
        v-model="showState"
        :actions="columns"
        @select="onState"
      />
      <div class="top">
        <div class="flexbox item head">
          <div class="td">学生姓名</div>
          <div class="td">性别</div>
          <div class="td">状态</div>
        </div>
        <div class="flexbox item" v-for="(item, index) in list" :key="index">
          <router-link :to="{name: 'personInfo', params: {id: item.sysUser.id, item: item}}">
            <div v-if="item.sysUser">
              <div class="td">{{item.sysUser.userName ? item.sysUser.userName : ''}}</div>
              <div class="td">
                {{item.sysUser.xBM == '1' ? '男' : item.sysUser.xBM == '2' ? '女' : '未知'}}
              </div>
            </div>
            <div class="td danger" v-if="item.checkStu === null">
              待复查
            </div>
            <div class="td" v-if="item.checkStu != null">
              <div v-if="item.checkStu.checkStatus === '1'">未报到</div>
              <div v-if="item.checkStu.checkStatus === '2'">参军</div>
              <div v-if="item.checkStu.checkStatus === '3'">信息有异议</div>
              <div v-if="item.checkStu.checkStatus === '4'">休学</div>
              <div v-if="item.checkStu.checkStatus === '5'">退学</div>
              <div v-if="item.checkStu.checkStatus === '6'">复查通过</div>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="this.list.length == 0">
        <no-data></no-data>
      </div>
  </div>
</template>

<script>
import { studentList } from '@/services/newStuReview';
import noData from '@/components/noData/noData.vue';

export default {
  name: 'studentList',
  data() {
    return {
      showState: false,
      state: '',
      columns: [
        { itemCode: '1', name: '未报到' },
        { itemCode: '2', name: '参军' },
        { itemCode: '3', name: '信息有异议' },
        { itemCode: '4', name: '休学' },
        { itemCode: '5', name: '退学' },
        { itemCode: '6', name: '复查通过' },
        { itemCode: '7', name: '待复查' },
      ],
      classID: {
        classId: '',
        checkStatus: '',
      },
      list: [],
    };
  },
  components: {
    'no-data': noData,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMessage(classId) {
      const { data } = await studentList(classId);
      this.list = data;
    },
    onState(value) {
      this.list = [];
      this.showState = false;
      this.state = value;
      this.classID = {
        classId: this.$route.query.id,
        checkStatus: this.state.itemCode,
      };
      this.getMessage(this.classID);
    },
  },
  mounted() {
    this.list = [];
    this.classID7 = {
      classId: this.$route.query.id,
      checkStatus: '7',
    };
    this.getMessage(this.classID7);
  },
};
</script>

<style lang="scss" scoped>
  .chooseState {
    line-height: 46px;
    position: fixed;
    top:0;
    right:20px;
    z-index: 99;
    font-size: 14px;
    color:#1890ff;
    .arrow{
      font-size: 12px;
      transform: rotate(90deg);
    }
  }
  .classList{
    padding: 46px 0 60px;
  }
  .danger{
    color: #ff5757 !important;
  }
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .item.head{
    color: #323232;
    border-top:1px solid #e7e7e7;
  }
  .item{
    border-bottom:1px solid #e7e7e7;
    overflow: hidden;
    div.td{
      width:33.33%;
      float: left;
      line-height: 44px;
      text-align: center;
    }
  }
  .item a{
    width: 100%;
    display: inline-block;
  }
</style>

