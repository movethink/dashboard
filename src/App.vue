<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

console.log(route, 'route')
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/">画布</RouterLink>
        <RouterLink to="/about">配置</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.wrapper {
  nav {
    display: flex;
    gap: 8px;
  }
}
</style>
