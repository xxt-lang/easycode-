<template>
  <div
      :class="{ active: status.active,lock:status.lock }"
      :data-index = "index"
      :data-shape="true"
      :style="getShapeStyle(element.styles,element.shapeStyles,mapHeightWidth)"
  >
    <div :style="{'pointer-events': element.type ==='common' ? 'none':''}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {getShapeStyle} from "@/utils/core";

export default {
    name: 'Shape',
    props: {
      status: {
        type: Object,
        default: ()=>{
          return {
            active:false
          }
        },
      },
      element: {
        required: true,
        type: Object,
        default: () => {
        },
      },
      index: {
        required: true,
        type: Number,
        default: 0,
      },
      mapHeightWidth:{
        type:Object,
        default:()=>{
          return {height:'100%',width:'100%'}
        }
      }
    },
    data() {
      return {
        shapeStyle :{},
        pointList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'], // 八个方向
        pointList2: ['r', 'l'], // 左右两个方向
        cursors: {},
      }
    },
    setup() {
      return {
      }
    },
    created(){
    },
    mounted() {

    },
    methods: {
      getShapeStyle
    }
  }
</script>
<style lang="scss" scoped>
  .active{
    outline: 2px solid #70c0ff;
    position: relative;
    z-index: 1001;
  }
  .lock {
    outline: 2px solid #f8e3c5;
    position: relative;
    z-index: 1000;
  }
  .lock:active {
    outline: 2px solid #70c0ff;
    position: relative;
    z-index: 1000;
  }
  //
  //.shape-point {
  //  position: absolute;
  //  background: #fff;
  //  border: 1px solid #59c7f9;
  //  width: 8px;
  //  height: 8px;
  //  border-radius: 50%;
  //  z-index: 1;
  //}
  //
  //::v-deep(.el-icon) {
  //  position: absolute;
  //}
  //
  //.icon-rotate {
  //  position: absolute;
  //  top: -34px;
  //  left: 50%;
  //  transform: translateX(-50%);
  //  cursor: grab;
  //  color: #59c7f9;
  //  font-size: 20px;
  //  font-weight: 600;
  //
  //  &:active {
  //    cursor: grabbing;
  //  }
  //}
  //.icon-tip {
  //  background-color: #59c7f9;
  //  position: absolute;
  //  top: -30px;
  //  cursor: default;
  //  color: white;
  //  font-size: 16px;
  //}
  //
  //.icon-tip .tip-content{
  //  margin: 5px;
  //}
</style>
