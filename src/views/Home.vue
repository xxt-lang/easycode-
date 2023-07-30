<template>
  <div @mousedown="mouseDown">
    <!--    头部工具栏-->
    <div class="head">
      <ToolBar @toolClick="toolClick"></ToolBar>
    </div>
    <main>
      <div class="main">
        <left-bar @clickBar="clickBar" class="leftBar"></left-bar>
        <EditorMap key="editorMain" class="editomap"></EditorMap>
        <Setter class="setter"></Setter>
      </div>
    </main>

<!--    快捷键弹窗-->
      <show-key-details v-model="showKeyDetails"> </show-key-details>
<!--    页面配置弹窗-->
      <page-configuration v-model="showPageConfiguration"></page-configuration>
<!--    导入-->
      <export-page-dialog v-model="showExportPageDialog"></export-page-dialog>
<!--    导出-->
    <import-page-dialog v-model="showImportPageDialog"></import-page-dialog>
<!--    出码-->
    <generate-code-dialog v-model = "showGenerateDialog"></generate-code-dialog>
  </div>

</template>
<script>
import {EditorStore, EditorStatusStore} from '@/stores/counter'
import ToolBar from "./toolBar/TopBar.vue";
import PageTag from "./coreComponents/PageTag.vue";
import EditorMap from "./coreComponents/EditorMap.vue";
import LeftBar from "./toolBar/LeftBar.vue";
import Setter from "./coreComponents/setter/Setter.vue";
import {initShortKeyDown} from "../utils/shortcutKeys";
import {loadComponentConfiguration} from "../utils/componentConfigurator";
import ShowKeyDetails from "./toolBar/ShowKeyDetails.vue";
import {clearSelectPlate, initProject,} from "../utils/core";
import PageConfiguration from "./toolBar/PageConfiguration.vue";
import ExportPageDialog from "./toolBar/ExportPageDialog.vue";
import ImportPageDialog from "./toolBar/ImportPageDialog.vue";
import {loadComponent} from "../utils/registered/registeredComponent";
import GenerateCodeDialog from "./toolBar/GenerateCodeDialog.vue";

export default {
  components: {
    ImportPageDialog,
    ExportPageDialog, PageConfiguration, ShowKeyDetails, ToolBar, PageTag, EditorMap, LeftBar,Setter,GenerateCodeDialog},
  name: "Home",
  props: [],
  data() {
    return {
      showKeyDetails:false,
      drawerTitle:'',
      showPageConfiguration:false,
      showExportPageDialog:false,
      showImportPageDialog:false,
      showGenerateDialog:false
    }
  },
  setup() {
    const editorStore = EditorStore()
    const editorStatusStore = EditorStatusStore()
    return {
      editorStore,
      editorStatusStore,
    }
  },
  created() {
    // 快捷键
    initShortKeyDown()
    loadComponent()
    //加载编辑的组件
    loadComponentConfiguration()
    // 初始化项目数据
    initProject()
  },
  mounted() {
    // 关闭浏览器的右键事件
    this.editorStore.editor = document.querySelector('#editor').getBoundingClientRect()
    document.oncontextmenu = function (e) {
      return false;
    }
  },
  methods: {
    // 工具栏点击事件，点击之后页面弹窗
    toolClick(param){
      switch (param){
        case "showKeyDetail":{
          this.showKeyDetails = !this.showKeyDetails
          break
        }
        case "pageConfiguration":{
          this.showPageConfiguration = !this.showPageConfiguration
          break
        }
        case "exportPage":{
          this.showExportPageDialog = !this.showExportPageDialog
          break
        }
        case "importPage":{
          this.showImportPageDialog = !this.showImportPageDialog
          break
        }
        case "generateCode":{
          this.showGenerateDialog = !this.showGenerateDialog
          break
        }
      }
    },
    //点击弹窗
    clickBar(param) {
      this.leftToolBarActive = param.status
    },
    // 页面点击事件
    mouseDown(e) {
      // 清空选择框
      if(e.target.id === "editor" || e.target.id === ''){
        clearSelectPlate()
      }
    }
  }
}
</script>
<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 20fr 5fr;
}
.leftBar{
  border-style: solid;
  background-color: white;
  border-color: #c6e2ff;
}
.setter{
  border-style: solid;
  border-color: #c6e2ff;
}
.editomap{
  margin: 0 2px 2px 2px;
  border-style: solid;
  border-color: #c6e2ff;
}

.head {
  width: 100%;
}

:deep(.el-drawer__header){
  margin-bottom: 0px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 2px;
}
:deep(.el-drawer__body){
  padding-top: 0px;
}

</style>
