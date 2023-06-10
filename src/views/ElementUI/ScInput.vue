<template>
  <el-input
            :style="getComponentStyle(propValue.styles)"
            v-model="input"
            :placeholder="propValue.attributes.placeholder"
            :type="propValue.attributes.type"/>
</template>
<script>
import {ElInput} from 'element-plus'
import {getComponentStyle} from "../../utils/core";
export default {
  name: 'ScInput',
  components: {ElInput},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    getComponentStyle
  }
}
</script>
<style scoped>

</style>
