<template>
  <el-card :style="getComponentStyle(isPreview,propValue.styles)" :header="propValue.attributes['header']" :shadow="propValue.attributes['shadow']">
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
  </el-card>
</template>

<script>
import Container from "../coreComponents/Container.vue";
import {getComponentStyle} from "../../utils/core";
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
    },
    isPreview:{
      type: Boolean,
      default:false
    },
  },
  data(){
    return {
      containerStyles:{}
    }
  },
  mounted() {
  },
  methods:{
    getComponentStyle
  }
}
</script>

<style scoped>
::v-deep(.el-card__body) {
  padding: 0;
}
::v-deep(.el-card__header) {
  padding: 0;
}
</style>
