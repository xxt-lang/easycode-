<template>
  <div @mousedown="mouseDown">
    <!--    头部工具栏-->
    <div class="head">
      <ToolBar></ToolBar>
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
        <Setter :setter = "componentSetters" :setterData="componentData"></Setter>
      </div>
    </main>
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

import eventBus from "../utils/eventBus";
export default {
  components: {ToolBar, PageTag, EditorMap, LeftBar,Setter},
  name: "Home",
  props: [],
  data() {
    return {
      componentData:{},
      componentSetters: {}
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
    let that = this
    // 快捷键
    initShortKeyDown()
    //加载编辑的组件
    loadComponentConfiguration()
    //
    eventBus.on("dbComponent",(param)=>{
      that.componentData = param
      that.componentSetters = {}
      that.componentListStore.componentSetters.forEach(item=>{
        if(item.component === param.component){
          that.componentSetters = item.setter
          return
        }
      })
    })
    eventBus.on("clearSetter",(param)=>{
      if(param.indexOf(that.componentData.id) !== -1){
        that.componentData = {}
        that.componentSetters = {}
      }
    })
  },
  mounted() {
    // 关闭浏览器的右键事件
    this.editorStore.editor = document.querySelector('#editor').getBoundingClientRect()
    document.oncontextmenu = function (e) {
      return false;
    }
  },
  methods: {
    clickBar(param) {
      this.leftToolBarActive = param.status
    },
    mouseDown(e) {
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
  border-style: solid;
  margin: 2px;
}

.main-right {
  flex: 4;
  height: calc(100vh - 55px);
  margin: 5px;
  background-color: #f0f0f0;
  overflow: auto;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
  0 0 0 2px rgba(0, 0, 0, 0.3),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
.main-right-right{
  flex: 1;
  height: calc(100vh - 55px);
  margin: 5px;
  background-color: #f0f0f0;
  overflow: auto;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
  0 0 0 2px rgba(0, 0, 0, 0.3),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.head {
  width: 100%;
}

</style>
