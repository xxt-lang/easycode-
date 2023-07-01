<template>
  <div>
    <div v-show = "setterEvents">
<!--      是否启用方法-->
      <div v-for="item in setterEvents">
        {{item.event}}
        <el-switch v-model="setterData.events[item.event].enable"></el-switch>
        <el-input v-model="setterData.events[item.event].method"></el-input>
      </div>

<!--      事件方法名称-->
<!--      方法参数-->
<!--      方法内容-->
      <component v-for="(item,index) in configuration.setterEvents"
                 :is="item.component"
                 :params="{setterData:setterData,param:item.param}"
                 :key = "index"
      ></component>
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
    },
    configuration:{
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
