<template>
  <el-row>
    <el-col :span="12"> <Container
        key="editorContainer"
        :container="{
              id:propValue.children[0].id,
              featherId:propValue.featherId
              ,children:propValue.children[0].children,
              componentId:propValue.id,
              index:index}"
        :containerStyles = "containerStyles"
    ></Container></el-col>
    <el-col :span="12">
      <Container
          key="editorContainer"
          :container="{
              id:propValue.children[1].id,
              featherId:propValue.featherId
              ,children:propValue.children[1].children,
              componentId:propValue.id,
              index:index}"
          :containerStyles = "containerStyles"
      ></Container>
    </el-col>
  </el-row>
</template>

<script>
import Container from "../coreComponents/Container.vue";
export default {
  name: "ScRow",
  components:{
    Container
  },
  props: {
    propValue: {
      type: Object,
      default: function () {
        return {}
      }
    },
    index:{
      type: Number,
    }
  },
  data(){
    return {
      containerStyles:{}
    }
  },
}
</script>

<style scoped>

</style>
