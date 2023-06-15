<template>
<div class="setter">
  设置器
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="属性" name="first">
      <setter-attribute v-show="setter.attributes" :setterData="setterData" :setterAttributes="setter.attributes" ></setter-attribute>
    </el-tab-pane>
    <el-tab-pane label="样式" name="second">
      <setter-style v-show="setter.styles"
                    :setterData="setterData"
                    :setterStyles="setter.styles"></setter-style>
    </el-tab-pane>
    <el-tab-pane label="事件" name="third">
      <setter-event v-show="setter.events"  :setterData="setterData" :setterEvents="setter.events" ></setter-event>
    </el-tab-pane>
  </el-tabs>
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
      setterData:{}, // 当前组件的相关数据
      activeName:'first'
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
      if(param.type==="clearMap"){
        that.setter = {}
        that.setterData = {}
      }
      if( param.type === "id" && param.params!==null && param.params.indexOf(that.setterData.id) !== -1){
        that.setter = {}
        that.setterData = {}
      }
    })
    },
  methods:{}
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.setter{
  padding: 5px;
}
</style>
