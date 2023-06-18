<script>
</script>

<template>
  <router-view v-slot="{Component }">
    <keep-alive>
      <component :is="Component "></component>
    </keep-alive>
  </router-view>
</template>

<style scoped>
</style>
