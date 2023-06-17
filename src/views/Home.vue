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

      <show-key-details></show-key-details>
    </el-drawer>
  </div>
</template>
<script>
import {EditorStore, EditorStatusStore,ComponentListStore} from '@/stores/counter'
import ToolBar from "./toolBar/TopBar.vue";
import PageTag from "./coreComponents/PageTag.vue";
import EditorMap from "./coreComponents/EditorMap.vue";
import LeftBar from "./toolBar/LeftBar.vue";
import Setter from "./coreComponents/setter/Setter.vue";
import {initShortKeyDown} from "../utils/shortcutKeys";
import {loadComponentConfiguration} from "../utils/componentConfigurator";
import ShowKeyDetails from "./toolBar/ShowKeyDetails.vue";
import {clearSelectPlate} from "../utils/core";

export default {
  components: {ShowKeyDetails, ToolBar, PageTag, EditorMap, LeftBar,Setter},
  name: "Home",
  props: [],
  data() {
    return {
      showKeyDetails:false,
      drawerTitle:''
    }
  },
  setup() {
    const editorStore = EditorStore()
    const editorStatusStore = EditorStatusStore()
    const componentListStore = ComponentListStore()
    return {
      editorStore,
      editorStatusStore,
      componentListStore,
    }
  },
  created() {
    // 快捷键
    initShortKeyDown()
    //加载编辑的组件
    loadComponentConfiguration()
  },
  mounted() {
    // 关闭浏览器的右键事件
    this.editorStore.editor = document.querySelector('#editor').getBoundingClientRect()
    document.oncontextmenu = function (e) {
      return false;
    }
  },
  methods: {
    toolClick(param){
      if(param === 'showKeyDetail'){
        this.drawerTitle = "快捷键"
        this.showKeyDetails = !this.showKeyDetails
      }

    },
    clickBar(param) {
      this.leftToolBarActive = param.status
    },
    mouseDown(e) {
      clearSelectPlate()
      this.editorStatusStore.contextmenuData.showContextmenu = false
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
  margin-bottom: 0px
;
}

</style>
