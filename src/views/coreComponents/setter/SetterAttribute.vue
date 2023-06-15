<template>
  <div v-for = "(item,index) in setterAttributes" :key="item.attributeName" style="margin-top: 5px">
    <span class="itemLabel">{{item.label}}</span>
    <div class="itemContent">
      <el-select  v-if="item.type === 'select'"  v-model="setterData.attributes[item.attributeName]" class="m-2" :placeholder="'选择'+item.label" size="large">
          <el-option
              v-for="tItem in item.typeArray"
              :key="tItem.value"
              :label="tItem.label"
              :value="tItem.value"
          />
        </el-select>
      <el-input v-if="item.type === 'input'" v-model="setterData.attributes[item.attributeName]" placeholder="Please input" />
      <el-switch v-if="item.type === 'switch'" v-model="setterData.attributes[item.attributeName]" />
      <el-input-number v-if="item.type === 'inputNumber'" v-model="setterData.attributes[item.attributeName]" />
    </div>
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
    setterData:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  }

}
</script>

<style scoped>
.itemLabel{
  display: inline-block;
  width: 70px;
  font-size: 15px;
  text-align: center
}
.itemContent{
  display: inline-block;
  width: 170px
}
</style>
