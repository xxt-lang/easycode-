<template>
    <el-slider v-model="value" />
</template>

<script>

export default {
  name: "ScSlider",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
  },
  data() {
    return {
      value:20
    }
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
