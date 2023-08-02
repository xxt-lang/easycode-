<template>
  <el-radio
      v-bind="propValue.attributes"
      v-model="radioValue"
      @change = "changeMethod"
  >
    {{ propValue.attributes.labelText}}
  </el-radio>
</template>
<script>
import {getPageData, setPageData,execMethod} from "@/utils/core";
export default {
  name: "ScRadio",
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
    "radioValue": {
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes["radioValue"],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes["radioValue"],value,this.EcVue)
      }
    }
  },
  methods: {
    changeMethod(val){
      execMethod(this.propValue.events["change"],this.EcVue)(val)
    },
  }
}
</script>
<style scoped>

</style>
