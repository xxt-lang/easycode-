<template>
  <el-badge
      :value = "propValue.attributes['value']"
      :max = "propValue.attributes['max']"
      :is-dot="propValue.attributes['is-dot']"
      :hidden = "propValue.attributes['hidden']"
      :type="propValue.attributes['type']"
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
  </el-badge>
</template>

<script>
import Container from "../coreComponents/Container.vue";
export default {
  name: "ScBadge",
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
}
</script>

<style scoped>

</style>
