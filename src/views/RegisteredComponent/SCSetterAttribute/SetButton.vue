<template>
  <div>
    自定义设置器round<el-switch v-model="params.setterData.attributes['round']"></el-switch>
  </div>
</template>

<script>
export default {
  name: "SetButton",
  props:{
    params:{
      type:Object,
      default:()=>{return {}}
    }
  }
}
</script>

<style scoped>

</style>
