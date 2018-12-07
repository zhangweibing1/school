<template>
  <div class="compInfo">
    <back-button></back-button>
    <van-nav-bar
      title="完善信息"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="top">
        <van-tabs>
          <van-tab title="基础信息">
          <van-cell-group>
          <van-field label="姓名"
            v-model="userName"
            required
            type="text" placeholder="请输入姓名"
            rows="1" autosize input-align="right"  />
          <van-cell title="性别" required
            v-model="xbText" @click="showXb = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showXb" position="bottom">
              <van-picker show-toolbar
              :columns="xbList"
              @cancel="showXb = false"
              @confirm="onXb"/>
            </van-popup>
          <van-cell title="出生日期" required
            @click="showTime = true;" is-link
            border v-model="csrq"/>
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
            v-model="mzText" @click="showMz = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showMz" position="bottom">
              <van-picker show-toolbar
              :columns="mzList"
              @cancel="showMz = false"
              @confirm="onMz" />
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
            <van-field label="证件号码"
            v-model="sfzjh"
            required
            type="text" placeholder="请输入证件号码"
            rows="1" autosize input-align="right" />
          </van-cell-group>

          <van-cell title="政治面貌" required
            v-model="zzmmText" @click="showZzmm = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showZzmm" position="bottom">
              <van-picker show-toolbar
              :columns="zzmmList"
              @cancel="showZzmm = false"
              @confirm="onZzmm" />
            </van-popup>


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
          rows="1" autosize input-align="right"/>
      </van-cell-group>
    </div>
          </van-tab>
          <van-tab title="其他信息">
            <van-cell-group>
              <van-cell title="国籍" v-model="gjText" @click="showgj = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showgj" position="bottom">
              <van-picker show-toolbar
              :columns="gjList"
              @cancel="showgj = false"
              @confirm="onGj" />
            </van-popup>
            <van-cell title="宗教信仰" v-model="zjText" @click="showzj = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showzj" position="bottom">
              <van-picker show-toolbar
              :columns="zjList"
              @cancel="showzj = false"
              @confirm="onZj" />
            </van-popup>
            <van-cell title="血型" v-model="xxText" @click="showxx = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showxx" position="bottom">
              <van-picker show-toolbar
              :columns="xxList"
              @cancel="showxx = false"
              @confirm="onXx" />
            </van-popup>
            <van-cell title="健康状况" v-model="jkText" @click="showjk = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showjk" position="bottom">
              <van-picker show-toolbar
              :columns="jkList"
              @cancel="showjk = false"
              @confirm="onJk" />
            </van-popup>

            </van-cell-group>
        </van-tab>
    </van-tabs>
  </div>
  <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
    </div>
  </div>
</template>

<script>
import backButton from '@/components/backButton/backButton.vue';
import { areaData, submitData, Dic, getStuDetail } from '@/services/completeInfo';
import { mapGetters } from 'vuex';
import { Area } from 'vant';

export default {
  name: 'completeInfo',
  data() {
    return {
      showProvince: false,
      showCity: false,
      showCounty: false,
      showTime: false,
      showMz: false,
      showXb: false,
      showZzmm: false,
      showHklb: false,
      showgj: false,
      showjk: false,
      showzj: false,
      showxx: false,
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(),
      mzData: [],
      xbData: [],
      gjData: [],
      jkData: [],
      zjData: [],
      xxData: [],
      zzmmData: [],
      hklbData: [],
      mzList: [],
      zzmmList: [],
      xbList: [],
      gjList: [],
      jkList: [],
      zjList: [],
      xxList: [],
      account: '', // 帐号
      id: '', // 当前登录人id
      userName: '', // 姓名
      csrq: '请选择', // 出生日期
      mz: '', // 民族
      mzText: '请选择',
      zzmm: '请选择', // 政治面貌
      zzmmText: '',
      email: '', // 邮箱
      phone: '', // 电话
      xb: '请选择', // 性别
      xbText: '', // 性别值
      sfzjh: '', // 身份证件号
      address: '', // 地址
      gj: '',
      gjText: '',
      jk: '',
      jkText: '',
      zj: '',
      zjText: '',
      xx: '',
      xxText: '',
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
        userName: '',
        MZM: '',
        MZMTEXT: '',
        ZZMMM: '',
        ZZMMMTEXT: '',
        email: '',
        phone: '',
        SFZJH: '',
        XBM: '',
        XBMTEXT: '',
        GJDQM: '',
        GJDQMTEXT: '',
        JKZKM: '',
        JKZKMTEXT: '',
        XYZJM: '',
        XYZJMTEXT: '',
        XXM: '',
        XXMTEXT: '',
        address: '',
        provinceId: '',
        cityId: '',
        countyId: '',
        RXQHKLBM: '',
        RXQHKLBMTEXT: '',
        sign: '',
      },
      submitStu: {
        submitUser:''
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
      this.csrq = this.$moment(value).format('YYYY-MM-DD');
    },
    async getDetail(id) {
      const { data } = await getStuDetail(id);
      this.csrq = data.cSRQ;
      this.userName = data.userName;
      this.email = data.email;
      this.phone = data.phone;
      this.sfzjh = data.sFZJH;
      this.address = data.address;
      this.xb = data.xBM;
      this.xbText = data.xBMTEXT;
      this.mz = data.mZM;
      this.mzText = data.mZMTEXT;
      this.gj = data.gJDQM;
      this.gjText = data.gJDQMTEXT;
      this.jk = data.jKZKM;
      this.jkText = data.jKZKMTEXT;
      this.zj = data.xYZJM;
      this.zjText = data.xYZJMTEXT;
      this.xx = data.xXM;
      this.xxText = data.xXMTEXT;
      this.zzmm = data.zZMMM;
      this.zzmmText =  data.zZMMMTEXT;

      
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
      this.xbData = data.SEX;
      this.xbData.forEach((element) => {
        this.xbList.push(element.codeText);
      });
      this.gjData = data.GJDQM;
      this.gjData.forEach((element) => {
        this.gjList.push(element.codeText);
      });
      this.jkData = data.JKZK;
      this.jkData.forEach((element) => {
        this.jkList.push(element.codeText);
      });
      this.zjData = data.ZJXY;
      this.zjData.forEach((element) => {
        this.zjList.push(element.codeText);
      });
      this.xxData = data.XX;
      this.xxData.forEach((element) => {
        this.xxList.push(element.codeText);
      });
    },
    onMz(value) {
      this.showMz = false;
      this.mzText = value;
      this.mzData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.MZM = element.code;
          this.submitMsg.MZMTEXT = value;
        }
      });
    },
    onZzmm(value) {
      this.showZzmm = false;
      this.zzmmText = value;
      this.zzmmData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.ZZMMM = element.code;
          this.submitMsg.ZZMMMTEXT = value;
        }
      });
    },
    onXb(value) {
      this.showXb = false;
      this.xbText = value;
      this.xbData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.XBM = element.code;
          this.submitMsg.XBMTEXT = value;
        }
      });
    },
    onGj(value) {
      this.showGj = false;
      this.gjText = value;
      this.gjData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.GJDQM = element.code;
          this.submitMsg.GJDQMTEXT = value;
        }
      });
    },
    onZj(value) {
      this.showzj = false;
      this.zjText = value;
      this.zjData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.XYZJM = element.code;
          this.submitMsg.XYZJMTEXT = value;
        }
      });
    },
    onXx(value) {
      this.showxx = false;
      this.xxText = value;
      this.xxData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.XXM = element.code;
          this.submitMsg.XXMTEXT = value;
        }
      });
    },
    onJk(value) {
      this.showjk = false;
      this.jkText = value;
      this.jkData.forEach((element) => {
        if (element.codeText === value) {
          this.submitMsg.JKZKM = element.code;
          this.submitMsg.JKZKMTEXT = value;
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
      if (this.province === '请选择' || '') {
        this.$toast('请选择省');
        return;
      }
      if (this.city === '请选择' || '') {
        this.$toast('请选择市');
        return;
      }
      if (this.userName === '') {
        this.$toast('请填写用户姓名');
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
      this.submitMsg.account = this.userInfo.account;
      if(this.submitMsg.XBM == "" && this.submitMsg.XBMTEXT == ""){
        this.submitMsg.XBM = this.xb;
        this.submitMsg.XBMTEXT = this.xbText;
      }
      if(this.submitMsg.MZM == "" && this.submitMsg.MZMTEXT == ""){
        this.submitMsg.MZM = this.mz;
        this.submitMsg.MZMTEXT = this.mzText;
      }
      if(this.submitMsg.ZZMMM == "" && this.submitMsg.ZZMMMTEXT == ""){
        this.submitMsg.ZZMMM = this.zzmm;
        this.submitMsg.ZZMMMTEXT = this.zzmmText;
      }

      if(this.submitMsg.XXM == "" && this.submitMsg.XXMTEXT == ""){
        this.submitMsg.XXM = this.xx;
        this.submitMsg.XXMTEXT = this.xxText;
      }
      if(this.submitMsg.JKZKM == "" && this.submitMsg.JKZKMTEXT == ""){
        this.submitMsg.JKZKM = this.jk;
        this.submitMsg.JKZKMTEXT = this.jkText;
      }
      if(this.submitMsg.GJDQM == "" && this.submitMsg.GJDQMTEXT == ""){
        this.submitMsg.GJDQM = this.gj;
        this.submitMsg.GJDQMTEXT = this.gjText;
      }
      if(this.submitMsg.XYZJM == "" && this.submitMsg.XYZJMTEXT == ""){
        this.submitMsg.XYZJM = this.zj;
        this.submitMsg.XYZJMTEXT = this.zjText;
      }
      this.submitMsg.id = this.userInfo.id;
      this.submitMsg.CSRQ = this.csrq;
      this.submitMsg.email = this.email;
      this.submitMsg.userName = this.userName;
      this.submitMsg.SFZJH = this.sfzjh;
      this.submitMsg.phone = this.phone;
      this.submitMsg.address = this.address;
      this.submitStu["submitUser"] = this.submitMsg;
      this.submitData(this.submitStu);
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
  .compInfo{
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
