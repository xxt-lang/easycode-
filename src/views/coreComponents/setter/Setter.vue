<template>
  <div class="setter">
    <div v-show = "!setterData.status.lock">
      <el-tabs v-model="activeName" class="demo-tabs" >
        <el-tab-pane label="属性" name="first">
          <setter-attribute  :setterData="setterData"
                             :setterAttributes="setter.attributes"

          ></setter-attribute>
        </el-tab-pane>
        <el-tab-pane label="样式" name="second">
          <setter-style
              :setterData="setterData"
              :setterStyles="setter.styles"></setter-style>
        </el-tab-pane>
        <el-tab-pane label="事件" name="third">
          <setter-event
              :setterData="setterData"
              :setterEvents="setter.events"></setter-event>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span v-show = "setterData.status.lock">组件以锁定</span>

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
  props:{},
  data(){
    return {
      setter:{}, // 当前组件的设置器内容
      setterData:{
        status:{lock:false}
      }, // 当前组件的相关数据
      activeName:'first'
    }
  },
  mounted() {
    let that = this
    // 监听双击事件
    eventBus.on("dbComponent",()=>{
      // that.componentData = param
      that.setter = getComponentSetter()
      that.setterData = getStore("SimpleStore").selectPlate[0]
    })
    // 当删除时触发清除setter事件
    eventBus.on("clearSetter",(param)=>{
      if(param.type==="clearMap"){
        that.setter = {
          attributes:null,
          styles:null,
          events:null
        }
        that.setterData = {status:{lock:false}}
      }
      if( param.type === "id" && param.params!==null && param.params.indexOf(that.setterData.id) !== -1){
        that.setter = {
          attributes:null,
          styles:null,
          events:null
        }
        that.setterData = {status:{lock:false}}
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
