<template>
  <el-color-picker v-model = "value" ></el-color-picker>
</template>

<script>
export default {
  name: "ScColorPicker",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {
      value:'',
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
