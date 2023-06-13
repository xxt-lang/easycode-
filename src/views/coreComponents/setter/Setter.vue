<template>
<div>
  设置器
  <div>--------属性------------</div>
<!--  根据类型配置组件-->
  <setter-attribute v-show="setter.attributes" :setterData="setterData" :setterAttributes="setter.attributes" ></setter-attribute>
  <div>--------样式------------</div>
  <setter-style v-show="setter.styles"
                :setterData="setterData"
                :setterStyles="setter.styles"></setter-style>
  <div>--------事件------------</div>
  <setter-event v-show="setter.events"  :setterData="setterData" :setterEvents="setter.events" ></setter-event>
  <slot></slot>
</div>
</template>

<script>
import SetterAttribute from "./SetterAttribute.vue";
import SetterStyle from "./SetterStyle.vue";
import SetterEvent from "./SetterEvent.vue";
import eventBus from "../../../utils/eventBus";
import {getComponentSetter, getStore} from "../../../utils/core";
export default {
  name: "Setter",
  components: {SetterAttribute,SetterStyle,SetterEvent},
  setup() {
    return {
    }
  },
  props:{
    // setter:{
    //   type:Object,
    //   default:()=>{
    //     return {attribute: {}}
    //   }
    // },
    // setterData:{
    //   // 组件对应数组的参数，通过
    //   type:Object,
    //   default:()=>{
    //     return {}
    //   }
    // }
  },
  data(){
    return {
      setter:{}, // 当前组件的设置器内容
      setterData:{} // 当前组件的相关数据
    }
  },
  mounted() {
    let that = this
    // 监听双击事件
    eventBus.on("dbComponent",()=>{
      // that.componentData = param
      that.setter = getComponentSetter()
      that.setterData = getStore("SimpleStore").selectPlate[0].info
    })
    // 当删除时触发清除setter事件
    eventBus.on("clearSetter",(param)=>{
      if(param.indexOf(that.setterData.id) !== -1){
        that.componentData = {}
        that.componentSetters = {}
      }
    })
    },
  methods:{}
}
</script>

<style scoped>

</style>
