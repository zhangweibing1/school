<template>
  <div class="noticeList">
    <van-nav-bar title="资讯" left-text="返回" right-text left-arrow fixed @click-left="onClickLeft"/>
    <van-tabs v-model="active"  @click="choseTab">
      <van-tab title="通知公告">
        <span v-for="n in noticeList" :key="n">
          <div class="wrapper">
            <div class="one" @click="showDetail(n.id)">
            <h4>
              {{n.title}}
            </h4>
            <p class="neirong">{{n.content}}</p>
            <div class="date">
              <p class="time">
                <img :src="require('@/assets/time.png')" alt> {{n.sendTime}}
              </p>
             </div>
            </div>
          </div>
        </span>
      </van-tab>
      <van-tab title="新闻资讯">
        <span v-for="n in newsList" :key="n">
         <div class="wrapper">
            <div class="one"  @click="showDetail(n.id)">
            <h4>
              {{n.title}}
            </h4>
            <p class="neirong">{{n.content}}</p>
            <div class="date">
              <p class="time">
                <img :src="require('@/assets/time.png')" alt> {{n.sendTime}}
              </p>
             </div>
            </div>
          </div>
        </span>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { loadBaNoticeAndNew } from '@/services/home';

export default {
  name: 'noticeList',
  data() {
    return {
      active: 0,
      msgSubmit: {
        type: '',
        userId: '',
      },
      noticeList: [],
      newsList: [],
    };
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  mounted() {
    this.active = this.$route.params.type;
    if (this.active === '0') {
      this.msgSubmit.type = '2';
    } else {
      this.msgSubmit.type = '3';
    }
    this.msgSubmit.userId = this.$store.state.system.userInfo.id;
    this.queryData(this.msgSubmit);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async queryData(param) {
      const { data } = await loadBaNoticeAndNew(param);
      if (param.type === '2') {
        const records = data.notice.records;
        for (const i in records) {
           records[i].content = records[i].content
             .replace(/<\/?.+?>/g, '').replace(/ /g, '').substring(0, 20) + '...';
           records[i].sendTime = records[i].sendTime.substring(0, 10);
        }
        this.noticeList = records;
      }
      if (param.type === '3') {
        const records = data.news.records;
        for (const i in records) {
          records[i].content = records[i].content
            .replace(/<\/?.+?>/g, '').replace(/ /g, '').substring(0, 20) + '...';
          records[i].sendTime = records[i].sendTime.substring(0, 10);
        }
        this.newsList = records;
      }
    },
    choseTab(index, title) {
      this.msgSubmit.userId = this.$store.state.system.userInfo.id;
      if (index === 0) {
        this.msgSubmit.type = '2';
      } else if (index === 1) {
        this.msgSubmit.type = '3';
      }
      this.queryData(this.msgSubmit);
    },
    showDetail(value) {
      this.$router.push('/newsDetail/, value');
    },
  },
};
</script>

<style scoped>
.noticeList {
  padding: 44px 0 46px;
}
.wrapper {
  width: 100%;
  padding: 0px 12px;
  background: #fff;
}
.one {
  padding: 19px 0;
  border-bottom: solid #e7e7e7 1px;
}
.one h4 {
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 600;
}
.content-block {
  margin: 0 !important;
  padding: 0 !important;
}
.bd {
  width: 38px;
  height: 18px;
  font-weight: 600;
  color: #ff1717;
  font-size: 13px;
  background: #ffeeee;
  display: inline-block;
  text-align: center;
  line-height: 18px;
  margin-left: 8px;
}
.neirong {
  font-size: 16px;
  color: #666666;
  margin: 12px 0 !important;
}
.date img {
  width: 13.5px;
  height: 13.5px;
  display: inline-block;
}
.ly {
  height: 32px;
  display: flex;
  line-height: 30px;
}
.ly span {
  font-size: 15px;
  color: #666666;
}
.date p {
  margin: 0;
  color: #999999;
  font-size: 14px;
}
.yd {
  width: 38px;
  height: 18px;
  font-weight: 600;
  color: #c1c1c1;
  font-size: 13px;
  background: #f6f6f6;
  display: inline-block;
  text-align: center;
  line-height: 18px;
  margin-left: 8px;
}
.wrapper .one:last-child {
  border: 0;
}
/* 通知结束 */
/* 资讯开始 */
.list {
  padding: 20px 0;
  border-bottom: solid 1px #e5e5e5;
  display: flex;
  justify-content: space-between;
}
.information .list:last-child {
  border: 0;
}
.list_left {
  width: 200px;
}
.list_left p {
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 50px;
  overflow: hidden;
}
.list_right {
  width: 113px;
  height: 80px;
  overflow: hidden;
}
.list_right img {
  width: 100%;
}
.list_left2 {
  width: 100%;
}
.list_left2 p {
  font-size: 16px;
  color: #1c1c1c;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 50px;
  overflow: hidden;
}
.time {
  font-size: 14px;
  color: #999999 !important;
  font-weight: 500 !important;
  margin-top: 12px !important;
}
</style>
