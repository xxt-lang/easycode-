<template>
    <el-slider v-model="sliderValue"
               v-bind="propValue.attributes"
               :marks="marksValue"
                :format-tooltip="formatTooltipValue"
    :format-value-text="formatValueTextValue"
    @change="changeMethod"
    @input="inputMethod"/>
</template>

<script>
import { getPageData, setPageData,execMethod} from "@/utils/core";
export default {
  name: "ScSlider",
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
    sliderValue: {
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['modelValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['modelValue'],value,this.EcVue)
      }
    },
    marksValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['marks-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['marks-bindValue'],value,this.EcVue)
      }
    },
    formatTooltipValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['formatTooltip-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['formatTooltip-bindValue'],value,this.EcVue)
      }
    },
    formatValueTextValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['formatTooltip-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['formatTooltip-bindValue'],value,this.EcVue)
      }
    },
  },
  methods: {
    changeMethod(val){
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method](val)
      }
    },
    inputMethod(val){
      if(execMethod(this.propValue.events['input'],this.EcVue)){
        this.EcVue[this.propValue.events['input'].method](val)
      }
    }
  }
}
</script>

<style scoped>

</style>
