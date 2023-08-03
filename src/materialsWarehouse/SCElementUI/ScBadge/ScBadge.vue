<template>
  <el-badge
      v-bind="propValue.attributes"
      v-container = "propValue"
  >
    <Container
        :children="propValue.children"
        :isPreview = "isPreview"
        :EcVue = "EcVue"
    ></Container>
  </el-badge>
</template>

<script>
import Container from "@/views/coreComponents/Container.vue";
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
    isPreview:{
      type: Boolean,
      default:false
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
}
</script>

<style scoped>

</style>
