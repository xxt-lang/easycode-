<template>
    <el-rate
        v-model="value"
        v-bind = "propValue.attributes"
        @change = "change"
    />
</template>

<script>
import {execMethod, getPageData, setPageData} from "../../../utils/core";

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
    input:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['value'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['value'],value,this.EcVue)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    change(){
      execMethod('change',this.propValue.events,this.EcVue)
    }
  }
}
</script>

<style scoped>

</style>
