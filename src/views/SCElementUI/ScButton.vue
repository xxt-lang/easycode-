<template>
    <el-button
        :style="getComponentStyle(isPreview,propValue.styles)"
        :type="propValue.attributes.type"
        :size="propValue.attributes.size"
        :plain="propValue.attributes.plain"
        :round="propValue.attributes.round"
        :disabled="propValue.attributes.disabled"
        :circle="propValue.attributes.circle"
        :loading="propValue.attributes.loading"
        :loading-icon="propValue.attributes['loading-icon']"
        :icon = "propValue.attributes['icon']"
        :autofocus = "propValue.attributes['autofocus']"
        :native-type = "propValue.attributes['native-type']"
        :auto-insert-space = "propValue.attributes['auto-insert-space']"
        :color="propValue.attributes['color']"
        :dark = "propValue.attributes['dark']"
        >
      {{ propValue.attributes.label }}
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
