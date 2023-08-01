<template>
  <Shape
         v-if="!isPreview"
         v-for="(item, index) in children "
         :key="index"
         :status="item.status"
         :element="item"
         :index="index"
         :data-elementid = "item.id"
         :data-featherid = "item.featherId"
         :data-elementType = "item.type"
         @mousedown="handleMouseDown(item,$event,index)"
         @dblclick="dbClick(item,$event,index)"
  >
    <component
        :isPreview = "isPreview"
        :class="item.bindClass"
        :style="item.styles"
        :is="item.component"
        :key="index"
        :propValue="item"
        :index = "index"
        :EcVue = "EcVue"
    />
  </Shape>
  <component
      :class="item.bindClass"
      v-if="isPreview"
      :isPreview = "isPreview"
      v-for="(item, index) in children "
      :style="getComponentStyle(isPreview,item.styles,item.type)"
      :is="item.component"
      :key="index"
      :propValue="item"
      :index = "index"
      :EcVue = "EcVue"
  />
</template>

<script>
import Shape from "./Shape.vue";
import {
  clickSelectComponent,
  moveComponent,
  getShapeStyle,
  getComponentStyle,
  setMouseEvent
} from '@/utils/core'
import eventBus from "../../utils/eventBus";
export default {
  name: "Container",
  components:{
    Shape
  },
  setup() {
    return {
    }
  },
  props:{
    children:{
      type:Array,
      default:()=>{return {}}
    },
    isPreview:{
      type: Boolean,
      default:false
    },
    EcVue:{
      type:Function,
      default:()=>{}
    },
    lock:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    getComponentStyle,
    getShapeStyle,
    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      if(this.isPreview) return
        clickSelectComponent(event, item)
        //非激活状态或者容器状态时才能进行拖动
        moveComponent(event, index,item)
        setMouseEvent(event)
    },
    // 双击事件
    dbClick(item, event,index) {
      event.preventDefault()
      event.stopPropagation()
      // 当所选元素为容器组件时才进行isContainer的复制
      clickSelectComponent(event, item)
      eventBus.emit("setterComponent")
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 20px;
  min-width: 40px;
  padding: 2px;
  overflow: auto;
  border-color: #d9ecff;
}
</style>
