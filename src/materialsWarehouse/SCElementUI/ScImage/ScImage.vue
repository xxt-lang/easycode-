<template>
    <el-image
        :preview-src-list="previewSrcListBindValue"
         v-bind="propValue.attributes"
          @load = "loadMethod"
          @error = "errorMethod"
          @switch = "switchMethod"
          @close = "closeMethod"
          @show = "showMethod"
        >
    </el-image>
</template>
<script>
import {getPageData, setPageData,execMethod} from "@/utils/core";


export default {
  name: "ScImage",
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
    previewSrcListBindValue: {
      get(){
        return getPageData(this.propValue.attributes['preview-src-list-bindValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['preview-src-list-bindValue'],value,this.EcVue)
      }
    }
  },
  methods: {
       loadMethod(e){
            if(execMethod(this.propValue.events["load"],this.EcVue)){
                this.EcVue[this.propValue.events["load"].method](e)
            }
        },
       errorMethod(e){
            if(execMethod(this.propValue.events["error"],this.EcVue)){
                this.EcVue[this.propValue.events["error"].method](e)
            }
        },
       switchMethod(index){
            if(execMethod(this.propValue.events["switch"],this.EcVue)){
                this.EcVue[this.propValue.events["switch"].method](index)
            }
        },
       closeMethod(){
            if(execMethod(this.propValue.events["close"],this.EcVue)){
                this.EcVue[this.propValue.events["close"].method]()
            }
        },
       showMethod(){
            if(execMethod(this.propValue.events["show"],this.EcVue)){
                this.EcVue[this.propValue.events["show"].method]()
            }
        },
  }
}
</script>
<style scoped>

</style>
