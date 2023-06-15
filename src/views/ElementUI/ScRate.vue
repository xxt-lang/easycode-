<template>
  <div :style="getComponentStyle(propValue.styles)">
    <el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" ></el-rate>
  </div>
</template>

<script>
import {getComponentStyle} from "../../utils/core";
export default {
  name: "ScRate",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {
      value:5
    }
  },
  methods: {
    getComponentStyle
  }
}
</script>

<style scoped>

</style>
