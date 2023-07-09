<template>
<div style="display: inline-block">
  <el-input-number :size="size" v-model="modelValue.value" @change="change('a')" @focus="isblur = false" @blur="isblur = true" @mousewheel="scroll"></el-input-number>
  <el-select :size="size" v-model="modelValue.unit" :style="{width:unitWidth+'px'}" @change="changeSelect('b')">
    <el-option v-for="item in units"
               :label="item.label"
               :value="item.value"></el-option>
  </el-select>
</div>
</template>

<script>
export default {
  name: "EcInputNumber",
  props:{
    modelValue:{
      type:Object,
      default:()=>{return {value:0,unit:''} }
    },
    units:{
      type:Array,
      default:()=>{return [
        {label:'',value:''}
      ]}
    },
    unitWidth:{
      type:Number,
      default:30
    },
    size:{
      type:String,
      default:'small'
    }
  },
  data(){
    return{
      isblur:true
    }
  },
  methods:{
    change(param){
      console.log(param)
      // console.log("+++++++++++++")
      this.$emit('changeValue',this.modelValue)
    },
    changeSelect(){
      this.$emit('changeValue',this.modelValue)
    },
    scroll(e){
      if (this.isblur) return
      if(e.wheelDelta<0){
        this.modelValue.value--
      }else{
        this.modelValue.value++
      }
      this.$emit('changeValue',this.modelValue)
    }
  }
}
</script>

<style scoped>
:deep(.el-input__suffix){
  display: none;
}
:deep(.el-input__wrapper){
  padding: 3px;
}
</style>
