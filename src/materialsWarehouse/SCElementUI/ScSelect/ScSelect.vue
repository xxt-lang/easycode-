<template>
  <el-select
      v-bind="propValue.attributes"
      v-model="modelValue"
      :filter-method = "filterMethodValue"
      :remote-method="remoteMethodValue"
      @change = "changeMethod"
      @visiblechange = "visiblechangeMethod"
      @removetag = "removetagMethod"
      @clear = "clearMethod"
      @blur = "blurMethod"
      @focus = "focusMethod"
  >
    <el-option
        v-for="item in optionValue"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-Select>
</template>
<script>
import {getPageData, setPageData,execMethod} from "@/utils/core";
export default {
  name: "ScSelect",
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
    "modelValue": {
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['modelValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['modelValue'],value,this.EcVue)
      }
    },
    "filterMethodValue": {
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['filter-method-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['filter-method-bindValue'],value,this.EcVue)
      }
    },
    "remoteMethodValue":{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['remote-method-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['remote-method-bindValue'],value,this.EcVue)
      }
    },
    "optionValue":{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['option-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['option-bindValue'],value,this.EcVue)
      }
    }
  },
  methods: {
    changeMethod(val){
      if(execMethod(this.propValue.events["change"],this.EcVue)){
        this.EcVue[this.propValue.events["change"]](val)
      }
    },
    visiblechangeMethod(val){
      if(execMethod(this.propValue.events["visiblechange"],this.EcVue)){
        this.EcVue[this.propValue.events["visiblechange"]](val)
      }
    },
    removetagMethod(val){
      if(execMethod(this.propValue.events["removetag"],this.EcVue)){
        this.EcVue[this.propValue.events["removetag"]](val)
      }
    },
    clearMethod(){
      if(execMethod(this.propValue.events["clear"],this.EcVue)){
        this.EcVue[this.propValue.events["clear"]]
      }
    },
    blurMethod(e){
      if(execMethod(this.propValue.events["blur"],this.EcVue)){
        this.EcVue[this.propValue.events["blur"]](e)
      }
    },
    focusMethod(){
      if(execMethod(this.propValue.events["focus"],this.EcVue)){
        this.EcVue[this.propValue.events["focus"]](e)
      }
    },

  }
}
</script>
<style scoped>

</style>
