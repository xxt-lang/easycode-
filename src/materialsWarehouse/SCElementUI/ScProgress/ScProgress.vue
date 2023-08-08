<template>
    <el-progress
          v-bind="propValue.attributes"
          :percentage="percentageValue"
          :format="formatValue"
          :color="colorValue"
        >
    </el-progress>
</template>
<script>
import {getPageData, setPageData} from "@/utils/core";
export default {
  name: "ScProgress",
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
    percentageValue: {
      get(){
        return getPageData(this.propValue.attributes['percentage-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['percentage-bindValue'],value,this.EcVue)
      }
    },
    formatValue: {
      get(){
        return getPageData(this.propValue.attributes['format-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['format-bindValue'],value,this.EcVue)
      }
    },
    colorValue: {
      get(){
        return getPageData(this.propValue.attributes['color-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['color-bindValue'],value,this.EcVue)
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
