<template>
  <el-card >
    <Container
        key="editorContainer"
        :container="propValue"
        :containerIndex = "index"
    ></Container>
  </el-card>
</template>

<script>
import Container from "../coreComponents/Container.vue";

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
  }
}
</script>

<style scoped>
</style>
