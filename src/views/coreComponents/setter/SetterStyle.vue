<template>
  <div v-show="setterStyles">
    <el-input
        type="textarea"
        @input="printCss"
        v-model="css"
    ></el-input>
  </div>
</template>
<script>
import {analysisCssText, getComponentSetter, getStore, objectToCss} from "../../../utils/core";
import eventBus from "../../../utils/eventBus";
export default {
  name: "SetterStyle",
  props:{
    setterStyles:{
      type:Object,
      default:()=>{
        return null
      }
    },
    setterData:{
      type:Object,
      default:()=>{
        return {}
      }
    },
    configuration:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  data(){
    return{
      css:''
    }
  },
  mounted() {
    let that = this
    eventBus.on("dbComponent",()=>{
      that.css = objectToCss(getStore("SimpleStore").selectPlate[0].styles)
    })
  },
  methods:{
    objectToCss,
    printCss(){
      this.setterData.styles = analysisCssText(this.css)
    }
  }
}
</script>

<style scoped>

</style>
