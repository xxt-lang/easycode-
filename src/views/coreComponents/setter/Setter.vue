<template>
<div>
  设置器
  <div>--------属性------------</div>
<!--  根据类型配置组件-->
  <setter-attribute v-show="setter.attributes" :data="data" :setterAttributes="setter.attributes" ></setter-attribute>
  <div>--------样式------------</div>
  <setter-style v-show="setter.styles" :data="data" :setterStyles="setter.styles"></setter-style>
  <div>--------事件------------</div>
  <setter-event v-show="setter.events" :data="data" :setterEvents="setter.events"></setter-event>
  <slot></slot>
</div>
</template>

<script>
import SetterAttribute from "./SetterAttribute.vue";
import SetterStyle from "./SetterStyle.vue";
import SetterEvent from "./SetterEvent.vue";
export default {
  name: "Setter",
  components: {SetterAttribute,SetterStyle,SetterEvent},
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
