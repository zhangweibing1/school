<template>
  <div class="completeInfo">
    <back-button></back-button>
    <van-nav-bar
      title="完善信息"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
    <div class="top">
      <van-cell-group>
        <van-cell title="出生日期" required
           @click="showTime = true;" is-link
           border v-model="csrq" />
        <van-popup v-model="showTime" position="bottom">
          <van-datetime-picker
            show-toolbar
            @confirm="confirm"
            @cancel="showTime = false"
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            />
        </van-popup>
        <van-cell title="民族" required
           v-model="mz" @click="showMz = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showMz" position="bottom">
            <van-picker show-toolbar
            :columns="mzList"
            @cancel="showMz = false"
            @confirm="onMz" />
          </van-popup>
        <van-cell title="政治面貌" required
           v-model="zzmm" @click="showZzmm = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showZzmm" position="bottom">
            <van-picker show-toolbar
            :columns="zzmmList"
            @cancel="showZzmm = false"
            @confirm="onZzmm" />
          </van-popup>
        <van-field label="邮箱"
          v-model="email"
          required
          type="text" placeholder="请输入邮箱地址"
          rows="1" autosize input-align="right"  />
        <van-field label="电话号码"
          v-model="phone"
          required
          type="number" placeholder="请输入电话号码"
          rows="1" autosize input-align="right" />
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell-group>
        <van-field label="银行卡号"
          v-model="bankCardNum"
          required
          type="number" placeholder="请输入银行卡号"
          rows="1" autosize input-align="right" />
        <van-field label="开户行地址"
          v-model="bankAddress"
          required
          type="text" placeholder="请输入开户行地址"
          rows="1" autosize input-align="right" />
      </van-cell-group>
    </div>
    <div class="top">
      <van-cell-group>
        <van-cell title="省"
           @click="showProvince = true;" is-link
           required
           v-model="province" value="请选择"/>
           <van-popup v-model="showProvince" position="bottom">
            <van-picker show-toolbar
            :columns="provinceList"
            @cancel="showProvince = false"
            @confirm="onProvince" />
          </van-popup>
        <van-cell title="市" required
           v-model="city" @click="showCity = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showCity" position="bottom">
            <van-picker show-toolbar
            :columns="cityList"
            @cancel="showCity = false"
            @confirm="onCity" />
          </van-popup>
        <van-cell title="区（县）" required
           v-model="county" @click="showCounty = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showCounty" position="bottom">
            <van-picker show-toolbar
            :columns="countyList"
            @cancel="showCounty = false"
            @confirm="onCounty" />
          </van-popup>
        <van-field label="家庭详细地址"
          v-model="address"
          required
          type="text" placeholder="请输入家庭详细地址"
          rows="1" autosize input-align="right"  />
        <van-cell title="户口类别" required
           v-model="hklb" @click="showHklb = true;"
           is-link border value="请选择"/>
          <van-popup v-model="showHklb" position="bottom">
            <van-picker show-toolbar
            :columns="hklbList"
            @cancel="showHklb = false"
            @confirm="onHklb" />
          </van-popup>
      </van-cell-group>
    </div>
    <!-- <div class="top">
      <div class="title">备注</div>
      <textarea name="" v-model="remark" placeholder="请输入备注信息"></textarea>
    </div> -->
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
    </div>
  </div>
</template>

<script>
import backButton from '@/components/backButton/backButton.vue';
import { areaData, submitData, Dic, getStuDetail } from '@/services/completeInfo';
import { mapGetters } from 'vuex';

export default {
  name: 'completeInfo',
  data() {
    return {
      showProvince: false,
      showCity: false,
      showCounty: false,
      showTime: false,
      showMz: false,
      showZzmm: false,
      showHklb: false,
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(),
      mzData: [],
      zzmmData: [],
      hklbData: [],
      mzList: [],
      zzmmList: [],
      hklbList: [],
      userDetail: {
        csrq: '', // 出生日期
        mz: '', // 民族
        zzmm: '', // 政治面貌
        email: '', // 邮箱
        phone: '', // 电话
        address: '', // 地址
        province: '', // 省
        city: '', // 市
        county: '', // 县
        bankAddress: '', // 开户行地址
        bankCardNum: '', // 银行卡号
        hklb: '', // 户口类别
      },
      account: '', // 帐号
      id: '', // 当前登录人id
      csrq: '请选择', // 出生日期
      mz: '请选择', // 民族
      zzmm: '请选择', // 政治面貌
      email: '', // 邮箱
      phone: '', // 电话
      address: '', // 地址
      province: '请选择', // 省
      city: '请选择', // 市
      county: '请选择', // 县
      bankAddress: '', // 开户行地址
      bankCardNum: '', // 银行卡号
      hklb: '请选择', // 户口类别
      provinceList: [],
      cityList: [],
      countyList: [],
      provinceData: [],
      cityData: [],
      countyData: [],
      submitMsg: {
        account: '',
        id: '',
        CSRQ: '',
        MZM: '',
        MZMTEXT: '',
        ZZMMM: '',
        ZZMMMTEXT: '',
        email: '',
        phone: '',
        address: '',
        provinceId: '',
        cityId: '',
        countyId: '',
        bankAddress: '',
        bankCardNum: '',
        RXQHKLBM: '',
        RXQHKLBMTEXT: '',
      },
      parent: {
        parentId: 0,
      },
    };
  },
  components: {
    'back-button': backButton,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
    userId() {
      return {
        id: this.userInfo.id,
      };
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    confirm(value) {
      this.showTime = false;
      // this.csrq = value.toLocaleString('chinese', { hour12: false });
      this.csrq = this.$moment(value).format('YYYY-MM-DD');
    },
    async getDetail(id) {
      const { data } = await getStuDetail(id);
      this.csrq = data.cSRQ;
      // this.mz = data.mZMTEXT;
      // this.zzmm = data.zZMMMTEXT;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
      // this.province = data.provinceId;
      // this.city = data.cityId;
      // this.county = data.countyId;
      this.bankAddress = data.bankAddress;
      this.bankCardNum = data.bankCardNum;
      // this.hklb = data.rXQHKLBMTEXT;
    },
    async getDic() {
      const { data } = await Dic();
      this.mzData = data.MZM;
      this.mzData.forEach((element) => {
        this.mzList.push(element.codeText);
      });
      this.zzmmData = data.ZZMMM;
      this.zzmmData.forEach((element) => {
        this.zzmmList.push(element.codeText);
      });
      this.hklbData = data.hkType;
      this.hklbData.forEach((element) => {
        this.hklbList.push(element.codeText);
      });
    },
    onMz(value) {
      this.showMz = false;
      this.mz = value;
      this.mzData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.MZM = element.code;
          this.submitMsg.MZMTEXT = value;
        }
      });
    },
    onZzmm(value) {
      this.showZzmm = false;
      this.zzmm = value;
      this.zzmmData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.ZZMMM = element.code;
          this.submitMsg.ZZMMMTEXT = value;
        }
      });
    },
    onHklb(value) {
      this.showHklb = false;
      this.hklb = value;
      this.hklbData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.RXQHKLBM = element.code;
          this.submitMsg.RXQHKLBMTEXT = value;
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
      this.province = value;
      this.city = '请选择';
      this.county = '请选择';
      this.cityList = [];
      this.countyList = [];
      this.provinceData.forEach((element) => {
        if (element.araeName === value) {
          this.provinceId = element.id;
          this.submitMsg.provinceId = this.provinceId;
        }
      });
      this.parentProvinceId = {
        parentId: this.provinceId,
      };
      this.areaCity(this.parentProvinceId);
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
      this.city = value;
      this.county = '请选择';
      this.countyList = [];
      this.cityData.forEach((element) => {
        if (element.araeName === value) {
          this.cityId = element.id;
          this.submitMsg.cityId = this.cityId;
        }
      });
      this.parentcityId = {
        parentId: this.cityId,
      };
      this.areaCouty(this.parentcityId);
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
      this.county = value;
      this.countyData.forEach((element) => {
        if (element.araeName === value) {
          this.countyId = element.id;
          this.submitMsg.countyId = this.countyId;
        }
      });
    },
    async submitData(info) {
      const data = await submitData(info);
      if (data.httpCode === '200' || 200) {
        this.$toast.success('提交成功');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    submit() {
      if (this.csrq === '请选择' || '') {
        this.$toast('请选择出生日期');
        return;
      }
      if (this.mz === '请选择' || '') {
        this.$toast('请选择民族');
        return;
      }
      if (this.zzmm === '请选择' || '') {
        this.$toast('请选择政治面貌');
        return;
      }
      if (this.email === '') {
        this.$toast('请填写邮箱地址');
        return;
      }
      if (this.phone === '') {
        this.$toast('请填写电话号码');
        return;
      }
      if (this.bankCardNum === '') {
        this.$toast('请填写银行卡号');
        return;
      }
      if (this.bankAddress === '') {
        this.$toast('请填写开户行地址');
        return;
      }
      if (this.province === '请选择' || '') {
        this.$toast('请选择省');
        return;
      }
      if (this.city === '请选择' || '') {
        this.$toast('请选择市');
        return;
      }
      if (this.county === '请选择' || '') {
        this.$toast('请选择区（县）');
        return;
      }
      if (this.address === '') {
        this.$toast('请填写家庭详细地址');
        return;
      }
      if (this.hklb === '请选择' || '') {
        this.$toast('请选择户口类别');
        return;
      }
      this.submitMsg.account = this.userInfo.account;
      this.submitMsg.id = this.userInfo.id;
      this.submitMsg.CSRQ = this.csrq;
      this.submitMsg.email = this.email;
      this.submitMsg.phone = this.phone;
      this.submitMsg.address = this.address;
      this.submitMsg.bankAddress = this.bankAddress;
      this.submitMsg.bankCardNum = this.bankCardNum;
      this.submitData(this.submitMsg);
    },
  },
  mounted() {
    this.getDetail(this.userId);
    this.getDic();
    this.areaProvince(this.parent);
  },
};
</script>

<style lang="scss" scoped>
  .completeInfo{
    padding: 46px 0 60px;
  }
  .top{
    margin-top: 11px;
    background: #fff;
  }
  .title{
     color: #333;
     font-size: 16px;
     padding: 15px 15px 0 15px;
  }
  textarea{
    border:0;
    width:100%;
    height:80px;
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

