<template>
<div class = "leftBarMain">
  <el-button round @click="openTool('page')" type="primary" class = "tool-item" size="small">页面</el-button>
  <el-button  round @click="openTool('componentList')"  type="primary" class = "tool-item" size="small">组件</el-button >
<!--  <el-button  round @click="openTool('dataSource')"  type="primary" class = "tool-item" size="small">数据源</el-button >-->
  <el-drawer v-model="leftToolBarActive"  direction="ltr"  size="30%">
    <ComponentGroup @changeLeftToolBarActive = "leftToolBarActive = $event" v-show="toolName==='componentList'" @update:leftToolBarActive = "leftToolBarActive = $event"/>
    <PageTree v-show="toolName==='page'" @update:leftToolBarActive = "leftToolBarActive = $event"></PageTree>
  </el-drawer>
</div>
</template>

<script>
import ComponentGroup from "./ComponentGroup.vue";
import PageTree from "./PageTree.vue";

export default {
  name: "LeftBar",
  components:{PageTree,ComponentGroup},
  data(){
    return {
      leftToolBarActive: false,
      toolName:''
    }
  },
  methods:{
    openTool(value){
      this.toolName = value
      this.leftToolBarActive = !this.leftToolBarActive
    },
  }
}
</script>

<style scoped>
.leftBarMain{
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
}
.tool-item{
  margin: 5px;
}
:deep(.el-overlay ){
  background-color:transparent;
  transition-duration: 100ms;
}
</style>
