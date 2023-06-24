<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="data" name="data">
      <VMonacoEditor v-model="editorData"></VMonacoEditor>
    </el-tab-pane>
    <el-tab-pane label="method" name="method">method</el-tab-pane>
    <el-tab-pane label="history" name="history">
      <div v-if = "getHistory() !== null">
        <div v-for="(item,index) in getHistory().history.stack">
          <p :style="{'background-color':getHistory().history.point === index?'yellow':''}">{{item.method}}</p>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {mapActions} from "pinia";
import {PagesStore, UndoRedoStore} from "../../stores/counter";
import VMonacoEditor from "../coreComponents/VMonacoEditor.vue";

export default {
  name: "PageConfiguration",
  components:{
    VMonacoEditor
  },
  data() {
    return {
      activeName: 'data',
      editorData:'{age:1,name:2}',
    }
  },
  watch:{
    editorData(newVal,oldVal){
      console.log(newVal)
    }
  },
  created(){
  },
  methods:{
    ...mapActions(UndoRedoStore,['getHistory']),
    ...mapActions(PagesStore,['getNowPage']),
  }
}
</script>

<style scoped>
</style>
