<template>
  <div class="schedule">
    <van-nav-bar title="课表" left-text="返回" right-text left-arrow fixed @click-left="onClickLeft"/>
    <div class="wrapper">
      <table class="course_table" v-if="ctable">
        <thead>
          <tr>
            <td colspan="6">班级课表</td>
          </tr>
        </thead>
        <tbody id="course_html">
          <tr>
            <th width="30"></th>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
          </tr>
          <tr>
            <td>1</td>
            <td ref="c1_0"></td>
            <td ref="c2_0"></td>
            <td ref="c3_0"></td>
            <td ref="c4_0"></td>
            <td ref="c5_0"></td>
          </tr>
          <tr>
            <td>2</td>
            <td ref="c1_1"></td>
            <td ref="c2_1"></td>
            <td ref="c3_1"></td>
            <td ref="c4_1"></td>
            <td ref="c5_1"></td>
          </tr>
          <tr>
            <td>3</td>
            <td ref="c1_2"></td>
            <td ref="c2_2"></td>
            <td ref="c3_2"></td>
            <td ref="c4_2"></td>
            <td ref="c5_2"></td>
          </tr>
          <tr>
            <td>4</td>
            <td ref="c1_3"></td>
            <td ref="c2_3"></td>
            <td ref="c3_3"></td>
            <td ref="c4_3"></td>
            <td ref="c5_3"></td>
          </tr>
          <tr>
            <td>5</td>
            <td ref="c1_4"></td>
            <td ref="c2_4"></td>
            <td ref="c3_4"></td>
            <td ref="c4_4"></td>
            <td ref="c5_4"></td>
          </tr>
          <tr>
            <td>6</td>
            <td ref="c1_5"></td>
            <td ref="c2_5"></td>
            <td ref="c3_5"></td>
            <td ref="c4_5"></td>
            <td ref="c5_5"></td>
          </tr>
          <tr>
            <td>8</td>
            <td ref="c1_6"></td>
            <td ref="c2_6"></td>
            <td ref="c3_6"></td>
            <td ref="c4_6"></td>
            <td ref="c5_6"></td>
          </tr>
          <tr>
            <td>7</td>
            <td ref="c1_7"></td>
            <td ref="c2_7"></td>
            <td ref="c3_7"></td>
            <td ref="c4_7"></td>
            <td ref="c5_7"></td>
          </tr>
          <tr>
            <td>9</td>
            <td ref="c1_8"></td>
            <td ref="c2_8"></td>
            <td ref="c3_8"></td>
            <td ref="c4_8"></td>
            <td ref="c5_8"></td>
          </tr>
        </tbody>
      </table>
      <table class="course_table" v-if="ttable">
        <thead>
          <tr>
            <td colspan="6">我的课表</td>
          </tr>
        </thead>
        <tbody id="course_html_t">
          <tr>
            <th width="30"></th>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
          </tr>
          <tr>
            <td>1</td>
            <td ref="t1_0"></td>
            <td ref="t2_0"></td>
            <td ref="t3_0"></td>
            <td ref="t4_0"></td>
            <td ref="t5_0"></td>
          </tr>
          <tr>
            <td>2</td>
            <td ref="t1_1"></td>
            <td ref="t2_1"></td>
            <td ref="t3_1"></td>
            <td ref="t4_1"></td>
            <td ref="t5_1"></td>
          </tr>
          <tr>
            <td>3</td>
            <td ref="t1_2"></td>
            <td ref="t2_2"></td>
            <td ref="t3_2"></td>
            <td ref="t4_2"></td>
            <td ref="t5_2"></td>
          </tr>
          <tr>
            <td>4</td>
            <td ref="t1_3"></td>
            <td ref="t2_3"></td>
            <td ref="t3_3"></td>
            <td ref="t4_3"></td>
            <td ref="t5_3"></td>
          </tr>
          <tr>
            <td>5</td>
            <td ref="t1_4"></td>
            <td ref="t2_4"></td>
            <td ref="t3_4"></td>
            <td ref="t4_4"></td>
            <td ref="t5_4"></td>
          </tr>
          <tr>
            <td>6</td>
            <td ref="t1_5"></td>
            <td ref="t2_5"></td>
            <td ref="t3_5"></td>
            <td ref="t4_5"></td>
            <td ref="t5_5"></td>
          </tr>
          <tr>
            <td>7</td>
            <td ref="t1_6"></td>
            <td ref="t2_6"></td>
            <td ref="t3_6"></td>
            <td ref="t4_6"></td>
            <td ref="t5_6"></td>
          </tr>
          <tr>
            <td>8</td>
            <td ref="t1_7"></td>
            <td ref="t2_7"></td>
            <td ref="t3_7"></td>
            <td ref="t4_7"></td>
            <td ref="t5_7"></td>
          </tr>
          <tr>
            <td>9</td>
            <td ref="t1_8"></td>
            <td ref="t2_8"></td>
            <td ref="t3_8"></td>
            <td ref="t4_8"></td>
            <td ref="t5_8"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import { getMyTimeTable } from '@/services/timeTable';

export default {
  name: 'schedule',
  data() {
    return {
      myTimeTable: [],
      ctable: true,
      ttable: true,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getMyTimeTable() {
      const data = await getMyTimeTable({
        userId: this.$store.state.system.userInfo.id,
        userType: this.$store.state.system.userInfo.userType,
        schoolId: this.$store.state.system.userInfo.schoolId,
      });
      this.myTimeTable = data.data;
      if (this.myTimeTable.xskb) {
        this.ctable = true;
        this.ttable = false;
        this.myTimeTable.xskb.forEach((item, index) => {
          const tdDom = this.$refs[`c${item.weekid}_${item.typeid}`];
          tdDom.innerHTML = item.coursename;
          if (item.coursename === '语文') {
            tdDom.setAttribute('class', 'yuwen');
          } else if (item.coursename === '数学') {
            tdDom.setAttribute('class', 'shuxue');
          } else if (item.coursename === '英语') {
            tdDom.setAttribute('class', 'yinyu');
          } else if (item.coursename === '物理') {
            tdDom.setAttribute('class', 'wuli');
          } else if (item.coursename === '生物') {
            tdDom.setAttribute('class', 'shengwu');
          } else if (item.coursename === '化学') {
            tdDom.setAttribute('class', 'huaxue');
          } else if (item.coursename === '地理') {
            tdDom.setAttribute('class', 'dili');
          } else if (item.coursename === '历史') {
            tdDom.setAttribute('class', 'lishi');
          } else if (item.coursename === '政治') {
            tdDom.setAttribute('class', 'zhengzhi');
          } else {
            tdDom.setAttribute('class', 'dele');
          }
        });
      } else {
        this.ctable = false;
        this.ttable = true;
        if (this.myTimeTable.bzrkb) {
          this.ctable = true;
          this.myTimeTable.bzrkb.forEach((item, index) => {
            const tdDom = this.$refs[`c${item.weekid}_${item.typeid}`];
            tdDom.innerHTML = item.coursename;
            if (item.coursename === '语文') {
              tdDom.setAttribute('class', 'yuwen');
            } else if (item.coursename === '数学') {
              tdDom.setAttribute('class', 'shuxue');
            } else if (item.coursename === '英语') {
              tdDom.setAttribute('class', 'yingyu');
            } else if (item.coursename === '物理') {
              tdDom.setAttribute('class', 'wuli');
            } else if (item.coursename === '生物') {
              tdDom.setAttribute('class', 'shengwu');
            } else if (item.coursename === '化学') {
              tdDom.setAttribute('class', 'huaxue');
            } else if (item.coursename === '地理') {
              tdDom.setAttribute('class', 'dili');
            } else if (item.coursename === '历史') {
              tdDom.setAttribute('class', 'lishi');
            } else if (item.coursename === '政治') {
              tdDom.setAttribute('class', 'zhengzhi');
            } else {
              tdDom.setAttribute('class', 'dele');
            }
          });
        }
        if (this.myTimeTable.dkjskbList) {
          console.log(this.myTimeTable.dkjskbList);
          this.myTimeTable.dkjskbList.forEach((item, index) => {
            const tdDom = this.$refs[`t${item.weekid}_${item.typeid}`];
            tdDom.innerHTML = item.classInfo.bJMC;
            tdDom.setAttribute('class', 'shuxue');
          });
        }
      }
    },
  },
  mounted() {
    this.getMyTimeTable();
  },
};
</script>

<style scoped>
.wrapper{
  padding-top: 40px;
}
.course_table{
  width: 100%;
  border-spacing: 0;
  margin-bottom: 5px;
}
.course_table th{
  height: 60px;
  background: #f3f8f8;
  color: #6d8498;
  font-weight: 400;
  font-size: 0.95em;
}
.course_table td{
  font-size:0.925em;
  height: 3em;
  border-bottom: 1px dashed #eee;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.course_table tr td:first-child {
  background: #ebf5f5;
  color: #698196;
}

.add{
  background:#e1ebf2 center no-repeat;
  background-size: 100% 100%;
  height: 100%;
  color: #999999;
  line-height: 3em;
  width: 3em;
  margin:0 auto;
  font-size: 0.925em;
  display: none;
}
.add span{
  font-size: 1.25em;
  color: #7993ab;
}
.add.on{
  display: block;
}
.course_all{
  padding-bottom: 0.5em;
}
.yuwen,.shuxue,.yingyu,.wuli,.huaxue,.shengwu,.lishi,.zhengzhi,.meishu,.tiyu,.dili,.yinyue,.dele{
  font-size:0.925em;
  background: #adbeff;
  color: #FFF;width: 3em;
  height: 100%;
  padding: 3px 0;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 0.5em;
  line-height: 2em;
}
.shuxue{background: #ff9e9f;}  .lishi{background: #ff9e9e;}
.yingyu{background: #ffdf62;}  .zhengzhi{background: #61e7f0;}
.wuli{background: #e4e275;}    .meishu{background: #fdc081;}
.huaxue{background: #c2b4f6;}  .dili{background: #62e48a;}
.shengwu{background: #ffc262;} .tiyu{background: #c2ec5c;}
.dele{background: #FFF;    color: #666666;} .yinyue{background: #c2ec5c;}
.course_all div{margin-right: 0.5em;}
.course_all div:nth-child(7){margin-right: 0;}
.add_kemu{
  padding: 0.5em;
  background: #ff9e9f;
  color: #FFF;
  border-radius: 0.25em;
  font-size: 0.85em;
  margin-left: 0.5em;
}

.course_all{padding:0.75em 0.5em 0em 0.5em;}
.course_all div{
  width: 3em;
  height: 3em;
  text-align: center;
  display: inline-block;
  margin-bottom: 0.5em;
}
</style>
