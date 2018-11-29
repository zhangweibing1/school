<template>
  <div class="replace">
    <back-button></back-button>
    <van-nav-bar
      title="证件补办"
      left-text="返回"
      right-text="查看记录"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"/>
      <div class="top">
        <div class="className flexbox between">
          <div class="label">姓名</div>
          <div class="content">
            {{$store.state.system.userInfo.userName}}
          </div>
        </div>
        <van-cell-group>
          <van-cell title="证件类型" required
           v-model="type" @click="showType = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showType" position="bottom">
            <van-picker show-toolbar
            :columns="typeList"
            @cancel="showType = false"
            @confirm="selectType" />
          </van-popup>
        </van-cell-group>
      </div>
      <div class="top">
        <div class="title">补办理由</div>
        <textarea
          v-model="cause"
          placeholder="请输入补办理由（如果证件类型为学生证，请填写乘车区间）">
        </textarea>
      </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { cardType, submitReplace } from '@/services/replace';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'replace',
  data() {
    return {
      showType: false,
      type: '请选择',
      typeData: [],
      typeList: [],
      cause: '',
      idTypeId: '',
      submitMsg: {
        idTypeId: '',
        idTypeName: '',
        userName: '',
        userId: '',
        cause: '',
        applyState: '',
      },
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  components: {
    backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push('replaceHistory');
    },
    async card() {
      const { data } = await cardType();
      this.typeData = data;
      this.typeData.forEach((element) => {
        this.typeList.push(element.typeName);
      });
      this.type = this.typeData[0].typeName;
      this.submitMsg.idTypeId = this.typeData[0].id;
      this.submitMsg.idTypeName = this.typeData[0].typeName;
    },
    selectType(value) {
      this.showType = false;
      this.type = value;
      this.typeData.forEach((element) => {
        if (element.typeName === value) {
          this.idTypeId = element.id;
          this.submitMsg.idTypeId = this.idTypeId;
        }
      });
    },
    async submitReplace(msg) {
      const data = await submitReplace(msg);
      if (data.httpCode === '200' || 200) {
        this.$toast.success('提交成功');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    submit() {
      if (this.cause === '') {
        this.$toast('请填写补办理由');
        return;
      }
      this.submitMsg.idTypeName = this.type;
      this.submitMsg.cause = this.cause;
      this.submitMsg.userName = this.userInfo.userName;
      this.submitMsg.userId = this.userInfo.id;
      this.submitMsg.applyState = '0';
      this.submitReplace(this.submitMsg);
    },
  },
  mounted() {
    this.card();
  },
};
</script>

<style lang="scss" scoped>
  .replace{
    padding: 46px 0 60px;
  }
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .className{
    line-height: 44px;
    border-bottom: 1px solid #e7e7e7;
    &:last-child{
      border-bottom: 0;
    }
    .lable{
      font-size: 16px;
      color:#323232;
    }
    .content{
      text-align: right;
      margin-right: 11px;
      color:#666;
      font-size: 14px;
    }
  }
  .title{
     color: #333;
     font-size: 16px;
     padding: 15px 15px 0 15px;
     position: relative;
     &::before{
      content: '*';
      position: absolute;
      left: 7px;
      top: 20px;
      font-size: 14px;
      color: #f44;
     }
  }
  textarea{
    border:0;
    width:100%;
    height:100px;
    padding:12px 15px;
    resize: none;
    font-size: 14px;
    color:#999;
  }
  .btn-group{
    padding: 0 38px;
    margin: 20px 0;
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
</style>
