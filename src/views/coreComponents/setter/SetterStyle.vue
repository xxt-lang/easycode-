<template>
  <div v-show="setterStyles">
    <el-button @click="printCss">保存</el-button>
    <VMonacoEditor v-model="css" language="css" key="css" height="30vh"></VMonacoEditor>
    <!--    加载自定义属性设置组件-->
    <component v-for="(item,index) in configuration.setterStyles"
               :is="item.component"
               :params="{setterData:setterData,param:item.param}"
               :key = "index"
    ></component>
  </div>
</template>
<script>
import {analysisCssText, getComponentSetter, getStore, objectToCss} from "../../../utils/core";
import eventBus from "../../../utils/eventBus";
import VMonacoEditor from "../VMonacoEditor.vue";
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
  components:{
    VMonacoEditor
  },
  data(){
    return{
      css:''
    }
  },
  mounted() {
    let that = this
    eventBus.on("dbComponent",()=>{
      that.css = `.main{${objectToCss(getStore("SimpleStore").selectPlate[0].styles)}}`
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
