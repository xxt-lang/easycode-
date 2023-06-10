<template>
  <el-rate v-model="propValue.attributes.value" :colors="propValue.attributes.colors" :style="getComponentStyle(propValue.styles)"/>
</template>

<script>
import {ElRate} from 'element-plus'
import {getComponentStyle} from "../../utils/core";
export default {
  name: "ScRate",
  components: {ElRate},
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
