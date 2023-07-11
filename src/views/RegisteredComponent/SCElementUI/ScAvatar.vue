<template>
  <el-avatar
      v-bind ="propValue.attributes"
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
