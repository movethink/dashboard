<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/views/Menu.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  nav {
    display: flex;
    gap: 8px;
  }
}
</style>
