<template>
    <el-rate v-model="value" :style="getComponentStyle(isPreview,propValue.styles)"/>
</template>

<script>
import {getComponentStyle} from "../../../utils/core";
export default {
  name: "ScRate",
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
    return {
      value:null
    }
  },
  methods: {
    getComponentStyle
  }
}
</script>

<style scoped>

</style>
