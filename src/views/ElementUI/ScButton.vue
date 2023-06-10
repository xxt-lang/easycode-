<template>
  <el-button
      :style="getComponentStyle(propValue.styles)"
      :type="propValue.attributes.type"
      :size="propValue.attributes.size"
      :plain="propValue.attributes.plain"
      :round="propValue.attributes.round"
      :disabled="propValue.attributes.disabled"
      @click="propValue.events['click'](18,'hello')">{{ propValue.attributes.label }}
  </el-button>
</template>
<script>
import {getComponentStyle} from "../../utils/core";
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
    getComponentStyle
  }
}
</script>
<style scoped>

</style>
