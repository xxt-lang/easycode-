<template>
<div>
  设置器
  <div>--------------------</div>
<!--  根据类型配置组件-->
  <setter-attribute :data="data" :setterAttributes="setter.attributes" ></setter-attribute>
  <div>--------------------</div>
  <setter-style :data="data" :setterStyles="setter.styles"></setter-style>
  <slot></slot>
</div>
</template>

<script>
import SetterAttribute from "./SetterAttribute.vue";
import SetterStyle from "./SetterStyle.vue";
export default {
  name: "Setter",
  components: {SetterAttribute,SetterStyle},
  setup() {
    return {
    }
  },
  props:{
    setter:{
      type:Object,
      default:()=>{
        return {attribute: {}}
      }
    },
    data:{
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
