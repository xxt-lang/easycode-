<template>
    <el-input
        v-bind = "propValue.attributes"
        v-model="inputValue"
        @change="changeMethod"
        @blur = "blurMethod"
        @focus="focusMethod"
        @input="inputMethod"
        @clear="clearMethod"
    />
</template>
<script>
import { getPageData, setPageData,execMethod} from "@/utils/core";
export default {
  name: 'ScInput',
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
    inputValue: {
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['inputValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['inputValue'],value,this.EcVue)
      }
    }
  },
  methods: {
    changeMethod(val){
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method](val)
      }
    },
    blurMethod(val){
      if(execMethod(this.propValue.events['blur'],this.EcVue)){
        this.EcVue[this.propValue.events['blur'].method](val)
      }
    },
    focusMethod(val){
      if(execMethod(this.propValue.events['focus'],this.EcVue)){
        this.EcVue[this.propValue.events['focus'].method](val)
      }
    },
    inputMethod(val){
      if(execMethod(this.propValue.events['input'],this.EcVue)){
        this.EcVue[this.propValue.events['input'].method](val)
      }
    },
    clearMethod(){
      if(execMethod(this.propValue.events['clear'],this.EcVue)){
        this.EcVue[this.propValue.events['clear'].method]()
      }
    }
  }
}
</script>
<style scoped>

</style>
