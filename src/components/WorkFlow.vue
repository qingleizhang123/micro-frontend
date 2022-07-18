<template>
  <div class="container">
    <div class="header">
      <ul>
        <li v-for="item in wotkflowStep" :key="item.name" @click="onChangeWorkflow(item.path)">{{ item.name }}</li>
      </ul>
    </div>
    <div id="micro-app"></div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const wotkflowStep = [
  { name: '患者管理', path: '/' },
  { name: '规划调整', path: '/subapp1/' },
  { name: '导航定位', path: '/digitalRack/' }
]

const onChangeWorkflow = (step: number) => {
  router.push(step)
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 70px;
    padding: 10px 0;
    background-color: #14171d;
    color: #ffffff;
    ul,
    li {
      display: inline-block;
    }
    ul {
      border: 2px solid #3f3f4b;
    }
    li {
      height: 50px;
      line-height: 50px;
      text-align: center;
      width: 200px;
    }
    li:not(:last-child) {
      border-right: 2px solid #3f3f4b;
    }
  }
  #micro-app {
    flex: 1;
  }
}

</style>
