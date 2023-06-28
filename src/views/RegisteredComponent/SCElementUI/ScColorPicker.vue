<template>
  <el-color-picker v-model = "value" :style="getComponentStyle(isPreview,propValue.styles)"></el-color-picker>
</template>

<script>
import {getComponentStyle} from "../../../utils/core";

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
      isPreview:{
        type: Boolean,
        default:false
      }
    }
  },
  methods: {
    getComponentStyle
  }
}
</script>

<style scoped>

</style>
