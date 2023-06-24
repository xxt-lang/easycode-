<template>
  <div @mousedown="mouseDown">
    <!--    头部工具栏-->
    <div class="head">
      <ToolBar @toolClick="toolClick"></ToolBar>
    </div>
    <main>
      <!--  左侧工具栏-->
      <div class="main-left">
        <left-bar @clickBar="clickBar"></left-bar>
      </div>
      <!--    画布-->
      <div class="main-right">
        <EditorMap key="editorMain"></EditorMap>
      </div>
      <!--    设置器-->
      <div class="main-right-right">
        <Setter></Setter>
      </div>
    </main>

<!--    快捷键弹窗-->
    <el-drawer v-model="showKeyDetails"  :title="drawerTitle" :modal="false" size="15%" >
      <show-key-details> </show-key-details>
    </el-drawer>
<!--    页面配置弹窗-->
    <el-drawer v-model="showPageConfiguration" :modal="false" size="30%" direction="ltr">
      <page-configuration></page-configuration>
    </el-drawer>
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

export default {
  components: {PageConfiguration, ShowKeyDetails, ToolBar, PageTag, EditorMap, LeftBar,Setter},
  name: "Home",
  props: [],
  data() {
    return {
      showKeyDetails:false,
      drawerTitle:'',
      showPageConfiguration:false,

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
      if(param === 'showKeyDetail'){
        this.drawerTitle = "快捷键"
        this.showKeyDetails = !this.showKeyDetails
      }
      if(param === 'pageConfiguration'){
        this.showPageConfiguration = !this.showPageConfiguration
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
main {
  display: flex;
}

.main-left {
  width: 80px;
  height: calc(100vh - 45px);
  background-color: white;
  border-style: ridge;
}

.main-right {
  position: absolute;
  right:215px;
  width: calc(100vw - 360px);
  left:85px;
  right: 200px;
  flex: 4;
  height: calc(100vh - 55px);
  margin: 5px;
  background-color: #f0f0f0;
  overflow: auto;
  border-style: ridge;
}
.main-right-right{
  position: absolute;
  width: 250px;
  right:0px;
  left:calc(100vw - 265px);
  flex: 1;
  height: calc(100vh - 55px);
  margin: 5px;
  background-color: #f0f0f0;
  overflow: auto;
  border-style: ridge;
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
