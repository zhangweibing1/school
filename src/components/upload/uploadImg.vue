<template>
  <div class="upload">
    <ul>
      <li v-for="(img, index) in imgList" :key="index">
        <img class="upimg" :src="img.src" alt="">
        <van-icon name="close" class="close" @click="deleteImg(index)"/>
        <van-progress :percentage="step" :show-pivot="false" v-if="step"/>
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
import { uploadFile } from '@/services/api';

export default {
  name: 'upload-img',
  data() {
    return {
      step: 0,
      imgUrl: '',
      imgList: [],
    };
  },
  methods: {
    // 上传图片
    async uploaded(img, imgData) {
      const config = {
        onUploadProgress: (progressEvent) => {
          const complete = (progressEvent.loaded / progressEvent.total) * 100 || 0;
          this.step = complete;
        },
      };
      const formData = new FormData();
      formData.append('file', img);
      const data = await uploadFile(formData, config);
      if (data && (data.httpCode === 200 || '200')) {
        this.imgList.push(imgData);
        this.$emit('imgData', data.data);
      } else {
        this.$toast('网络错误，请重新上传！');
      }
    },
    readImg(files, content) {
      // 预览图片
      const img = {};
      img.src = window.URL.createObjectURL(files.file);
      img.onload = function onload() {
        window.URL.revokeObjectURL(this.src);
      };
      img.name = files.file.name;
      this.uploaded(files.file, img);
    },
    deleteImg(index) {
      this.imgList.splice(index, 1);
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
    ul {
      background-color: #fff;
      overflow: hidden;
      li {
        float: left;
        margin: 15px;
        position: relative;
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
