<template>
  <div class="workProtocolCancel">
    <back-button></back-button>
    <van-nav-bar
      title="三方协议撤销"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-cell-group>
        <van-cell title="姓名" border required v-model="person"/>
        <div class="title">撤销理由</div>
        <textarea name="reason" resize v-model="cancelForm.backResult"
         placeholder="请填写撤销理由"></textarea>
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell value="添加图片" />
      <upload-img v-on:imgData="imgData"></upload-img>
    </div>
    <div class="btn-group">
      <van-button class="btn blue" round size="large" @click="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
import backButton from '@/components/backButton/backButton.vue';
import uploadImg from '@/components/upload/uploadImg.vue';
import { mapGetters } from 'vuex';
import { updateRevoke } from '@/services/work';

export default {
  name: 'workProtocolCancel',
  data() {
    return {
      person: '',
      cancelForm: {
        backResult: '',
        diagram: '',
      },
    };
  },
  components: {
    backButton,
    uploadImg,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  mounted() {
    this.person = this.userInfo.userName;
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async updateRevoke() {
      const data = await updateRevoke(this.cancelForm);
      if (data.httpCode === 200 || '200') {
        this.$toast(data.data);
        setTimeout(() => {
          this.$router.go(-1);
        }, 2000);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    imgData(data) {
      data.filePrikeys.forEach((element) => {
        this.cancelForm.diagram = element.filePath;
      });
    },
    submit() {
      if (this.cancelForm.backResult === '') {
        this.$toast('请填写撤销理由!');
        return;
      }
      if (this.cancelForm.diagram === '') {
        this.$toast('请上传解除劳动关系照片!');
        return;
      }
      this.updateRevoke();
    },
  },
};
</script>

<style lang="scss" scoped>
.workProtocolCancel {
  padding-top: 46px;
  padding-bottom: 60px;
  .top{
    margin-top: 11px;
    background: #fff;
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
}
</style>
