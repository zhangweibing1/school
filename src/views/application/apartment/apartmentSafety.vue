<template>
  <div class="apartmentSafety">
    <back-button></back-button>
    <van-nav-bar
      title="安全检查"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="top">
        <van-cell-group>
          <van-cell title="校区" @click="campus = true;" is-link border required
           v-model="sCampus"/>
          <van-popup v-model="campus" position="bottom">
            <van-picker show-toolbar title="校区" :columns="campusList"
             @confirm="selectCampus" @cancel="campus = false;"/>
          </van-popup>
          <van-cell title="公寓" @click="apartment = true;" is-link border required
           v-model="sApartment" />
          <van-popup v-model="apartment" position="bottom">
            <van-picker show-toolbar title="公寓" :columns="apartmentList"
             @confirm="selectApartment" @cancel="apartment = false;"/>
          </van-popup>
          <van-cell title="楼层" @click="floor = true;" is-link border required
           v-model="sFloor" />
          <van-popup v-model="floor" position="bottom">
            <van-picker show-toolbar title="楼层" :columns="floorList"
             @confirm="selectFloor" @cancel="floor = false;" />
          </van-popup>
          <van-cell title="宿舍" @click="dorm = true;" is-link border required v-model="sDorm" />
          <van-popup v-model="dorm" position="bottom">
            <van-picker show-toolbar title="宿舍" :columns="dormList"
             @confirm="selectDorm" @cancel="dorm = false;" />
          </van-popup>
          <van-cell title="违规对象" @click="vobj = true;" is-link border required v-model="sVobj" />
          <van-popup v-model="vobj" position="bottom">
            <van-picker show-toolbar title="违规对象" :columns="vobjList"
             @confirm="selectVobj" @cancel="vobj = false;" />
          </van-popup>
          <van-cell title="问题人" v-if="objPerson" @click="person = true;" is-link
           border required v-model="sPerson" />
          <van-popup v-model="person" position="bottom">
            <van-picker show-toolbar title="问题人" :columns="personList"
             @confirm="selectPerson" @cancel="person = false;" />
          </van-popup>
          <van-cell title="隐患类型" @click="securityType = true;" is-link border required
           v-model="sSecurityType" />
          <van-popup v-model="securityType" position="bottom">
            <van-picker show-toolbar title="隐患类型" :columns="securityTypeList"
             @confirm="selectSecurityType" @cancel="securityType = false;" />
          </van-popup>
          <van-cell title="检查时间" @click="time = true;" is-link border required v-model="sTime" />
          <van-popup v-model="time" position="bottom">
            <van-datetime-picker
              show-toolbar
              @confirm="confirm"
              @cancel="time = false"
              type="datetime"
              :min-date="minDate"/>
          </van-popup>
          <van-cell value="添加图片" />
          <upload-img v-on:imgData="imgData"></upload-img>
        </van-cell-group>
      </div>
    <div class="btn-group">
      <van-button round size="large" class="btn blue" @click="submitVisitor">提交</van-button>
    </div>
  </div>
</template>

<script>
import { getCurrSchoolInfoList, selectGongYuBuild, asynchronousLoadingFloor, getRooms, selectList, getSecurityType, postSecurity } from '@/services/apartment';
import uploadImg from '@/components/upload/uploadImg.vue';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'apartmentSafety',
  data() {
    return {
      sCampus: '请选择',
      sApartment: '请选择',
      sFloor: '请选择',
      sDorm: '请选择',
      sPerson: '请选择',
      sSecurityType: '请选择',
      sTime: '请选择',
      sVobj: '请选择',
      campus: false,
      apartment: false,
      floor: false,
      dorm: false,
      vobj: false,
      person: false,
      securityType: false,
      objPerson: false,
      time: false,
      minDate: new Date(),
      campusData: [],
      apartmentData: [],
      floorData: [],
      dormData: [],
      vobjData: [{
        objCode: '1',
        objText: '宿舍',
      }, {
        objCode: '2',
        objText: '学生',
      }],
      personData: [],
      securityTypeData: [],
      campusList: [],
      apartmentList: [],
      floorList: [],
      dormList: [],
      personList: [],
      securityTypeList: [],
      vobjList: ['宿舍', '学生'],
      schoolId: '',
      buildingId: '',
      floorId: '',
      roomId: '',
      illegalCode: '',
      securityData: {
        schoolId: '',
        schoolName: '',
        buildId: '',
        buildName: '',
        floolId: '',
        floolName: '',
        roomId: '',
        roomName: '',
        objCode: '',
        objText: '',
        bedCode: '',
        stuId: '',
        stuName: '',
        illegalCode: '',
        illegalText: '',
        checkTime: '',
        photo: '',
        userSexCode: '',
        userSexText: '',
      },
      photoList: [],
    };
  },
  components: {
    uploadImg,
    backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    confirm(value) {
      this.time = false;
      this.sTime = value.toLocaleString('chinese', { hour12: false });
    },
    async getCampus() {
      const { data } = await getCurrSchoolInfoList();
      this.campusData = data;
      this.campusData.forEach((element) => {
        this.campusList.push(element.xXMC);
      });
    },
    selectCampus(value) {
      this.campus = false;
      this.sCampus = value;
      this.sApartment = '请选择';
      this.sFloor = '请选择';
      this.sDorm = '请选择';
      this.sPerson = '请选择';
      this.sSecurityType = '请选择';
      this.apartmentList = [];
      this.floorList = [];
      this.dormList = [];
      this.personList = [];
      this.securityTypeList = [];
      this.campusData.forEach((element) => {
        if (element.xXMC === value) {
          this.schoolId = element.id;
          this.securityData.schoolId = element.id;
          this.securityData.schoolName = value;
        }
      });
      this.getApartment();
    },
    async getApartment() {
      const { data } = await selectGongYuBuild(this.schoolId);
      this.apartmentData = data;
      this.apartmentData.forEach((element) => {
        this.apartmentList.push(element.mC);
      });
    },
    selectApartment(value) {
      this.apartment = false;
      this.sApartment = value;
      this.sFloor = '请选择';
      this.sDorm = '请选择';
      this.sPerson = '请选择';
      this.sSecurityType = '请选择';
      this.floorList = [];
      this.dormList = [];
      this.personList = [];
      this.securityTypeList = [];
      this.apartmentData.forEach((element) => {
        if (element.mC === value) {
          this.buildingId = element.id;
          this.securityData.buildId = this.buildingId;
          this.securityData.buildName = value;
          this.securityData.userSexCode = element.uses;
          this.securityData.userSexText = element.usesText;
        }
      });
      this.getFloor();
    },
    async getFloor() {
      const { data } = await asynchronousLoadingFloor(this.buildingId);
      this.floorData = data;
      this.floorData.forEach((element) => {
        this.floorList.push(element.name);
      });
    },
    selectFloor(value) {
      this.floor = false;
      this.sFloor = value;
      this.sDorm = '请选择';
      this.sPerson = '请选择';
      this.sSecurityType = '请选择';
      this.dormList = [];
      this.personList = [];
      this.securityTypeList = [];
      this.floorData.forEach((element) => {
        if (element.name === value) {
          this.floorId = element.id;
          this.securityData.floolId = this.floorId;
          this.securityData.floolName = value;
        }
      });
      this.getDorm();
    },
    async getDorm() {
      const { data } = await getRooms(this.floorId);
      this.dormData = data;
      this.dormData.forEach((element) => {
        this.dormList.push(element.name);
      });
    },
    selectDorm(value) {
      this.dorm = false;
      this.sDorm = value;
      this.sPerson = '请选择';
      this.sSecurityType = '请选择';
      this.personList = [];
      this.securityTypeList = [];
      this.dormData.forEach((element) => {
        if (element.name === value) {
          this.roomId = element.id;
          this.securityData.roomId = this.roomId;
          this.securityData.roomName = value;
        }
      });
    },
    selectVobj(value) {
      this.vobj = false;
      this.sVobj = value;
      this.sPerson = '请选择';
      this.personList = [];
      this.securityTypeList = [];
      this.vobjData.forEach((element) => {
        if (element.objText === value) {
          this.securityData.objCode = element.objCode;
          this.securityData.objText = value;
        }
      });
      if (value === '宿舍') {
        this.objPerson = false;
        this.getSecurityType();
      } else if (value === '学生') {
        this.objPerson = true;
        this.getPerson();
      }
    },
    async getPerson() {
      const { data } = await selectList(this.roomId);
      this.personData = data;
      this.personData.forEach((element) => {
        this.personList.push(element.userName);
      });
    },
    selectPerson(value) {
      this.person = false;
      this.sPerson = value;
      this.sSecurityType = '请选择';
      this.securityTypeList = [];
      this.personData.forEach((element) => {
        if (element.userName === value) {
          this.stuId = element.userId;
          this.securityData.bedCode = element.bedCode;
          this.securityData.stuId = this.stuId;
          this.securityData.stuName = value;
        }
      });
      this.getSecurityType();
    },
    async getSecurityType() {
      const { data } = await getSecurityType();
      this.securityTypeData = data;
      this.securityTypeData.forEach((element) => {
        this.securityTypeList.push(element.codeText);
      });
    },
    selectSecurityType(value) {
      this.securityType = false;
      this.sSecurityType = value;
      this.securityTypeData.forEach((element) => {
        if (element.codeText === value) {
          this.illegalCode = element.code;
          this.securityData.illegalCode = this.illegalCode;
          this.securityData.illegalText = value;
        }
      });
    },
    async postSecurity() {
      console.log(this.securityData);
      const data = await postSecurity(this.securityData);
      console.log(data);
      if (data.httpCode === 200 || '200') {
        this.$toast.success('提交成功！');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败！');
      }
    },
    imgData(data) {
      data.filePrikeys.forEach((element) => {
        this.photoList.push(element.filePath);
      });
    },
    submitVisitor() {
      this.securityData.checkTime = this.sTime;
      this.securityData.photo = this.photoList.join(',');
      if (this.securityData.schoolName === '') {
        this.$toast('请选择校区！');
        return;
      }
      if (this.securityData.buildName === '') {
        this.$toast('请选择公寓楼！');
        return;
      }
      if (this.securityData.floolName === '') {
        this.$toast('请选择楼层！');
        return;
      }
      if (this.securityData.roomName === '') {
        this.$toast('请选择宿舍！');
        return;
      }
      if (this.securityData.objText === '') {
        this.$toast('请选择违规对象！');
      } else if (this.securityData.objText === '学生') {
        if (this.securityData.stuName === '') {
          this.$toast('请选择问题人！');
          return;
        }
      }
      if (this.securityData.illegalText === '') {
        this.$toast('请选择隐患类型！');
        return;
      }
      if (this.securityData.checkTime === '') {
        this.$toast('请选择检查时间！');
        return;
      }
      this.postSecurity();
    },
  },
  mounted() {
    this.getCampus();
  },
};
</script>

<style lang="scss" scoped>
.apartmentSafety {
  padding-top: 46px;
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
