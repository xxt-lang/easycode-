<template>
  <el-avatar
             :size="propValue.attributes['size']"
             :fit="propValue.attributes['fit']"
             :icon ="propValue.attributes['icon']"
             :alt = "propValue.attributes['alt']"
             :src-set = "propValue.attributes['src-set']"
             :shape = "propValue.attributes['shape']"
             :src="propValue.attributes['src']"
  />
</template>

<script>
export default {
  name: "ScAvatar",
  props:{
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
  }

}
</script>

<style scoped>

</style>
