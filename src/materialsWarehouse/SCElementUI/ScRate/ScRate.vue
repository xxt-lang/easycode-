<template>
    <el-rate
        v-model="rateValue"
        v-bind = "propValue.attributes"
        @change = "change"
    />
</template>

<script>
import {execMethod, getPageData, setPageData} from "@/utils/core";

export default {
  name: "ScRate",
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
    rateValue:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['rateValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['rateValue'],value,this.EcVue)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    change(){
      if(execMethod(this.propValue.events['change'],this.EcVue)){
        this.EcVue[this.propValue.events['change'].method]()
      }
    }
  }
}
</script>

<style scoped>

</style>
