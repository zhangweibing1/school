<template>
  <div class="applyFor">
    <van-nav-bar
      title="会议室申请"
      left-text="返回"
      right-text=" "
      left-arrow
      @click-left="onClickLeft"/>
      <div class="top">
        <van-cell-group>
          <van-field label="会议室名称"
           v-model="name"
           required
           type="text" placeholder="请会议室名称"
           rows="1" autosize dir="rtl" />
          <van-cell title="开始使用时间"
           @click="show = true;" is-link border
           required
           v-model="startTime" />
          <van-popup v-model="show" position="bottom">
            <van-datetime-picker
              show-toolbar
              @confirm="confirm"
              @cancel="show = false"
              type="datetime"
              :min-date="minDate"
              :formatter="formatter"
              />
          </van-popup>
          <van-cell title="结束使用时间" required
           @click="show1 = true;" is-link
           border v-model="endTime" />
          <van-popup v-model="show1" position="bottom">
            <van-datetime-picker
              show-toolbar
              @confirm="endConfirm"
              @cancel="show1 = false"
              type="datetime"
              :min-date="minDate"
              :formatter="formatter"
              />
          </van-popup>
          <van-field label="人数"
           v-model="people"
           required
           type="number" placeholder="请输入人数"
           rows="1" autosize dir="rtl" />
        </van-cell-group>
      </div>
      <div class="top">
        <div class="title">会议内容</div>
        <textarea name="" v-model="content" placeholder="请输入会议内容"></textarea>
      </div>
      <div class="top">
        <div class="title">来院嘉宾</div>
        <textarea name="" v-model="guest" placeholder="请输入来院嘉宾"></textarea>
      </div>
      <div class="top">
        <div class="title">出席院领导</div>
        <textarea name="" v-model="leader" placeholder="请输入出席院领导"></textarea>
      </div>
      <div class="top">
        <van-cell-group>
          <van-switch-cell v-model="isUseScreen" required border title="是否使用电子屏" />
          <div v-show="this.isUseScreen == true">
            <div class="title">电子屏内容</div>
            <textarea name="" v-model="electronics" placeholder="请输入电子屏内容"></textarea>
          </div>
          <van-switch-cell v-model="isUseProjector" border title="是否使用投影" />
          <van-switch-cell v-model="isUseAllToOne" border title="是否使用一体机" />
          <van-switch-cell v-model="isUseStereo" border title="是否使用音响" />
          <van-cell title="校区" required
           v-model="school" @click="show2 = true;"
           is-link border value="请选择"/>
          <van-popup v-model="show2" position="bottom">
            <van-picker show-toolbar
            :columns="schoolList"
            @cancel="show2 = false"
            @confirm="onSchool" />
          </van-popup>
        </van-cell-group>
      </div>
    <div class="btn-group">
      <van-button size="large" class="btn blue" @click="submit()">提交</van-button>
    </div>
  </div>
</template>

<script>
import { applyForSubmit, information, start } from '@/services/meeting';

export default {
  name: 'applyFor',
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      startTime: '请选择',
      endTime: '请选择',
      minDate: new Date(),
      name: '',
      people: '',
      content: '',
      guest: '',
      leader: '',
      electronics: '',
      isUseProjector: false,
      isUseAllToOne: false,
      isUseStereo: false,
      isUseScreen: false,
      processId: '',
      orderId: '',
      projector: '',
      allToOne: '',
      stereo: '',
      screen: '',
      school: '',
      schoolList: ['武宿校区', '文化校区'],
      nameIn: {
        name: 'hyglRoomApply',
      },
      infoDetail: {
        name: '',
        startTime: '',
        endTime: '',
        userNum: '',
        content: '',
        guest: '',
        leaderNames: '',
        txt: '',
        isUseProjector: '',
        isUseAllToOne: '',
        isUseStereo: '',
        isUseScreen: '',
        bgszr: '',
      },
    };
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return value + this.$t('year');
      } else if (type === 'month') {
        return value + this.$t('month');
      }
      return value;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    confirm(value) {
      this.show = false;
      if (this.endTime !== '请选择') {
        if (this.$moment(this.startTime).isBefore(this.endTime)) {
          this.startTime = this.$moment(value).format('YYYY-MM-DD HH:mm:ss');
        } else {
          this.startTime = '请选择';
          this.$toast('开始时间需小于结束时间！');
        }
      }
    },
    endConfirm(value) {
      this.show1 = false;
      if (this.startTime !== '请选择') {
        if (this.$moment(this.startTime).isBefore(this.endTime)) {
          this.endTime = this.$moment(value).format('YYYY-MM-DD HH:mm:ss');
        } else {
          this.endTime = '请选择';
          this.$toast('开始时间需小于结束时间！');
        }
      }
    },
    onSchool(value) {
      this.show2 = false;
      this.school = value;
    },
    async start(data) {
      await start(data);
    },
    async information(data) {
      await information(data);
    },
    async submitMessage(data) {
      await applyForSubmit(data);
    },
    submit() {
      if (this.name === '') {
        this.$toast('请输入会议室名称');
        return;
      }
      if (this.startTime === '请选择' || '') {
        this.$toast('请选择开始时间');
        return;
      }
      if (this.endTime === '请选择' || '') {
        this.$toast('请选择结束时间');
        return;
      }
      if (this.people === '') {
        this.$toast('请输入参加会议人数');
        return;
      }
      if (this.content === '') {
        this.$toast('请输入会议内容');
        return;
      }
      if (this.guest === '') {
        this.$toast('请输入来院嘉宾');
        return;
      }
      if (this.leader === '') {
        this.$toast('请输入出席领导');
        return;
      }
      if (this.isUseScreen === true) {
        if (this.electronics === '') {
          this.$toast('请输入电子屏内容');
          return;
        }
      }
      if (this.school === '请选择' || '') {
        this.$toast('请选择校区');
        return;
      }
      if (this.isUseProjector === true) {
        this.projector = '是';
      } else if (this.isUseProjector === false) {
        this.projector = '否';
      }
      if (this.isUseScreen === true) {
        this.screen = '是';
      } else if (this.isUseScreen === false) {
        this.screen = '否';
      }
      if (this.isUseAllToOne === true) {
        this.allToOne = '是';
      } else if (this.isUseAllToOne === false) {
        this.allToOne = '否';
      }
      if (this.isUseStereo === true) {
        this.stereo = '是';
      } else if (this.isUseStereo === false) {
        this.stereo = '否';
      }
      if (this.school === '武宿校区') {
        this.bgsshwy = 'Z_903554731020120065-1031348989367386114';
      } else if (this.school === '文华校区') {
        this.bgsshwy = 'Z_903554731020120065-1031348873801728001';
      }
      this.infoDetail = {
        name: this.name,
        startTime: this.startTime,
        endTime: this.endTime,
        content: this.content,
        guest: this.guest,
        leaderNames: this.leader,
        txt: this.electronics,
        userNum: this.people,
        isUseProjector: this.projector,
        isUseAllToOne: this.allToOne,
        isUseStereo: this.stereo,
        isUseScreen: this.screen,
        bgszr: this.bgsshwy,
      };
      this.information(this.nameIn);
      this.submitMessage(this.infoDetail);
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .applyFor{
    padding-bottom: 60px;
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
