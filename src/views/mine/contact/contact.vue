<template>
  <div class="addressBook">
    <van-nav-bar title="通讯录" left-text="返回" right-text left-arrow fixed @click-left="onClickLeft"/>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <ul>
      <li>
        <p class="letter" id="a">A</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <p class="letter" id="b">B</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <p class="letter" id="c">C</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <p class="letter" id="d">D</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <p class="letter" id="e">E</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <p class="letter" id="f">F</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <p class="letter" id="g">G</p>
        <ul>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
          <li class="list">
            <div class="tx">
              <img :src="require('@/assets/xj.png')" alt>
            </div>
            <div class="name">
              <p class="teacher">安然</p>
              <p class="subject">语文老师</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="number">
      <li>
        <a href="#a">A</a>
      </li>
      <li>
        <a href="#b">B</a>
      </li>
      <li>
        <a href="#c">C</a>
      </li>
      <li>
        <a href="#d">D</a>
      </li>
      <li>
        <a href="#e">E</a>
      </li>
      <li>
        <a href="#f">F</a>
      </li>
      <li>
        <a href="#g">G</a>
      </li>
      <li>
        <a href="#h">H</a>
      </li>
      <li>
        <a href="#i">I</a>
      </li>
      <li>
        <a href="#j">J</a>
      </li>
      <li>
        <a href="#k">K</a>
      </li>
      <li>
        <a href="#l">L</a>
      </li>
      <li>
        <a href="#m">M</a>
      </li>
      <li>
        <a href="#n">N</a>
      </li>
      <li>
        <a href="#o">O</a>
      </li>
      <li>
        <a href="#p">P</a>
      </li>
      <li>
        <a href="#q">Q</a>
      </li>
      <li>
        <a href="#r">R</a>
      </li>
      <li>
        <a href="#s">S</a>
      </li>
      <li>
        <a href="#t">T</a>
      </li>
      <li>
        <a href="#u">Y</a>
      </li>
      <li>
        <a href="#v">V</a>
      </li>
      <li>
        <a href="#w">W</a>
      </li>
      <li>
        <a href="#x">X</a>
      </li>
      <li>
        <a href="#y">Y</a>
      </li>
      <li>
        <a href="#z">Z</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "contact",
  date() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goDetail() {
      this.$router.push("details");
    }
  }
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
