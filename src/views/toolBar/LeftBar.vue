<template>
<div class = "leftBarMain">
  <button @click="openTool('page')">
   页面
  </button>
  <button @click="openTool('componentList')">
    组件
  </button>
  <LeftToolContent :leftToolBarActive="leftToolBarActive" style="width:300px">
    <ComponentGroup @changeLeftToolBarActive = "leftToolBarActive = $event" v-show="toolName==='componentList'" @update:leftToolBarActive = "leftToolBarActive = $event"/>
    <PageTree v-show="toolName==='page'" @update:leftToolBarActive = "leftToolBarActive = $event"></PageTree>
  </LeftToolContent>
</div>
</template>

<script>
import LeftToolContent from "./LeftToolContent.vue";
import ComponentGroup from "../coreComponents/ComponentGroup.vue";
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
</style>
