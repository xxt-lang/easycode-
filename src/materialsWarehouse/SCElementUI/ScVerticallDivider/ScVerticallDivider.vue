<template>
    <el-divider
         v-bind="propValue.attributes"
         direction="vertical"
        >
    </el-divider>
</template>
<script>
export default {
  name: "ScVerticallDivider",
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
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
