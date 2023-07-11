<template>
  <el-badge
      style="min-height: 50px;min-width: 50px"
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
import Container from "../../coreComponents/Container.vue";
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
