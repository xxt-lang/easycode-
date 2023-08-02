<template>
  <el-checkbox
      v-bind="propValue.attributes"
      v-model="checkboxValue"
      @change = "changeMethod"
  >
    {{ propValue.attributes.labelText}}
  </el-checkbox>
</template>
<script>
import {getPageData, setPageData,execMethod} from "@/utils/core";
export default {
  name: "ScCheckbox",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  computed:{
    "checkboxValue": {
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes["modelValue"],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes["modelValue"],value,this.EcVue)
      }
    }
  },
  methods: {
    changeMethod(val){
      if(execMethod(this.propValue.events["change"],this.EcVue)){
        this.EcVue[this.propValue.events["change"]](val)
      }
    },
  }
}
</script>
<style scoped>

</style>
