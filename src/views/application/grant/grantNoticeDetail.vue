<template>
  <div class="grantNotice">
    <div v-if="navback">
      <back-button></back-button>
    </div>
    <van-nav-bar
      title="奖助公示详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <h3>{{grantData.name}}</h3>
      <p>{{grantData.content}}</p>
      <div class="float-right">
        <span>学生处</span>
        <span class="time">{{grantData.publicityTime}}</span>
      </div>
      <div v-if="grantData.planType=='1' || grantData.planType=='2' || grantData.planType=='3'
       || grantData.planType=='4' || grantData.planType=='5' || grantData.planType=='6'
        || grantData.planType=='8'">
        <table border="1" cellpadding="3" cellspacing="0" style="margin:auto">
          <tr v-for="(xb, idx) in grantList" :key="idx">
            <td style="width:22%;">{{xb.deptName}}</td>
            <td>
            <table v-for="(classes, j) in xb.fileList" :key="j">
              <tr>
                <td style="border-bottom:1px solid #000; border-right:1px solid #000;width:28%;">
                  {{classes.className}}
                </td>
                <td>
                  <table v-for="(dc, k) in classes.fileList" :key="k">
                  <tr>
                    <td style="border-bottom:1px solid #000; border-right:1px solid #000;
                     width:100px; height:40px">
                      {{dc.levelname}}
                    </td>
                    <td style="border-bottom:1px solid #000;">
                      {{dc.stuName}}
                    </td>
                  </tr>
                  </table>
                </td>
              </tr>
            </table>
            </td>
          </tr>
        </table>
      </div>
      <div v-if="grantData.planType=='7' ">
        <table border="1" cellpadding="3" cellspacing="0" style="table-layout: fixed;">
          <tr v-for="(xb, idx) in allSourceData" :key="idx">
            <td style="width:100px;">{{xb.deptName}}</td>
            <td>{{xb.className}}</td>
          </tr>
        </table>
      </div>
      <div v-if="grantData.planType=='9' ">
        <table border="1" cellpadding="3" cellspacing="0" style="table-layout: fixed;">
          <tr v-for="(xb, idx) in allSourceData" :key="idx">
            <td style="width:100px;">{{xb.deptName}}</td>
            <td>{{xb.pubTypeName}}</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
import { fetchNoticeDetail } from '@/services/grant';
import backButton from '@/components/backButton/backButton.vue';

export default {
  name: 'grantNoticeDetail',
  data() {
    return {
      xbList: [],
      classList: [],
      grantList: [],
      grantData: {
        name: '',
        planId: '',
        content: '',
        publicityTime: '',
        planType: '',
      },
      allSourceData: [],
      grantLs: null,
      navback: false,
      appJSObject: window.AppJSObject,
    };
  },
  components: {
    'back-button': backButton,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    resetTree(sourceData) {
      const list = [];
      sourceData.forEach((item) => {
        for (let i = 0; i < list.length; i += 1) {
          if (list[i].deptName === item.deptName) {
            list[i].fileList.push(item);
            return;
          }
        }
        list.push({
          deptName: item.deptName,
          fileList: [item],
        });
      });
      return list;
    },
    resetclassTree(sourceData) {
      const list = [];
      sourceData.forEach((item) => {
        for (let i = 0; i < list.length; i += 1) {
          if (list[i].className === item.className) {
            list[i].fileList.push(item);
            return;
          }
        }
        list.push({ deptName: item.deptName, className: item.className, fileList: [item] });
      });
      return list;
    },
    resetArray(xbList, classList) {
      for (const data of xbList) {
        data.fileList = [];
        data.rowspan = 0;
        data.newarray = [];
        for (let i = 0; i < classList.length; i += 1) {
          if (data.deptName === classList[i].deptName) {
            data.fileList.push(classList[i]);
            data.rowspan += parseInt(classList[i].fileList.length, 10);
            data.newarray = new Array(data.rowspan);
          }
        }
      }
      this.grantList = xbList;
    },
    async getMessage(noticeData) {
      const { data } = await fetchNoticeDetail(noticeData);
      this.allSourceData = data;
      this.xbList = this.resetTree(data);
      this.classList = this.resetclassTree(data);
      return this.resetArray(this.xbList, this.classList);
    },
  },
  mounted() {
    if (!this.$route.params.item) {
      this.grantLs = this.appJSObject.getName();
      this.grantData = JSON.parse(this.grantLs);
      this.navback = true;
    } else {
      this.grantData = {
        name: this.$route.params.item.name,
        planId: this.$route.params.item.type,
        content: this.$route.params.item.content,
        publicityTime: this.$route.params.item.publicityTime,
        planType: this.$route.params.item.planType,
      };
    }
    this.getMessage(this.grantData);
  },
};
</script>

<style lang="scss" scoped>
.grantNotice {
  padding-top: 46px;
  h3 {
    text-align: center;
  }
  p {
    text-indent: 2em;
  }
  .float-right {
    float: right;
    span {
      display: block;
      text-align: center;
    }
  }
  table {
    margin: 0 !important;
    width: 100% !important;
  }
}
</style>
