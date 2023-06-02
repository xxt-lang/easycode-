<template>
<div>
  设置器
<!--  根据类型配置组件-->
  <div v-for = "(item,index) in setter" :key="item.attributeName">
    <span>{{item.label}}</span>
    <el-select v-if="item.type === 'select'" v-model="data.attribute[item.attributeName]" class="m-2" :placeholder="'选择'+item.label" size="large">
      <el-option
          v-for="tItem in item.typeArray"
          :key="tItem.value"
          :label="tItem.label"
          :value="tItem.value"
      />
    </el-select>
    <el-input v-if="item.type === 'input'" v-model="data.attribute[item.attributeName]" placeholder="Please input" />
    <el-switch v-if="item.type === 'switch'" v-model="data.attribute[item.attributeName]" />
  </div>
  <slot></slot>
</div>
</template>

<script>

export default {
  name: "Setter",
  setup() {
    return {
    }
  },
  props:{
    setter:{
      type:Array,
      default:()=>{
        return null
      }
    },
    data:{
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
