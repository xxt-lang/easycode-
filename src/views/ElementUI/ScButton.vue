<template>
    <el-button
        :style="getComponentStyle(isPreview,propValue.styles)"
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
    },
    isPreview:{
      type: Boolean,
      default:false
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
