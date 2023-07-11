<template>
  <div>
    <el-input
        v-bind = "propValue.attributes"
        v-model="input"
    />
  </div>
</template>
<script>
import {ElInput} from 'element-plus'
import { getPageData, setPageData} from "../../../utils/core";
export default {
  name: 'ScInput',
  components: {ElInput},
  props: {
    propValue: {
      type: Object, String,
      default: function () {
      }
    },
    EcVue:{
      type:Function,
      default:()=>{}
    }
  },
  computed:{
    input:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['inputValue'],this.EcVue)
      },
      set(value){
        setPageData(this.propValue.attributes['inputValue'],value,this.EcVue)
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
