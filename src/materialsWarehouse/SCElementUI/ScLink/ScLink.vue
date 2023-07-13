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
  mounted() {
    this.EcVue.$refs[this.propValue.attributes['ref'] ] = this.$refs[this.propValue.attributes['ref'] ]
  },
  methods:{
    click(){
      execMethod('click',this.propValue.events,this.EcVue)
    }
  }

}
</script>

<style scoped>

</style>
