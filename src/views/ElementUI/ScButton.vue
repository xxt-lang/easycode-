<template>
  <el-button
      :type="propValue.attribute.type"
      :size="propValue.attribute.size"
      :plain="propValue.attribute.plain"
      :round="propValue.attribute.round"
      :disabled="propValue.attribute.disabled"
      @click="submit">{{ propValue.attribute.label }}
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
