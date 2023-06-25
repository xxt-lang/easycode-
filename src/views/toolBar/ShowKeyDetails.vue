<template>
<div>
  <el-drawer v-model="value"  title="快捷键" :modal="false" size="15%" >
    <p v-for="(item,index) in keyList" :key="item.key"
       :style="{'background-color':index%2===0? '#f0f0f0':'',padding:'5px'}">
      <span>{{item.key}}</span>
      &nbsp;&nbsp;
      <span>{{item.detail}}</span>
    </p>
  </el-drawer>
</div>
</template>

<script>
import {getKeyDetails} from "../../utils/shortcutKeys";

export default {
  name: "ShowKeyDetails",
  props:{
    modelValue:{
      type:Boolean,
      default:false
    }
  },
  emits:['update:modeValue'],
  computed:{
    value:{
      get(){
        return this.modelValue
      },
      set(value){
        this.$emit('update:modelValue', value)
      }
    }
  },
  data(){
    return {
      keyList:[]
    }
  },
  mounted() {
   this.keyList = getKeyDetails()
  }
}
</script>

<style scoped>

</style>
