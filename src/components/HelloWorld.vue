<template>
  <div class="local-import">
    <label class="upload-directory" @dragover="dragOver" @drop="dropForFiles">
      <input type="file" style="display: none" webkitdirectory @change="uploadDirectory" ref="fileInput1" />
      <img src="assets/images/addfolder.svg" alt="icon" />
      <span class="center-text">上传文件夹</span>
      <span class="bottom-text">支持文件/文件夹拖拽导入</span>
    </label>
    <label class="upload-files" @dragover="dragOver" @drop="dropForFiles">
      <input
        type="file"
        style="display: none"
        multiple
        @change="uploadFiles"
        accept=".dcm, .dicom, .stl, .ply"
        ref="fileInput2"
      />
      <img src="assets/images/addfile.svg" alt="icon" />
      <span class="center-text">上传文件</span>
      <span class="bottom-text">支持文件/文件夹拖拽导入</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, defineExpose, inject } from 'vue';
import { message } from 'ant-design-vue';
const importModelVisible = ref(false);
const fileInput1 = ref(null);
const fileInput2 = ref(null);
const virtualBar = ref(null);
const totalNumber = ref(0);
const failedNumber = ref(0);
const filedata = reactive({
  srcfiles: []
});
let fileCount = 0;
let handleCount = 0;
let isFinished = false;
const isShowProgess = false;
const barKey = 0;
const resCode = '';
const loadInfo = {
  cancelUpload: false // 取消上传
};
const maxConcurrentCount = 6;

</script>
<style lang="less" scoped>
:deep(.ant-modal-content) {
  height: 630px !important;
  width: 1000px !important;
}
.ant-modal-body {
  height: 500px !important;
}
.local-import {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .upload-directory,
  .upload-files {
    width: 50%;
    height: 500px;
    border: 1px dashed #323843;
    background-color: #242930;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    img {
      height: 150px;
      margin: 0 auto;
      margin-bottom: 20px;
      flex: 0;
    }
    .center-text {
      flex: 0;
      font-family: MicrosoftYaHei-Bold;
      font-size: 16px;
      color: #9ca4b3;
      text-align: center;
    }
    .bottom-text {
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #9ca4b3;
      text-align: center;
    }
  }
}

.disable {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
