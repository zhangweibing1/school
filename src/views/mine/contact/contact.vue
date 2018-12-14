<template>
  <div class="addressBook">
    <back-button></back-button>
    <van-nav-bar
      title="通讯录"
      left-text="返回"
      right-text=" "
      left-arrow
      fixed
      @click-left="onClickLeft"/>
      <van-search v-model="userName" placeholder="请输入搜索关键词" show-action @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    <ul v-if="memberList">
      <li v-for="(item, index) in memberList" :key = "index"  >
        <p class="letter" :id="item.letter" :ref="item.letter">{{item.letter}}</p>
        <ul>
          <li class="list" v-for="(i, index) in item.data" :key = "index">
            <div class="tx">
              <img v-if="!i.zp" :src="require('@/assets/myedu/xj.png')" alt>
              <img v-if="i.zp" :src="$store.state.system.sftpPath + i.zp" alt>
            </div>
            <div class="name">
              <p class="teacher">{{i.stuName}}</p>
              <p class="subject">{{i.stuPhone}}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="number" v-if="showLetterList">
      <li v-for="(letter, index) in Letters "  :key = "index">
        <a href="javascript:void(0)"
        @click="jumper('#'+letter)"><span>{{letter}}</span></a>
      </li>
    </ul>
    <ul v-if="teaList">
      <li v-for="(item, index) in teaList" :key = "index"  >
        <p class="letter" :id="item.letter" :ref="item.letter">{{item.mc}}</p>
        <ul>
          <li class="list" v-for="(i, index) in item.data" :key = "index">
            <div class="tx">
              <img v-if="!i.zp" :src="require('@/assets/myedu/xj.png')" alt>
              <img v-if="i.zp" :src="$store.state.system.sftpPath + i.sysUser.zp" alt>
            </div>
            <div class="name">
              <p class="teacher">{{i.sysUser.userName}}</p>
              <p class="subject">{{i.sysUser.phone}}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="number" v-if="showLetterList">
      <li v-for="(letter, index) in Letters "  :key = "index">
        <a href="javascript:void(0)"
        @click="jumper('#'+letter)"><span>{{letter}}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import backButton from '@/components/backButton/backButton.vue';
import { queryClassStuByStu, getOrgUser } from '@/services/mine';

export default {
  name: 'completeInfo',
  data() {
    return {
      userName: '',
      userType: 'S',
      memberList: [],
      teaList: [],
      showLetterList: true,
      panelShow: false,
      letter: '',
      Letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    };
  },
  components: {
    'back-button': backButton,
  },
  computed: {
    ...mapGetters('system', ['userInfo']),
  },
  methods: {
    pySort(arr, str, type) {
      const letters = 'ABCDEFGHJKLMNOPQRSTWXYZ'.split('');
      const result = [];
      let curr;
      let j;
      let i;
      for (i = 0; i < letters.length; i += 1) {
        curr = { letter: letters[i], data: [], mc: '' };
        for (j = 0; j < arr.length; j += 1) {
          // const firstLetter = pinyinUtil.getFirstLetter(arr[j].Name);
          if (arr[j][str]) {
            const initial = arr[j][str].charAt(0);
            if (initial === letters[i] || initial === letters[i].toLowerCase()) {
              curr.data.push(arr[j]);
              if (type === 'T') {
                curr.mc = arr[j].sysDept.dWMC;
              }
            }
          }
        }
        if (curr.data.length) {
          result.push(curr);
        }
      }
      return result;
    },
    onSearch() {
      if (this.userType === 'T') {
        this.getOrgUser();
      } else {
        this.queryClassStuByStu();
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    // 字母索引锚点定位
    jumper(key) {
      const anchor = this.$el.querySelector(key);
      if (anchor) {
        document.documentElement.scrollTop = anchor.offsetTop;
      }
    },
    async queryClassStuByStu() {
      const { data } = await
      queryClassStuByStu({ stuId: this.userInfo.id, userName: this.userName });
      this.memberList = this.pySort(data, 'namePinyin', 'S');
    },
    async getOrgUser() {
      const { data } = await getOrgUser({ userName: this.userName });
      this.teaList = this.pySort(data, 'deptPingYin', 'T');
    },
  },
  mounted() {
    if (this.userInfo.userType === '1' || this.userInfo.userType === '6') {
      this.queryClassStuByStu();
      this.userType = 'S';
    } else if (this.userInfo.userType === '2' || this.userInfo.userType === '3'
      || this.userInfo.userType === '4' || this.userInfo.userType === '5') {
      this.getOrgUser();
      this.userType = 'T';
    }
  },
};
</script>
<style scoped>
.addressBook {
  padding-top: 44px;
}
.letter {
  color: #666;
  font-size: 13px;
  line-height: 26px;
  margin-left: 12px;
}
.list {
  display: flex;
  background: #fff;
  padding: 10px 0 0 12px;
}
.tx img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 17px;
}
.name {
  width: 100%;
  padding-bottom: 8px;
  border-bottom: solid 1px #e5e5e5;
}
.teacher {
  color: #333;
  font-size: 16px;
}
.subject {
  font-size: 13px;
  color: #999;
}
.list:last-child .name {
  border: 0;
}
.number {
  position: fixed;
  top: 20%;
  right: 6px;
  text-align: center;
}
.number li {
  font-size: 9px;
  color: #333;
}
</style>
