<template>
  <div v-html="`<style>${cssfinal}</style>`"></div>
</template>

<script>
import postcss from "postcss";
import {ecPostcss,setAttr} from "../../utils/postcss-selector-add";
export default {
  name: "EcCss",
  props:{
    CSS:{
      type:String,
      default:""
    },
    selecor:{
      type:Object,
      default:()=>{
        return {attr:'',value:''}
      }
    }
  },
  watch:{
    CSS(nVal,oVal){
      let that = this
      setAttr(this.selecor.attr,this.selecor.value)
      postcss(ecPostcss).process(nVal).then(result => {
        that.cssfinal = result.css
      })
    }
  },
  mounted() {
    let that = this
    setAttr(this.selecor.attr,this.selecor.value)
    postcss(ecPostcss).process(that.CSS).then(result => {
      that.cssfinal = result.css
    })
  },
  data(){
    return {
      cssfinal:''
    }
  },
}
</script>

<style scoped>

</style>
