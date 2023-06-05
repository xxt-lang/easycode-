<template>
  <div class="container" id="container"
       :data-elementType = container.type
       :data-elementId = "container.id"
       :data-featherId = "container.featherId"
       :data-index = "containerIndex"
  >
    <Shape v-for="(item, index) in container.children "
           :key="index"
           :status="item.status"
           :element="item"
           :index="index"
           class="editorShape"

           :data-elementId = "item.id"
           :data-featherid = "container.id"
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
  </div>
</template>

<script>
import Shape from "./Shape.vue";
import {
  rightClickContextmenu,
  searchComponent,
  clickSelectComponent,
  moveComponent
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
import eventBus from "../../utils/eventBus";
export default {
  name: "Container",
  components:{
    Shape
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
  props:{
    container:{
      type:Object,
      default:()=>{return {}}
    },
    containerIndex:{
      type:Number,
    }

  },
  methods:{
    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      // 关闭右键菜单
      this.editorStatusStore.contextmenuData.showContextmenu = false
      clickSelectComponent(event, item, index)
      //非激活状态或者容器状态时才能进行拖动
      moveComponent(event, index)
    },
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
            that.commonStatusStore.editElement = !that.commonStatusStore.editElement
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

    // 双击事件
    dbClick(item, event) {
      event.preventDefault()
      event.stopPropagation()
      // 当所选元素为容器组件时才进行isContainer的复制
      eventBus.emit("dbComponent",searchComponent(event.target.dataset.elementid))
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 100px;
  min-width: 200px;
  background-color: white;
  padding: 5px;
  overflow: auto;
}
.editorShape {
  display: inline-block;
}
</style>
