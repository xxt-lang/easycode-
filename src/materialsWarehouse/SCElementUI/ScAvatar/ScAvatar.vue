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
      execMethod(this.propValue.events['error'],this.EcVue)()
    }
  }

}
</script>

<style scoped>

</style>
