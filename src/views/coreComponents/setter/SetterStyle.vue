<template>
<div>
  <el-input
      type="textarea"
      @blur="printCss"
      v-model="css"
      autosize
      :minRows="6">{}</el-input>
</div>
</template>
<script>
import {analysisCssText} from "../../../utils/core";

export default {
  name: "SetterStyle",
  props:{
    setterStyles:{
      type:Array,
      default:()=>{
        return null
      }
    },
    data:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  data(){
    return{
      css:""
    }
  },
  methods:{
    printCss(){
       analysisCssText(this.data.styles,this.css)
    }
  }
}
</script>

<style scoped>

</style>
