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
      execMethod(this.propValue.events['change'],this.EcVue)(val)
    },
    blurMethod(val){
      execMethod(this.propValue.events['blur'],this.EcVue)(val)
    },
    focusMethod(val){
      execMethod(this.propValue.events['focus'],this.EcVue)(val)
    },
    inputMethod(val){
      execMethod(this.propValue.events['input'],this.EcVue)(val)
    },
    clearMethod(){
      execMethod(this.propValue.events['clear'],this.EcVue)
    }
  }
}
</script>
<style scoped>

</style>
