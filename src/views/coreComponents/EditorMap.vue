<template>
  <div class="editor" @drop="handleDrop" @dragover="handleDragOver" id="editor"
       @contextmenu="contextmenu($event)"
       data-containerId = "editor"
       data-elementType = "editor"
  >
    <Shape v-for="(item, index) in pageComponentsStore.pageComponents "
           :key="index"
           :status="item.status"
           :element="item"
           :index="index"
           class="editorShape"
           :data-elementId = "item.id"
            data-featherId = "editor"
            :data-elementType = "item.type"
           @mousedown="handleMouseDown(item,$event,index)"
           @contextmenu="contextmenu($event)"
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
    <!--    右键菜单-->
    <Contextmenu
        :showContextmenu="editorStatusStore.contextmenuData.showContextmenu"
        @update:showContextmenu="editorStatusStore.contextmenuData.showContextmenu = $event"
        :contextmenuList="editorStatusStore.contextmenuData.contextmenuList"
        :contextmenuStyle="editorStatusStore.contextmenuData.style"
        key="editor"
    ></Contextmenu>
    <!--    拖拽时的提示信息-->
    <div :style="dragTip" class="dragTip">拖拽组件</div>
  </div>
</template>
<script>
import {deepClone, uuid} from "@/utils/tool.js"
import eventBus from '@/utils/eventBus.js'
import {
  handleDragOver,
  rightClickContextmenu,
  searchComponent,
  clickSelectComponent,
  moveComponent,
} from '@/utils/core'
import {
  SimpleStore,
  MouseEventStore,
  ComponentListStore,
  EditorStore,
  PageComponentsStore,
  EditorStatusStore,
  CommonStatusStore
} from '@/stores/counter'
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
    const simpleStore = SimpleStore()
    const mouseEventStore = MouseEventStore()
    const componentListStore = ComponentListStore()
    const editorStore = EditorStore()
    const pageComponentsStore = PageComponentsStore()
    const editorStatusStore = EditorStatusStore()
    const commonStatusStore = CommonStatusStore()
    return {
      // 您可以返回整个 store 实例以在模板中使用它
      simpleStore,
      mouseEventStore,
      componentListStore,
      editorStore,
      pageComponentsStore,
      editorStatusStore,
      commonStatusStore
    }
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

    // 右键菜单
    contextmenu(e) {
      e.preventDefault()
      e.stopPropagation()
      let that = this
      this.mouseEventStore.mouseEvent = e
      // 获取当前右键选择的组件id
      let contextmenuList1 = [
        {
          label: "复制",
          func: function (event) {
            //selectPlate 选中的数据  shearPlate 复制的数据
            that.simpleStore.shearPlate = deepClone(that.simpleStore.selectPlate)
          }
        },
        {
          label: "删除",
          func: function (event) {
          }
        },
        {
          label: "编辑",
          func: function (event) {
            console.log(event)
            // eventBus.emit("openEdit",)
          }
        }
      ]
      let contextmenuList2 = [
        {
          label: "粘贴",
          func: function (event) {
          }
        },
      ]

      rightClickContextmenu("editor", e, this.editorStatusStore.contextmenuData, (e, contextmenuData) => {
        if (e.target.id === "editor" || e.target.dataset.editor == "true") {
          contextmenuData.contextmenuList = contextmenuList2
        } else {
          contextmenuData.contextmenuList = contextmenuList1
        }
      })
    },

    // 拖拽到画布前配置组件相关数据
    handleDrop(e) {
      e.preventDefault()
      e.stopPropagation()
      // 当isContainer为false时可以将组件放置于画布中
      if (e.target.id == "editor") {
        let component = deepClone(this.componentListStore.componentList[e.dataTransfer.getData('index')])
        component.featherId = "editor"
        component.id = uuid()
        this.pageComponentsStore.pageComponents.push(component)

      }else if(e.target.dataset.elementtype == "container"){
        // 向容器中添加元素
        let component = deepClone(this.componentListStore.componentList[e.dataTransfer.getData('index')])
        component.featherId = e.target.dataset.elementid
        component.id = uuid()
        searchComponent(component.featherId).children.push(component)

      }
    },

    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      // 关闭右键菜单
      this.editorStatusStore.contextmenuData.showContextmenu = false
      clickSelectComponent(event, item, index)
      //非激活状态或者容器状态时才能进行拖动
      moveComponent(event, index)
    },

    // 双击事件
    dbClick(item, event) {
      event.preventDefault()
      event.stopPropagation()
      eventBus.emit("dbComponent",searchComponent(event.target.dataset.elementid))
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
}

.editorShape {
  display: inline-block;
}
</style>
