<template>
<div class = "leftBarMain">

  <el-button round @click="openTool('page')" type="primary" class = "tool-item">页面</el-button>
  <el-button  round @click="openTool('componentList')"  type="primary" class = "tool-item">组件</el-button >
  <LeftToolContent :leftToolBarActive="leftToolBarActive" style="width:400px;padding:5px">
    <ComponentGroup @changeLeftToolBarActive = "leftToolBarActive = $event" v-show="toolName==='componentList'" @update:leftToolBarActive = "leftToolBarActive = $event"/>
    <PageTree v-show="toolName==='page'" @update:leftToolBarActive = "leftToolBarActive = $event"></PageTree>
  </LeftToolContent>
</div>
</template>

<script>
import LeftToolContent from "./LeftToolContent.vue";
import ComponentGroup from "./ComponentGroup.vue";
import PageTree from "./PageTree.vue";

export default {
  name: "LeftBar",
  components:{PageTree, LeftToolContent,ComponentGroup},
  data(){
    return {
      leftToolBarActive: false,
      toolName:''
    }
  },
  methods:{
    // oc openComponent
    openTool(value){
      this.toolName = value
      this.leftToolBarActive = !this.leftToolBarActive
    },
  }
}
</script>

<style scoped>
.leftBarMain{
  display: grid;
}
.tool-item{
  margin: 5px;
}
</style>
