<template>
  <div class="workProtocol">
    <back-button></back-button>
    <van-nav-bar
      title="三方协议申请"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-cell-group>
        <van-cell title="姓名" border required v-model="person"/>
        <van-field label="单位名称"
          v-model="protocolForm.unitName"
          required
          type="text" placeholder="请填写单位名称"
          rows="1" autosize dir="rtl" />
        <van-cell title="单位性质"
           @click="showConpanyType = true;" is-link
           required
           v-model="protocolForm.unitNature" value="请选择"/>
           <van-popup v-model="showConpanyType" position="bottom">
            <van-picker show-toolbar
            :columns="conpanyTypeList"
            @cancel="showConpanyType = false"
            @confirm="onConpanyType" />
          </van-popup>
        <van-field label="人才市场"
          v-model="protocolForm.talentMarket"
          required
          type="text" placeholder="请填写人才市场"
          rows="1" autosize dir="rtl" />
        <van-cell title="省"
           @click="showProvince = true;" is-link
           required
           v-model="protocolForm.provinceName" value="请选择"/>
           <van-popup v-model="showProvince" position="bottom">
            <van-picker show-toolbar
            :columns="provinceList"
            @cancel="showProvince = false"
            @confirm="onProvince" />
          </van-popup>
        <van-cell title="市" required
           v-model="protocolForm.cityName" @click="showCity = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showCity" position="bottom">
            <van-picker show-toolbar
            :columns="cityList"
            @cancel="showCity = false"
            @confirm="onCity" />
          </van-popup>
        <van-cell title="区（县）" required
           v-model="protocolForm.countyName" @click="showCounty = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showCounty" position="bottom">
            <van-picker show-toolbar
            :columns="countyList"
            @cancel="showCounty = false"
            @confirm="onCounty" />
          </van-popup>
      </van-cell-group>
    </div>
    <div class="top">
      <div class="title">撤销理由</div>
      <textarea name="reason" resize v-model="protocolForm.applyResult"
        placeholder="请填写申请理由"></textarea>
    </div>
    <div class="btn-group">
      <van-button class="btn blue" round size="large" @click="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
import backButton from '@/components/backButton/backButton.vue';
import { mapGetters } from 'vuex';
import { areaData } from '@/services/completeInfo';
import { updateProtocol, getWorkType } from '@/services/work';

export default {
  name: 'workProtocol',
  data() {
    return {
      person: '',
      showConpanyType: false,
      showProvince: false,
      showCity: false,
      showCounty: false,
      province: '请选择', // 省
      city: '请选择', // 市
      county: '请选择', // 县
      provinceList: [],
      cityList: [],
      countyList: [],
      conpanyTypeList: [],
      provinceData: [],
      cityData: [],
      countyData: [],
      conpanyTypeData: [],
      parent: {
        parentId: 0,
      },
      protocolForm: {
        unitName: '',
        unitNature: '请选择',
        unitNatureCode: '',
        talentMarket: '',
        provinceId: '',
        provinceName: '请选择',
        cityId: '',
        cityName: '请选择',
        countyId: '',
        countyName: '请选择',
        applyResult: '',
      },
    };
  },
  components: {
    'back-button': backButton,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  mounted() {
    this.person = this.userInfo.userName;
    this.areaProvince(this.parent);
    this.getWorkType();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getWorkType() {
      const { data } = await getWorkType();
      this.conpanyTypeData = data;
      this.conpanyTypeData.forEach((element) => {
        this.conpanyTypeList.push(element.codeText);
      });
    },
    onConpanyType(value) {
      this.showConpanyType = false;
      this.protocolForm.unitNature = value;
      this.conpanyTypeData.forEach((element) => {
        if (element.codeText === value) {
          this.protocolForm.unitNatureCode = element.code;
        }
      });
    },
    async areaProvince(msg) {
      const { data } = await areaData(msg);
      this.provinceData = data;
      this.provinceData.forEach((element) => {
        this.provinceList.push(element.araeName);
      });
    },
    onProvince(value) {
      this.showProvince = false;
      this.protocolForm.provinceName = value;
      this.protocolForm.cityName = '请选择';
      this.protocolForm.cityId = '';
      this.protocolForm.countyName = '请选择';
      this.protocolForm.countyId = '';
      this.cityList = [];
      this.countyList = [];
      this.provinceData.forEach((element) => {
        if (element.araeName === value) {
          this.protocolForm.provinceId = element.id;
        }
      });
      this.parent = {
        parentId: this.protocolForm.provinceId,
      };
      this.areaCity(this.parent);
    },
    async areaCity(msg) {
      const { data } = await areaData(msg);
      this.cityData = data;
      this.cityData.forEach((element) => {
        this.cityList.push(element.araeName);
      });
    },
    onCity(value) {
      this.showCity = false;
      this.protocolForm.cityName = value;
      this.protocolForm.countyName = '请选择';
      this.protocolForm.countyId = '';
      this.countyList = [];
      this.cityData.forEach((element) => {
        if (element.araeName === value) {
          this.protocolForm.cityId = element.id;
        }
      });
      this.parent = {
        parentId: this.protocolForm.cityId,
      };
      this.areaCouty(this.parent);
    },
    async areaCouty(msg) {
      const { data } = await areaData(msg);
      this.countyData = data;
      this.countyData.forEach((element) => {
        this.countyList.push(element.araeName);
      });
    },
    onCounty(value) {
      this.showCounty = false;
      this.protocolForm.countyName = value;
      this.countyData.forEach((element) => {
        if (element.araeName === value) {
          this.protocolForm.countyId = element.id;
        }
      });
    },
    async updateProtocol() {
      const data = await updateProtocol(this.protocolForm);
      if (data.httpCode === 200 || '200') {
        this.$toast(data.data);
        setTimeout(() => {
          this.$router.go(-1);
        }, 2000);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    submit() {
      if (this.protocolForm.unitName === '') {
        this.$toast('请填写单位名称!');
        return;
      }
      if (this.protocolForm.unitNature === '请选择') {
        this.$toast('请选择单位性质!');
        return;
      }
      if (this.protocolForm.talentMarket === '请选择') {
        this.$toast('请填写人才市场!');
        return;
      }
      if (this.protocolForm.provinceName === '请选择') {
        this.$toast('请选择省!');
        return;
      }
      if (this.protocolForm.cityName === '请选择') {
        this.$toast('请选择市!');
        return;
      }
      if (this.protocolForm.countyName === '请选择') {
        this.$toast('请选择区（县）!');
      }
      this.updateProtocol();
    },
  },
};
</script>

<style lang="scss" scoped>
.workProtocol {
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
