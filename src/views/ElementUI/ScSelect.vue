<template>
<el-select v-model="value" :style="getComponentStyle(propValue.styles)"></el-select>
</template>

<script>
import {getComponentStyle} from "../../utils/core";
export default {
  name: "ScSelect",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data(){
    return {
      value:''
    }
  },
  methods: {
    getComponentStyle
  }
}
</script>

<style scoped>

</style>
