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
  computed:{
    input:{
      get(){
        // 绑定事件监听
        return this.getPageData(this.propValue.attributes['value'],this.isPreview)
      },
      set(){

      }
    }
  },
  data() {
    return {
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
