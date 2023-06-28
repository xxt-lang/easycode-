<template>
<el-switch
    v-model="value"
    :style = "getComponentStyle(propValue.styles)"
    :loading = "propValue.attributes['loading']"
    :disabled = "propValue.attributes['disabled']"
    :size = "propValue.attributes['size']"
    :width = "propValue.attributes['width']"
    :active-text = "propValue.attributes['active-text']"
    :inactive-textt= "propValue.attributes['inactive-textt']"

></el-switch>
</template>

<script>
import {getComponentStyle} from "../../../utils/core";

export default {
  name: "ScSwitch",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
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
