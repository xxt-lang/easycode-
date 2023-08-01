<template>
  <el-link
      v-bind = "propValue.attributes"
      @click="click"
  >{{propValue.attributes['label']}}</el-link>
</template>
<script>
import {execMethod} from "@/utils/core";
export default {
  name: "ScLink",
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
  methods:{
    click(){
      if(execMethod(this.propValue.events['click'],this.EcVue)){
        this.EcVue[this.propValue.events['click'].method]()
      }
    }
  }

}
</script>

<style scoped>

</style>
