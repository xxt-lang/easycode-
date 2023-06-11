<template>
  <div class="container" id="container"
       data-elementType = "container"
       :data-elementId = "container.id"
       :data-featherId = "container.featherId"
       :data-componentId = "container.componentId"
       :data-index = "container.index"
       :style = "containerStyles"
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
  searchComponent,
  clickSelectComponent,
  moveComponent
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
    }

  },
  methods:{
    // 选择画布中的组件
    handleMouseDown(item, event, index) {
      clickSelectComponent(event, item, index)
      //非激活状态或者容器状态时才能进行拖动
      moveComponent(event, index)
    },

    // 双击事件
    dbClick(item, event) {
      event.preventDefault()
      event.stopPropagation()
      // 当所选元素为容器组件时才进行isContainer的复制
      let component = searchComponent(event.target.dataset.elementid)
      eventBus.emit("dbComponent",component)
      eventBus.emit("dbComponentStyles",component.styles)
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 100px;
  min-width: 200px;
  background-color: #909399;
  padding: 5px;
  overflow: auto;
}
</style>
