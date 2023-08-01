<template>
  <div class="editor"
       id="editor"
       @drop="handleDrop"
       @dragover="handleDragOver"
       data-elementType="editor"
       @mousedown="handleMouseDownMap($event)"
  >
    <EcCss v-show="false" :CSS = "page.css" :selecor = "{attr:'scope',value:page.pageName}" ></EcCss>
    <div data-elementType="editor" :scope = "page.pageName" >
      <Shape v-for="(item, index) in page.children "
             :key="index"
             :status="item.status"
             :element="item"
             :index="index"
             :data-elementId="item.id"
             data-featherId="editor"
             :data-elementType="item.type"
             @mousedown="handleMouseDown(item,$event,index)"
             @dblclick="dbClick(item,$event)"
             :data-shape="true"
      >
        <component
            :style="item.styles"
            :class="item.bindClass"
            :is="item.component"
            :key="index"
            :propValue="item"
            :index="index"
            :EcVue="page.EcVue"
        />
      </Shape>
      <!--    拖拽时的提示信息-->
      <div :style="dragTip" class="dragTip" v-html="dragTipMessage"></div>
    </div>
    <div v-if = "page.length<=0" class="noPageTip">
      请先在左侧工具栏页面中创建页面
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
  getComponentStyle
} from '@/utils/core'
import Shape from "./Shape.vue";
import Contextmenu from "./Contextmenu.vue";
import ToolBar from "../toolBar/TopBar.vue";
import PageTag from "./PageTag.vue";
import {mapActions,} from 'pinia'
import {PagesStore,MouseEventStore} from "../../stores/counter";
import EcCss from "./EcCss.vue";
export default {
  name: 'EditorMap',
  components: { Shape, Contextmenu, ToolBar, PageTag,EcCss},
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
    getComponentStyle,
    handleDragOver,
    handleDrop,
    ...mapActions(PagesStore, ['getNowPage']),
    ...mapActions(MouseEventStore,['setMouseEvent']),
    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      // 选中画布中的组件
      clickSelectComponent(event, item)
      //非激活状态或者容器状态时才能进行拖动
      moveComponent(event, index, item)
      this.setMouseEvent(event)
    },
    handleMouseDownMap(event){
      this.setMouseEvent(event)
    },

    // 双击事件
    dbClick(item, event,index) {
      event.preventDefault()
      event.stopPropagation()
      clickSelectComponent(event, item)
      eventBus.emit("setterComponent")
    }
  }
}
</script>
<style scoped>
.dragTip {
  position: fixed;
  pointer-events: none;
  padding: 5px;
  z-index: 30000;
  margin:10px;
  font-size: 16px;
  background-color: #f2f2f2;
}

.editor {
  height: calc(100vh - 71px);
  padding:2px;
  background-color: white;
  min-height: calc(20vh);
  overflow: auto;
  padding-bottom: 20px;
}
.noPageTip{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color:#E6A23C
}
</style>
