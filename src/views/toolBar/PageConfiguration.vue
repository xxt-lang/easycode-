<template>
  <div>
    <el-drawer v-model="value" :modal="false" size="30%" direction="ltr" @close="close">
      <el-button @click="save">保存</el-button>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="data" name="data">
          <VMonacoEditor v-model="editorData" language="json"  key="data" minimap lineNumbers folding></VMonacoEditor>
        </el-tab-pane>
        <el-tab-pane label="method" name="method">
          <VMonacoEditor v-model="editorMethod" language="javascript" key="method"></VMonacoEditor>
        </el-tab-pane>
        <el-tab-pane label="history" name="history">
          <show-history></show-history>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
import {mapActions} from "pinia";
import {PagesStore} from "../../stores/counter";
import VMonacoEditor from "../coreComponents/VMonacoEditor.vue";
import ShowHistory from "./ShowHistory.vue";

export default {
  name: "PageConfiguration",
  components:{
    ShowHistory,
    VMonacoEditor
  },
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
        if(this.getNowPage()){
          if(this.getNowPage()['data']){
            this.editorData = JSON.stringify(this.getNowPage()['data'])
          }
          if(this.getNowPage()['method']){
            this.editorMethod = JSON.stringify(this.getNowPage()['method'])
          }
        }
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  data() {
    return {
      activeName: 'data',
      editorData:'暂无数据',
      editorMethod:'暂无数据',
    }
  },
  created() {
    this.editorData = '暂无数据'
    this.editorMethod = '暂无方法'
  },
  methods:{
    ...mapActions(PagesStore,['getNowPage']),
    save(){
      this.getNowPage()['data'] = JSON.parse(this.editorData)
    },
    close(){
      this.value = false
      this.editorData = ''
    },
  }
}
</script>

<style scoped>
</style>
