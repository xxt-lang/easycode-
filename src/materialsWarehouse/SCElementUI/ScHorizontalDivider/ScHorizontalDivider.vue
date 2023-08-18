<template>
    <el-divider
         v-bind="propValue.attributes"

        >
    </el-divider>
</template>
<script>
export default {
  name: "ScHorizontalDivider",
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
