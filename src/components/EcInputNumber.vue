<template>
<div style="display: inline-block">
  <el-input-number :size="size" v-model="modelValue.value" :placeholder="defaultValue"
                   @focus="isblur = false"
                   @blur="blur"
                   @change = "changeSelect"
                   @mousewheel="scroll"></el-input-number>
  <el-select
      :size="size"
      v-model="modelValue.unit"
      :style="{width:unitWidth+'px'}"
      @change="changeSelect()"
  >
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
    },
    defaultValue:{
      type:String,
      default:'auto'
    },
  },
  data(){
    return{
      isblur:true
    }
  },
  methods:{
    changeSelect(){
      this.dealValue()
      this.$emit('changeValue',this.modelValue)
    },
    blur(){
      this.dealValue()
      this.isblur = true
      this.$emit('changeValue',this.modelValue)
    },
    scroll(e){
      if (this.isblur) return
      if(e.wheelDelta<0){
        this.modelValue.value--
      }else{
        this.modelValue.value++
      }
      this.dealValue()
      this.$emit('changeValue',this.modelValue)
    },
    dealValue(){
      if(this.modelValue.value && this.modelValue.unit === ''){
        this.modelValue.unit = this.units.length>0?this.units[0].value:''
      }
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
