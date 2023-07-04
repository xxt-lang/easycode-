<template>
  <div>
    <el-dialog v-model="value">
      <div style="height:150px;overflow: auto">
        <p>选择导出的页面：<el-select
            v-model="exportList"
            multiple
            placeholder="选择需要导出的页面"
            style="width: 240px"
            :disabled="all"
        >
          <el-option
              v-for="(item,index) in pages"
              :key="index"
              :label="item.pageName"
              :value="index"
          />
        </el-select></p>
        <p>全部导出：<el-switch v-model="all"></el-switch></p>
      </div>
      <el-button @click="commit">导出</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-dialog>
  </div>
</template>

<script>
import {exportPage, getPages} from "../../utils/core";

export default {
  name: "ExportPageDialog",
  props:{
    modelValue:{
      type:Boolean,
      default:false
    },
  } ,
  emits:['update:modeValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  data() {
    return {
      dialog: false,
      pages: null,
      exportList:[],
      all:false
    }
  },
  mounted() {
    this.pages = getPages()
  },
  methods: {
    commit() {
      if(this.all){
        exportPage(this.pages)
      }else{
        let result = []
        this.exportList.forEach(index=>{
          result.push(this.pages[index])
        })
        exportPage(result)
        result = null
      }
    },
    cancel() {
      this.value = false
      this.exportList = []
    },
  }
}
</script>

<style scoped>

</style>
