<template>
  <div class="record">
    <van-nav-bar
      title="记录"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="top">
        <van-cell-group>
          <van-cell title="心理问题类型" required
           v-model="typeName" @click="showType = true;"
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
        <div class="title">咨询记录</div>
        <textarea
          v-model="record"
          placeholder="请详细填写学生咨询记录">
        </textarea>
      </div>
      <div class="top">
        <div class="title">咨询结论</div>
        <textarea
          v-model="result"
          placeholder="请简要填写咨询结论">
        </textarea>
      </div>
      <div class="top">
        <van-cell value="添加图片" />
        <upload-img v-on:imgData="imgData"></upload-img>
      </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
    </div>
  </div>
</template>

<script>
import { illnessList, addRecord } from '@/services/health';
import uploadImg from '@/components/upload/uploadImg.vue';

export default {
  name: 'record',
  data() {
    return {
      showType: false,
      typeName: '请选择',
      typeData: [],
      typeList: [],
      record: '',
      result: '',
      typeParam: {
        type: 'mindillness',
      },
      param: {
        id: '',
        mindiseaseCode: '',
        mindiseaseText: '',
        medicalRecords: '',
        medicalConclusion: '',
        photo: '',
      },
      photoList: [],
    };
  },
  components: {
    uploadImg,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getIllnessList() {
      const { data } = await illnessList(this.typeParam);
      this.typeData = data;
      this.typeData.forEach((element) => {
        this.typeList.push(element.codeText);
      });
    },
    selectType(value) {
      this.showType = false;
      this.typeName = value;
      this.typeData.forEach((element) => {
        if (element.codeText === value) {
          this.param.mindiseaseCode = element.code;
        }
      });
    },
    async submitRecord() {
      const data = await addRecord(this.param);
      if (data.httpCode === '200' || 200) {
        this.$toast.success('提交成功');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    imgData(data) {
      data.filePrikeys.forEach((element) => {
        this.photoList.push(element.filePath);
      });
    },
    submit() {
      if (this.typeName === '请选择' || '') {
        this.$toast('请选择心理问题类型');
        return;
      }
      this.param.id = this.$route.params.id;
      this.param.mindiseaseText = this.typeName;
      this.param.medicalRecords = this.record;
      this.param.photo = this.photoList.join(',');
      this.param.medicalConclusion = this.result;
      this.submitRecord();
    },
  },
  mounted() {
    this.getIllnessList();
  },
};
</script>

<style lang="scss" scoped>
  .record{
    padding: 46px 0 60px;
  }
  .between{
    margin:0 12px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .title{
     color: #333;
     font-size: 16px;
     padding: 15px 15px 0 15px;
     position: relative;
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
