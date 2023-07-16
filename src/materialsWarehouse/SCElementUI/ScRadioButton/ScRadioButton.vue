<template>
  <el-radio-group v-model="radio1" size="large">
    <el-radio-button label="New York" />
    <el-radio-button label="Washington" />
    <el-radio-button label="Los Angeles" />
    <el-radio-button label="Chicago" />
  </el-radio-group>
</template>

<script>
export default {
  name: "ScRadioButton",
  props:{
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  }

}
</script>

<style scoped>

</style>
