<template>
  <el-avatar
      v-bind ="propValue.attributes"
      @error = "errorMethod"
  />
</template>

<script>
import {execMethod} from "@/utils/core";

export default {
  name: "ScAvatar",
  props:{
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
  methods: {
    errorMethod(){
      if(execMethod(this.propValue.events['error'])){
        this.EcVue[this.propValue.events['error'].method]()
      }
    }
  }

}
</script>

<style scoped>

</style>
