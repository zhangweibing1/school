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
          <van-field label="工号"
            v-model="gh"
            required
            type="number" placeholder="请输入工号"
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

            <van-cell title="任教学段" required
            v-model="xzText" @click="showxz = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showxz" position="bottom">
              <van-picker show-toolbar
              :columns="xzList"
              @cancel="showxz = false"
              @confirm="onXz"/>
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


            <van-cell title="职称" v-model="zcText" @click="showzc = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showzc" position="bottom">
              <van-picker show-toolbar
              :columns="zcList"
              @cancel="showzc = false"
              @confirm="onZc" />
            </van-popup>

            <van-cell title="岗位级别" v-model="gwText" @click="showgw = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showgw" position="bottom">
              <van-picker show-toolbar
              :columns="gwList"
              @cancel="showgw = false"
              @confirm="onGw" />
            </van-popup>

            <van-cell title="学历" v-model="xlText" @click="showxl = true;"
            is-link border value="请选择"/>
            <van-popup v-model="showxl" position="bottom">
              <van-picker show-toolbar
              :columns="xlList"
              @cancel="showxl = false"
              @confirm="onXl" />
            </van-popup>

            <van-cell title="参加工作年月" required
            @click="showJoinTime = true;" is-link
            border v-model="joinTime"/>
          <van-popup v-model="showJoinTime" position="bottom">
            <van-datetime-picker
              show-toolbar
              @confirm="confirmJoin"
              @cancel="showJoinTime = false"
              type="date"
              :min-date="minDate"
              :max-date="maxDate"
              />
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
import { mapGetters } from 'vuex';
import backButton from '@/components/backButton/backButton.vue';
import { areaData, Dic, getTeaDetail, submitTeaData } from '@/services/completeInfo';


export default {
  name: 'completeInfo',
  data() {
    return {
      showProvince: false,
      showCity: false,
      showCounty: false,
      showTime: false,
      showJoinTime: false, // 参加工作年月
      showxz: false, // 任教学段
      showzc: false, // 职称
      showgw: false, // 岗位级别
      showxl: false, // 学历
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
      xzList: [],
      zcList: [],
      gwList: [],
      xlList: [],
      xzData: [],
      zcData: [],
      gwData: [],
      xlData: [],
      userName: '', // 姓名
      csrq: '请选择', // 出生日期
      mz: '', // 民族
      mzText: '请选择', // 民族值
      zzmm: '请选择', // 政治面貌
      zzmmText: '', // 政治面貌值
      email: '', // 邮箱
      phone: '', // 电话
      xb: '请选择', // 性别
      xbText: '', // 性别值
      sfzjh: '', // 身份证件号
      address: '', // 地址
      gj: '', // 国家
      gjText: '', // 国家值
      jk: '', // 健康状况
      jkText: '', // 健康状况
      zj: '', // 宗教信仰
      zjText: '', // 宗教信仰值
      xx: '', // 血型
      xxText: '', // 血型值
      province: '请选择', // 省
      city: '请选择', // 市
      county: '请选择', // 县
      provinceList: [],
      cityList: [],
      countyList: [],
      provinceData: [],
      cityData: [],
      countyData: [],
      gh: '', // 工号
      xz: '请选择', // 任教学段
      xzText: '', // 任教学段值
      zc: '请选择', // 职称
      zcText: '', // 职称值
      gw: '请选择', // 岗位
      gwText: '', // 岗位值
      xl: '请选择', // 学历
      xlText: '', // 学历值
      joinTime: '请选择', // 参加工作时间
      submitUser: {
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
      submitTea: {
        id: '',
        GH: '',
        DWH: '',
        XQH: '',
        ZGXLM: '',
        ZGXLMTEXT: '',
        WHCDM: '',
        WHCDMTEXT: '',
        CJGZNY: '',
        LXRQ: '',
        QXRQ: '',
        CJNY: '',
        BZLBM: '',
        BZLBMTEXT: '',
        JZGLBM: '',
        JZGLBMTEXT: '',
        RKZKM: '',
        RKZKMTEXT: '',
        DABH: '',
        DAWB: '',
        DQZTM: '',
        TC: '',
        XKLBM: '',
        XKLBMTEXT: '',
        YJXKM: '',
        YJXKMTEXT: '',
        EJXKM: '',
        EJXKMTEXT: '',
        YJFX: '',
        userId: '',
        schoolId: '',
        ZC: '',
        ZCTEXT: '',
        GWJB: '',
        GWJBTEXT: '',
        XZ: '',
        XZTEXT: '',
      },
      submitMsg: { submitUser: '', submitTea: '' },
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
    confirmJoin(value) {
      this.showJoinTime = false;
      this.joinTime = this.$moment(value).format('YYYY-MM-DD');
    },
    async getDetail(id) {
      const { data } = await getTeaDetail(id);
      this.userId = data.sysUser.id;
      this.csrq = data.sysUser.cSRQ;
      this.userName = data.sysUser.userName;
      this.email = data.sysUser.email;
      this.phone = data.sysUser.phone;
      this.sfzjh = data.sysUser.sFZJH;
      this.address = data.sysUser.address;
      this.xb = data.sysUser.xBM;
      this.xbText = data.sysUser.xBMTEXT;
      this.mz = data.sysUser.mZM;
      this.mzText = data.sysUser.mZMTEXT;
      this.gj = data.sysUser.gJDQM;
      this.gjText = data.sysUser.gJDQMTEXT;
      this.jk = data.sysUser.jKZKM;
      this.jkText = data.sysUser.jKZKMTEXT;
      this.zj = data.sysUser.xYZJM;
      this.zjText = data.sysUser.xYZJMTEXT;
      this.xx = data.sysUser.xXM;
      this.xxText = data.sysUser.xXMTEXT;
      this.zzmm = data.sysUser.zZMMM;
      this.zzmmText = data.sysUser.zZMMMTEXT;

      this.id = data.id;
      this.gh = data.gh;
      this.xz = data.xZ;
      this.xzText = data.xztext;
      this.zx = data.zc;
      this.zcText = data.zctext;
      this.xl = data.zgxlm;
      this.xlText = data.zgxlmtext;
      this.gw = data.gwjb;
      this.gwText = data.gwjbtext;
      this.joinTime = data.cjgzny;
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

      this.xzData = data.XZ;
      this.xzData.forEach((element) => {
        this.xzList.push(element.codeText);
      });
      this.zcData = data.ZC;
      this.zcData.forEach((element) => {
        this.zcList.push(element.codeText);
      });
      this.gwData = data.GW;
      this.gwData.forEach((element) => {
        this.gwList.push(element.codeText);
      });
      this.xlData = data.XL;
      this.xlData.forEach((element) => {
        this.xlList.push(element.codeText);
      });
    },
    onMz(value) {
      this.showMz = false;
      this.mzText = value;
      this.mzData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.MZM = element.code;
          this.submitUser.MZMTEXT = value;
        }
      });
    },
    onZzmm(value) {
      this.showZzmm = false;
      this.zzmmText = value;
      this.zzmmData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.ZZMMM = element.code;
          this.submitUser.ZZMMMTEXT = value;
        }
      });
    },
    onXb(value) {
      this.showXb = false;
      this.xbText = value;
      this.xbData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.XBM = element.code;
          this.submitUser.XBMTEXT = value;
        }
      });
    },
    onGj(value) {
      this.showGj = false;
      this.gjText = value;
      this.gjData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.GJDQM = element.code;
          this.submitUser.GJDQMTEXT = value;
        }
      });
    },
    onZj(value) {
      this.showzj = false;
      this.zjText = value;
      this.zjData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.XYZJM = element.code;
          this.submitUser.XYZJMTEXT = value;
        }
      });
    },
    onXx(value) {
      this.showxx = false;
      this.xxText = value;
      this.xxData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.XXM = element.code;
          this.submitUser.XXMTEXT = value;
        }
      });
    },
    onJk(value) {
      this.showjk = false;
      this.jkText = value;
      this.jkData.forEach((element) => {
        if (element.codeText === value) {
          this.submitUser.JKZKM = element.code;
          this.submitUser.JKZKMTEXT = value;
        }
      });
    },
    onXz(value) {
      this.showxz = false;
      this.xzText = value;
      this.xzData.forEach((element) => {
        if (element.codeText === value) {
          this.submitTea.XZ = element.code;
          this.submitTea.XZTEXT = value;
        }
      });
    },
    onZc(value) {
      this.showzc = false;
      this.zcText = value;
      this.zcData.forEach((element) => {
        if (element.codeText === value) {
          this.submitTea.ZC = element.code;
          this.submitTea.ZCTEXT = value;
        }
      });
    },
    onGw(value) {
      this.showgw = false;
      this.gwText = value;
      this.gwData.forEach((element) => {
        if (element.codeText === value) {
          this.submitTea.GWJB = element.code;
          this.submitTea.GWJBTEXT = value;
        }
      });
    },
    onXl(value) {
      this.showxl = false;
      this.xlText = value;
      this.xlData.forEach((element) => {
        if (element.codeText === value) {
          this.submitTea.ZGXLM = element.code;
          this.submitTea.ZGXLMText = value;
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
          this.submitUser.provinceId = this.provinceId;
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
          this.submitUser.cityId = this.cityId;
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
    async submitTeaData(info) {
      const data = await submitTeaData(info);
      if (data.httpCode === '200' || 200) {
        this.$toast.success('提交成功');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败');
      }
    },
    submit() {
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
      if (this.gh === '') {
        this.$toast('请填写工号');
        return;
      }
      if (this.xz === '请选择' || '') {
        this.$toast('请填写任教学段');
        return;
      }

      if (this.submitUser.XBM === '' || this.submitUser.XBMTEXT === '') {
        this.submitUser.XBM = this.xb;
        this.submitUser.XBMTEXT = this.xbText;
      }
      if (this.submitUser.MZM === '' || this.submitUser.MZMTEXT === '') {
        this.submitUser.MZM = this.mz;
        this.submitUser.MZMTEXT = this.mzText;
      }
      if (this.submitUser.ZZMMM === '' || this.submitUser.ZZMMMTEXT === '') {
        this.submitUser.ZZMMM = this.zzmm;
        this.submitUser.ZZMMMTEXT = this.zzmmText;
      }

      if (this.submitUser.XXM === '' || this.submitUser.XXMTEXT === '') {
        this.submitUser.XXM = this.xx;
        this.submitUser.XXMTEXT = this.xxText;
      }
      if (this.submitUser.JKZKM === '' || this.submitUser.JKZKMTEXT === '') {
        this.submitUser.JKZKM = this.jk;
        this.submitUser.JKZKMTEXT = this.jkText;
      }
      if (this.submitUser.GJDQM === '' || this.submitUser.GJDQMTEXT === '') {
        this.submitUser.GJDQM = this.gj;
        this.submitUser.GJDQMTEXT = this.gjText;
      }
      if (this.submitUser.XYZJM === '' || this.submitUser.XYZJMTEXT === '') {
        this.submitUser.XYZJM = this.zj;
        this.submitUser.XYZJMTEXT = this.zjText;
      }

      if (this.submitTea.XZ === '' || this.submitTea.XZTEXT === '') {
        this.submitTea.XZ = this.xz;
        this.submitTea.xzText = this.xzText;
      }

      if (this.submitTea.ZC === '' || this.submitTea.ZCTEXT === '') {
        this.submitTea.ZC = this.zc;
        this.submitTea.ZCTEXT = this.zcText;
      }

      if (this.submitTea.GWJB === '' || this.submitTea.GWJBTEXT === '') {
        this.submitTea.GWJB = this.gw;
        this.submitTea.GWJBTEXT = this.gwText;
      }

      if (this.submitTea.ZGXLM === '' || this.submitTea.ZGXLMTEXT === '') {
        this.submitTea.ZGXLM = this.xl;
        this.submitTea.ZGXLMTEXT = this.xlText;
      }

      this.submitUser.id = this.userInfo.id;
      this.submitUser.CSRQ = this.csrq;
      this.submitUser.email = this.email;
      this.submitUser.userName = this.userName;
      this.submitUser.sFZJH = this.sfzjh;
      this.submitUser.phone = this.phone;
      this.submitUser.address = this.address;

      this.submitTea.id = this.id;
      this.submitTea.userId = this.userInfo.id;
      this.submitTea.GH = this.gh;
      this.submitTea.CJGZNY = this.joinTime;

      this.submitMsg.submitUser = this.submitUser;
      this.submitMsg.submitTea = this.submitTea;
      this.submitTeaData(this.submitMsg);
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
