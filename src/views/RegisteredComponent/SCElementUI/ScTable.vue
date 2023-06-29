<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
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
