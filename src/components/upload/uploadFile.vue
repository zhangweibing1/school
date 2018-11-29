<template>
  <div class="upload">
    <ul>
      <li v-for="img in imgList" :key="img.id">
        <img class="upimg" :src="img.src" alt="">
        <span class="imgTitle">{{img.name}}</span>
      </li>
      <li>
        <van-uploader :after-read="readImg" multiple>
          <div class="pos">
            <span>+</span>
          </div>
        </van-uploader>
      </li>
    </ul>
  </div>
</template>
<script>
import { file } from '@/services/newStuReview';

export default {
  name: 'upload-file',
  data() {
    return {
      step: 0,
      imgUrl: '',
      imgList: [],
    };
  },
  methods: {
    // 上传图片
    async uploaded(img) {
      const formData = new FormData();
      formData.append('file', img);
      const data = await file(formData);
      this.$emit('fileData', data);
    },
    readImg(files, content) {
      // 预览图片
      const img = {};
      img.src = require('@/assets/word.png');
      img.name = files.file.name;
      this.imgList.push(img);
      this.uploaded(files.file);
    },
    deleteImg() {
    },
  },
};
</script>
<style lang="scss" scoped>
  .upload {
    .upimg {
      width: 50px;
      height: 50px;
    }
    .close {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #fff;
      border-radius: 8px;
    }
    .imgTitle {
      display: inline-block;
      margin-left: 20px;
    }
    ul {
      background-color: #fff;
      li {
        padding: 15px;
        position: relative;
        display: flex;
        align-items: center;
      }
    }
    .pos{
      width: 50px;
      height: 50px;
      text-align: center;
      span{
        background: #e7e7ea;
        color:#fff;
        padding: 0 12px;
        font-size: 45px;
      }
    }
  }
</style>
