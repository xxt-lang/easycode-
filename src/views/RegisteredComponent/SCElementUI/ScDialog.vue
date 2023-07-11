<template>
  <div>
    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="40%"
        v-container="propValue"
    >
      <Container
          key="editorContainer"
          :children="propValue.children"
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
