<template>
  <div
       v-if="!isPreview"
       class="container" id="container"
       data-elementType = "container"
       :data-elementId = "container.id"
       :data-featherId = "container.featherId"
       :data-componentId = "container.componentId"
       :data-index = "container.index"
       :data-lock = "container.status.lock"
       :style = "getContainerStyle(isPreview,containerStyles,container.status.lock)"
       @mousedown="handleMouseDownMap($event)"
  >
    <Shape v-for="(item, index) in container.children "
           :key="index"
           :status="item.status"
           :element="item"
           :index="index"
           :data-elementId = "item.id"
           :data-featherid = "container.id"
           :data-elementType = "item.type"
           @mousedown="handleMouseDown(item,$event,index)"
           @dblclick="dbClick(item,$event,index)"
           :style="{'pointer-events':container.status.lock?'none':''}"
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
  <div v-if="isPreview" :style = "getContainerStyle(isPreview,containerStyles,false)">
    <component
        v-for="(item, index) in container.children "
        class="item"
        :is="item.component"
        :key="index"
        :propValue="item"
        :index = "index"
        isPreview
    />
  </div>
</template>

<script>
import Shape from "./Shape.vue";
import {
  clickSelectComponent,
  moveComponent,
  getContainerStyle
} from '@/utils/core'
import eventBus from "../../utils/eventBus";
import {mapActions} from "pinia";
import {MouseEventStore} from "../../stores/counter";
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
    container:{
      type:Object,
      default:()=>{return {}}
    },
    containerIndex:{
      type:Number,
    },
    containerStyles:{
      type:Object,
      default:()=>{return {}}
    },
    isPreview:{
      type: Boolean,
      default:false
    },

  },
  methods:{
    getContainerStyle,
    ...mapActions(MouseEventStore,['setMouseEvent']),

    // 选择画布中的组件
    handleMouseDown(item, event, index) {
        clickSelectComponent(event, item)
        //非激活状态或者容器状态时才能进行拖动
        moveComponent(event, index,item)
    },
    handleMouseDownMap(event){
      this.setMouseEvent(event)
    },

    // 双击事件
    dbClick(item, event,index) {
      event.preventDefault()
      event.stopPropagation()
      // 当所选元素为容器组件时才进行isContainer的复制
      clickSelectComponent(event, item)
      eventBus.emit("dbComponent")
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
