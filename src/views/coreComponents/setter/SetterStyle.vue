<template>
<div>
<!-- -->
  <el-input
      type="textarea"
      @blur="printCss"
      v-model="css"
      autosize
      :minRows="6">{}</el-input>
</div>
</template>

<script>
export default {
  name: "SetterStyle",
  props:{
    setterStyles:{
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
  },
  data(){
    return{
      css:""
    }
  },
  methods:{
    printCss(){
      // 清除\n
      let str = this.css.replaceAll(/(?:\r:|\t|\n|\s{1,})/g,'')
      let s1 = str.replaceAll(/:{1,}/g,':')
      let s2 = s1.replaceAll(/;{1,}/g,';')
      let attrAndValues = s2.split(/[:*;]/)
      let length = attrAndValues.length
      if(attrAndValues[length-1] === ''){
        length--
      }
      for (let i = 0; i < length; i+=2) {
        this.data.styles[`${attrAndValues[i]}`] = attrAndValues[i+1]
      }
      console.log(this.data.styles)
    }
  }
}
</script>

<style scoped>

</style>
