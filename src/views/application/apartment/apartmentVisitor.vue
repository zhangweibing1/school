<template>
  <div class="apartmentVisitor">
    <back-button></back-button>
    <van-nav-bar
      title="访客登记"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <div class="top">
        <van-cell-group>
          <van-popup v-model="visible" >

          </van-popup>
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
          <van-cell title="拜访人" @click="person = true;" is-link border required v-model="sPerson" />
          <van-popup v-model="person" position="bottom">
            <van-picker show-toolbar title="拜访人" :columns="personList"
             @confirm="selectPerson" @cancel="person = false;" />
          </van-popup>
          <van-cell title="来访时间" @click="time = true;" is-link border required v-model="sTime" />
          <van-popup v-model="time" position="bottom">
            <van-datetime-picker
              show-toolbar
              @confirm="confirm"
              @cancel="time = false"
              type="datetime"
              :min-date="minDate"/>
          </van-popup>
          <van-field v-model="takeGoods" label="携带物品" type="textarea" placeholder="请输入"
           rows="1" autosize />
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
import { getCurrSchoolInfoList, selectGongYuBuild, asynchronousLoadingFloor, getRooms, selectList, getVisitor, jPush } from '@/services/apartment';
import uploadImg from '@/components/upload/uploadImg.vue';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'apartmentVisitor',
  data() {
    return {
      visible: false,
      sCampus: '请选择',
      sApartment: '请选择',
      sFloor: '请选择',
      sDorm: '请选择',
      sPerson: '请选择',
      sTime: '请选择',
      campus: false,
      apartment: false,
      floor: false,
      dorm: false,
      person: false,
      time: false,
      minDate: new Date(),
      campusData: [],
      apartmentData: [],
      floorData: [],
      dormData: [],
      personData: [],
      campusList: [],
      apartmentList: [],
      floorList: [],
      dormList: [],
      personList: [],
      schoolId: '',
      buildingId: '',
      floorId: '',
      roomId: '',
      takeGoods: '',
      visitorData: {
        schoolId: '',
        schoolName: '',
        buildId: '',
        buildName: '',
        floolId: '',
        floolName: '',
        roomId: '',
        roomName: '',
        stuId: '',
        stuName: '',
        takeGoods: '',
        visitTime: '',
        photo: '',
      },
      photoList: [],
      jPushData: {
        userId: '',
        mk: 'susfangke',
        message: '',
      },
      jPushTime: null,
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
      this.jPushTime = this.$moment(value).format('YYYY年MM月DD日HH时mm分');
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
      this.apartmentList = [];
      this.floorList = [];
      this.dormList = [];
      this.personList = [];
      this.campusData.forEach((element) => {
        if (element.xXMC === value) {
          this.schoolId = element.id;
          this.visitorData.schoolId = element.id;
          this.visitorData.schoolName = value;
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
      this.floorList = [];
      this.dormList = [];
      this.personList = [];
      this.apartmentData.forEach((element) => {
        if (element.mC === value) {
          this.buildingId = element.id;
          this.visitorData.buildId = this.buildingId;
          this.visitorData.buildName = value;
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
      this.dormList = [];
      this.personList = [];
      this.floorData.forEach((element) => {
        if (element.name === value) {
          this.floorId = element.id;
          this.visitorData.floolId = this.floorId;
          this.visitorData.floolName = value;
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
      this.personList = [];
      this.dormData.forEach((element) => {
        if (element.name === value) {
          this.roomId = element.id;
          this.visitorData.roomId = this.roomId;
          this.visitorData.roomName = value;
        }
      });
      this.getPerson();
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
      this.personData.forEach((element) => {
        if (element.userName === value) {
          this.stuId = element.userId;
          this.visitorData.stuId = this.stuId;
          this.visitorData.stuName = value;
          this.jPushData.userId = this.stuId;
        }
      });
    },
    async postVisitor() {
      this.jPushData.message = `${this.jPushTime}，在${this.visitorData.buildName}公寓您有一个访客。`;
      const data = await getVisitor(this.visitorData);
      if (data.httpCode === 200 || '200') {
        this.$toast.success('提交成功！');
        this.$router.go(-1);
      } else {
        this.$toast.fail('提交失败！');
      }
      await jPush(this.jPushData);
    },
    imgData(data) {
      data.filePrikeys.forEach((element) => {
        this.photoList.push(element.filePath);
      });
    },
    submitVisitor() {
      this.visitorData.takeGoods = this.takeGoods;
      this.visitorData.visitTime = this.sTime;
      this.visitorData.photo = this.photoList.join(',');
      if (this.visitorData.schoolName === '') {
        this.$toast('请选择校区！');
        return;
      }
      if (this.visitorData.buildName === '') {
        this.$toast('请选择公寓楼！');
        return;
      }
      if (this.visitorData.floolName === '') {
        this.$toast('请选择楼层！');
        return;
      }
      if (this.visitorData.roomName === '') {
        this.$toast('请选择宿舍！');
        return;
      }
      if (this.visitorData.stuName === '') {
        this.$toast('请选择拜访人！');
        return;
      }
      if (this.visitorData.visitTime === '') {
        this.$toast('请选择检查时间！');
        return;
      }
      this.postVisitor();
    },
  },
  mounted() {
    this.getCampus();
  },
};
</script>

<style lang="scss" scoped>
.apartmentVisitor {
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
