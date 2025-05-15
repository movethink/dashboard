<template>
  <div>
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
      <el-sub-menu index="js">
        <template #title>
          <el-icon><location /></el-icon>
          <span>js</span>
        </template>
        <el-menu-item index="alg" route="/alg">算法</el-menu-item>
        <el-menu-item index="vue" route="/vue">vue学习</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="dashboard" route="/dashboard">
        <el-icon><icon-menu /></el-icon>
        <span>Dashboard</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Location } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { computed, watch, ref } from 'vue'

const route = useRoute()
console.log(route, 'route route.name')
const currentRoutePath = computed(() => {
  return route.path.split('/')[1]
})

watch(currentRoutePath, (val) => {
  console.log(val, 'watch currentRoutePath')
})

console.log(currentRoutePath.value, 'currentRoutePath')

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
