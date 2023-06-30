<template>
  <div class="editor"
       id="editor"
       @drop="handleDrop"
       @dragover="handleDragOver"
       data-containerId = "editor"
       data-elementType = "editor"
       @mousedown="handleMouseDownMap($event)"
  >
    <div :style="page.css"
         data-containerId = "editor"
         data-elementType = "editor">
      <Shape v-for="(item, index) in page.children "
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
      <div :style="dragTip" class="dragTip">{{dragTipMessage}}</div>
    </div>
    </div>
</template>
<script>
import eventBus from '@/utils/eventBus.js'
import {
  handleDragOver,
  clickSelectComponent,
  moveComponent,
  handleDrop,
    getStore
} from '@/utils/core'
import Shape from "./Shape.vue";
import Contextmenu from "./Contextmenu.vue";
import ToolBar from "../toolBar/TopBar.vue";
import PageTag from "./PageTag.vue";
import {mapActions,} from 'pinia'
import {PagesStore,MouseEventStore} from "../../stores/counter";
export default {
  name: 'EditorMap',
  components: { Shape, Contextmenu, ToolBar, PageTag},
  data() {
    return {
      dragTip: {
        display: "none"
      },
      dragTipMessage:'拖拽组件',
      drawer: false,
      canvasData: [],
      nowIndex: 0,
      curComponent: null,
      copyComponent: null,
      model:true,
    }
  },
  computed:{
    page:{
      get(){
        let page =  this.getNowPage()
        if(page){
          return page
        }
        return []
      },
      set(){

      }
    }
  },
  setup() {
    return {}
  },

  mounted() {
    let that = this
    // 动态修改拖拽标签
    eventBus.on(`move-dragTip`, (param) => {
      that.dragTip = param.style
      if(param.message !== null)
        that.dragTipMessage = param.message
    })
  },
  methods: {
    handleDragOver,
    handleDrop,
    getStore,
    ...mapActions(PagesStore, ['getNowPage']),
    ...mapActions(MouseEventStore,['setMouseEvent']),
    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      // 选中画布中的组件
      clickSelectComponent(event, item)
      //非激活状态或者容器状态时才能进行拖动
      moveComponent(event, index, item)
    },
    handleMouseDownMap(event){
      this.setMouseEvent(event)
    },

    // 双击事件
    dbClick(item, event,index) {
      event.preventDefault()
      event.stopPropagation()
      clickSelectComponent(event, item)
      eventBus.emit("dbComponent")
    }
  }
}
</script>
<style scoped>
.dragTip {
  position: fixed;
  background-color: yellow;
  pointer-events: none;
  z-index: 30000;
}

.editor {
  padding:2px;
  background-color: white;
  min-height: calc(20vh);
  overflow: auto;
  padding-bottom: 20px;
}
</style>
