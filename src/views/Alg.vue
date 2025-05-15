<template>
  <div>
    <h1>排序</h1>
    <el-divider />
    <el-input v-model="input1" style="width: 240px"></el-input>
    <el-button>sort</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input1 = ref('')
</script>

<style scoped></style>
