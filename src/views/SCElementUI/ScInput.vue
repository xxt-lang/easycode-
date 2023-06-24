<template>
  <div :style="getComponentStyle(isPreview,propValue.styles)">
    <el-input
        v-model="input"
        :placeholder="propValue.attributes.placeholder"
        :type="propValue.attributes.type"/>
  </div>
</template>
<script>
import {ElInput} from 'element-plus'
import {getComponentStyle,getPageData} from "../../utils/core";
export default {
  name: 'ScInput',
  components: {ElInput},
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
      input: this.getPageData(this.propValue.attributes['value'],this.isPreview)
    }
  },
  methods: {
    getPageData,
    getComponentStyle
  }
}
</script>
<style scoped>

</style>
