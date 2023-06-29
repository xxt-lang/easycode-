<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for = "(item,index) in propValue.attributes['column']" :key="item.id"
                     :prop="propValue.attributes['column'][index]['prop'] "
                     :label="propValue.attributes['column'][index]['label']"
                     :width="propValue.attributes['column'][index]['width']"/>
  </el-table>
</template>

<script>
import {setPageData,getPageData} from "../../../utils/core";

export default {
  name: "ScTable",
  props: {
    propValue: {
      type: Object,
      default: function () {
        return {}
      }
    },
    index:{
      type: Number,
    },
    isPreview:{
      type: Boolean,
      default:false
    },
  },
  computed:{
    tableData:{
      get(){
        // 绑定事件监听
        return getPageData(this.propValue.attributes['value'],this.isPreview)
      },
      set(value){
        setPageData(this.propValue.attributes['value'],value,this.isPreview)
      }
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
