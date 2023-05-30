<template>
<div class = "leftBarMain">
  <button>
   大纲树
  </button>
  <button @click="openComponentList()">
    组件
  </button>
  <LeftToolContent :leftToolBarActive="leftToolBarActive">
    <ComponentGroup @changeLeftToolBarActive = "leftToolBarActive = $event"/>
  </LeftToolContent>
</div>
</template>

<script>
import LeftToolContent from "./LeftToolContent.vue";
import ComponentGroup from "../coreComponents/ComponentGroup.vue";
export default {
  name: "LeftBar",
  components:{LeftToolContent,ComponentGroup},
  data(){
    return {
      ocStats:false,
      leftToolBarActive: false
    }
  },
  methods:{
    // oc openComponent
    openComponentList(){
      this.ocStats = !this.ocStats
      this.leftToolBarActive = !this.leftToolBarActive
    }
  }
}
</script>

<style scoped>
.leftBarMain{
  display: grid;
}
</style>
