<template>
<div style="display: inline-block">
  <el-input-number :size="size" v-model="numberValue" :placeholder="defaultValue"
                   @focus="isblur = false"
                   @blur="blur"
                   @change = "changeSelect"
                   @mousewheel="scroll"></el-input-number>
  <el-select
      :size="size"
      v-model="unitValue"
      :style="{width:unitWidth+'px'}"
      @change="changeSelect()"
      :disabled="unit"
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
      type:String,
      default:''
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
    unit:{
      type:Boolean,
      default:false
    }
  },
  emits:['update:modelValue'],
  watch:{
    modelValue(newVal,oldVal){
      this.unitValue = ''
      this.numberValue = ""
      if((typeof newVal) === 'string')
       this.units.forEach((item)=>{
        if(newVal.indexOf(item.value)>-1){
          this.unitValue = item.value
          console.log(this.unitValue)
        }
      })
      this.numberValue = parseFloat(newVal)
    }
  },
  data(){
    return{
      isblur:true,
      numberValue:'',
      unitValue:''
    }
  },
  methods:{
    changeSelect(){
      this.dealValue()
      this.$emit('changeValue',this.numberValue + this.unitValue)
    },
    blur(){
      this.dealValue()
      this.isblur = true
      this.$emit('changeValue',this.numberValue + this.unitValue)
    },
    scroll(e){
      if (this.isblur) return
      if(e.wheelDelta<0){
        this.numberValue--
      }else{
        this.numberValue++
      }
      if(this.unitValue === ''){
        this.unitValue = this.units[0].value
      }
      this.$emit('changeValue',this.numberValue + this.unitValue)
    },
    dealValue(){
      if(this.value === ''){
        this.unit = this.units.length>0?this.units[0].value:''
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
