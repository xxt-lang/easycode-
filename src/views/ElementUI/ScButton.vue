<template>
  <el-button
      :style="propValue.styles"
      :type="propValue.attributes.type"
      :size="propValue.attributes.size"
      :plain="propValue.attributes.plain"
      :round="propValue.attributes.round"
      :disabled="propValue.attributes.disabled"
      @click="submit">{{ propValue.attributes.label }}
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
