<template>
  <el-slider v-model="value" :style="getComponentStyle(isPreview,propValue.styles)"/>
</template>

<script>
import {getComponentStyle} from "../../utils/core";

export default {
  name: "ScSlider",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    },
  },
  data() {
    return {
      value:20
    }
  },

  methods: {
    getComponentStyle
  }
}
</script>

<style scoped>

</style>
