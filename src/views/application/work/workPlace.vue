<template>
  <div class="workPlace">
    <back-button></back-button>
    <van-nav-bar
      title="生源地上报"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-cell-group>
        <van-cell title="姓名" border required v-model="workForm.userName"/>
        <van-cell title="省"
           @click="showProvince = true;" is-link
           required
           v-model="workForm.provinceName" value="请选择"/>
           <van-popup v-model="showProvince" position="bottom">
            <van-picker show-toolbar
            :columns="provinceList"
            @cancel="showProvince = false"
            @confirm="onProvince" />
          </van-popup>
        <van-cell title="市" required
           v-model="workForm.cityName" @click="showCity = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showCity" position="bottom">
            <van-picker show-toolbar
            :columns="cityList"
            @cancel="showCity = false"
            @confirm="onCity" />
          </van-popup>
        <van-cell title="区（县）" required
           v-model="workForm.countyName" @click="showCounty = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showCounty" position="bottom">
            <van-picker show-toolbar
            :columns="countyList"
            @cancel="showCounty = false"
            @confirm="onCounty" />
          </van-popup>
      </van-cell-group>
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
import { updatePlace } from '@/services/work';

export default {
  name: 'workPlace',
  data() {
    return {
      showProvince: false,
      showCity: false,
      showCounty: false,
      provinceList: [],
      cityList: [],
      countyList: [],
      provinceData: [],
      cityData: [],
      countyData: [],
      parent: {
        parentId: 0,
      },
      workForm: {
        userName: '',
        rYH: '',
        provinceId: '',
        provinceName: '请选择',
        cityId: '',
        cityName: '请选择',
        countyId: '',
        countyName: '请选择',
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
    this.workForm.userName = this.userInfo.userName;
    this.workForm.rYH = this.userInfo.rYH;
    this.areaProvince(this.parent);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
      this.workForm.provinceName = value;
      this.workForm.cityName = '请选择';
      this.workForm.cityId = '';
      this.workForm.countyName = '请选择';
      this.workForm.countyId = '';
      this.cityList = [];
      this.countyList = [];
      this.provinceData.forEach((element) => {
        if (element.araeName === value) {
          this.workForm.provinceId = element.id;
        }
      });
      this.parent = {
        parentId: this.workForm.provinceId,
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
      this.workForm.cityName = value;
      this.workForm.countyName = '请选择';
      this.workForm.countyId = '';
      this.countyList = [];
      this.cityData.forEach((element) => {
        if (element.araeName === value) {
          this.workForm.cityId = element.id;
        }
      });
      this.parent = {
        parentId: this.workForm.cityId,
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
      this.workForm.countyName = value;
      this.countyData.forEach((element) => {
        if (element.araeName === value) {
          this.countyId = element.id;
          this.workForm.countyId = element.id;
        }
      });
    },
    async updatePlace() {
      const data = await updatePlace(this.workForm);
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
      if (this.workForm.provinceName === '请选择') {
        this.$toast('请选择省!');
        return;
      }
      if (this.workForm.cityName === '请选择') {
        this.$toast('请选择市!');
        return;
      }
      if (this.workForm.countyName === '请选择') {
        this.$toast('请填写区（县）!');
        return;
      }
      this.updatePlace();
    },
  },
};
</script>

<style lang="scss" scoped>
.workPlace {
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
}
</style>
