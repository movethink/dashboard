<template>
  <div>
    <h1>排序</h1>
    <el-divider />
    <el-input v-model="inputVal" style="width: 240px"></el-input>
    <p style="padding: 10px 0"></p>
    <el-button type="primary" @click="reset">reset</el-button>
    <el-button @click="sort('selectionL')">排序</el-button>
    <el-button @click="sort('selection')">选择排序</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const initVal = () => {
  return [5, 4, 6, 9, 2, 3, 7, 1, 8]
}
const inputVal = ref<number[]>(initVal())

const sort = (type: string) => {
  switch (type) {
    case 'selectionL':
      selectionLSort(inputVal.value)
      break
    case 'selection':
      selectionSort(inputVal.value)
      break
  }
}

/**
 * 有缺陷选择排序
 * @param list
 */
const selectionLSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i; j < list.length; j++) {
      if (list[i] > list[j]) {
        swap(list, i, j)
      }
    }
  }
  return list
}

/**
 * 标准选择排序
 * @param list
 */
const selectionSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i
    for (let j = i; j < list.length; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j
      }
    }
    swap(list, i, minIndex)
  }
  return list
}

const swap = (list: number[], i: number, j: number) => {
  const c = list[i]
  list[i] = list[j]
  list[j] = c
}

const reset = () => {
  inputVal.value = initVal()
}
</script>

<style scoped></style>
