<template>
  <div>
    <div v-show = "setterEvents">
<!--      是否启用方法-->
      <el-switch></el-switch>
<!--      事件方法名称-->
<!--      方法参数-->
<!--      方法内容-->
    </div>
  </div>
</template>

<script>
export default {
  name: "SetterEvent",
  props:{
    setterData:{
      type:Object,
      default:()=>{
        return {}
      }
    },
    setterEvents:{
      // 组件对应数组的参数，通过
      type:Object,
      default:()=>{
        return {}
      }
    }

  }
}
</script>

<style scoped>

</style>
