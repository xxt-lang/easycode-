<template>
  <el-card :style="propValue.styles" :header="propValue.attributes['header']" :shadow="propValue.attributes['shadow']">
    <Container
        key="editorContainer"
        :container="{type:propValue.type,id:propValue.id,featherId:propValue.featherId,children:propValue.children}"
        :containerIndex = "index"
        :containerStyles = "containerStyles"
    ></Container>
  </el-card>
</template>

<script>
import Container from "../coreComponents/Container.vue";
// 样式分为容器上的样式与当前组件的样式
export default {
  name: "ScCard",
  components: {Container},
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
  mounted() {
  }
}
</script>

<style scoped>
::v-deep(.el-card) {
  padding: 0;
}
</style>
