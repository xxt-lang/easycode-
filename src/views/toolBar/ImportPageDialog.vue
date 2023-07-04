<template>
<div>
  <el-dialog v-model="value">
    <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        @success="onSuccess"
        @remove = "onRemove"
        accept=".json"
        :limit="1"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拽json文件到此处 <em>点击选择文件</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          导入json文件
        </div>
      </template>
    </el-upload>
    <p>相同页面名：<el-switch  active-text="覆盖"
                      inactive-text="跳过" v-model="writable"></el-switch></p>
    <el-button @click="commit">导入</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-dialog>
</div>
</template>

<script>
import {importPage} from "../../utils/core";

export default {
  name: "ImportPageDialog",
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
  data(){
    return {
      fileList:null,
      data:null,
      writable:true
    }
  },
  methods:{
    onSuccess(res, file, fileList) {
      let that = this
      let reader = new FileReader()
      reader.readAsText(file.raw)
      reader.onload = ((e) => {
        that.data = JSON.parse(e.target.result)
      })
    },
    onRemove(file) {
      this.fileList = []
    },
    commit() {
      importPage(this.data,this.writable)
      this.value = false
    },
    cancel(){
      this.fileList = null
      this.data = null
      this.value = false
    }
  }
}
</script>

<style scoped>

</style>
