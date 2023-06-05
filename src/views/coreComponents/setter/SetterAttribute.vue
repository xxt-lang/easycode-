<template>
  <div v-for = "(item,index) in setterAttributes" :key="item.attributeName">
    <span>{{item.label}}</span>
    <el-select v-if="item.type === 'select'" v-model="data.attributes[item.attributeName]" class="m-2" :placeholder="'选择'+item.label" size="large">
      <el-option
          v-for="tItem in item.typeArray"
          :key="tItem.value"
          :label="tItem.label"
          :value="tItem.value"
      />
    </el-select>
    <el-input v-if="item.type === 'input'" v-model="data.attributes[item.attributeName]" placeholder="Please input" />
    <el-switch v-if="item.type === 'switch'" v-model="data.attributes[item.attributeName]" />
  </div>
</template>

<script>
export default {
  name: "SetterAttribute",
  props:{
    setterAttributes:{
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
