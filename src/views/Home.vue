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
    </main>
  </div>
</template>
<script>
import {EditorStore, EditorStatusStore} from '@/stores/counter'
import ToolBar from "./toolBar/TopBar.vue";
import PageTag from "./coreComponents/PageTag.vue";
import EditorMap from "./coreComponents/EditorMap.vue";

import LeftBar from "./toolBar/LeftBar.vue";
import {initShortKeyDown} from "../utils/shortcutKeys";

export default {
  components: {ToolBar, PageTag, EditorMap, LeftBar,},
  name: "Home",
  props: [],
  data() {
    return {

    }
  },
  setup() {
    const editorStore = EditorStore()
    const editorStatusStore = EditorStatusStore()
    return {
      editorStore,
      editorStatusStore
    }
  },
  mounted() {
    // 快捷键
    initShortKeyDown()
    // 关闭浏览器的右键时间
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

.head {
  width: 100%;
}

</style>
