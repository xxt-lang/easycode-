<template>
    <el-input
        v-bind = "propValue.attributes"
        v-model="input"
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
    input:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['inputValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['inputValue'],value,this.EcVue)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeMethod(){
      execMethod('change',this.propValue.events,this.EcVue)
    },
    blurMethod(){
      execMethod('blur',this.propValue.events,this.EcVue)
    },
    focusMethod(){
      execMethod('focus',this.propValue.events,this.EcVue)
    },
    inputMethod(){
      execMethod('input',this.propValue.events,this.EcVue)
    },
    clearMethod(){
      execMethod('clear',this.propValue.events,this.EcVue)
    }
  }
}
</script>
<style scoped>

</style>
