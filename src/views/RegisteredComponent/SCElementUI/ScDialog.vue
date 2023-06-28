<template>
  <div>
    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="40%"
    >
      <Container
          key="editorContainer"
          :container="{
          id:propValue.id,
          featherId:propValue.featherId,
          children:propValue.children,
          componentId:propValue.id,
          index:index,
          status:propValue.status}"
          :container-styles = "propValue.styles"
          :isPreview = "isPreview"
      ></Container>
    </el-dialog>
  </div>
</template>

<script>
import Container from "../../coreComponents/Container.vue";

export default {
  name: "ScDialog",
  components: {Container},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    isPreview:{
      type: Boolean,
      default:false
    },
    index:{
      type: Number,
    },
  },
  data(){
    return {
      dialogVisible:true
    }
  }

}
</script>

<style scoped>
:deep(.el-overlay){
  position: absolute;
}
:deep(.el-overlay-dialog){
  position: absolute;
}
</style>
