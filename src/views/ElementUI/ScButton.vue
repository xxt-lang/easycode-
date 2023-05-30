<template>
  <el-button
      :type="propValue.attribute.type" @click="submit">{{ propValue.attribute.name }}
  </el-button>
</template>
<script>

export default {
  name: "ScButton",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    submit() {
    }
  }
}
</script>
<style scoped>

</style>
