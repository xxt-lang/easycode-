<template>
  <div v-show="setterStyles">

    <div class="setterAttribute">
      <span class="itemLabel">绑定class </span>
      <div class="itemContent">
        <el-input v-model="setterData.bindClass" placeholder="输入对应的class选择器" @blur="blur"/>
      </div>
    </div>
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
import {analysisCssText, getStore, objectToCss} from "../../../utils/core";
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
    },
  },
  components:{
    VMonacoEditor
  },
  data(){
    return{
      css:'',
    }
  },
  mounted() {
    let that = this
    eventBus.on("dbComponent",()=>{
      that.css = `.main{${objectToCss(getStore("SimpleStore").selectPlate[0].styles)}}`
    })
  },
  methods:{
    printCss(){
      this.setterData.styles = analysisCssText(this.css)
    },
  }
}
</script>

<style scoped>
.itemLabel{
  display: inline-flex;
  width: 70px;
  font-size: 13px;
  font-weight: 500;
  transition: color .5s;
  text-align: center;
  transition: color .5s;
}
.itemContent{
  display: inline-flex;
  width: 170px
}
</style>
