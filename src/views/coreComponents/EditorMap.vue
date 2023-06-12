<template>
  <div class="editor"
       id="editor"
       @drop="handleDrop"
       @dragover="handleDragOver"
       data-containerId = "editor"
       data-elementType = "editor"
  >
    <Shape v-for="(item, index) in getStore('PageComponentsStore').pageComponents "
           :key="index"
           :status="item.status"
           :element="item"
           :index="index"
           :data-elementId = "item.id"
           data-featherId = "editor"
           :data-elementType = "item.type"
           @mousedown="handleMouseDown(item,$event,index)"
           @dblclick="dbClick(item,$event)"
    >
      <component
          :style="{'pointer-events':item.type === 'common' ? 'none':''}"
          class="item"
          :is="item.component"
          :key="index"
          :propValue="item"
          :index = "index"
      />
    </Shape>
    <!--    拖拽时的提示信息-->
    <div :style="dragTip" class="dragTip">拖拽组件</div>
  </div>
</template>
<script>
import eventBus from '@/utils/eventBus.js'
import {
  handleDragOver,
  searchComponent,
  clickSelectComponent,
  moveComponent,
  handleDrop,
    getStore
} from '@/utils/core'
import Shape from "./Shape.vue";
import Contextmenu from "./Contextmenu.vue";
import ToolBar from "../toolBar/TopBar.vue";
import PageTag from "./PageTag.vue";

export default {
  name: 'EditorMap',
  components: {Shape, Contextmenu, ToolBar, PageTag},
  props: {},
  data() {
    return {
      dragTip: {
        display: "none",
      },
      drawer: false,
      canvasData: [],
      nowIndex: 0,
      curComponent: null,
      copyComponent: null,
    }
  },
  setup() {
    return {}
  },
  mounted() {
    let that = this
    // 动态修改拖拽标签
    eventBus.on(`move-dragTip`, (param) => {
      that.dragTip = {
        'top': param.top + 'px',
        'left': param.left + 'px',
        display: param.display
      }
    })
  },
  methods: {
    handleDragOver,
    handleDrop,
    getStore,
    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      // 选中画布中的组件
      clickSelectComponent(event, item, index)
      //非激活状态或者容器状态时才能进行拖动
      moveComponent(event, index)
    },

    // 双击事件
    dbClick(item, event) {
      event.preventDefault()
      event.stopPropagation()
      let component = searchComponent(event.target.dataset.elementid)
      eventBus.emit("dbComponent",component)
      eventBus.emit("dbComponentStyles",component.styles)
    }
  }
}
</script>
<style scoped>
.dragTip {
  position: absolute;
  background-color: yellow;
  pointer-events: none;
}

.editor {
  background-color: white;
  min-height: calc(20vh);
  padding: 5px;
  overflow: auto;
  padding-bottom: 20px;
}

.editorShape {
  display: inline-block;
}
</style>
