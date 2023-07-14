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
        return getPageData(this.propValue.attributes['sliderValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['sliderValue'],value,this.EcVue)
      }
    },
    marksValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['marksValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['marksValue'],value,this.EcVue)
      }
    },
    formatTooltipValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['formatTooltipValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['formatTooltipValue'],value,this.EcVue)
      }
    },
    formatValueTextValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['formatValueTextValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['formatValueTextValue'],value,this.EcVue)
      }
    },
  },
  methods: {
    changeMethod(val){
      execMethod(this.propValue.events['change'],this.EcVue)(val)
    },
    inputMethod(val){
      execMethod(this.propValue.events['input'],this.EcVue)(val)
    }
  }
}
</script>

<style scoped>

</style>
